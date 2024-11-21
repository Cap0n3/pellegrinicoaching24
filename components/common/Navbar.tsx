"use client";

import React, { useEffect } from "react";
import {
    Sheet,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetContent,
    SheetDescription,
    SheetClose,
    SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import SiteLogo from "./SiteLogo";
import { ModeToggle } from "../ModeToggle";
import { LocaleSwitcher } from "../LocaleSwitcher";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Navbar() {
    // Get the scroll position of the page
    const scrollPosition = React.useRef(0);
    const [isScrolling, setIsScrolling] = React.useState(false);
    const t = useTranslations("Navigation");
    const locale = useLocale();

    // Handle the scroll event
    const handleScroll = () => {
        scrollPosition.current = window.scrollY;
        setIsScrolling(scrollPosition.current > 80);
    };

    // Add the scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 flex h-20 w-full shrink-0 items-center px-4 transition-all duration-300 ease-in-out md:px-6 ${isScrolling ? "bg-white drop-shadow-md dark:bg-slate-700" : "bg-transparent"}`}
        >
            {/* === MOBILE NAVBAR === */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className={`lg:hidden ${!isScrolling ? "border-black bg-transparent hover:border-2 hover:bg-transparent dark:border-white" : ""}`}
                    >
                        <Menu
                            className={`h-6 w-6 ${!isScrolling ? "text-black dark:text-white" : ""}`}
                        />
                        <span className="sr-only">{t("srMenu")}</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>
                            <SiteLogo
                                size={50}
                            />
                            <span className="sr-only">{t("srLogo")}</span>
                        </SheetTitle>
                        <SheetDescription />{" "}
                        {/* Must be present for the SheetClose to work */}
                    </SheetHeader>
                    <div className="grid gap-2 py-6">
                        <SheetClose asChild>
                            <Link
                                href="/"
                                className="flex w-full items-center py-2 text-lg font-semibold"
                                prefetch={false}
                            >
                                {t("home")}
                            </Link>
                        </SheetClose>
                        {/* <SheetClose asChild>
                            <Link
                                href="/about"
                                className="flex w-full items-center py-2 text-lg font-semibold"
                                prefetch={false}
                            >
                                {t("about")}
                            </Link>
                        </SheetClose> */}
                        {/* <SheetClose asChild>
                            <Link
                                href="#"
                                className="flex w-full items-center py-2 text-lg font-semibold"
                                prefetch={false}
                            >
                                {t("booking")}
                            </Link>
                        </SheetClose> */}
                        <SheetClose asChild>
                            <Link
                                href="/contact"
                                className="flex w-full items-center py-2 text-lg font-semibold"
                                prefetch={false}
                            >
                                {t("contact")}
                            </Link>
                        </SheetClose>
                    </div>
                    <SheetFooter className="flex flex-row sm:items-center sm:justify-start">
                        <ModeToggle />
                        <LocaleSwitcher />
                    </SheetFooter>
                </SheetContent>
            </Sheet>
            {/* === DESKTOP NAVBAR === */}
            <Link
                href="/"
                className="mr-6 hidden lg:flex"
                prefetch={false}
                role="logo"
            >
                {/* SITE LOGO */}
                <SiteLogo
                    size={50}
                />
                <span className="sr-only">{t("srLogo")}</span>
            </Link>
            <nav className="ml-auto hidden gap-6 lg:flex">
                <Link
                    href="/"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                >
                    {t("home")}
                </Link>
                {/* <Link
                    href="/about"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                >
                    {t("about")}
                </Link> */}
                {/* <Link
                    href="/booking"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                >
                    {t("booking")}
                </Link> */}
                <Link
                    href="/contact"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                >
                    {t("contact")}
                </Link>
                <ModeToggle />
                <LocaleSwitcher />
            </nav>
        </header>
    );
}
