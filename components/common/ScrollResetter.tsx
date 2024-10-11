"use client";
import { useEffect } from "react";

export default function ScrollResetter() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.history.scrollRestoration = "manual";
        }
    }, []);

    return null;
}
