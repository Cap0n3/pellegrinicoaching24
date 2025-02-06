import "@/app/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { Providers } from "@/contexts/ParaProvider";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ScrollTop from "@/components/common/ScrollToTop";
import { NextIntlClientProvider } from "next-intl";
import { PHProvider } from "@/contexts/PosthogProvider";
import { getMessages } from "next-intl/server";
import dynamic from "next/dynamic";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "MP Coaching | Coach de vie certifié à Genève",
    description:
        "Michael Pellegrini, coach de vie à Genève, vous aide à libérer votre potentiel créatif et à transformer votre vie en puisant dans votre inspiration. Certifié Coach Professionnel par l'approche Coaching RelationCare® de l'école WAKAN, fondée par David Denis Hertz, MCC, Michael allie expertise et bienveillance pour vous aider à libérer votre potentiel. Dans un environnement sûr et confidentiel, exempt de tout jugement, vous pourrez identifier vos résistances ouvrant ainsi la voie à une action plus efficace.",
    keywords:
        "Genève, Coaching, Coach de vie, Développement personnel, Créativité, Inspiration, Transformation, Vie, Michael Pellegrini",
    openGraph: {
        type: "website",
        title: "Michael Pellegrini | Coach de vie certifié à Genève",
        description:
            "Michael Pellegrini, coach de vie à Genève, vous aide à libérer votre potentiel créatif et à transformer votre vie en puisant dans votre inspiration. Certifié Coach Professionnel par l'approche Coaching RelationCare® de l'école WAKAN, fondée par David Denis Hertz, MCC, Michael allie expertise et bienveillance pour vous aider à libérer votre potentiel. Dans un environnement sûr et confidentiel, exempt de tout jugement, vous pourrez identifier vos résistances ouvrant ainsi la voie à une action plus efficace.",
        locale: "fr_FR",
        url: "https://example.com",
        images: [
            {
                url: "/images/mpcoaching_og_image.webp",
                alt: "Michael Pellegrini Coaching",
            },
        ],
        siteName: "MP Coaching",
    },
    twitter: {
        card: "summary_large_image",
        title: "Michael Pellegrini | Coach de vie certifié à Genève",
        description:
            "Michael Pellegrini, coach de vie à Genève, vous aide à libérer votre potentiel créatif et à transformer votre vie en puisant dans votre inspiration. Certifié Coach Professionnel par l'approche Coaching RelationCare® de l'école WAKAN, fondée par David Denis Hertz, MCC, Michael allie expertise et bienveillance pour vous aider à libérer votre potentiel. Dans un environnement sûr et confidentiel, exempt de tout jugement, vous pourrez identifier vos résistances ouvrant ainsi la voie à une action plus efficace.",
        images: [
            {
                url: "/images/mpcoaching_og_image.webp",
                alt: "Michael Pellegrini Coaching",
            },
        ],
    },
    alternates: {
        canonical: "https://www.pellegrinicoaching.ch/fr",
    },
    robots: "index, follow", // Allows indexing and following links
};

const PostHogPageView = dynamic(() => import("../PostHogPageView"), {
    ssr: false,
});

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
                        enableSystem={false}
                        themes={["light", "dark"]}
                        disableTransitionOnChange
                    >
                        <Providers>
                            <PHProvider>
                                <PostHogPageView />
                                <Navbar />
                                {children}
                                <Footer />
                                <ScrollTop />
                            </PHProvider>
                        </Providers>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
