import React from "react";
import { Button } from "@/components/ui/button";
import Slide from "./common/Slide";

type Props = {
    contrast?: boolean;
};

export default function CTA({ contrast = false }: Props) {
    return (
        <section
            className={`w-full px-10 py-10 md:px-20 ${contrast ? "bg-[#fcfcfc] dark:bg-gray-900" : "bg-white dark:bg-gray-800"}`}
        >
            <div className="mx-auto max-w-screen-xl items-center gap-8 md:grid md:grid-cols-2 xl:gap-16">
                <Slide>
                    <div className="mt-4 md:mt-0" tabIndex={0}>
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            Let's create more tools and ideas that brings us
                            together.
                        </h2>
                        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                            Flowbite helps you connect with friends and
                            communities of people who share your interests.
                            Connecting with your friends and family as well as
                            discovering new ones is easy with features like
                            Groups.
                        </p>
                        <Button>Get Started</Button>
                    </div>
                </Slide>
                <Slide>
                    <div className="border-2" tabIndex={0}>
                        <img
                            className="w-full dark:hidden"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                            alt="dashboard image"
                        />
                        <img
                            className="hidden w-full dark:block"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                            alt="dashboard image"
                        />
                    </div>
                </Slide>
            </div>
        </section>
    );
}
