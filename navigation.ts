/**
 * Provides APIs to navigate between pages. It provides modified versions of
 * Next.js' `Link`, `redirect`, `usePathname` and `useRouter` that handle localized URLs.
 *
 * See: https://next-intl-docs.vercel.app/docs/routing
 */
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales /* ... */ } from "./config";

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales /* ... */ });
