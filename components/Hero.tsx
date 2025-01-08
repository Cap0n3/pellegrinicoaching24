import React from "react";
import Slide from "@/components/common/Slide";
import Headings from "@/components/common/Headings";
import WaveDivider from "./common/WaveDivider";
import { Link } from "@/navigation";
import AnimatedButton from "@/components/common/AnimatedButton";
import AnimatedHeadings from "@/components/common/AnimatedHeadings";

type HeroProps = {
    title: string;
    description: string;
    cta: string;
    ariaLabel: string;
};

/**
 * Hero section component for the homepage.
 */
export default function Hero({
    title,
    description,
    cta,
    ariaLabel,
}: HeroProps) {
    return (
        <section
            aria-label={ariaLabel}
            className="relative flex h-screen min-h-[700px] w-full items-center justify-center bg-hero bg-[60%_30%] bg-no-repeat px-10 dark:bg-hero-dark md:justify-start md:bg-[50%_30%] lg:bg-[40%_30%] lg:px-20"
        >
            <div
                className="flex max-w-[500px] flex-col items-start justify-center md:w-[600px] md:max-w-none lg:w-[800px]"
                tabIndex={0}
            >
                {/* <Headings
                    title={title}
                    type="h1"
                    className="text-start uppercase"
                    slide
                /> */}
                <AnimatedHeadings
                    title={title}
                    type="h1"
                    className="text-start uppercase"
                    delay={50}
                />
                <Headings
                    title={description}
                    type="h6"
                    className="text-start font-light"
                    slide
                />
                <Slide delay={300}>
                    <Link href="/contact" prefetch={false}>
                        {/* <Button
                            aria-label={cta}
                            className="mt-6 bg-mp-dark-blue hover:bg-mp-dark-blue/90 dark:bg-gray-800 dark:text-white dark:hover:bg-mp-dark-blue/90"
                        >
                            {cta}
                        </Button> */}
                        <AnimatedButton
                            text={cta}
                            delay={1000}
                            className="mt-6"
                        />
                    </Link>
                </Slide>
            </div>
            <WaveDivider position="bottom" />
        </section>
    );
}
