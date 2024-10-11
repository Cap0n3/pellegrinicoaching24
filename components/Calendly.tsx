"use client";
import React, { useEffect, useRef } from "react";
import { set } from "react-hook-form";

type CalendlyProps = {
    url: string;
};

export default function Calendly({ url }: CalendlyProps) {
    const calendlyRef = useRef<HTMLDivElement>(null);
    const [scriptAdded, setScriptAdded] = React.useState(false);

    useEffect(() => {
        if (scriptAdded) return;

        const head = document.querySelector("head") as HTMLHeadElement;
        const script = document.createElement("script") as HTMLScriptElement;
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head.appendChild(script);

        setScriptAdded(true);

        return () => {
            head.removeChild(script);
            setScriptAdded(false);
        };
    }, []);

    return (
        <div className="h-full w-full">
            <div
                ref={calendlyRef}
                className="calendly-inline-widget m-w-[320px] h-[1000px] w-full overflow-hidden p-0 lg:h-[900px]"
                data-url={url}
            ></div>
        </div>
    );
}
