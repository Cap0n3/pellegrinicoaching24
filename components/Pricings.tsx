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

interface Props {
    logo: React.ReactNode;
    title: string;
    price: string;
    features: string[];
    description: string;
    buttonText: string;
    buttonLink: string;
    featured?: boolean;
}

const PricingCard = ({
    logo,
    title,
    price,
    features,
    buttonText,
    buttonLink,
    featured = false,
}: Props) => {
    return (
        <Card
            tabIndex={0}
            aria-label={title}
            className={`flex w-[100%] min-w-56 flex-col justify-center p-6 shadow-xl md:w-[380px] lg:w-[300px] xl:w-[400px] ${featured ? "border-gray-300" : "border-0"}`}
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
                <Separator />
            </CardHeader>
            <CardContent className="pt-2">
                <CardDescription className="flex h-[250px] flex-col gap-6 overflow-auto">
                    {features &&
                        features.map((feature, index) => (
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

export default function Pricings({ contrast = false }: { contrast?: boolean }) {
    const t = useTranslations("HomePage.pricings");
    const keys = ["pricing-one", "pricing-two", "pricing-three"] as const;
    const [feats, setFeats] = React.useState<{ [key: string]: string[] }>({});

    /**
     * Used to transform the string of features into an array
     */
    useEffect(() => {
        // Function to tranform string separated by commas into an array
        const transformStringToArray = (string: string) => {
            return string.split(",").map((item) => item.trim());
        };

        // See : https://www.freecodecamp.org/news/how-to-use-javascript-array-reduce-method/
        const featsObj = keys.reduce(
            (acc, key) => {
                acc[key] = transformStringToArray(t(`${key}.features`));
                return acc;
            },
            {} as { [key: string]: string[] }
        );

        setFeats(featsObj);
    }, [t]);

    /**
     * A switch statement to select the logo based on the key (add whatever you want here)
     * @param key  The key to select the logo
     * @returns
     */
    const LogoSelector = (key: string) => {
        switch (key) {
            case "thumbs-up":
                return <ThumbsUp />;
            case "luggage":
                return <Luggage />;
            case "server":
                return <Server />;
            default:
                return <ThumbsUp />;
        }
    };

    return (
        <section
            className={`flex w-full flex-col items-center justify-center gap-10 px-10 py-10 lg:flex-row ${contrast ? "bg-mp-light-beige dark:bg-gray-900" : "bg-white dark:bg-gray-800"}`}
        >
            {keys.map((key, index) => (
                <Slide
                    delay={index * 300}
                    key={index}
                    className="w-full md:w-auto"
                >
                    <PricingCard
                        logo={LogoSelector(t(`${key}.logo`))}
                        title={t(`${key}.title`)}
                        price={t(`${key}.price`)}
                        features={feats[key]}
                        description={t(`${key}.description`)}
                        buttonText={t(`${key}.cta`)}
                        buttonLink={t(`${key}.link`)}
                        featured={t(`${key}.featured`) === "true"}
                    />
                </Slide>
            ))}
        </section>
    );
}
