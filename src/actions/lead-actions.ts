'use server';

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createLeadAction(formData: FormData) {
  const session = (await cookies()).get('session')?.value; // Ou o nome do seu cookie de token

  const leadData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    // Adicione outros campos conforme seu Backend Java espera
  };

  try {
    const response = await fetch(`${process.env.API_URL}/clients`, { // Ajuste a URL da API Java
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session}`
      },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      return { error: "Erro ao criar lead no servidor." };
    }

    // Atualiza a lista de leads na tela sem recarregar a página
    revalidatePath("/pt-BR/dashboard/leads");
    return { success: true };

  } catch (error) {
    console.error(error);
    return { error: "Erro de conexão." };
  }
}