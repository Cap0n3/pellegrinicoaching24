import React from "react";
import Image from "next/image";

type Props = {
    size: number;
    logoTheme: "light" | "dark";
};

export default function SiteLogo({ size = 50, logoTheme = "light" }: Props) {
    return (
        <div>
            <Image
                src={
                    logoTheme === "light"
                        ? "/images/logos/logo_black.webp"
                        : "/images/logos/logo_white.webp"
                }
                alt="Logo"
                width={50}
                height={50}
            />
        </div>
    );
}
