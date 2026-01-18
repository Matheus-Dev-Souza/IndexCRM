'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// URL do seu Back-end Java (verifique se está rodando na 8080)
const API_URL = process.env.NEXT_PUBLIC_API_URL + '/auth';

// --- LOGIN ---
export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      cache: 'no-store'
    })

    if (!response.ok) {
      return { error: 'Email ou senha inválidos' }
    }

    const data = await response.json()
    
    // Configuração do Cookie
    const cookieStore = await cookies()
    cookieStore.set('session_token', data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 dia
      path: '/',
    })
  } catch (err) {
    return { error: 'Erro de conexão com o servidor' }
  }

  // Redireciona para o Dashboard
  redirect('/pt-BR/dashboard')
}

// --- REGISTRO (Esta é a função que estava faltando) ---
export async function registerAction(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const role = 'USER' 

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, role }),
      cache: 'no-store'
    })

    if (!response.ok) {
      return { error: 'Erro ao cadastrar. O e-mail pode já estar em uso.' }
    }
  } catch (err) {
    console.error(err);
    return { error: 'Erro de conexão ao tentar registrar' }
  }

  // Se der certo, redireciona para o login
  redirect('/pt-BR/sign-in')
}

// --- LOGOUT ---
export async function logoutAction() {
  (await cookies()).delete('session_token')
  redirect('/pt-BR/sign-in')
}