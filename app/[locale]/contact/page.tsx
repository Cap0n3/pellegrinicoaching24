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

export default function Contact() {
    const t = useTranslations("Forms.contact");

    return (
        <main className="w-full">
            <PageHeader title="" imageUrl="/images/contact_header.webp" />
            <section className="m-10 flex max-w-[2000px] flex-col justify-center gap-8 overflow-hidden rounded-lg bg-zinc-100 dark:bg-gray-900 md:m-20 lg:flex-row lg:gap-0">
                <div className="order-first w-full p-10 lg:order-none lg:w-1/2">
                    <h2 className="mb-10 text-center text-xl font-medium leading-6 text-gray-900">
                        {t("title")}
                    </h2>
                    <ContactForm />
                </div>
                <div className="flex min-h-96 w-full flex-col items-center bg-gradient-to-r from-[#FFF9EB] to-[#69777A] p-10 lg:w-1/2">
                    <h2 className="mb-10 text-center text-xl font-medium leading-6 text-gray-900">
                        {t("contact_infos")}
                    </h2>
                    <Tabs
                        defaultValue="address"
                        className="w-3/4 max-w-[600px]"
                    >
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="address">Address</TabsTrigger>
                            <TabsTrigger value="phone">Phone</TabsTrigger>
                        </TabsList>
                        <TabsContent value="address">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex flex-row gap-2 mb-4">
                                        <House /> {t("address_title")}
                                    </CardTitle>
                                    <CardDescription>
                                        {t("address_description")}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <address>
                                        {t("address")}
                                    </address>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="phone">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex flex-row gap-2 mb-4">
                                        <Phone /> {t("business_phone_title")}
                                    </CardTitle>
                                    <CardDescription>
                                        {t("business_phone_description")}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
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
