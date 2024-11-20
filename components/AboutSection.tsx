import React from "react";
import Slide from "./common/Slide";
import Image from "next/image";
import Headings from "@/components/common/Headings";
import { cn } from "@/lib/utils";

type Props = {
    title: string;
    paragraphs: string[];
    img: string;
    contrast?: boolean;
};

export default function AboutSection({
    title,
    paragraphs,
    img,
    contrast = false,
}: Props) {
    return (
        <section
            className={cn(
                "relative w-full pb-10 lg:pb-20",
                contrast
                    ? "bg-mp-light-beige dark:bg-gray-900"
                    : "bg-white dark:bg-gray-800"
            )}
        >
            <div className="flex w-full max-w-[2000px] flex-col items-start lg:flex-row">
                <div className="order-first w-full lg:order-none lg:w-1/2">
                    <Slide>
                        <div tabIndex={0}>
                            <Image
                                tabIndex={0}
                                src={img}
                                alt={title}
                                width={1200}
                                height={1799}
                                className="h-auto w-full rounded-br-lg object-cover"
                            />
                        </div>
                    </Slide>
                </div>
                <div className="w-full px-10 pt-10 lg:w-1/2 lg:px-20">
                    <Slide>
                        <div tabIndex={0}>
                            <Headings
                                title={title}
                                type="h2"
                                className="mb-12 text-start"
                                slide
                            />
                            {paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className={cn(
                                        index === paragraphs.length - 1
                                            ? "mb-0"
                                            : "mb-6",
                                        "text-md"
                                    )}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
}
