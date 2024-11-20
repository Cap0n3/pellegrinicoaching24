import React from "react";
import PageHeader from "@/components/common/PageHeaders";
import Calendly from "@/components/Calendly";
import TidyCal from "@/components/TidyCal";
import { useTranslations } from "next-intl";

export default function Booking() {
    const t = useTranslations("Booking");
    const getProcess = (process: string) => {
        // Separate string at semicolon
        const steps = process.split(";");
        return (
            <ol className="list-decimal px-10 text-gray-600">
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        );
    };

    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center dark:bg-gray-800">
            <PageHeader title={t("title")} />
            <section className="flex flex-col items-center justify-center bg-white px-10 py-10 lg:py-0 lg:pb-10 lg:pt-20">
                <p className="mb-5 text-start text-gray-600 md:text-center">
                    {t("description")}
                </p>
                {getProcess(t("process"))}
            </section>
            <section className="flex h-full flex-col items-center justify-center">
                {/* <Calendly url="https://calendly.com/dev-aguillin/cours-d-essai" /> */}
                <TidyCal url="devaguillin/cours-dessai" />
            </section>
        </main>
    );
}
