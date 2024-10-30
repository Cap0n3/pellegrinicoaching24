import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import Slide from "@/components/common/Slide";
import Headings from "@/components/common/Headings";

/**
 * Hero section component for the homepage.
 */
export default function Hero() {
    const t = useTranslations("HomePage");

    return (
        <section
            aria-label={t("ariaLabel")}
            className="flex h-screen min-h-[700px] w-full px-10 items-center justify-center lg:px-20 md:justify-start bg-hero md:bg-[50%_30%] bg-[60%_30%] lg:bg-[40%_30%] bg-no-repeat dark:bg-hero-dark"
        >
            <div
                className="max-w-[500px] md:max-w-none lg:w-[800px] md:w-[600px] flex flex-col items-start justify-center"
                tabIndex={0}
            >
                <Headings title={t("title")} type="h1" className="text-start" slide />
                <Headings
                    title={t("description")}
                    type="h6"
                    className="font-light text-start"
                    slide
                />
                <Slide delay={300}>
                    <Button aria-label={t("cta")} className="mt-6">
                        {t("cta")}
                    </Button>
                </Slide>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <g transform="matrix(1,0,0,0.362399,0,204.032)">
                        <path className="fill-current text-[#FFF9EB] dark:text-gray-900" d="M0,288L48,272C96,256 192,224 288,197.3C384,171 480,149 576,165.3C672,181 768,235 864,250.7C960,267 1056,245 1152,250.7C1248,256 1344,288 1392,304L1440,320L0,320L0,288Z">
                        </path>
                    </g>
                </svg>
            </div>
        </section>
    );
}
