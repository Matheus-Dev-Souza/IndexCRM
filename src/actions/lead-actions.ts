'use server';

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://indexcrm-crm-api.onrender.com";

// 1. Definimos o formato exato que esperamos receber do Java (DTO)
interface LeadDTO {
  id: string;
  customerName?: string; // O Java pode mandar customerName
  name?: string;         // Ou name (precaução)
  email: string;
  phone: string;
  value: number;
  createdAt?: string;
  tags?: string[];
}

// 2. Definimos o formato que o nosso Front vai usar
export interface Lead {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  value: number;
  createdAt?: string;
  tags: string[];
}

// --- BUSCAR LEADS ---
export async function getLeadsAction(): Promise<Lead[]> {
  const cookieStore = await cookies();
  const token = cookieStore.get('session_token')?.value;

  if (!token) return [];

  try {
    const response = await fetch(`${BASE_URL}/api/sales/leads`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      cache: 'no-store'
    });

    if (!response.ok) return [];
    
    // CORREÇÃO 1: Tipamos a resposta como LeadDTO[] em vez de any
    const data: LeadDTO[] = await response.json();

    return data.map((lead) => ({
      id: lead.id,
      customerName: lead.customerName || lead.name || "Sem Nome",
      email: lead.email,
      phone: lead.phone,
      value: lead.value,
      createdAt: lead.createdAt,
      tags: lead.tags || []
    }));

  } catch (error) {
    // CORREÇÃO 2: Usamos a variável 'error' para não dar aviso de "unused"
    console.error("Erro ao buscar leads:", error);
    return [];
  }
}

// --- CRIAR LEAD ---
export async function createLeadAction(formData: FormData) {
  const cookieStore = await cookies();
  const token = cookieStore.get('session_token')?.value;

  if (!token) return { error: "Sessão expirada. Faça login novamente." };

  // PASSO A: Descobrir qual é o ID da primeira fase do funil
  let stageId = 1; 
  try {
    const pipelineRes = await fetch(`${BASE_URL}/api/sales/pipelines`, {
      headers: { 'Authorization': `Bearer ${token}` },
      cache: 'no-store'
    });
    
    if (pipelineRes.ok) {
      const pipelines = await pipelineRes.json();
      if (pipelines.length > 0 && pipelines[0].stages?.length > 0) {
        stageId = pipelines[0].stages[0].id;
      }
    }
  } catch (e) {
    console.error("Erro ao buscar pipeline padrão:", e);
  }

  // PASSO B: Montar o Payload
  const payload = {
    customerName: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    title: `Oportunidade: ${formData.get("name")}`, 
    description: "Criado via Dashboard Web",
    value: 0.0,
    priority: "MEDIUM",
    stageId: stageId
  };

  try {
    const response = await fetch(`${BASE_URL}/api/sales/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return { error: `Erro do servidor: ${errorText}` };
    }

    revalidatePath("/dashboard/leads"); 
    return { success: true };

  } catch (error) {
    // CORREÇÃO 2: Usamos a variável 'error' aqui também
    console.error("Erro na criação do lead:", error);
    return { error: "Falha de conexão com a API." };
  }
}