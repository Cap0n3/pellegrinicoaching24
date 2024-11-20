import React from "react";
import Slide from "@/components/common/Slide";

import { cn } from "@/lib/utils";

type HeadingsProps = {
    title: string;
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    slide?: boolean;
    className?: string;
};

type TitleProps = {
    title: string;
    type: string;
    className?: string;
};

function Title({ title, type, className }: TitleProps) {
    const chooseClass = (type: string): string => {
        switch (type) {
            case "h1":
                return "text-3xl md:text-5xl";
            case "h2":
                return "text-2xl md:text-4xl";
            case "h3":
                return "text-xl md:text-3xl";
            case "h4":
                return "text-lg md:text-2xl";
            case "h5":
                return "text-base md:text-xl";
            case "h6":
                return "text-sm md:text-lg";
            default:
                return "text-3xl md:text-5xl";
        }
    };
    //const Heading = type || "h1";
    const classProps = chooseClass(type);

    return (
        // Use React.createElement to dynamically render the heading
        React.createElement(
            type,
            {
                className: cn("mb-4 text-center", classProps, className),
            },
            title
        )
    );
}

export default function Headings({
    title,
    type,
    slide = false,
    className,
}: HeadingsProps) {

    return (
        <>
            {
                slide ? (
                    <Slide>
                        <Title title={title} type={type} className={className} />
                    </Slide>
                ) : (
                    <Title title={title} type={type} className={className} />
                ) 
            }
        </>
    );
}
