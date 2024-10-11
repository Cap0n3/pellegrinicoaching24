import VisualTextSection from "@/components/common/VisualTextSection";
import Features from "@/components/Features";
import DefaultFeatures from "@/components/DefaultFeatures";
import Hero from "@/components/Hero";
import ScrollResetter from "@/components/common/ScrollResetter";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Parallax from "@/components/Parallax";
import Pricings from "@/components/Pricings";
import FAQSection from "@/components/FAQ";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("HomePage");

    return (
        <main className="flex min-h-screen flex-col items-center justify-center dark:bg-gray-800">
            <ScrollResetter />
            <Hero />
            <DefaultFeatures />
            <VisualTextSection
                id="feature1"
                imageLink="/images/showcase_one_optimized.webp"
                title={t("showcase-one.title")}
                paragraph={t("showcase-one.description")}
            />
            <VisualTextSection
                id="feature2"
                imageLink="/images/showcase_two_optimized.webp"
                title={t("showcase-two.title")}
                paragraph={t("showcase-two.description")}
                inverted
            />
            <VisualTextSection
                id="feature3"
                imageLink="/images/showcase_three_optimized.webp"
                title={t("showcase-three.title")}
                paragraph={t("showcase-three.description")}
            />
            <VisualTextSection
                id="feature4"
                imageLink="/images/showcase_four_optimized.webp"
                title={t("showcase-four.title")}
                paragraph={t("showcase-four.description")}
                inverted
            />
            <Testimonials contrast />
            <Parallax title="Prenez rendez-vous dès maintenant" cta="YES" />
            <CTA />
            <FAQSection
                id="faq"
                title={"FAQ"}
                imageLink="/images/question.webp"
                contrast
            />
        </main>
    );
}
