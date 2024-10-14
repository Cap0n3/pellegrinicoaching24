// NOT WORKING ... TO FIX

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <section className="w-full border-2 bg-white px-10 py-10 dark:bg-gray-800 md:px-20">
            <div className="flex flex-col items-center justify-center gap-8">
                <Image
                    src="/images/404.webp"
                    alt="404"
                    width={1100}
                    height={731}
                    priority={true}
                    className="w-[700px]"
                />
                <p className="mt-20 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
                    Hum hum, something&apos;s missing...
                </p>
                <p className="text-lg font-light text-gray-500 dark:text-gray-400">
                    Sorry, we can&apos;t find that page. You&apos;ll find lots to explore
                    on the home page.
                </p>
                <Link href="/">
                    <Button>Back to Homepage</Button>
                </Link>
            </div>
        </section>
    );
}
