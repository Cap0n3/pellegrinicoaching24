import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import Slide from "@/components/common/Slide";
import Headings from "@/components/common/Headings";
import WaveDivider from "./common/WaveDivider";

/**
 * Hero section component for the homepage.
 */
export default function Hero() {
    const t = useTranslations("HomePage");

    return (
        <section
            aria-label={t("ariaLabel")}
            className="relative flex h-screen min-h-[700px] w-full px-10 items-center justify-center lg:px-20 md:justify-start bg-hero md:bg-[50%_30%] bg-[60%_30%] lg:bg-[40%_30%] bg-no-repeat dark:bg-hero-dark"
        >
            <div
                className="max-w-[500px] md:max-w-none lg:w-[800px] md:w-[600px] flex flex-col items-start justify-center"
                tabIndex={0}
            >
                <Headings title={t("title")} type="h1" className="text-start uppercase" slide />
                <Headings
                    title={t("description")}
                    type="h6"
                    className="font-light text-start"
                    slide
                />
                <Slide delay={300}>
                    <Button aria-label={t("cta")} className="mt-6 bg-mp-dark-blue hover:bg-mp-dark-blue/90 dark:bg-gray-800 dark:text-white dark:hover:bg-mp-dark-blue/90">
                        {t("cta")}
                    </Button>
                </Slide>
            </div>
            <WaveDivider position="bottom" />
        </section>
    );
}
