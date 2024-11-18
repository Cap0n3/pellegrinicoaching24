"use client";

import React, {useState, useEffect} from "react";
import Slide from "./Slide";
import { cn } from "@/lib/utils";

type HeadingsProps = {
    title: string;
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
};

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

export default function Headings({
    title,
    type,
    className,
}: HeadingsProps) {
    const Heading = type;
    const classProps = chooseClass(type);
    const [visibleChars, setVisibleChars] = useState(0);

    useEffect(() => {
        if (visibleChars < title.length) {
            const timer = setTimeout(() => {
                setVisibleChars((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timer); // Cleanup timeout
        }
    }, [visibleChars, title.length]);

    return (
        <Heading
            className={cn(
                "mb-4 text-center",
                classProps,
                className
            )}
        >
            {Array.from(title).map((char, index) => (
                <span
                    key={index}
                    className={cn(
                        "animate-fadein [--fadein-duration:5s]",
                        index < visibleChars ? "" : "invisible"
                    )}
                >
                    {char}
                </span>
            ))}
            <p className="animate-fadein [--fadein-duration:5s]">SECOND TEXT</p>
        </Heading>
    );
}
