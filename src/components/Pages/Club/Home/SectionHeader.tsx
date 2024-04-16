import React from "react";

// Define reusable component for sections with common structure
const SectionTitle = ({ title, subtitle }) => (
	<div className="flex gap-4 justify-center items-center px-5 my-auto">
		<h2 className="grow text-xl font-semibold text-teal-700">{title}</h2>
		<p className="grow my-auto text-base font-medium text-neutral-500">
			{subtitle}
		</p>
	</div>
);

// Define reusable component for button-like elements
const ViewAllButton = ({ children }) => (
	<button className="flex gap-2 justify-between px-6 py-3 text-xl font-semibold text-teal-700 rounded-md bg-teal-700 bg-opacity-10 max-md:px-5">
		<span className="grow">{children}</span>
		<img
			loading="lazy"
			src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f015f0c73f5a17767348617a43ec40d41ef64f08718086e7f70236b2499f304?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
			className="w-6 aspect-square"
			alt="Right arrow icon"
		/>
	</button>
);

export const SectionHeader = () => {
	return (
		<section className="flex gap-5 justify-between mt-16 w-full mx-auto whitespace-nowrap leading-[120%] max-w-[90%] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
			<SectionTitle title="Archaeology" subtitle="(200 Club)" />
			<ViewAllButton>View All</ViewAllButton>
		</section>
	);
};
