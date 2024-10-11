import React from "react";
import Image from "next/image";
import Slide from "./Slide";

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
                    <h2 className="mb-4 text-2xl font-bold">{title}</h2>
                    <p className="text-md">{paragraph}</p>
                </div>
            </Slide>
        </div>
    );

    return (
        <section
            id={id}
            className={`flex w-full items-center justify-center px-10 py-10 lg:px-20 ${contrast ? "via-grey-50 bg-gradient-to-r from-white via-[#fcfcfc] to-[#fbfbfb] dark:bg-gradient-to-r dark:from-gray-800 dark:via-slate-700 dark:to-gray-900" : "bg-white dark:bg-gray-800"}`}
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
