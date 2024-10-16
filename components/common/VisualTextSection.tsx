import React from "react";
import Image from "next/image";
import Slide from "./Slide";
import Headings from "@/components/common/Headings";

interface SectionProps {
    id: string;
    imageLink?: string;
    title: string;
    paragraph: string;
    contrast?: boolean;
    inverted?: boolean;
}

export default function VisualTextSection({
    id,
    imageLink,
    title,
    paragraph,
    contrast = false,
    inverted = false,
}: SectionProps) {
    const imageBlock = (
        <div className="order-first w-full :order-none lg:w-1/2">
            {imageLink && (
                <Slide>
                    <Image
                        tabIndex={0}
                        src={imageLink}
                        alt={title}
                        width={1200}
                        height={800}
                        className="h-auto w-full rounded-lg object-cover"
                    />
                </Slide>
            )}
        </div>
    );

    const textBlock = (
        <div
            className={`flex min-h-[250px] w-full items-center justify-center p-6 lg:w-1/2 ${!inverted ? "lg:pl-12" : "lg:pr-12"}`}
        >
            <Slide>
                <div tabIndex={0}>
                    <Headings title={title} type="h3" className="mb-6 text-start" />
                    <p className="text-md">{paragraph}</p>
                </div>
            </Slide>
        </div>
    );

    return (
        <section
            id={id}
            className={`flex w-full items-center justify-center px-10 py-10 lg:px-20 ${contrast ? "bg-[#FFF9EB] dark:bg-gray-900" : "bg-white dark:bg-gray-800"}`}
        >
            <div
                className={`flex w-full max-w-[2000px] flex-col items-center justify-center lg:flex-row ${inverted ? "lg:flex-row-reverse" : ""}`}
            >
                {imageBlock}
                {textBlock}
            </div>
        </section>
    );
}
