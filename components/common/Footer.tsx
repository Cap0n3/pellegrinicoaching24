import React from "react";
import { Link } from "@/navigation";
import SiteLogo from "@/components/common/SiteLogo";
import {
    FaXTwitter,
    FaInstagram,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa6";
import { useTranslations } from "next-intl";
import WaveDivider from "./WaveDivider";

export default function Footer() {
    const t = useTranslations("Navigation");

    return (
        <footer className="relative w-full pb-10 pt-28 dark:bg-slate-700 sm:px-6 lg:px-8 lg:pt-40">
            <WaveDivider position="top" />
            <div className="flex flex-col items-center justify-center">
                <Link href="/">
                    <SiteLogo
                        size={50}
                    />
                </Link>

                <ul className="mb-10 flex flex-col items-center justify-center gap-7 border-b-[.5px] border-gray-200 py-16 text-lg transition-all duration-500 md:flex-row md:gap-12">
                    <li>
                        <Link
                            href="/"
                            className="text-md hover:text-gray-300"
                            prefetch={false}
                        >
                            {t("home")}
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            href="/about"
                            className="text-md hover:text-gray-300"
                            prefetch={false}
                        >
                            {t("about")}
                        </Link>
                    </li> */}
                    {/* <li>
                        <Link
                            href="/booking"
                            className="text-md hover:text-gray-300"
                            prefetch={false}
                        >
                            {t("booking")}
                        </Link>
                    </li> */}
                    <li>
                        <Link
                            href="/contact"
                            className="text-md hover:text-gray-300"
                            prefetch={false}
                        >
                            {t("contact")}
                        </Link>
                    </li>
                </ul>
                <div className="mb-14 flex items-center justify-center space-x-10">
                    <a
                        href="https://x.com/"
                        className="block transition-all duration-500 hover:text-indigo-600"
                        aria-label="X-Twitter"
                        tabIndex={0}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaXTwitter className="h-7 w-7" />
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        className="block transition-all duration-500 hover:text-indigo-600"
                        aria-label="Instagram"
                        tabIndex={0}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="h-7 w-7" />
                    </a>
                    <a
                        href="https://www.facebook.com/"
                        className="block transition-all duration-500 hover:text-indigo-600"
                        aria-label="Facebook"
                        tabIndex={0}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF className="h-7 w-7" />
                    </a>
                    <a
                        href="https://www.youtube.com/"
                        className="block transition-all duration-500 hover:text-indigo-600"
                        aria-label="Youtube"
                        tabIndex={0}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube className="h-7 w-7" />
                    </a>
                </div>
                <span
                    className="block px-8 text-center text-sm"
                    tabIndex={0}
                    aria-label="© Copyright 2024 CompanyName | Designed & Coded with love by Alexandre Guillin | All Rights Reserved"
                >
                    © Copyright 2024 MP Coaching | Designed & Coded with love
                    by{" "}
                    <a
                        href="https://www.malt.ch/profile/alexandreguillin"
                        tabIndex={0}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Alexandre Guillin
                    </a>{" "}
                    | All Rights Reserved
                </span>
            </div>
        </footer>
    );
}
