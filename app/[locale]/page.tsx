import VisualTextSection from "@/components/common/VisualTextSection";
import Features from "@/components/Features";
import DefaultFeatures from "@/components/DefaultFeatures";
import Hero from "@/components/Hero";
import ScrollResetter from "@/components/common/ScrollResetter";
import Testimonials from "@/components/Testimonials";
import ParallaxSection from "@/components/Parallax";
import Pricings from "@/components/Pricings";
import FAQSection from "@/components/FAQ";
import { useTranslations } from "next-intl";
import About from "./about/page";
import AboutSection from "@/components/AboutSection";
import SocialProof from "@/components/SocialProof";
import CTA from "@/components/CTA";

export default function Home() {
    const t = useTranslations("HomePage");

    return (
        <main className="flex min-h-screen flex-col items-center justify-center dark:bg-gray-800">
            <ScrollResetter />
            <Hero />
            <DefaultFeatures contrast />
            <VisualTextSection
                id="feature1"
                imageLink="/images/showcase_one_optimized.webp"
                title={t("showcase-one.title")}
                paragraph={t("showcase-one.description")}
                wave
            />
            <VisualTextSection
                id="feature2"
                imageLink="/images/showcase_two_optimized.webp"
                title={t("showcase-two.title")}
                paragraph={t("showcase-two.description")}
                inverted
                contrast
            />
            <VisualTextSection
                id="feature3"
                imageLink="/images/showcase_three_optimized.webp"
                title={t("showcase-three.title")}
                paragraph={t("showcase-three.description")}
                wave
            />
            <VisualTextSection
                id="feature4"
                imageLink="/images/showcase_four_optimized.webp"
                title={t("showcase-four.title")}
                paragraph={t("showcase-four.description")}
                inverted
                contrast
            />
            <ParallaxSection img="/images/parallax.webp" />
            <AboutSection contrast />
            <SocialProof wave />
            <CTA
                id="cta"
                title="Take Action"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan dolor."
                contrast
            />
            <Testimonials />
            <FAQSection
                id="faq"
                title={"FAQ"}
                imageLink="/images/question.webp"
                contrast
            />
        </main>
    );
}
