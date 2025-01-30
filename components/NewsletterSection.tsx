import React from "react";
import Slide from "@/components/common/Slide";
import AnimatedHeadings from "./common/AnimatedHeadings";
import AnimatedButton from "@/components/common/AnimatedButton";
import WaveDivider from "@/components/common/WaveDivider";
import { Button } from "@/components/ui/button";
import NewsletterInput from "@/components/common/NewsletterInput";
import { Link } from "@/navigation";
import { cn } from "@/lib/utils";

type NewsletterProps = {
    id: string;
    title: string;
    paragraph: string;
    cta: string;
    placeholder: string;
    contrast?: boolean;
    wave?: boolean;
    success: {
        title: string;
        message: string;
    };
    error: {
        title: string;
        message: string;
    };
};

export default function Newsletter({
    id,
    title,
    paragraph,
    cta,
    placeholder,
    success,
    error,
    contrast = false,
    wave = false,
}: NewsletterProps) {
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
                <div
                    tabIndex={0}
                    className="flex flex-col items-center justify-center gap-4"
                >
                    <AnimatedHeadings
                        title={title}
                        type="h2"
                        className="text-start"
                        delay={50}
                    />
                    <p className="text-md">{paragraph}</p>
                    <NewsletterInput
                        cta={cta}
                        placeholder={placeholder}
                        success={success}
                        error={error}
                    />
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
            <div className="flex w-full max-w-[2000px] flex-col items-center justify-center py-20 lg:flex-row">
                {textBlock}
            </div>
        </section>
    );
}
