import { useState, useEffect } from "react";

/**
 * Hook to get the current scroll position of the page.
 *
 * @returns {number} A float that represents the current scroll position.
 */
const useScroll = (): number => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const handleScroll = () => {
        const position = window.scrollY || document.documentElement.scrollTop;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollPosition;
};

export default useScroll;
