/**
 * This file is used to configure the middleware that will be used by the Next.js application for internationalization.
 * Negotiates the locale and handles redirects & rewrites.
 *
 * See: https://next-intl-docs.vercel.app/docs/routing
 */
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/(fr|en)/:path*"],
};
