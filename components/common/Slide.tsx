"use client";

import React from "react";
import { motion } from "framer-motion";

interface SlideProps {
    children: React.ReactElement<{ className?: string }>;
    delay?: number;
    className?: string;
    props?: any;
}

/**
 * Slide component that animates the child element when it comes into view using Framer Motion.
 *
 * @param children - The child element to animate.
 * @param delay - The delay in milliseconds before the animation starts. Default is 0.
 *
 * @component
 * @example
 * ```tsx
 * import Slide from './Slide';
 *
 * const App = () => {
 *   return (
 *     <Slide delay={500}>
 *       <div className="container">Content</div>
 *     </Slide>
 *   );
 * };
 * ```
 */
const Slide: React.FC<SlideProps> = ({
    children,
    delay = 0,
    className,
    ...props
}) => {
    const animationVariants = {
        hidden: {
            opacity: 0,
            y: -20, // Start slightly above
        },
        visible: {
            opacity: 1,
            y: 0, // End at the final position
            transition: {
                duration: 1.3, // Duration of the animation
                ease: "easeOut",
                delay: delay / 1000, // Convert milliseconds to seconds for Framer Motion
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animationVariants}
            viewport={{ once: true }}
            {...props}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default Slide;
