import * as React from "react";

const FeatureItem = ({ featureTitle, description }) => (
	<li>
		<span className="font-semibold text-teal-700">{featureTitle}: </span>
		{description}
	</li>
);

const featureData = [
	{
		featureTitle: "Instant Word Clarifications",
		description:
			"Encounter a word you don't understand? The Chat Bot is ready to provide definitions and context to enhance your understanding.",
	},
	{
		featureTitle: "Conceptual Explanations",
		description:
			"Dive deeper into complex ideas within your reading materials. The Chat Bot breaks down intricate concepts to make learning more accessible.",
	},
	{
		featureTitle: "Book Insights and Recommendations",
		description:
			"Looking for more information about the book you're reading or interested in exploring new titles? Our Chat Bot has you covered with insights and recommendations.",
	},
	{
		featureTitle: "Progress Tracking Assistance",
		description:
			"Need help navigating the progress tracking features? The Chat Bot provides guidance on how to effectively monitor your reading milestones.",
	},
];

export function FirstFeature() {
	return (
		<main className="justify-center mx-auto mt-16 w-full max-w-[1293px] max-md:mt-10 max-md:max-w-full">
			<section className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
				<article className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
					<section className="flex flex-col self-stretch px-5 pt-1 pb-8 my-auto max-md:mt-10 max-md:max-w-full">
						<h1 className="text-3xl font-semibold leading-9 text-zinc-700 max-md:max-w-full">
							AI Assistant
						</h1>
						<ol className="mt-3 text-base font-medium leading-6 text-zinc-700 text-opacity-80 max-md:max-w-full">
							{featureData.map((item, index) => (
								<FeatureItem
									key={index}
									featureTitle={item.featureTitle}
									description={item.description}
								/>
							))}
						</ol>
					</section>
				</article>
				<aside className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/27f6781190f0d63d2ad8aefd97c4b005e02d78be050b69c089bdad661d7ef5b1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
						alt="Decorative AI Assistant visualization"
						className="grow w-full aspect-[0.52] max-md:mt-10"
					/>
				</aside>
			</section>
		</main>
	);
}
