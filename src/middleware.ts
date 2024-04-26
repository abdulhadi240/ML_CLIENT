import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const searchParams = url.searchParams.toString()
  let hostname = request.headers
  if (
    url.pathname === '/' 
    
  ) {
    return NextResponse.redirect(new URL('https://finance-landing-page-git-main-abdulhadi240s-projects.vercel.app/', request.url))
  }
}