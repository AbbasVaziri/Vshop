import { NextResponse } from "next/server";

export const config = {
  matcher: "/admin/:path*",
};

export default function middleware(request) {
  const token = request.cookies.get("token");
  const { origin, pathname } = request.nextUrl;

  if (token === undefined) {
    request.cookies.set("originalUrl", pathname);
    return NextResponse.redirect(`${origin}/login`);
  }

  return NextResponse.next();
}
