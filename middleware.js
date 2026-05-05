import { next } from '@vercel/functions';

const COOKIE_NAME = 'drquan_auth';
const PUBLIC = ['/login', '/api/login', '/api/logout'];

export const config = {
  matcher: '/:path*',
};

export default function middleware(request) {
  const url = new URL(request.url);
  const { pathname } = url;

  // Static assets — always pass through
  if (
    pathname.startsWith('/images/') ||
    pathname.startsWith('/models/') ||
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/_vercel/') ||
    pathname === '/favicon.ico'
  ) {
    return next();
  }

  // Public routes — no auth needed
  if (PUBLIC.some(p => pathname === p || pathname.startsWith(p + '/'))) {
    return next();
  }

  // Check auth cookie
  const cookieHeader = request.headers.get('cookie') ?? '';
  const hasAuth = cookieHeader
    .split(';')
    .some(c => {
      const [name, val] = c.trim().split('=');
      return name === COOKIE_NAME && val?.length > 0;
    });

  if (!hasAuth) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return Response.redirect(loginUrl, 302);
  }

  return next();
}
