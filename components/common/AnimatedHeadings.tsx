"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type HeadingsProps = {
    title: string;
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
    waitTime?: number;
    delay?: number;
};

type TitleProps = {
    type: string;
    className?: string;
    children: React.ReactNode;
};

function Title({ children, type, className }: TitleProps) {
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
    const classProps = chooseClass(type);

    return (
        // Use React.createElement to dynamically render the heading
        React.createElement(
            type,
            {
                className: cn("mb-4 text-center", classProps, className),
            },
            children
        )
    );
}

export default function Headings({
    title,
    type,
    className,
    waitTime = 0,
    delay = 100,
}: HeadingsProps) {
    const [visibleChars, setVisibleChars] = useState(0);

    // useEffect(() => {
    //     if (visibleChars < title.length) {
    //         const timer = setTimeout(() => {
    //             setVisibleChars((prev: number) => prev + 1);
    //         }, 100);
    //         return () => clearTimeout(timer); // Cleanup timeout
    //     }
    // }, [visibleChars, title.length]);

    useEffect(() => {
        const initialDelay = waitTime; // Delay before animation starts in milliseconds
        const animationDelay = delay; // Delay between each character animation
    
        if (visibleChars === 0) {
            // Run initial delay only once
            const initialTimer = setTimeout(() => {
                setVisibleChars(1); // Start the animation
            }, initialDelay);
            return () => clearTimeout(initialTimer);
        } else if (visibleChars < title.length) {
            // Handle the per-character animation delay
            const charTimer = setTimeout(() => {
                setVisibleChars((prev: number) => prev + 1);
            }, animationDelay);
            return () => clearTimeout(charTimer);
        }
    }, [visibleChars, title.length, waitTime, delay]);

    return (
        <Title type={type} className={className}>
            {Array.from(title).map((char, index) => (
                <span
                    key={index}
                    className={cn(
                        index < visibleChars ? "" : "invisible"
                    )}
                >
                    {char}
                </span>
            ))}
        </Title>
    );
}
