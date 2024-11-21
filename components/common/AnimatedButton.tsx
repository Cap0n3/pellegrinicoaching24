"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = {
    text: string
    delay?: number
    className?: string
}

export default function AnimatedButton({
    text,
    delay = 0,
    className,
}: AnimatedButtonProps) {
    
    const animationVariants = {
        hidden: {
            opacity: 0,
            x: -40, // Start slightly above
        },
        visible: {
            opacity: 1,
            x: 0, // End at the final position
            transition: {
                duration: 1.2, // Duration of the animation
                ease: "easeOut",
                delay: 1000 / 1000, // Convert milliseconds to seconds for Framer Motion
            },
        },
    };
    
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animationVariants}
            viewport={{ once: true }}
        >
            <Button
                aria-label={text}
                className={cn("bg-mp-dark-blue hover:bg-mp-dark-blue/90 dark:bg-gray-800 dark:text-white dark:hover:bg-mp-dark-blue/90", className)}
            >
                {text}
            </Button>
        </motion.div>
    )
}