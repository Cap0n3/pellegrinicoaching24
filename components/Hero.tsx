import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import Headings from "@/components/common/Headings";

/**
 * Hero section component for the homepage.
 */
export default function Hero() {
    const t = useTranslations("HomePage");

    return (
        <section
            aria-label={t("ariaLabel")}
            className="flex h-screen min-h-[700px] w-full items-center justify-center bg-hero bg-cover bg-no-repeat dark:bg-hero-dark"
        >
            <div
                className="container flex flex-col items-center justify-center"
                tabIndex={0}
            >
                <Headings title={t("title")} type="h1" slide />
                <Headings
                    title={t("description")}
                    type="h6"
                    className="font-light"
                    slide
                />
                <Button aria-label={t("cta")} className="mt-6">
                    {t("cta")}
                </Button>
            </div>
        </section>
    );
}
