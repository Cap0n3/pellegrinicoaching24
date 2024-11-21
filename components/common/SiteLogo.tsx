"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

type Props = {
    size: number;
};

export default function SiteLogo({ size = 50 }: Props) {
    const [logoImage, setLogoImage] = useState<string>("/images/logos/logo_black.webp");
    const { theme } = useTheme();

    useEffect(() => {
        if (!theme) return;
        if (theme === "light") {
            setLogoImage("/images/logos/logo_black.webp");
        } else {
            setLogoImage("/images/logos/logo_white.webp");
        }
    }, [theme]);

    return (
        <div>
            <Image
                src={logoImage}
                alt="Logo"
                width={size}
                height={size}
                priority
            />
        </div>
    );
}
