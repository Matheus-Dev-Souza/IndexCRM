import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  // 1. Pega o token e a url atual
  const token = request.cookies.get('session_token')?.value
  const pathname = request.nextUrl.pathname

  // 2. Define quais rotas são PÚBLICAS
  // IMPORTANTE: Adicionei '/register' e '/recover' aqui, senão o usuário não consegue criar conta
  const isPublicRoute = 
    pathname === '/' || 
    pathname.startsWith('/login') || 
    pathname.startsWith('/register') || 
    pathname.startsWith('/recover');

  // 3. Lógica de Proteção

  // CASO 1: Tenta acessar rota privada SEM token -> Manda pro Login
  if (!isPublicRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // CASO 2: Já tem token e tenta acessar login/registro -> Manda pro Dashboard
  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // CASO 3: Tudo certo, deixa passar
  return NextResponse.next()
}

// Configuração para ignorar arquivos estáticos e API interna do Next
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}