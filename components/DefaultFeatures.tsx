import React from 'react';
import { useTranslations } from "next-intl";
import Slide from "@/components/common/Slide";
import { BadgePlus, Eye, Umbrella, Brush, Earth } from "lucide-react";
import Link from "next/link";
import Headings from "@/components/common/Headings";


type FeatLayoutProps = {
	logo: React.ReactNode;
	title: string,
	description: string,
	cta: string,
	link: string,
	fx_delay?: number
}

function FeatLayout({ 
	logo,
	title,
	description,
	cta,
	link,
	fx_delay = 0 
}: FeatLayoutProps) {
	return (
		<Slide delay={fx_delay}>
			<div aria-label={`${title} - ${description}`} className="flex flex-col md:justify-between min-h-44">
				<div>
					<div className="flex flex-row justify-start items-center gap-4 mb-4">
						{logo}
						<Headings title={title} type="h5" className="text-start mb-0 font-bold" />
					</div>
					<p className="text-gray-500 dark:text-gray-400 mb-4 font-light">{description}</p>
				</div>
				<Link href={link} scroll={true} className="w-full lg:w-fit">{cta}</Link>
			</div>
		</Slide>
	)
}


type DefaultFeaturesProps = {
	contrast?: boolean;
}

export default function DefaultFeatures({ 
	contrast = false
}: DefaultFeaturesProps) {
	const t = useTranslations("HomePage");

	return (
		<section className={`w-full px-10 py-10 lg:px-20 ${contrast ? "bg-[#FFF9EB] dark:bg-gray-900" : "bg-white dark:bg-gray-800"}`}>
			<div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
				<FeatLayout 
					logo={<Eye size={30} />}
					title={t("features.feature-one.title")}
					description={t("features.feature-one.description")}
					cta={t("features.cta")}
					link="#feature1"
				/>
				<FeatLayout 
					logo={<Umbrella size={30} />}
					title={t("features.feature-two.title")}
					description={t("features.feature-two.description")}
					cta={t("features.cta")}
					link="#feature2"
					fx_delay={300} 
				/>
				<FeatLayout 
					logo={<Brush size={30} />}
					title={t("features.feature-three.title")}
					description={t("features.feature-three.description")}
					cta={t("features.cta")}
					link="#feature3"
					fx_delay={600} 
				/>
				<FeatLayout 
					logo={<Earth size={30} />}
					title={t("features.feature-four.title")}
					description={t("features.feature-four.description")}
					cta={t("features.cta")}
					link="#feature4"
					fx_delay={900} 
				/>
			</div>
		</section>
	)
}