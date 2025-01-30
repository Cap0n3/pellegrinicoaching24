"use client";

import React, { useEffect } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
    CardFooter,
} from "./ui/card";
import { Separator } from "@/components/ui/separator";
import { CircleCheckBig, ThumbsUp, Luggage, Server } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Slide from "./common/Slide";
import { cn } from "@/lib/utils";

interface PricingsProps {
    pricingData: {
        logo: React.ReactNode;
        title: string;
        price: string;
        description?: string;
        features: string;
        buttonText: string;
        buttonLink: string;
        featured?: boolean;
    }[];
    contrast?: boolean;
}

type PricingCardProps = {
    logo: React.ReactNode;
    title: string;
    price: string;
    description?: string;
    featureList: string[];
    buttonText: string;
    buttonLink: string;
    featured?: boolean;
};

const PricingCard = ({
    logo,
    title,
    price,
    description,
    featureList,
    buttonText,
    buttonLink,
    featured = false,
}: PricingCardProps) => {
    return (
        <Card
            tabIndex={0}
            aria-label={title}
            className={cn(
                "flex w-[100%] min-w-56 flex-col justify-center p-6 shadow-xl md:w-[380px] lg:w-[300px] xl:w-[400px]",
                featured ? "border-gray-300" : "border-1"
            )}
        >
            <CardHeader className="flex flex-col items-center gap-6">
                <div className="flex aspect-square h-20 w-20 flex-row items-center justify-center rounded-full bg-neutral-100 dark:bg-gray-800">
                    {logo}
                </div>
                <CardTitle>{title}</CardTitle>
                <div>
                    <span className="text-2xl font-bold">{price}</span>
                    <span className="text-sm text-neutral-400">/month</span>
                </div>
                {description && (
                    <span className="text-center text-sm text-neutral-400">
                        {description}
                    </span>
                )}
                <Separator />
            </CardHeader>
            <CardContent className="pt-2">
                <CardDescription className="flex h-[250px] flex-col gap-6 overflow-auto">
                    {featureList &&
                        featureList.map((feature, index) => (
                            <span
                                key={index}
                                className="flex flex-row items-center gap-2"
                            >
                                <span className="text-neutral-400">
                                    <CircleCheckBig />
                                </span>
                                <span>{feature}</span>
                            </span>
                        ))}
                </CardDescription>
            </CardContent>
            <CardFooter className="mt-6 flex justify-center">
                <Link href={buttonLink}>
                    <Button className="transition delay-150 duration-300 ease-in-out hover:scale-105">
                        {buttonText}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default function Pricings({
    pricingData,
    contrast = false,
}: PricingsProps) {
    const t = useTranslations("HomePage.pricings");
    const keys = ["pricing-one", "pricing-two", "pricing-three"] as const;
    const [feats, setFeats] = React.useState<{ [key: string]: string[] }>({});

    const transformStringToArray = (string: string) => {
        return string.split(",").map((item) => item.trim());
    };

    return (
        <section
            className={cn(
                "flex w-full flex-col items-center justify-center gap-10 px-10 py-10 lg:flex-row",
                contrast
                    ? "bg-mp-light-beige dark:bg-gray-900"
                    : "bg-white dark:bg-gray-800"
            )}
        >
            {pricingData.map((pricing, index) => (
                <Slide
                    delay={index * 300}
                    key={index}
                    className="w-full md:w-auto"
                >
                    <PricingCard
                        logo={pricing.logo}
                        title={pricing.title}
                        price={pricing.price}
                        featureList={transformStringToArray(pricing.features)}
                        description={pricing.description}
                        buttonText={pricing.buttonText}
                        buttonLink={pricing.buttonLink}
                        featured={pricing.featured}
                    />
                </Slide>
            ))}
        </section>
    );
}
