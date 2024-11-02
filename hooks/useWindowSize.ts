import { useState, useEffect, useCallback, useRef } from "react";

interface WindowSize {
    innerWidth: number;
    innerHeight: number;
}

/**
 * Hook to get the window size.
 * 
 * @returns The window size object with innerWidth and innerHeight.
 */
const useWindowSize = (): WindowSize => {
    const [size, setSize] = useState<WindowSize>(() => ({
        innerWidth: typeof window !== "undefined" ? window.innerWidth : 0,
        innerHeight: typeof window !== "undefined" ? window.innerHeight : 0,
    }));

    const handleResize = useCallback(() => {
        setSize({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
        });
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    return size;
};

export default useWindowSize;
