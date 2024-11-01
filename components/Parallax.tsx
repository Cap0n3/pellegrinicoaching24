"use client";

import React from "react";
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

type ParallaxSectionProps = {
    img: string;
};

/**
 * Parallax banner component.
 */
export default function ParallaxSection({
    img,
}: ParallaxSectionProps) {
    return (
        <ParallaxProvider>
                <ParallaxBanner
                    layers={[
                        {
                            image: img,
                            speed: -15,
                        },
                    ]}
                    className="aspect-[2/1] h-[500px]"
                />
        </ParallaxProvider>
    );
}
