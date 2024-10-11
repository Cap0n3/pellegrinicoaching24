/**
 * This file is used to load the translations for the app.
 *
 * See: https://next-intl-docs.vercel.app/
 */
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales /* ... */ } from "./config";

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`./data/${locale}.json`)).default,
    };
});
