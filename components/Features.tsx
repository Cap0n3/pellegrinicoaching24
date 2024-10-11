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
import { useTranslations } from "next-intl";
import { ChartColumn, SmilePlus, Cpu } from "lucide-react";
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
                className="flex w-full min-w-[250px] flex-col justify-center py-4 transition delay-150 duration-300 ease-in-out hover:shadow-lg md:hover:scale-105 lg:w-[380px]"
            >
                <CardHeader className="m-2 grow">
                    <CardTitle className="flex w-full flex-row items-center justify-start gap-4">
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

/**
 * Features section component for the homepage.
 */
export default function Features() {
    const t = useTranslations("HomePage");

    return (
        <section className="flex w-full flex-col flex-wrap items-center justify-center gap-12 px-10 pb-10 pt-20 lg:flex-row lg:gap-16">
            <Link href="#feature1" scroll={true} className="w-full lg:w-fit">
                <FeatureCard
                    logo={<ChartColumn />}
                    title={t("features.feature-one.title")}
                    description={t("features.feature-one.description")}
                />
            </Link>
            <Link href="#feature2" scroll={true} className="w-full lg:w-fit">
                <FeatureCard
                    logo={<SmilePlus />}
                    title={t("features.feature-two.title")}
                    description={t("features.feature-two.description")}
                    fx_delay={300}
                />
            </Link>
            <Link href="#feature3" scroll={true} className="w-full lg:w-fit">
                <FeatureCard
                    logo={<Cpu />}
                    title={t("features.feature-three.title")}
                    description={t("features.feature-three.description")}
                    fx_delay={600}
                />
            </Link>
        </section>
    );
}
