const ClubVote = () => {
	return (
		<>
			<div className="flex gap-1.5 self-start mt-44 ml-2.5 text-lg font-semibold leading-5 text-orange-300 whitespace-nowrap max-md:mt-10">
				<div className="my-auto w-12 h-0.5 bg-orange-300 rounded-none" />
				<div className="grow">Students Voting</div>
			</div>
			<div className="self-start mt-1 ml-2.5 text-4xl font-semibold leading-10 text-neutral-800 max-md:max-w-full">
				Choose the next Book
			</div>
			<div className="flex justify-center items-center px-16 py-10 mt-16 w-full bg-white shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
				<div className="flex flex-col w-full max-w-[1136px] max-md:max-w-full">
					<div className="flex flex-col px-20 mt-4 max-md:px-5 max-md:max-w-full">
						<div className="flex gap-5 justify-between text-zinc-700 text-opacity-80 max-md:flex-wrap max-md:max-w-full">
							<img
								loading="lazy"
								srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5e21173c9a339552fc538218c874d07a49877ee4122de08005dc906dd2a53747?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e21173c9a339552fc538218c874d07a49877ee4122de08005dc906dd2a53747?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e21173c9a339552fc538218c874d07a49877ee4122de08005dc906dd2a53747?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e21173c9a339552fc538218c874d07a49877ee4122de08005dc906dd2a53747?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e21173c9a339552fc538218c874d07a49877ee4122de08005dc906dd2a53747?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e21173c9a339552fc538218c874d07a49877ee4122de08005dc906dd2a53747?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e21173c9a339552fc538218c874d07a49877ee4122de08005dc906dd2a53747?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e21173c9a339552fc538218c874d07a49877ee4122de08005dc906dd2a53747?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								className="aspect-[0.65] w-[68px]"
							/>
							<div className="flex flex-col flex-1 justify-center my-auto max-md:max-w-full">
								<div className="flex gap-5 justify-between pr-12 w-full rounded-xl border-2 border-teal-700 border-solid bg-teal-700 bg-opacity-10 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
									<div className="flex gap-3 justify-between px-10 py-5 text-base font-semibold leading-5 rounded-xl bg-teal-700 bg-opacity-10 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
										<img
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/22c5da73cd188d0c9aa1c582cdfa22c52be55398afe3301071c0d2d8dfcfdef5?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
											className="aspect-square w-[23px]"
										/>
										<div className="flex-auto">Death across oceans</div>
									</div>
									<div className="flex gap-5 justify-between my-auto">
										<div className="my-auto text-xs italic font-light tracking-wide text-right">
											4124 votes
										</div>
										<div className="text-lg tracking-wide">50%</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col px-20 mt-4 max-md:px-5 max-md:max-w-full">
						<div className="flex gap-5 justify-between text-zinc-700 text-opacity-80 max-md:flex-wrap max-md:max-w-full">
							<img
								loading="lazy"
								srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6c8ad55b3854623d65c90820e3dfc7b270c11aa5d3c1deacdf357b8ed3f9f7e1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c8ad55b3854623d65c90820e3dfc7b270c11aa5d3c1deacdf357b8ed3f9f7e1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c8ad55b3854623d65c90820e3dfc7b270c11aa5d3c1deacdf357b8ed3f9f7e1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c8ad55b3854623d65c90820e3dfc7b270c11aa5d3c1deacdf357b8ed3f9f7e1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c8ad55b3854623d65c90820e3dfc7b270c11aa5d3c1deacdf357b8ed3f9f7e1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c8ad55b3854623d65c90820e3dfc7b270c11aa5d3c1deacdf357b8ed3f9f7e1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c8ad55b3854623d65c90820e3dfc7b270c11aa5d3c1deacdf357b8ed3f9f7e1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c8ad55b3854623d65c90820e3dfc7b270c11aa5d3c1deacdf357b8ed3f9f7e1?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								className="aspect-[0.64] w-[70px]"
							/>
							<div className="flex flex-col flex-1 justify-center my-auto max-md:max-w-full">
								<div className="flex gap-5 justify-between pr-12 w-full rounded-xl border-2 border-teal-700 border-solid bg-teal-700 bg-opacity-10 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
									<div className="flex gap-3 justify-between px-10 py-5 text-base font-semibold leading-5 rounded-xl bg-teal-700 bg-opacity-10 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
										<img
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/22c5da73cd188d0c9aa1c582cdfa22c52be55398afe3301071c0d2d8dfcfdef5?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
											className="aspect-square w-[23px]"
										/>
										<div className="flex-auto">True Psychology</div>
									</div>
									<div className="flex gap-5 justify-between my-auto">
										<div className="my-auto text-xs italic font-light tracking-wide text-right">
											4124 votes
										</div>
										<div className="text-lg tracking-wide">50%</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col px-20 mt-4 max-md:px-5 max-md:max-w-full">
						<div className="flex gap-5 justify-between text-zinc-700 text-opacity-80 max-md:flex-wrap max-md:max-w-full">
							<img
								loading="lazy"
								srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/272a96447b1ea0aca22cb8d0f8b9ec54f829df45846c449c98f23414c11ddcc8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/272a96447b1ea0aca22cb8d0f8b9ec54f829df45846c449c98f23414c11ddcc8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/272a96447b1ea0aca22cb8d0f8b9ec54f829df45846c449c98f23414c11ddcc8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/272a96447b1ea0aca22cb8d0f8b9ec54f829df45846c449c98f23414c11ddcc8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/272a96447b1ea0aca22cb8d0f8b9ec54f829df45846c449c98f23414c11ddcc8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/272a96447b1ea0aca22cb8d0f8b9ec54f829df45846c449c98f23414c11ddcc8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/272a96447b1ea0aca22cb8d0f8b9ec54f829df45846c449c98f23414c11ddcc8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/272a96447b1ea0aca22cb8d0f8b9ec54f829df45846c449c98f23414c11ddcc8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								className="aspect-[0.65] w-[68px]"
							/>
							<div className="flex flex-col flex-1 justify-center my-auto max-md:max-w-full">
								<div className="flex gap-5 justify-between pr-12 w-full rounded-xl border-2 border-teal-700 border-solid bg-teal-700 bg-opacity-10 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
									<div className="flex gap-3 justify-between px-10 py-5 text-base font-semibold leading-5 rounded-xl bg-teal-700 bg-opacity-10 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
										<img
											loading="lazy"
											src="https://cdn.builder.io/api/v1/image/assets/TEMP/22c5da73cd188d0c9aa1c582cdfa22c52be55398afe3301071c0d2d8dfcfdef5?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
											className="aspect-square w-[23px]"
										/>
										<div className="flex-auto"> The Psychology of Belief</div>
									</div>
									<div className="flex gap-5 justify-between my-auto">
										<div className="my-auto text-xs italic font-light tracking-wide text-right">
											4124 votes
										</div>
										<div className="text-lg tracking-wide">50%</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex gap-5 justify-between self-end px-0.5 mt-4 max-w-full w-[893px] max-md:flex-wrap">
							<div className="my-auto text-base italic font-light tracking-wide text-right text-zinc-700 text-opacity-80">
								4124 votes
							</div>
							<div className="justify-center items-center px-16 py-4 text-xl font-semibold leading-6 text-white whitespace-nowrap bg-teal-700 rounded-md max-md:px-5">
								View Votes
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ClubVote;

/**
 * 		<div className="flex flex-col px-16 pb-6 mt-4 max-md:px-5 max-md:max-w-full">
						<div className="flex gap-5 justify-between mx-4 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
							<img
								loading="lazy"
								srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/272a96447b1ea0aca22cb8d0f8b9ec54f829df45846c449c98f23414c11ddcc8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/272a96447b1ea0aca22cb8d0f8b9ec54f829df45846c449c98f23414c11ddcc8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/272a96447b1ea0aca22cb8d0f8b9ec54f829df45846c449c98f23414c11ddcc8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/272a96447b1ea0aca22cb8d0f8b9ec54f829df45846c449c98f23414c11ddcc8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/272a96447b1ea0aca22cb8d0f8b9ec54f829df45846c449c98f23414c11ddcc8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/272a96447b1ea0aca22cb8d0f8b9ec54f829df45846c449c98f23414c11ddcc8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/272a96447b1ea0aca22cb8d0f8b9ec54f829df45846c449c98f23414c11ddcc8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/272a96447b1ea0aca22cb8d0f8b9ec54f829df45846c449c98f23414c11ddcc8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								className="aspect-[0.65] w-[68px]"
							/>
							<div className="flex flex-col flex-1 justify-center my-auto max-md:max-w-full">
								<div className="flex gap-5 justify-between pr-12 w-full rounded-xl border-2 border-teal-700 border-solid bg-teal-700 bg-opacity-10 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
									<div className="flex gap-0 justify-between">
										<div className="flex flex-1 justify-center items-center px-10 py-5 rounded-xl bg-teal-700 bg-opacity-10 max-md:px-5">
											<img
												loading="lazy"
												src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0b2174768a2afa4876810c2d1ec8025ab312e37a1fb1dd9a79b7843f73ef5ba?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
												className="aspect-square w-[22px]"
											/>
										</div>
										<div className="flex-auto self-start mt-6 text-base font-semibold leading-5 text-zinc-700 text-opacity-80">
											The Psychology of Belief
										</div>
									</div>
									<div className="flex gap-5 justify-between my-auto text-zinc-700 text-opacity-80">
										<div className="text-xs italic font-light tracking-wide text-right">
											4124 votes
										</div>
										<div className="text-lg tracking-wide">30%</div>
									</div>
								</div>
							</div>
						</div>
					</div>
 */
