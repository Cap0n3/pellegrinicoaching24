"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "motion/react"

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

export default function AnimatedHeadings({
    title,
    type,
    className,
    waitTime = 0,
    delay = 100,
}: HeadingsProps) {
    const [visibleChars, setVisibleChars] = useState(0);
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        const isInitialDelay = visibleChars === 0;

        if (!isInView) return; // Do nothing if not in view

        let timer: NodeJS.Timeout; // Declare one timer for both delays

        if (isInitialDelay) {
            // Run initial delay only once
            timer = setTimeout(() => {
                setVisibleChars(1); // Start the animation
            }, waitTime);
        } else if (visibleChars < title.length) {
            // Handle the per-character animation delay
            timer = setTimeout(() => {
                setVisibleChars((prev: number) => prev + 1);
            }, delay);
        }

        return () => clearTimeout(timer);
    }, [isInView, visibleChars, title.length, waitTime, delay]);

    return (
        <div ref={ref}>
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
        </div>
    );
}
