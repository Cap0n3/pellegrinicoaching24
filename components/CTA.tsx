import React from "react";
import Slide from "@/components/common/Slide";
import AnimatedHeadings from "./common/AnimatedHeadings";
import AnimatedButton from "@/components/common/AnimatedButton";
import WaveDivider from "@/components/common/WaveDivider";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
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
            className={cn(
                "flex w-full items-center justify-center",
                contrast
                    ? "bg-mp-light-beige dark:bg-gray-900"
                    : "bg-white dark:bg-gray-800"
            )}
        >
            <Slide>
                <div tabIndex={0} className="flex flex-col gap-4">
                    <AnimatedHeadings
                        title={title}
                        type="h2"
                        className="text-start"
                        delay={50}
                    />
                    <p className="text-md">{paragraph}</p>
                    <Link href="/contact" prefetch={false}>
                        {/* <Button
                            aria-label="cta"
                            className="mt-6 w-44 bg-mp-dark-blue hover:bg-mp-dark-blue/90 dark:bg-gray-800 dark:text-white dark:hover:bg-mp-dark-blue/90"
                        >
                            {cta}
                        </Button> */}
                        <AnimatedButton
                            text={cta}
                            delay={1000}
                            buttonClassName="mt-6"
                        />
                    </Link>
                </div>
            </Slide>
        </div>
    );

    return (
        <section
            id={id}
            className={cn(
                "relative flex w-full items-center justify-center px-10 lg:px-20",
                contrast
                    ? "bg-mp-light-beige dark:bg-gray-900"
                    : "bg-white dark:bg-gray-800",
                wave ? "py-10 lg:py-20" : "py-10"
            )}
        >
            {wave && <WaveDivider position="top" />}
            <div className="flex w-full max-w-[2000px] flex-col items-center justify-center lg:flex-row">
                {textBlock}
            </div>
            {wave && <WaveDivider position="bottom" />}
        </section>
    );
}
