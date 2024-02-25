import Image from "next/image";

const Presentation = () => {
	return (
		<>
			<div className="mt-20 w-full max-w-[1248px] max-md:mt-10 max-md:max-w-full">
				<div className="flex justify-between gap-5 max-md:flex-col max-md:gap-0">
					<ImageSection />
					<MissionStatement />
				</div>
			</div>
		</>
	);
};

export default Presentation;

const ImageSection = () => {
	return (
		<figure className="flex justify-center items-center flex-col w-6/12 max-md:ml-0 max-md:w-full">
			<img
				src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4f771115e1d27acdeefcbb3cc1e3e6f640009c3cd68219209e4b8dcb7ff9c1c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
				alt="Decorative"
			/>
		</figure>
	);
};

const MissionStatement = () => {
	return (
		<section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
			<div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
				<h1 className="text-5xl font-bold leading-[74px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
					Our Mission is to help Students
				</h1>
				<div className="relative max-w-full aspect-[10] stroke-[5px] stroke-orange-300 w-[220px]">
					<img
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/402e2b6f16e7e9eb4c531428f1e2349787a0d5631ad7c7e84793a200b23778a1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
						alt="A picture showing the concept of guidance and support for students."
					/>
				</div>
				<p className="mt-7 text-xl font-medium leading-7 text-zinc-700 text-opacity-80 max-md:max-w-full">
					<span className="text-teal-700">Lore</span>'s mission is to provide a
					dynamic platform for students to connect through the magic of
					storytelling, engage in thoughtful discussions, and track their
					literary journeys. We are committed to fostering an environment that
					combines the joy of reading with the power of shared knowledge,
					creating a space where students can grow intellectually and socially.
				</p>
			</div>
		</section>
	);
};
