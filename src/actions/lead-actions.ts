'use server';

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// URL Base (Render ou Local)
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://indexcrm-crm-api.onrender.com";

// --- 1. BUSCAR LEADS ---
export async function getLeadsAction() {
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
    
    // Mapeia os dados do Java para o formato que o Front espera (garantia)
    const data = await response.json();
    return data.map((lead: any) => ({
      id: lead.id,
      customerName: lead.customerName || lead.name || "Sem Nome", // Fallback
      email: lead.email,
      phone: lead.phone,
      value: lead.value,
      createdAt: lead.createdAt,
      tags: lead.tags || []
    }));

  } catch (error) {
    console.error("Erro ao buscar leads:", error);
    return [];
  }
}

// --- 2. CRIAR LEAD (COM BUSCA AUTOMÁTICA DE STAGE) ---
export async function createLeadAction(formData: FormData) {
  const cookieStore = await cookies();
  const token = cookieStore.get('session_token')?.value;

  if (!token) return { error: "Sessão expirada. Faça login novamente." };

  // PASSO A: Descobrir qual é o ID da primeira fase do funil
  let stageId = 1; // Fallback perigoso, vamos tentar achar o real
  try {
    const pipelineRes = await fetch(`${BASE_URL}/api/sales/pipelines`, {
      headers: { 'Authorization': `Bearer ${token}` },
      cache: 'no-store'
    });
    
    if (pipelineRes.ok) {
      const pipelines = await pipelineRes.json();
      // Pega o primeiro funil -> primeira fase
      if (pipelines.length > 0 && pipelines[0].stages?.length > 0) {
        stageId = pipelines[0].stages[0].id;
      }
    }
  } catch (e) {
    console.error("Erro ao buscar pipeline padrão:", e);
  }

  // PASSO B: Montar o Objeto para o Java
  const payload = {
    customerName: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    // Campos obrigatórios do Java que o modal não tem (preenchemos automático)
    title: `Oportunidade: ${formData.get("name")}`, 
    description: "Criado via Dashboard Web",
    value: 0.0,
    priority: "MEDIUM",
    stageId: stageId // Usa o ID real que descobrimos
  };

  // PASSO C: Enviar para o Java
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

    // SUCESSO: Força a atualização da lista na tela
    revalidatePath("/[locale]/dashboard/leads", "page"); 
    
    return { success: true };

  } catch (error) {
    return { error: "Falha de conexão com a API." };
  }
}