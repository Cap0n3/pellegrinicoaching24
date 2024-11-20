import React from "react";
import Headings from "./common/Headings";
import { Eye } from "lucide-react";
import Slide from "@/components/common/Slide";
import Image from "next/image";
import WaveDivider from "@/components/common/WaveDivider";
import { cn } from "@/lib/utils";

type SocialProofProps = {
    title: string;
    description: string;
    brandLogos: {
        src: string;
        alt: string;
        width: number;
        height: number;
        className: string;
    }[];
    contrast?: boolean;
    wave?: boolean;
};

type BrandLogoProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    classProps: string;
    fx_delay?: number;
};

function BrandLogo({
    src,
    alt,
    width,
    height,
    classProps,
    fx_delay,
}: BrandLogoProps) {
    return (
        <Slide delay={fx_delay}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={classProps}
            />
        </Slide>
    );
}

/**
 * Social Proof Section
 */
export default function SocialProof({
    title,
    description,
    brandLogos,
    contrast = false,
    wave = false,
}: SocialProofProps) {
    return (
        <section
            className={cn(
                "relative w-full px-10 py-20 lg:px-20",
                contrast
                    ? "bg-mp-light-beige dark:bg-gray-900"
                    : "bg-white dark:bg-gray-800",
                wave ? "py-28 lg:py-40" : "py-10"
            )}
        >
            {wave && <WaveDivider position="top" />}
            <Headings title={title} type="h2" slide />
            <Headings
                title={description}
                type="h6"
                className="mb-12 font-light"
                slide
            />
            <Slide>
                <div className="flex flex-col items-center justify-center gap-20 md:flex-row">
                    {brandLogos.map((logo, index) => (
                        <BrandLogo
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            width={logo.width}
                            height={logo.height}
                            classProps={cn(
                                "h-auto object-cover",
                                logo.className
                            )}
                            fx_delay={index * 300}
                        />
                    ))}
                </div>
            </Slide>
            <WaveDivider position="bottom" />
            {wave && <WaveDivider position="bottom" />}
        </section>
    );
}
