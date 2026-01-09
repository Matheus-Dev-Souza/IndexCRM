// src/actions/auth-actions.ts
'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAction(formData: FormData) {
  // Simular um atraso de rede (opcional)
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const email = formData.get('email')
  const password = formData.get('password')

  // --- AQUI ENTRARIA A CHAMADA PARA O SEU BACKEND JAVA ---
  // Por enquanto, vamos fazer mockado (falso)
  if (email === 'admin@meucrm.com' && password === '123456') {
    
    // Cria o cookie de sessão (HTTP Only para segurança)
    cookies().set('session_token', 'token-falso-do-usuario-123', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 semana
      path: '/',
    })

    // Redireciona para o dashboard
    redirect('/deals') 
  } else {
    // Se falhar, você pode retornar um erro (trataremos isso na pagina)
    return { error: 'Credenciais inválidas' }
  }
}

export async function logoutAction() {
  cookies().delete('session_token')
  redirect('/login')
}