import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Redirects all non-home routes to the single landing page, while allowing static assets.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow home and Next.js internals.
  if (
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  // Allow common static asset extensions from /public (images/fonts/etc).
  if (
    /\.(png|jpg|jpeg|webp|avif|gif|svg|ico|txt|xml|json|woff2?|ttf|otf)$/i.test(
      pathname
    )
  ) {
    return NextResponse.next();
  }

  // Allow your gallery folder explicitly (optional but safe).
  if (pathname.startsWith("/gallery/")) {
    return NextResponse.next();
  }

  // Redirect everything else to home.
  const url = req.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api).*)"],
};
