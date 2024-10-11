import React from 'react';
import { useTranslations } from "next-intl";
import Slide from "@/components/common/Slide";
import { BadgePlus, Eye, Umbrella, Brush, Earth } from "lucide-react";
import Link from "next/link";


type FeatLayoutProps = {
	logo: React.ReactNode;
	title: string,
	description: string,
	link: string,
	fx_delay?: number
}

function FeatLayout({ 
	logo,
	title,
	description,
	link,
	fx_delay = 0 
}: FeatLayoutProps) {
	return (
		<Slide delay={fx_delay}>
			<div aria-label={`${title} - ${description}`} className="flex flex-col md:justify-between min-h-44">
				<div>
					<div className="flex flex-row justify-start items-center gap-4 mb-4">
						{logo}
						<h3 className="text-xl font-bold dark:text-white">{title}</h3>
					</div>
					<p className="text-gray-500 dark:text-gray-400 mb-4">{description}</p>
				</div>
				<Link href={link} scroll={true} className="w-full lg:w-fit">En savoir plus</Link>
			</div>
		</Slide>
	)
}


type DefaultFeaturesProps = {}

export default function DefaultFeatures({ }: DefaultFeaturesProps) {
	const t = useTranslations("HomePage");

	return (
		<section className="w-full flex items-center justify-center px-10 py-10 lg:px-20 lg:py-20">
			<div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
				<FeatLayout 
					logo={<Eye size={30} />}
					title={t("features.feature-one.title")}
					description={t("features.feature-one.description")}
					link="#feature1"
				/>
				<FeatLayout 
					logo={<Umbrella size={30} />}
					title={t("features.feature-two.title")}
					description={t("features.feature-two.description")}
					link="#feature2"
					fx_delay={300} 
				/>
				<FeatLayout 
					logo={<Brush size={30} />}
					title={t("features.feature-three.title")}
					description={t("features.feature-three.description")}
					link="#feature3"
					fx_delay={600} 
				/>
				<FeatLayout 
					logo={<Earth size={30} />}
					title={t("features.feature-four.title")}
					description={t("features.feature-four.description")}
					link="#feature4"
					fx_delay={900} 
				/>
			</div>
		</section>
	)
}