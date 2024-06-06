import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
  export function middleware(request) {
    const url = request.nextUrl
    const searchParams = url.searchParams.toString()
    let hostname = request.headers
    if (
      url.pathname === '/' 
      
    ) {
      return NextResponse.redirect(new URL('http://localhost:3000/input', request.url))
    }
  }