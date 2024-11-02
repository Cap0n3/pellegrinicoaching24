"use client";

import React, { useRef, useEffect, useState, cloneElement } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import useScroll from "@/hooks/useScroll";
import { debounce } from "@/utils/debounce";
import { cn } from "@/lib/utils";

interface SlideProps {
    children: React.ReactElement<{ className?: string }>;
    delay?: number;
    className?: string;
    props?: any;
}

/**
 * Slide component that animates the child element when it comes into view. It uses the `animate-slidein` CSS class (Tailwind CSS) to animate the child element.
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
const Slide: React.FC<SlideProps> = ({ children, delay = 0, className, ...props }) => {
    // Default delay is 300ms
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerPosition, setContainerPosition] = useState<number>(0);
    const [isInView, setIsInView] = useState(false);
    const [show, setShow] = useState(false);
    const windowSize = useWindowSize();
    const scrollPosition = useScroll();

    /**
     * Function to get the offset top of a relative positionned element.
     * Note: Not possible to use `element.offsetTop` because it returns the offset top relative to the offsetParent.
     * 
     * @param element - The element to get the offset top.
     * @returns The offset top of the element.
     */
    const getOffsetTop = (element: HTMLElement | null): number => {
        let offsetTop = 0;
        while (element) {
            offsetTop += element.offsetTop;
            element = element.offsetParent as HTMLElement | null;
        }
        return offsetTop;
    };
    

    // Function to update the container position and view status
    const updatePosition = () => {
        if (containerRef.current) {
            // const containerPosition = containerRef.current.offsetTop;
            // setContainerPosition(containerPosition);
            const containerPosition = getOffsetTop(containerRef.current);
            
            const bottomScroll = scrollPosition + windowSize.innerHeight;
            if (containerPosition <= bottomScroll) {
                setIsInView(true);
            }
        }
    };

    // Avoid calling the function too many times when scrolling or resizing
    const debounceUpdatePosition = debounce(updatePosition, 10);

    // Update position on mount and whenever window size or scroll position changes
    useEffect(() => {
        debounceUpdatePosition();
    }, [scrollPosition, windowSize, debounceUpdatePosition]);

    // Add delay to the animation (it's a hacky way to add delay it for now)
    useEffect(() => {
        if (isInView) {
            // Delay the animation
            setTimeout(() => {
                setShow(true);
            }, delay);
        }
    }, [isInView, delay]);

    // DELAY VARIABLE NOT WORKING PROPERLY ... FIX IT

    return (
        <div
            ref={containerRef}
            className={cn(show && "animate-slidein [--slidein-delay:300ms]", "opacity-0", className)}
            {...props}
        >
            {children}
        </div>
    );
};

export default Slide;
