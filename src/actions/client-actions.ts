'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const API_URL = process.env.NEXT_PUBLIC_API_URL + '/api'; // Aponta para /api do Java

async function getAuthHeaders() {
  const token = (await cookies()).get('session_token')?.value;
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
}

// --- LISTAR LEADS ---
export async function getLeadsAction() {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(`${API_URL}/sales/leads`, {
      method: 'GET',
      headers: headers,
      cache: 'no-store' // Sempre pega dados frescos
    });

    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar leads:", error);
    return [];
  }
}

// --- CRIAR LEAD ---
export async function createLeadAction(formData: FormData) {
  const headers = await getAuthHeaders();
  
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    title: formData.get('title'),
    description: formData.get('description'),
    value: parseFloat(formData.get('value') as string),
    priority: formData.get('priority'),
    stageId: formData.get('stageId') // Você precisará passar o ID da fase
  };

  try {
    const response = await fetch(`${API_URL}/sales/leads`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(rawData)
    });

    if (!response.ok) {
        const errorText = await response.text();
        return { error: `Erro ao criar: ${errorText}` };
    }
    
  } catch (error) {
    return { error: 'Falha na conexão com o servidor.' };
  }

  redirect('/pt-BR/dashboard/leads');
}