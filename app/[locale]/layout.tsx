import "@/app/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { Providers } from "@/contexts/ParaProvider";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ScrollTop from "@/components/common/ScrollToTop";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "MP Coaching",
    description:
        "Michael Pellegrini, coach de vie certifié, vous aide à libérer votre potentiel créatif et à transformer votre vie en puisant dans votre inspiration.",
    keywords:
        "Coaching, Coach de vie, Développement personnel, Créativité, Inspiration, Transformation, Vie, Michael Pellegrini",
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://example.com",
        images: [
            {
                url: "https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o",
                width: 800,
                height: 600,
                alt: "Og Image Alt",
            },
        ],
        siteName: "MP Coaching",
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
            <body className={montserrat.className}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem={false}
                        disableTransitionOnChange
                    >
                        <Providers>
                            <Navbar />
                            {children}
                            <Footer />
                            <ScrollTop />
                        </Providers>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
