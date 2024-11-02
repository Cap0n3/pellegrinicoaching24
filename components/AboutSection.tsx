import React from "react";
import { Button } from "@/components/ui/button";
import Slide from "./common/Slide";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Headings from "@/components/common/Headings";
import WaveDivider from "./common/WaveDivider";

type Props = {
    contrast?: boolean;
};

export default function AboutSection({ contrast = false }: Props) {
    const t = useTranslations("HomePage");

    return (
        <section
            className={`relative w-full pb-32 ${contrast ? "bg-mp-light-beige dark:bg-gray-900" : "bg-white dark:bg-gray-800"}`}
        >
            <div className="w-full flex flex-col lg:flex-row items-start">
                <Slide classProps="w-full lg:w-1/2">
                    <div className="px-10 pt-10 w-full border-2" tabIndex={0}>
                        <Headings title={t("about-section.title")} type="h2" className="text-start mb-12" slide />
                        <p className="text-md mb-6">
                            {t("about-section.description-p1")}
                        </p>
                        <p className="text-md">
                            {t("about-section.description-p2")}
                        </p>
                    </div>
                </Slide>
                <Slide classProps="w-full order-first lg:w-1/2 lg:order-none">
                    <div className="w-full" tabIndex={0}>
                        <Image
                            tabIndex={0}
                            src="/images/michael-pellegrini.webp"
                            alt="Michael Pellegrini"
                            width={1200}
                            height={1799}
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </Slide>
            </div>
            <WaveDivider position="bottom" />
        </section>
    );
}
