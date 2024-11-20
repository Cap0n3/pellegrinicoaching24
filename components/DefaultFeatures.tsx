import React from "react";
import Slide from "@/components/common/Slide";
import Link from "next/link";
import Headings from "@/components/common/Headings";

type FeatLayoutProps = {
    logo: React.ReactNode;
    title: string;
    description: string;
    cta: string;
    link: string;
    fx_delay?: number;
};

function FeatLayout({
    logo,
    title,
    description,
    cta,
    link,
    fx_delay = 0,
}: FeatLayoutProps) {
    return (
        <Slide delay={fx_delay}>
            <div
                aria-label={`${title} - ${description}`}
                className="flex min-h-44 flex-col md:justify-between"
            >
                <div>
                    <div className="mb-4 flex flex-row items-center justify-start gap-4">
                        {logo}
                        <Headings
                            title={title}
                            type="h5"
                            className="mb-0 text-start font-bold"
                        />
                    </div>
                    <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                        {description}
                    </p>
                </div>
                <Link
                    href={link}
                    scroll={true}
                    className="w-full font-semibold text-sky-700 lg:w-fit"
                >
                    {cta}
                </Link>
            </div>
        </Slide>
    );
}

type DefaultFeaturesProps = {
    // array of objects
    featuresData: {
        logo: React.ReactNode;
        title: string;
        description: string;
        cta: string;
        link: string;
    }[];
    contrast?: boolean;
};

export default function DefaultFeatures({
    featuresData,
    contrast = false,
}: DefaultFeaturesProps) {
    return (
        <section
            className={`w-full px-10 py-10 lg:px-20 ${contrast ? "bg-mp-light-beige dark:bg-gray-900" : "bg-white dark:bg-gray-800"}`}
        >
            <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                {featuresData.map((feature, index) => (
                    <FeatLayout
                        key={index}
                        logo={feature.logo}
                        title={feature.title}
                        description={feature.description}
                        cta={feature.cta}
                        link={feature.link}
                        fx_delay={index * 300}
                    />
                ))}
            </div>
        </section>
    );
}
