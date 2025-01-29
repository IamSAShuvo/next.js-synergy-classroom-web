import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the user is trying to access the root "/"
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Config to specify the paths where the middleware should run
export const config = {
  matcher: "/", // Apply middleware only to the root path
};
