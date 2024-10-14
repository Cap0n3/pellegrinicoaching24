import React from "react";
import Image from "next/image";

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
            className="relative h-64 w-full overflow-hidden text-white"
        >
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            )}

            <div className="absolute inset-0" />
            <div className="relative z-10 flex h-full items-center justify-center">
                <h1 className="px-4 text-center text-4xl font-bold">{title}</h1>
            </div>
        </section>
    );
}
