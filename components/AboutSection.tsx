import React from "react";
import { Button } from "@/components/ui/button";
import Slide from "./common/Slide";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Headings from "@/components/common/Headings";
import WaveDivider from "./common/WaveDivider";
import { cn } from "@/lib/utils";

type Props = {
    contrast?: boolean;
};

export default function AboutSection({ contrast = false }: Props) {
    const t = useTranslations("HomePage");

    return (
        <section
            className={cn("relative w-full pb-10 lg:pb-20", contrast ? "bg-mp-light-beige dark:bg-gray-900" : "bg-white dark:bg-gray-800")}
        >
            <div className="w-full max-w-[2000px] flex flex-col lg:flex-row items-start">
                <div className="w-full order-first lg:w-1/2 lg:order-none">
                    <Slide>
                        <div tabIndex={0}>
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
                <div className="w-full lg:w-1/2 pt-10 px-10 lg:px-20">
                    <Slide>
                        <div tabIndex={0}>
                            <Headings title={t("about-section.title")} type="h2" className="text-start mb-12" slide />
                            <p className="text-md mb-6">
                                {t("about-section.description-p1")}
                            </p>
                            <p className="text-md mb-6">
                                {t("about-section.description-p2")}
                            </p>
                            <p className="text-md mb-6">
                                {t("about-section.description-p3")}
                            </p>
                            <p className="text-md">
                                {t("about-section.description-p4")}
                            </p>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
}
