"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollTop = () => {
    const [showScrollBtn, setShowScrollBtn] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setShowScrollBtn(scrollPosition > 600);
    };

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <button
            aria-label="scroll back to top"
            onClick={handleClick}
            className={`fixed bottom-4 left-4 rounded-full bg-mp-dark-blue p-3 text-white shadow-lg transition hover:bg-mp-dark-blue/90 ${
                showScrollBtn ? "flex" : "hidden"
            }`}
        >
            <ArrowUp size={24} />
        </button>
    );
};

export default ScrollTop;
