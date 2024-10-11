import "@/app/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "My Landing Page",
    description: "This is a landing page template",
    keywords: "landing page, template, nextjs",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://example.com",
        images: [
            {
                url: "https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o",
                width: 800,
                height: 600,
                alt: "Og Image Alt",
            },
        ],
        siteName: "My Landing Page",
    },
};

export default async function LocaleLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    // Fetch messages for the current locale (it's the data)
    const messages = await getMessages();

    return (
        <html className="scroll-smooth" lang={locale} suppressHydrationWarning>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Navbar />
                        {children}
                        <Footer />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
