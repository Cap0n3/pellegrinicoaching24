import React from "react";
import Image from "next/image";
import Slide from "@/components/common/Slide";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

interface SectionProps {
    id: string;
    imageLink?: string;
    title: string;
    contrast?: boolean;
    inverted?: boolean;
}

/**
 * FAQ section component for the homepage.
 */
export default function FAQSection({
    id,
    imageLink,
    title,
    contrast = false,
    inverted = false,
}: SectionProps) {
    const t = useTranslations("HomePage.faq");
    const keys = [
        "question-one",
        "question-two",
        "question-three",
        "question-four",
    ] as const;

    const imageBlock = (
        <div className="order-first w-full lg:order-none lg:w-1/3 xl:w-1/2">
            {imageLink && (
                <Slide>
                    <Image
                        src={imageLink}
                        alt={title}
                        width={1200}
                        height={800}
                        className="h-auto w-full rounded-lg object-cover"
                        tabIndex={0}
                    />
                </Slide>
            )}
        </div>
    );

    const faqBlock = (
        <div
            className={`flex min-h-[250px] w-full items-center justify-center p-6 lg:w-2/3 xl:w-1/2 ${!inverted ? "md:pl-12" : "md:pr-12"}`}
        >
            <Slide classProps="w-full">
                <div aria-label="FAQ section" tabIndex={0}>
                    <h2 className="mb-4 text-2xl font-bold">{t("title")}</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {keys.map((key, index) => (
                            <AccordionItem
                                key={key}
                                value={`item-${index}`}
                                aria-label="Accordion item"
                            >
                                <AccordionTrigger
                                    className="hover:no-underline text-start"
                                    tabIndex={0}
                                    aria-label="Accordion trigger"
                                >
                                    {t(`questions.${key}.question`)}
                                </AccordionTrigger>
                                <AccordionContent tabIndex={0} className="text-start">
                                    {t(`questions.${key}.answer`)}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </Slide>
        </div>
    );

    return (
        <section
            id={id}
            className={`flex w-full items-center justify-center px-10 py-10 md:px-20 ${contrast ? "bg-[#FFF9EB] dark:bg-gray-900" : "bg-white dark:bg-gray-800"}`}
        >
            <div
                className={`flex w-full max-w-[2000px] flex-col items-center justify-center lg:flex-row ${inverted ? "lg:flex-row-reverse" : ""}`}
            >
                {imageBlock}
                {faqBlock}
            </div>
        </section>
    );
}
