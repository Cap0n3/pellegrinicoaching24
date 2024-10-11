// import { useState, useEffect } from "react";

// interface WindowSize {
//     innerWidth: number;
//     innerHeight: number;
// }

// /**
//  * Custom hook to get the current window size and track changes in window dimensions.
//  *
//  * @returns {WindowSize} An object containing the inner width and height of the window.
//  */
// const useWindowSize = (): WindowSize => {
//     const [size, setSize] = useState<WindowSize>({
//         innerWidth: 0,
//         innerHeight: 0,
//     });

//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             // Set the initial size
//             setSize({
//                 innerWidth: window.innerWidth,
//                 innerHeight: window.innerHeight,
//             });

//             // Define the resize handler
//             const handleResize = () => {
//                 setSize({
//                     innerWidth: window.innerWidth,
//                     innerHeight: window.innerHeight,
//                 });
//             };

//             // Add the resize event listener
//             window.addEventListener("resize", handleResize);

//             // Cleanup on unmount
//             return () => {
//                 window.removeEventListener("resize", handleResize);
//             };
//         }
//     }, []);

//     return size;
// };

// export default useWindowSize;

// TESTING THE HOOK, ERASE ABOVE COMMENTED CODE IF TESTS PASS
// import { useState, useEffect } from "react";

// interface WindowSize {
//     innerWidth: number;
//     innerHeight: number;
// }

// /**
//  * Custom hook to get the current window size and track changes in window dimensions.
//  *
//  * @returns {WindowSize} An object containing the inner width and height of the window.
//  */
// const useWindowSize = (): WindowSize => {
//     const [size, setSize] = useState<WindowSize>({
//         innerWidth: 0,
//         innerHeight: 0,
//     });

//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             const handleResize = () => {
//                 const { innerWidth, innerHeight } = window;
//                 // Only update the state if the size has changed
//                 if (
//                     innerWidth !== size.innerWidth ||
//                     innerHeight !== size.innerHeight
//                 ) {
//                     setSize({ innerWidth, innerHeight });
//                 }
//             };

//             // Set the initial size
//             handleResize();

//             // Add the resize event listener
//             window.addEventListener("resize", handleResize);

//             // Cleanup on unmount
//             return () => {
//                 window.removeEventListener("resize", handleResize);
//             };
//         }
//     }, [size]);

//     return size;
// };

// export default useWindowSize;

// TESTING THE HOOK, ERASE ABOVE COMMENTED CODE IF TESTS PASS
import { useState, useEffect, useCallback, useRef } from "react";

interface WindowSize {
    innerWidth: number;
    innerHeight: number;
}

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
