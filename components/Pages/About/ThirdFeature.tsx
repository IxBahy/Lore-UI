import React from "react";

const DiscussionItem = ({ title, description }) => (
	<li>
		<strong className="font-semibold text-teal-700">{title}</strong>
		<span className="font-medium"> {description}</span>
	</li>
);

const ThirdFeature = () => {
	const discussions = [
		{
			title: "Book Club Conversations: ",
			description:
				"Dive into thought-provoking discussions with members of your book club. Share your insights, explore different viewpoints.",
		},
		{
			title: "Interactive Document Discourse: ",
			description:
				"Beyond the pages of books, our Discussion Hub extends to shared documents. Engage in interactive conversations, ask questions, and collaborate with peers on academic materials, creating a collaborative learning environment.",
		},
		{
			title: "Instructor Participation: ",
			description:
				"Foster a connection with your instructors through active participation in discussions. Instructors can provide guidance, answer queries, and contribute to the academic dialogue, creating a cohesive learning community.",
		},
	];

	return (
		<section className="justify-center mx-auto mt-16 w-full max-w-[1293px] max-md:mt-10 max-md:max-w-full">
			<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
				<div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
					<div className="flex flex-col grow pr-16 mt-16 max-md:mt-10 max-md:max-w-full">
						<h2 className="text-4xl font-semibold leading-10 text-zinc-700 max-md:max-w-full">
							Discussion
						</h2>
						<ol className="mt-3 text-base leading-6 text-zinc-700 text-opacity-80 max-md:max-w-full">
							{discussions.map((discussion, index) => (
								<DiscussionItem
									key={index}
									title={discussion.title}
									description={discussion.description}
								/>
							))}
						</ol>
					</div>
				</div>
				<aside className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4cbde9baa519b2dcf2f7ecbf79886715c1dc25ac87fc0f2f3934a676728f0d7?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
						alt="Discussion Hub Interactive Space"
						className="grow w-full aspect-[1.28] max-md:mt-6 max-md:max-w-full"
					/>
				</aside>
			</div>
		</section>
	);
};

export default ThirdFeature;
