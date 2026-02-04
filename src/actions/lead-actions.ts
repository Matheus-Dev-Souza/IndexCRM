// src/actions/lead-actions.ts
'use server';

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// Define a URL base da API (garanta que o .env.local esteja correto)
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://indexcrm-crm-api.onrender.com";
const LEADS_ENDPOINT = `${BASE_URL}/api/sales/leads`;

// --- BUSCAR LEADS (A função que estava faltando) ---
export async function getLeadsAction() {
  const cookieStore = await cookies();
  const token = cookieStore.get('session_token')?.value;

  if (!token) return [];

  try {
    const response = await fetch(LEADS_ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      cache: 'no-store' // Dados sempre frescos
    });

    if (!response.ok) {
      console.error("Erro ao buscar leads:", response.status);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Erro de conexão ao buscar leads:", error);
    return [];
  }
}

// --- CRIAR LEAD ---
export async function createLeadAction(formData: FormData) {
  const cookieStore = await cookies();
  const token = cookieStore.get('session_token')?.value;

  if (!token) {
    return { error: "Você precisa estar logado." };
  }

  const payload = {
    customerName: formData.get("name"), // O Java espera 'customerName'
    email: formData.get("email"),
    phone: formData.get("phone"),
    // Campos padrão exigidos pelo Java
    title: `Lead: ${formData.get("name")}`,
    description: "Criado via Dashboard",
    value: 0.0,
    priority: "MEDIUM",
    stageId: 1 // ID da fase padrão
  };

  try {
    const response = await fetch(LEADS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      return { error: `Erro API: ${text}` };
    }

    revalidatePath("/dashboard/leads"); // Atualiza a tela
    return { success: true };

  } catch (error) {
    console.error(error);
    return { error: "Falha na conexão com a API." };
  }
}