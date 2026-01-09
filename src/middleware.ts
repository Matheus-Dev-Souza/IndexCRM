import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('session_token')?.value
  const pathname = request.nextUrl.pathname

  // AQUI É O SEGREDO:
  // Permitimos a raiz ('/') e o login ('/login')
  const isPublicRoute = pathname === '/' || pathname.startsWith('/login')

  // Se não é pública e não tem token -> Manda pro Login
  if (!isPublicRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Se já tem token e tenta acessar login ou raiz -> Manda pro Dashboard
  // (Opcional: se quiser que a Home seja acessível mesmo logado, remova a parte "|| pathname === '/'")
  if (token && (pathname.startsWith('/login'))) {
    return NextResponse.redirect(new URL('/deals', request.url)) // Ou /dashboard
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}