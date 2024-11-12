import React from "react";
import Image from "next/image";
import WaveDivider from "@/components/common/WaveDivider";

interface ImageHeaderProps {
    /** The title to display on the header */
    title: string;
    /** The URL of the background image */
    imageUrl?: string;
}

export default function PageHeader({ title, imageUrl }: ImageHeaderProps) {
    return (
        <section
            aria-label={title}
            className="relative h-96 w-full overflow-hidden text-white"
        >
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt={title}
                    style={{
                        objectFit:"cover",
                        objectPosition:"center",
                    }}
                    fill
                />
            )}

            <div className="absolute inset-0" />
            <div className="relative z-10 flex h-full items-center justify-center">
                <h1 className="px-4 text-center text-4xl font-bold">{title}</h1>
            </div>
            <WaveDivider position="bottom" />
        </section>
    );
}
