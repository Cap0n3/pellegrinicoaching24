"use client";

import React, { useState, useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import useWindowSize from "@/hooks/useWindowSize";

type ParallaxSectionProps = {
    img: string;
};

/**
 * Parallax banner component.
 */
export default function ParallaxSection({
    img,
}: ParallaxSectionProps) {
    const [isMobile, setIsMobile] = useState(false);
    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize.innerWidth < 640) {
            setIsMobile(true);
        }
    }, [windowSize]);

    const MobileParallax = () => {
        return (
            <ParallaxBanner
                layers={[
                    {
                        image: img,
                        speed: -25,
                    },
                ]}
                className="aspect-[2/1] h-[500px]"
            />
        );
    }

    const DesktopParallax = () => {
        return (
            <div
                className="flex h-[500px] w-full bg-parallax bg-cover bg-fixed"
                tabIndex={0}
            ></div>
        );
    }

    return (
        <>
            {isMobile ? <MobileParallax /> : <DesktopParallax />}
        </>
    );
}
