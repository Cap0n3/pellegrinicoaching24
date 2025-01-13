import React from "react";
import { cn } from "@/lib/utils";

type Props = {
    position: "top" | "bottom";
};

export default function WaveDivider({ position }: Props) {
    const bottomWave = (
        <svg width="1440px" height="70px" version="1.1">
            <g transform="matrix(1,0,0,0.362399,0,-45.9677)">
                <path
                    className="fill-current text-[#FFF9EB] dark:text-gray-900"
                    d="M0,288L48,272C96,256 192,224 288,197.3C384,171 480,149 576,165.3C672,181 768,235 864,250.7C960,267 1056,245 1152,250.7C1248,256 1344,288 1392,304L1440,320L0,320L0,288Z"
                />
            </g>
        </svg>
    );
    const topWave = (
        <svg
            width="1440px"
            height="70px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g transform="matrix(1,0,0,-0.362399,0,115.968)">
                <path
                    className="fill-current text-[#FFF9EB] dark:text-gray-900"
                    d="M0,288L48,272C96,256 192,224 288,197.3C384,171 480,149 576,165.3C672,181 768,235 864,250.7C960,267 1056,245 1152,250.7C1248,256 1344,288 1392,304L1440,320L0,320L0,288Z"
                />
            </g>
        </svg>
    );

    return (
        <div
            // Place at -1px to hide a small gap between the waves on some browser/mobile simulations
            className={cn(
                "absolute left-0 w-full overflow-hidden",
                position === "bottom" ? "bottom-[-1px]" : "top-[-1px]"
            )}
        >
            {position === "bottom" ? bottomWave : topWave}
        </div>
    );
}
