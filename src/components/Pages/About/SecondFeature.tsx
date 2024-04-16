import * as React from "react";

export function SecondFeature() {
	const progressDetails = [
		{
			title: "Track Your Reading Milestones",
			description:
				"With Progress Tracking, students can effortlessly monitor their reading milestones. From the number of pages read to the time invested in each session, gain valuable insights into your reading habits and accomplishments.",
		},
		{
			title: "Book-Specific Insights",
			description:
				"Dig deeper into your understanding of each book with book-specific insights. Progress Tracking provides analytics on your comprehension.",
		},
		{
			title: "Instructor Visibility",
			description:
				"Instructors play a vital role in guiding your academic exploration. With Progress Tracking, instructors can seamlessly monitor your engagement with reading materials, offering support and personalized guidance to enhance your learning experience.",
		},
	];

	const ProgressDetail = ({ title, description }) => (
		<li className="mt-3">
			<span className="font-semibold text-teal-700">{title}: </span>
			{description}
		</li>
	);

	return (
		<section className="justify-center mx-auto mt-16 w-full max-w-[1293px] max-md:mt-10 max-md:max-w-full">
			<div className="flex gap-5 max-md:flex-col max-md:gap-0">
				<div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a08d0ced664e0c2199851d61931c16089d7b14e8486eaab18e56b951851116e?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
						alt="Progress Tracking visual representation"
						className="grow w-full aspect-[1.28] max-md:mt-6 max-md:max-w-full"
					/>
				</div>
				<div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
					<div className="flex flex-col grow px-5 mt-20 max-md:mt-10 max-md:max-w-full">
						<h2 className="text-3xl font-semibold leading-9 text-zinc-700">
							Progress Tracking
						</h2>
						<div className="mt-3 text-base font-medium leading-6 text-teal-700">
							<p>
								Here's how Progress Tracking at Lore enhances your reading
								experience:
							</p>
							<ol className="mt-3">
								{progressDetails.map((detail, index) => (
									<ProgressDetail
										key={index}
										title={detail.title}
										description={detail.description}
									/>
								))}
							</ol>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
