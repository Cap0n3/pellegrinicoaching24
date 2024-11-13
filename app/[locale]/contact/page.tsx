"use client";

import React, { use } from "react";
import ContactForm from "@/components/forms/ContactForm";
import PageHeader from "@/components/common/PageHeaders";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { House, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export default function Contact() {
    const t = useTranslations("Forms.contact");
    const { theme } = useTheme();

    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-center bg-mp-light-beige dark:bg-gray-900">
            <PageHeader title="" imageUrl={theme === "dark" ? "/images/header_contact_dark.webp" : "/images/header_contact.webp"} />
            <section className="m-10 flex max-w-[2000px] flex-col justify-center gap-8 overflow-hidden rounded-lg bg-zinc-100 dark:bg-gray-800 md:m-20 lg:flex-row lg:gap-0">
                <div className="order-first w-full p-10 lg:order-none lg:w-1/2">
                    <h2 className="mb-10 text-center text-xl font-medium leading-6 text-gray-900 dark:text-white">
                        {t("title")}
                    </h2>
                    <ContactForm />
                </div>
                <div className="flex min-h-96 w-full flex-col items-center bg-gradient-to-r from-[#FFF9EB] to-[#69777A] p-10 lg:w-1/2">
                    <h2 className="mb-10 text-center text-xl font-medium leading-6 text-gray-900 dark:text-white">
                        {t("contact_infos")}
                    </h2>
                    <Tabs
                        defaultValue="address"
                        className="w-[200px] md:w-[400px]"
                    >
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="address">Address</TabsTrigger>
                            <TabsTrigger value="phone">Phone</TabsTrigger>
                        </TabsList>
                        <TabsContent value="address">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex flex-row gap-2 mb-4 text-lg">
                                        <House /> {t("address_title")}
                                    </CardTitle>
                                    <CardDescription>
                                        {t("address_description")}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-sm">
                                    <address>
                                        {t("address")}
                                    </address>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="phone">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex flex-row gap-2 mb-4 text-lg">
                                        <Phone /> {t("business_phone_title")}
                                    </CardTitle>
                                    <CardDescription>
                                        {t("business_phone_description")}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-sm">
                                    <p>{t("business_phone")}</p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </main>
    );
}
