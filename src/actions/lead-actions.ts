'use server';

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createLeadAction(formData: FormData) {
  // 1. Recupera o token correto (igual ao auth-actions.ts)
  const cookieStore = await cookies();
  const token = cookieStore.get('session_token')?.value;

  // 2. Define a URL da API
  // Prioriza a variável de ambiente, mas tem um fallback para o seu link do Render
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://indexcrm-crm-api.onrender.com";
  
  // ATENÇÃO: Se o seu backend usa Spring Data REST puro, o endpoint geralmente é /clients
  // Se você criou um controller manual, pode ser /api/sales/leads.
  // Vou usar /clients pois é o padrão que aparece nos seus logs de inicialização.
  const apiUrl = `${baseUrl}/clients`; 

  // 3. Prepara os dados (Payload)
  // Fazemos o DE-PARA: O form envia "name", o Java recebe "customerName"
  const leadData = {
    customerName: formData.get("name"), 
    email: formData.get("email"),
    phone: formData.get("phone"),
    // Valores padrão para evitar erro no Java se o campo for obrigatório
    value: 0,
    active: true 
  };

  console.log("📤 Enviando para:", apiUrl);
  console.log("📦 Dados:", leadData);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Adiciona o token no cabeçalho (se o Java exigir autenticação)
        "Authorization": token ? `Bearer ${token}` : ""
      },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      const textError = await response.text();
      console.error("❌ Erro do Java:", textError);
      return { error: `Erro ao salvar: ${response.status} - Verifique o console do servidor.` };
    }

    // Sucesso!
    console.log("✅ Lead criado com sucesso!");
    
    // Atualiza a lista na tela de dashboard sem recarregar a página inteira
    revalidatePath("/pt-BR/dashboard/leads");
    
    return { success: true };

  } catch (error) {
    console.error("❌ Erro de Conexão:", error);
    return { error: "Não foi possível conectar ao servidor Java." };
  }
}