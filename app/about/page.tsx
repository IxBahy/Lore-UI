import React from "react";

const About = () => {
	return (
		<>
			<main className="flex flex-col items-center">
				<section>
					<div className="mt-20 w-full max-w-[1248px] max-md:mt-10 max-md:max-w-full">
						<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
							<div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
								<img
									loading="lazy"
									srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4f771115e1d27acdeefcbb3cc1e3e6f640009c3cd68219209e4b8dcb7ff9c1c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f771115e1d27acdeefcbb3cc1e3e6f640009c3cd68219209e4b8dcb7ff9c1c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f771115e1d27acdeefcbb3cc1e3e6f640009c3cd68219209e4b8dcb7ff9c1c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f771115e1d27acdeefcbb3cc1e3e6f640009c3cd68219209e4b8dcb7ff9c1c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f771115e1d27acdeefcbb3cc1e3e6f640009c3cd68219209e4b8dcb7ff9c1c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f771115e1d27acdeefcbb3cc1e3e6f640009c3cd68219209e4b8dcb7ff9c1c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f771115e1d27acdeefcbb3cc1e3e6f640009c3cd68219209e4b8dcb7ff9c1c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f771115e1d27acdeefcbb3cc1e3e6f640009c3cd68219209e4b8dcb7ff9c1c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									className="grow w-full aspect-[1.02] max-md:mt-6 max-md:max-w-full"
								/>
							</div>
							<div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
								<div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
									<div className="text-5xl font-bold leading-[74px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
										Our Mission is to help Students
									</div>
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/402e2b6f16e7e9eb4c531428f1e2349787a0d5631ad7c7e84793a200b23778a1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
										className="max-w-full aspect-[10] stroke-[5px] stroke-orange-300 w-[220px]"
									/>
									<div className="mt-7 text-xl font-medium leading-7 text-zinc-700 text-opacity-80 max-md:max-w-full">
										<span className="text-teal-700">Lore</span>'s mission is to
										provide a dynamic platform for students to connect through
										the magic of storytelling, engage in thoughtful discussions,
										and track their literary journeys. We are committed to
										fostering an environment that combines the joy of reading
										with the power of shared knowledge, creating a space where
										students can grow intellectually and socially
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="flex gap-1.5 pr-5 mt-32 text-base font-bold justify-center items-center leading-5 text-orange-300 max-md:mt-10">
					<div className="my-auto w-12 h-0.5 bg-orange-300 rounded-none" />
					<div className="">OUR FEATURES</div>
				</div>
				<div className="mt-1.5 text-4xl font-semibold leading-10 text-center text-neutral-800 max-md:max-w-full">
					Discover The Power of Lore
				</div>
				<section>
					<div className="justify-center mt-16 w-full max-w-[1293px] max-md:mt-10 max-md:max-w-full">
						<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
							<div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
								<div className="flex flex-col self-stretch px-5 pt-1 pb-8 my-auto max-md:mt-10 max-md:max-w-full">
									<div className="text-3xl font-semibold leading-9 text-zinc-700 max-md:max-w-full">
										Chatbot Assistant
									</div>
									<div className="mt-3 text-base font-medium leading-6 text-zinc-700 text-opacity-80 max-md:max-w-full">
										<ol>
											<li>
												<span className="font-semibold text-teal-700">
													Instant Word Clarifications:{" "}
												</span>
												Encounter a word you don't understand? The Chat Bot is
												ready to provide definitions and context to enhance your
												understanding.
											</li>
										</ol>
										<ol>
											<li>
												<span className="font-semibold text-teal-700">
													Conceptual Explanations:
												</span>{" "}
												Dive deeper into complex ideas within your reading
												materials. The Chat Bot breaks down intricate concepts
												to make learning more accessible.
											</li>
										</ol>
										<ol>
											<li>
												<span className="font-semibold text-teal-700">
													Book Insights and Recommendations:
												</span>{" "}
												Looking for more information about the book you're
												reading or interested in exploring new titles? Our Chat
												Bot has you covered with insights and recommendations.
											</li>
										</ol>
										<ol>
											<li>
												<span className="font-semibold text-teal-700">
													Progress Tracking Assistance
												</span>
												: Need help navigating the progress tracking features?
												The Chat Bot provides guidance on how to effectively
												monitor your reading milestones.
											</li>
										</ol>
									</div>
								</div>
							</div>
							<div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
								<img
									loading="lazy"
									srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/27f6781190f0d63d2ad8aefd97c4b005e02d78be050b69c089bdad661d7ef5b1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/27f6781190f0d63d2ad8aefd97c4b005e02d78be050b69c089bdad661d7ef5b1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/27f6781190f0d63d2ad8aefd97c4b005e02d78be050b69c089bdad661d7ef5b1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/27f6781190f0d63d2ad8aefd97c4b005e02d78be050b69c089bdad661d7ef5b1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/27f6781190f0d63d2ad8aefd97c4b005e02d78be050b69c089bdad661d7ef5b1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/27f6781190f0d63d2ad8aefd97c4b005e02d78be050b69c089bdad661d7ef5b1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/27f6781190f0d63d2ad8aefd97c4b005e02d78be050b69c089bdad661d7ef5b1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/27f6781190f0d63d2ad8aefd97c4b005e02d78be050b69c089bdad661d7ef5b1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									className="grow w-full aspect-[0.52] max-md:mt-10"
								/>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="justify-center mt-16 w-full max-w-[1293px] max-md:mt-10 max-md:max-w-full">
						<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
							<div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
								<img
									loading="lazy"
									srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7a08d0ced664e0c2199851d61931c16089d7b14e8486eaab18e56b951851116e?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a08d0ced664e0c2199851d61931c16089d7b14e8486eaab18e56b951851116e?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a08d0ced664e0c2199851d61931c16089d7b14e8486eaab18e56b951851116e?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a08d0ced664e0c2199851d61931c16089d7b14e8486eaab18e56b951851116e?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a08d0ced664e0c2199851d61931c16089d7b14e8486eaab18e56b951851116e?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a08d0ced664e0c2199851d61931c16089d7b14e8486eaab18e56b951851116e?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a08d0ced664e0c2199851d61931c16089d7b14e8486eaab18e56b951851116e?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a08d0ced664e0c2199851d61931c16089d7b14e8486eaab18e56b951851116e?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									className="grow w-full aspect-[1.28] max-md:mt-6 max-md:max-w-full"
								/>
							</div>
							<div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
								<div className="flex flex-col grow px-5 mt-20 max-md:mt-10 max-md:max-w-full">
									<div className="text-3xl font-semibold leading-9 text-zinc-700 max-md:max-w-full">
										Progress Tracking
									</div>
									<div className="mt-3 text-base font-medium leading-6 text-teal-700 max-md:max-w-full">
										{" "}
										Here's how Progress Tracking at Lore enhances your reading
										experience:
										<br />
										<ol>
											<li>
												<span className="font-semibold text-teal-700">
													Track Your Reading Milestones
												</span>
												: With Progress Tracking, students can effortlessly
												monitor their reading milestones. From the number of
												pages read to the time invested in each session, gain
												valuable insights into your reading habits and
												accomplishments.
											</li>
										</ol>
										<ol>
											<li>
												<span className="text-teal-700">B</span>
												<span className="font-semibold text-teal-700">
													ook-Specific Insights:
												</span>{" "}
												Dig deeper into your understanding of each book with
												book-specific insights. Progress Tracking provides
												analytics on your comprehension
											</li>
										</ol>
										<ol>
											<li>
												<span className="font-semibold text-teal-700">
													Instructor Visibility:
												</span>{" "}
												Instructors play a vital role in guiding your academic
												exploration. With Progress Tracking, instructors can
												seamlessly monitor your engagement with reading
												materials, offering support and personalized guidance to
												enhance your learning experience.
											</li>
										</ol>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="justify-center px-1.5 mt-16 max-w-full w-[1293px] max-md:mt-10">
						<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
							<div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
								<div className="flex flex-col grow pr-16 mt-16 max-md:mt-10 max-md:max-w-full">
									<div className="text-4xl font-semibold leading-10 text-zinc-700 max-md:max-w-full">
										Discussion
									</div>
									<div className="mt-3 text-base leading-6 text-zinc-700 text-opacity-80 max-md:max-w-full">
										<ol>
											<li>
												<span className="font-semibold text-teal-700">
													Book Club Conversations:{" "}
												</span>
												<span className="font-medium">
													Dive into thought-provoking discussions with members
													of your book club. Share your insights, explore
													different viewpoints{" "}
												</span>
											</li>
										</ol>
										<ol>
											<li>
												<span className="font-semibold text-teal-700">
													Interactive Document Discourse:
												</span>{" "}
												<span className="font-medium">
													Beyond the pages of books, our Discussion Hub extends
													to shared documents. Engage in interactive
													conversations, ask questions, and collaborate with
													peers on academic materials, creating a collaborative
													learning environment.
												</span>
											</li>
										</ol>
										<ol>
											<li>
												<span className="font-semibold text-teal-700">
													Instructor Participation:
												</span>{" "}
												<span className="font-medium">
													Foster a connection with your instructors through
													active participation in discussions. Instructors can
													provide guidance, answer queries, and contribute to
													the academic dialogue, creating a cohesive learning
													community.
												</span>
											</li>
										</ol>
									</div>
								</div>
							</div>
							<div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
								<img
									loading="lazy"
									srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4cbde9baa519b2dcf2f7ecbf79886715c1dc25ac87fc0f2f3934a676728f0d7?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4cbde9baa519b2dcf2f7ecbf79886715c1dc25ac87fc0f2f3934a676728f0d7?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4cbde9baa519b2dcf2f7ecbf79886715c1dc25ac87fc0f2f3934a676728f0d7?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4cbde9baa519b2dcf2f7ecbf79886715c1dc25ac87fc0f2f3934a676728f0d7?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4cbde9baa519b2dcf2f7ecbf79886715c1dc25ac87fc0f2f3934a676728f0d7?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4cbde9baa519b2dcf2f7ecbf79886715c1dc25ac87fc0f2f3934a676728f0d7?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4cbde9baa519b2dcf2f7ecbf79886715c1dc25ac87fc0f2f3934a676728f0d7?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4cbde9baa519b2dcf2f7ecbf79886715c1dc25ac87fc0f2f3934a676728f0d7?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									className="grow w-full aspect-[1.28] max-md:mt-6 max-md:max-w-full"
								/>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default About;
