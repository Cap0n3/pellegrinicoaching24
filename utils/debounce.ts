import { useRef } from "react";

/**
 * Utility function to debounce a function call. This is useful when you want to delay the execution of a function until a certain amount of time has passed since the last time it was called.
 * Note : Learn more about debouncing here: https://www.developerway.com/posts/debouncing-in-react
 *
 * @param func
 * @param delay
 * @returns
 */
export const debounce = <T extends (...args: any[]) => void>(
    func: T,
    delay: number
) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    return (...args: Parameters<T>) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            func(...args);
        }, delay);
    };
};
