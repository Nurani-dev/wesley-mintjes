import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // "God Mode" Personalization Logic
  // We capture the user's location from Vercel's headers.
  // Default to 'Lelystad' and 'NL' for local development or if headers are missing.
  const city = request.headers.get('x-vercel-ip-city') || 'Lelystad'
  const country = request.headers.get('x-vercel-ip-country') || 'NL'
  
  const response = NextResponse.next()
  
  // Pass these as custom headers so our components can easily read them
  response.headers.set('x-user-city', city)
  response.headers.set('x-user-country', country)
  
  return response
}

export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
