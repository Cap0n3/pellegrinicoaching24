import React from "react";
import Slide from "@/components/common/Slide";
import Headings from "@/components/common/Headings";
import WaveDivider from "@/components/common/WaveDivider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAProps {
    id: string;
    title: string;
    paragraph: string;
    cta: string;
    contrast?: boolean;
    wave?: boolean;
}

export default function CTA({
    id,
    title,
    paragraph,
    cta,
    contrast = false,
    wave = false,
}: CTAProps) {

    const textBlock = (
        <div
            className={cn("flex w-full items-center justify-center", contrast ? "bg-mp-light-beige dark:bg-gray-900" : "bg-white dark:bg-gray-800")}
        >
            <Slide>
                <div tabIndex={0} className="flex flex-col gap-4">
                    <Headings title={title} type="h2" className="text-start" />
                    <p className="text-md">{paragraph}</p>
                    <Button aria-label="cta" className="w-44 mt-6 bg-mp-dark-blue">{cta}</Button>
                </div>
            </Slide>
        </div>
    );

    return (
        <section
            id={id}
            className={cn("relative flex w-full items-center justify-center px-10 lg:px-20", contrast ? "bg-mp-light-beige dark:bg-gray-900" : "bg-white dark:bg-gray-800", wave ? "py-10 lg:py-20" : "py-10")}
        >
            {wave && <WaveDivider position="top" />}
            <div
                className="flex w-full max-w-[2000px] flex-col items-center justify-center lg:flex-row"
            >
                {textBlock}
            </div>
            {wave && <WaveDivider position="bottom" />}
        </section>
    );
}
