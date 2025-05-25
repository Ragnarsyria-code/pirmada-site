// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Only target the robots.txt request
  if (request.nextUrl.pathname === '/robots.txt') {
    const res = NextResponse.next()
    // Tell search engines: do not index this file, but still follow links (your sitemap)
    res.headers.set('X-Robots-Tag', 'noindex, follow')
    return res
  }
  return NextResponse.next()
}

// Apply to all routes (the middleware will only modify /robots.txt)
export const config = {
  matcher: '/robots.txt',
}
