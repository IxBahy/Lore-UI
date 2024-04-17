import { FirstFeature } from "@/components/Pages/About/FirstFeature";
import Presentation from "@/components/Pages/About/Presentation";
import { SecondFeature } from "@/components/Pages/About/SecondFeature";
import ThirdFeature from "@/components/Pages/About/ThirdFeature";
import React from "react";

export const AboutPage = () => {
	return (
		<main>
			<Presentation />
			<div className="flex w-full justify-center  items-center px-16 py-px mt-32 max-w-full text-base font-bold leading-5 text-orange-300  max-md:mt-10">
				<div className="flex gap-1.5  ">
					<div className="my-auto w-12 h-0.5 bg-orange-300 rounded-none" />
					<div className="flex-auto">OUR FEATURES</div>
				</div>
			</div>
			<div className="mt-1 text-4xl font-semibold leading-10 text-center text-neutral-800 max-md:max-w-full">
				Discover The Power of Lore
			</div>
			<FirstFeature />
			<SecondFeature />
			<ThirdFeature />
			<div className="flex w-full justify-center  items-center px-16 py-px mt-32 max-w-full text-base font-bold leading-5 text-orange-300  max-md:mt-10">
				<div className="flex gap-1.5  ">
					<div className="my-auto w-12 h-0.5 bg-orange-300 rounded-none" />
					<div className="flex-auto">FAQS</div>
				</div>
			</div>
			<div className="mt-1 text-4xl font-semibold leading-10 text-center text-neutral-800 max-md:max-w-full">
				Your Common Questions, Our Expert Answers
			</div>
			{/* to-do */}
		</main>
	);
};
