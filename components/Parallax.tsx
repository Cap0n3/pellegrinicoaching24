import React from "react";
import { Button } from "@/components/ui/button";

type ParallaxProps = {
    title?: string;
    cta?: string;
};

/**
 * Parallax CTA component for the homepage.
 */
export default function Parallax({
    title = "Some random text",
    cta = "Call to action",
}: ParallaxProps) {
    return (
        <div
            className="flex h-96 w-full flex-col items-center justify-center bg-parallax bg-cover bg-fixed"
            tabIndex={0}
        >
            {/* <h2 className="text-3xl uppercase text-white">{title}</h2>
            <Button aria-label="CTA" className="mt-6">
                {cta}
            </Button> */}
        </div>
    );
}
