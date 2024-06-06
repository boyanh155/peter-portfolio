import createMiddleware from "next-intl/middleware";
import { i18AppConfig } from "./lib/i18tsConfig";

export default createMiddleware({
  // A list of all locales that are supported
  locales: i18AppConfig.locales,
  // Used when no locale matches
  defaultLocale: i18AppConfig.defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/","/(vi|en)/:path*", "/((?!_next|_vercel|admin|api|.*\\..*).*)"],
};
