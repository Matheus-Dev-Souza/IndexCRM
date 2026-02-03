'use server';

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createLeadAction(formData: FormData) {
  // 1. Pega o Token (OBRIGATÓRIO pois o Controller exige Auth)
  const cookieStore = await cookies();
  const token = cookieStore.get('session_token')?.value;

  if (!token) {
    return { error: "Você precisa estar logado para criar leads." };
  }

  // 2. Define a URL correta (Baseada no seu SalesController: /api/sales)
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://indexcrm-crm-api.onrender.com";
  const apiUrl = `${baseUrl}/api/sales/leads`;

  // 3. Monta o Payload para o Java (CreateLeadDTO)
  const payload = {
    // Dados do Formulário
    name: formData.get("name"),   // Java espera "name" no DTO e mapeia para "customerName"
    email: formData.get("email"),
    phone: formData.get("phone"),

    // --- DADOS OBRIGATÓRIOS QUE O JAVA EXIGE ---
    // (Como o formulário modal ainda não tem esses campos, enviamos valores padrão)
    title: `Lead de ${formData.get("name")}`, // Ex: "Lead de Junior"
    description: "Criado via Dashboard",
    value: 0.0,
    priority: "MEDIUM", // ou LOW, HIGH
    stageId: 1 // <--- IMPORTANTE: Você precisa ter uma Fase com ID 1 no banco, ou vai dar erro "Fase não encontrada"
  };

  console.log("📤 Enviando para:", apiUrl);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // Envia o token JWT
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const textError = await response.text();
      console.error("❌ Erro do Java:", textError);
      
      if (response.status === 403) return { error: "Acesso negado. Token inválido ou expirado." };
      if (response.status === 500) return { error: "Erro interno. Verifique se existe uma Fase (PipelineStage) com ID 1 no banco." };
      
      return { error: `Erro ao salvar: ${response.status}` };
    }

    console.log("✅ Lead criado com sucesso!");
    revalidatePath("/pt-BR/dashboard/leads");
    return { success: true };

  } catch (error) {
    console.error("❌ Erro de Conexão:", error);
    return { error: "Falha na conexão com a API." };
  }
}