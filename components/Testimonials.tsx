"use client";

import { useRef } from "react";
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
import RatingStars from "./RatingStars";
import { RangedNumber } from "@/components/RatingStars";
import WaveDivider from "./common/WaveDivider";
import { cn } from "@/lib/utils";

type TestmonialCardProps = {
    avatar?: string;
    author: string;
    role: string;
    rating: string;
    quote: string;
};

function TestimonialCard({
    avatar,
    author,
    role,
    rating,
    quote,
}: TestmonialCardProps) {
    return (
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
                <Card className="min-w-56 hover:shadow-lg" tabIndex={0}>
                    <CardHeader className="px-6 py-10">
                        <CardTitle className="flex flex-row items-center gap-4 text-sm">
                            {avatar && (
                                <Avatar className="h-20 w-20">
                                    <AvatarImage src={avatar} alt={author} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            )}
                            <div className="flex flex-col items-start justify-center">
                                <span>{author}</span>
                                <span className="text-xs text-neutral-400">
                                    {role}
                                </span>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex h-44 flex-col items-start justify-start gap-8 px-6">
                        <RatingStars
                            rating={parseInt(rating) as RangedNumber}
                        />
                        <CardDescription className="max-h-24 overflow-auto">
                            &quot;{quote}&quot;
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
        </CarouselItem>
    );
}

/* ============== */
/* Main component */
/* ============== */

type TestimonialsProps = {
    testimonialData: {
        avatar?: string;
        author: string;
        role: string;
        rating: string;
        quote: string;
    }[];
    contrast?: boolean;
};

/**
 * Testimonials Section
 */
export default function Testimonials({
    testimonialData,
    contrast = false,
}: TestimonialsProps) {
    const plugin = useRef(
        Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    return (
        <section
            className={cn(
                "relative flex w-full justify-center px-16 py-40 md:px-20",
                contrast
                    ? "bg-mp-light-beige dark:from-gray-800 dark:via-slate-700 dark:to-gray-900"
                    : "bg-white dark:bg-gray-800"
            )}
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
                    {testimonialData.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            avatar={testimonial.avatar}
                            author={testimonial.author}
                            role={testimonial.role}
                            rating={testimonial.rating}
                            quote={testimonial.quote}
                        />
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <WaveDivider position="bottom" />
        </section>
    );
}
