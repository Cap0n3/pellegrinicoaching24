"use client";

import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/navigation";
import { useTransition } from "react";
import { Languages } from "lucide-react";

/**
 * Locale switcher component (fr/en).
 */
export function LocaleSwitcher() {
    const [isPending, startTransition] = useTransition();
    const [selectedValue, setSelectedValue] = React.useState("fr");
    const router = useRouter();
    const pathname = usePathname();
    const activeLocale = useLocale();

    const handleChange = (value: "fr" | "en") => {
        const nextLocale = value;
        setSelectedValue(value);
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <Select
            onValueChange={handleChange}
            value={activeLocale}
            disabled={isPending}
            aria-label="Language"
        >
            <SelectTrigger className="w-14 border-0 bg-transparent focus:ring-0 focus:ring-offset-0">
                {/* <SelectValue placeholder={activeLocale} /> */}
                <Languages />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Langue</SelectLabel>
                    <SelectItem value="fr">fr</SelectItem>
                    <SelectItem value="en">en</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
