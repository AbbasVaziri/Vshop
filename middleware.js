import { NextResponse } from 'next/server';
import Cookies from "js-cookie";

export function middleware(request) {
  const token = Cookies.get('token');
  const url = request.nextUrl.clone();

  if (url.pathname === '/login' && token) {
    url.pathname = '/';  // Redirect to home if logged in
    return NextResponse.redirect('/');
  }

  return NextResponse.next();
}