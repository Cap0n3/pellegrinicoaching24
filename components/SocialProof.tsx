import React from 'react';
import Headings from './common/Headings';
import { Eye } from 'lucide-react';
import Slide from "@/components/common/Slide";
import Image from "next/image";
import { useTranslations } from "next-intl";


type Props = {
    contrast?: boolean;
}

export default function SocialProof({
    contrast = false
}: Props) {
    const t = useTranslations("HomePage");
    
    return (
        <section className={`w-full px-10 py-10 lg:px-20 ${contrast ? "bg-[#FFF9EB] dark:bg-gray-900" : "bg-white dark:bg-gray-800"}`}>
            <Headings title={t("social-proof.title")} type="h2" slide />
            <Headings
                title={t("social-proof.description")}
                type="h6"
                className="font-light mb-12"
                slide
            />
            <Slide>
                <div className="flex flex-col md:flex-row items-center justify-center gap-20">
                    <Image
                        src="/images/logos/Wakan_Logo.webp"
                        alt="Wakan"
                        width={300}
                        height={337}
                        className="h-auto w-20 object-cover"
                    />
                    <Image
                        src="/images/logos/CCE_Logo.webp"
                        alt="CCE"
                        width={359}
                        height={349}
                        className="h-auto w-20 object-cover"
                    />
                    <Image
                        src="/images/logos/Eduqua_Logo.webp"
                        alt="Eduqua"
                        width={908}
                        height={388}
                        className="h-auto w-56 object-cover"
                    />
                    <Image
                        src="/images/logos/LesInvisibles_Logo.webp"
                        alt="Les Invisibles"
                        width={393}
                        height={335}
                        className="h-auto w-24 object-cover"
                    />
                </div>
            </Slide>
        </section>
    )
}