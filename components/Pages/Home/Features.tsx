const Features = () => {
	return (
		<>
			<div className="self-center px-5 mt-16 w-full max-w-[1256px] max-md:mt-10 max-md:max-w-full">
				<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
					<div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
						<div className="flex flex-col items-center px-2.5 max-md:mt-10">
							<div className="flex justify-center items-center px-9 py-11 max-w-full rounded-none w-[134px] max-md:px-5">
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/284af18101ab4cffb4a1e0a0884a05afb8aadb7423d28e94b713a79928b30bba?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									className="w-full aspect-square"
								/>
							</div>
							<div className="mt-5 text-xl font-semibold leading-6 text-center whitespace-nowrap text-neutral-800">
								Join a Book Club
							</div>
							<div className="self-stretch mt-4 text-sm leading-4 text-center text-zinc-700 text-opacity-80">
								Are you passionate about the written word, eager to explore new
								literary realms, and engage in thought-provoking discussions?
								Well, look no further! We invite you to join our vibrant book
								club
							</div>
						</div>
					</div>
					<div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
						<div className="flex flex-col items-center px-2.5 max-md:mt-10">
							<div className="flex justify-center items-center px-8 py-10 max-w-full rounded-none w-[135px] max-md:px-5">
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d8aaf04f290813d422c6df6b00e2e8eed56bd0a909cb006b60a8fdb73d68067?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									className="w-full aspect-square"
								/>
							</div>
							<div className="mt-5 text-xl font-semibold leading-6 text-center whitespace-nowrap text-neutral-800">
								Interact with the chatbot
							</div>
							<div className="self-stretch mt-4 text-sm leading-4 text-center text-zinc-700 text-opacity-80">
								Ready to experience the future of interactive technology? Meet
								our chatbot – your friendly and intelligent virtual assistant
								here to make your life easier.
							</div>
						</div>
					</div>
					<div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
						<div className="flex flex-col grow items-center px-2.5 max-md:mt-10">
							<div className="flex justify-center items-center px-8 py-10 max-w-full rounded-none w-[129px] max-md:px-5">
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3ed89e556591643747b5a2bdc37eb7821cbe0947b8bb5fd605226cd9f7694b7?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									className="w-full aspect-square"
								/>
							</div>
							<div className="mt-4 text-xl font-semibold leading-6 text-center whitespace-nowrap text-neutral-800">
								Track Your Progress
							</div>
							<div className="self-stretch mt-4 text-sm leading-4 text-center text-zinc-700 text-opacity-80">
								&quot;Embarking on a journey of growth and achievement? Welcome
								to our progress tracking system – your personalized compass for
								success! With user-friendly features and insightful analytics.
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Features;
