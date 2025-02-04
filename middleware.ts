// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("token");

//   if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
//     return NextResponse.next();
//   }

//   if (!token && request.nextUrl.pathname === "/") {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   if (token && ["/", "/login"].includes(request.nextUrl.pathname)) {
//     return NextResponse.redirect(new URL("/dashboard", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/", "/dashboard/:path*", "/login"],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  // If no token, restrict access to dashboard
  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If logged in, prevent access to login/signup
  if (token && ["/", "/login"].includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/login"],
};
