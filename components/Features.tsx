import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Slide from "./common/Slide";
import Link from "next/link";

interface FeatureCardProps {
    logo: React.ReactNode;
    title: string;
    description: string;
    fx_delay?: number;
}

function FeatureCard({
    logo,
    title,
    description,
    fx_delay = 0,
}: FeatureCardProps) {
    return (
        <Slide delay={fx_delay}>
            <Card
                role="link"
                tabIndex={0}
                aria-label={`${title} - ${description}`}
                className="flex min-h-[280px] w-full min-w-[250px] flex-col justify-center py-4 transition delay-150 duration-300 ease-in-out hover:shadow-lg md:hover:scale-105 lg:w-[380px]"
            >
                <CardHeader className="m-2 grow">
                    <CardTitle className="flex w-full flex-row items-center justify-start gap-4 text-lg">
                        {logo} {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="h-28 grow">
                    <CardDescription className="min-h-10">
                        {description}
                    </CardDescription>
                </CardContent>
            </Card>
        </Slide>
    );
}

type FeaturesProps = {
    featuresData: {
        logo: React.ReactNode;
        title: string;
        description: string;
        cta: string;
        link: string;
    }[];
    contrast?: boolean;
};

/**
 * Features section component for the homepage.
 */
export default function Features({ featuresData }: FeaturesProps) {
    return (
        <section className="flex w-full flex-col flex-wrap items-center justify-center gap-12 px-10 pb-10 pt-20 lg:flex-row lg:gap-16">
            {featuresData.map((feature, index) => (
                <Link
                    href={feature.link}
                    scroll={true}
                    key={index}
                    className="w-full lg:w-fit"
                >
                    <FeatureCard
                        logo={feature.logo}
                        title={feature.title}
                        description={feature.description}
                        fx_delay={index * 300}
                    />
                </Link>
            ))}
        </section>
    );
}
