"use client";

import { useEffect, useRef } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";
import RatingStars from "./RatingStars";
import { RangedNumber } from "@/components/RatingStars";
import WaveDivider from "./common/WaveDivider";


export default function Testimonials({
    contrast = false,
}: {
    contrast?: boolean;
}) {
    const t = useTranslations("HomePage.testimonials");
    const keys = [
        "testimonial-one",
        "testimonial-two",
        "testimonial-three",
        "testimonial-four",
        "testimonial-five",
        "testimonial-six",
    ] as const;

    const plugin = useRef(
        Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    return (
        <section
            className={`relative flex w-full justify-center px-16 py-40 md:px-20 ${contrast ? "bg-mp-light-beige dark:from-gray-800 dark:via-slate-700 dark:to-gray-900" : "bg-white dark:bg-gray-800"}`}
        >
            <WaveDivider position="top" />
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[plugin.current]}
                className="w-full max-w-[1500px]"
            >
                <CarouselContent>
                    {keys.map((key, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="p-1">
                                <Card
                                    className="min-w-56 hover:shadow-lg"
                                    tabIndex={0}
                                >
                                    <CardHeader className="px-6 py-10">
                                        <CardTitle className="flex flex-row items-center gap-4 text-sm">
                                            <Avatar className="h-20 w-20">
                                                <AvatarImage
                                                    src={t(`${key}.image`)}
                                                    alt={t(`${key}.author`)}
                                                />
                                                <AvatarFallback>
                                                    CN
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col items-start justify-center">
                                                <span>
                                                    {t(`${key}.author`)}
                                                </span>
                                                <span className="text-xs text-neutral-400">
                                                    {t(`${key}.role`)}
                                                </span>
                                            </div>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex h-44 flex-col items-start justify-start gap-8 px-6">
                                        <RatingStars
                                            rating={
                                                parseInt(
                                                    t(`${key}.rating`)
                                                ) as RangedNumber
                                            }
                                        />
                                        <CardDescription className="max-h-24 overflow-auto">
                                            &quot;{t(`${key}.quote`)}&quot;
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <WaveDivider position="bottom" />
        </section>
    );
}
