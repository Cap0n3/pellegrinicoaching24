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
            className={`relative w-full px-10 pt-10 pb-40 lg:px-20 ${contrast ? "bg-mp-light-beige dark:bg-gray-900" : "bg-white dark:bg-gray-800"}`}
        >
            <div className="mx-auto max-w-screen-xl items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <Slide>
                    <div className="mt-4 md:mt-0" tabIndex={0}>
                        <Headings title={t("about-section.title")} type="h2" className="text-start mb-12" slide />
                        <p className="text-md mb-6">
                            {t("about-section.description-p1")}
                        </p>
                        <p className="text-md">
                            {t("about-section.description-p2")}
                        </p>
                    </div>
                </Slide>
                <Slide>
                    <div className="" tabIndex={0}>
                        <Image
                            tabIndex={0}
                            src="/images/michael-pellegrini.webp"
                            alt="Michael Pellegrini"
                            width={1200}
                            height={1799}
                            className="h-auto w-full object-cover rounded-lg"
                        />
                    </div>
                </Slide>
            </div>
            <WaveDivider position="bottom" />
        </section>
    );
}
