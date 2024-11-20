import VisualTextSection from "@/components/common/VisualTextSection";
import Features from "@/components/Features";
import { BadgePlus, Eye, Umbrella, Brush, Earth } from "lucide-react";
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
        <main className="flex min-h-screen w-full flex-col items-center justify-center dark:bg-gray-800">
            <ScrollResetter />
            <Hero
                title={t("hero.title")}
                description={t("hero.description")}
                cta={t("hero.cta")}
                ariaLabel={t("hero.aria-label")}
            />
            <DefaultFeatures
                featuresData={[
                    {
                        logo: <Eye size={30} />,
                        title: t("features.feature-one.title"),
                        description: t("features.feature-one.description"),
                        cta: t("features.cta"),
                        link: "#feature1",
                    },
                    {
                        logo: <Umbrella size={30} />,
                        title: t("features.feature-two.title"),
                        description: t("features.feature-two.description"),
                        cta: t("features.cta"),
                        link: "#feature2",
                    },
                    {
                        logo: <Brush size={30} />,
                        title: t("features.feature-three.title"),
                        description: t("features.feature-three.description"),
                        cta: t("features.cta"),
                        link: "#feature3",
                    },
                    {
                        logo: <Earth size={30} />,
                        title: t("features.feature-four.title"),
                        description: t("features.feature-four.description"),
                        cta: t("features.cta"),
                        link: "#feature4",
                    },
                ]}
                contrast
            />
            <VisualTextSection
                id="feature1"
                img="/images/showcase_one_optimized.webp"
                title={t("showcase-one.title")}
                paragraph={t("showcase-one.description")}
                wave
            />
            <VisualTextSection
                id="feature2"
                img="/images/showcase_two_optimized.webp"
                title={t("showcase-two.title")}
                paragraph={t("showcase-two.description")}
                inverted
                contrast
            />
            <VisualTextSection
                id="feature3"
                img="/images/showcase_three_optimized.webp"
                title={t("showcase-three.title")}
                paragraph={t("showcase-three.description")}
                wave
            />
            <VisualTextSection
                id="feature4"
                img="/images/showcase_four_optimized.webp"
                title={t("showcase-four.title")}
                paragraph={t("showcase-four.description")}
                inverted
                contrast
            />
            <ParallaxSection img="/images/parallax.webp" />
            <AboutSection
                title={t("about-section.title")}
                paragraphs={[
                    t("about-section.description-p1"),
                    t("about-section.description-p2"),
                    t("about-section.description-p3"),
                    t("about-section.description-p4"),
                ]}
                img="/images/michael-pellegrini.webp"
                contrast
            />
            <SocialProof
                title={t("social-proof.title")}
                description={t("social-proof.description")}
                brandLogos={[
                    {
                        src: "/images/logos/Wakan_Logo.webp",
                        alt: "Wakan Logo",
                        width: 300,
                        height: 337,
                        className: "w-20",
                    },
                    {
                        src: "/images/logos/CCE_Logo.webp",
                        alt: "CCE",
                        width: 359,
                        height: 349,
                        className: "w-20",
                    },
                    {
                        src: "/images/logos/Eduqua_Logo.webp",
                        alt: "Eduqua",
                        width: 908,
                        height: 388,
                        className: "w-56",
                    },
                    {
                        src: "/images/logos/LesInvisibles_Logo.webp",
                        alt: "Les Invisibles",
                        width: 393,
                        height: 335,
                        className: "w-24",
                    },
                ]}
                wave
            />
            <CTA
                id="cta"
                title={t("cta-section.title")}
                paragraph={t("cta-section.description")}
                cta={t("cta-section.cta")}
                contrast
            />
            <Testimonials
                testimonialData={[
                    {
                        avatar: t("testimonials.testimonial-one.image"),
                        author: t("testimonials.testimonial-one.author"),
                        role: t("testimonials.testimonial-one.role"),
                        rating: t("testimonials.testimonial-one.rating"),
                        quote: t("testimonials.testimonial-one.quote"),
                    },
                    {
                        avatar: t("testimonials.testimonial-two.image"),
                        author: t("testimonials.testimonial-two.author"),
                        role: t("testimonials.testimonial-two.role"),
                        rating: t("testimonials.testimonial-two.rating"),
                        quote: t("testimonials.testimonial-two.quote"),
                    },
                    {
                        avatar: t("testimonials.testimonial-three.image"),
                        author: t("testimonials.testimonial-three.author"),
                        role: t("testimonials.testimonial-three.role"),
                        rating: t("testimonials.testimonial-three.rating"),
                        quote: t("testimonials.testimonial-three.quote"),
                    },
                    {
                        avatar: t("testimonials.testimonial-four.image"),
                        author: t("testimonials.testimonial-four.author"),
                        role: t("testimonials.testimonial-four.role"),
                        rating: t("testimonials.testimonial-four.rating"),
                        quote: t("testimonials.testimonial-four.quote"),
                    },
                    {
                        avatar: t("testimonials.testimonial-five.image"),
                        author: t("testimonials.testimonial-five.author"),
                        role: t("testimonials.testimonial-five.role"),
                        rating: t("testimonials.testimonial-five.rating"),
                        quote: t("testimonials.testimonial-five.quote"),
                    },
                    {
                        avatar: t("testimonials.testimonial-six.image"),
                        author: t("testimonials.testimonial-six.author"),
                        role: t("testimonials.testimonial-six.role"),
                        rating: t("testimonials.testimonial-six.rating"),
                        quote: t("testimonials.testimonial-six.quote"),
                    },
                ]}
            />
            <FAQSection
                id="faq"
                title={"FAQ"}
                imageLink="/images/question.webp"
                contrast
            />
        </main>
    );
}
