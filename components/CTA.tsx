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
    contrast?: boolean;
    wave?: boolean;
}

export default function CTA({
    id,
    title,
    paragraph,
    contrast = false,
    wave = false,
}: CTAProps) {
    const textBlock = (
        <div
            className={cn("flex w-full items-center justify-center", contrast ? "bg-mp-light-beige dark:bg-gray-900" : "bg-white dark:bg-gray-800")}
        >
            <Slide>
                <div tabIndex={0}>
                    <Headings title={title} type="h2" className="mb-6 text-start" />
                    <p className="text-md mb-6">{paragraph}</p>
                    <div className="flex gap-4 flex-col lg:flex-row">
                        <Button aria-label="cta" className="mt-6 bg-mp-dark-blue">Primary Action</Button>
                        <Button variant="outline" className="mt-6 border-mp-dark-blue">Secondary Action</Button>
                    </div>
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
