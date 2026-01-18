import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const token = request.cookies.get('session_token')?.value
  const pathname = request.nextUrl.pathname

  // Regex para detectar se a URL começa com locale (ex: /pt-BR, /en, etc)
  // Remove o locale da string para verificar a rota real
  const pathnameMissingLocale = pathname.replace(/^\/[a-z]{2}(-[A-Z]{2})?/, '');

  // Rotas públicas (Note o /sign-in ao invés de /login)
  const isPublicRoute = 
    pathnameMissingLocale === '/' || 
    pathnameMissingLocale.startsWith('/sign-in') || 
    pathnameMissingLocale.startsWith('/register') || 
    pathnameMissingLocale.startsWith('/recover');

  // 1. Sem token e rota privada -> Manda para o Sign-in (mantendo o locale se possível)
  if (!isPublicRoute && !token) {
    // Redireciona para /pt-BR/sign-in (exemplo)
    return NextResponse.redirect(new URL('/pt-BR/sign-in', request.url))
  }

  // 2. Com token e rota pública -> Manda para Dashboard
  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL('/pt-BR/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}