const Carousel = () => {
	return (
		<>
			<div className="px-5 mt-52 w-full max-md:mt-10 max-md:max-w-full">
				<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
					<div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
						<div className="mx-auto rounded-2xl bg-neutral-800 h-[490px] w-[235px] max-md:mt-7" />
					</div>
					<div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
						<div className="flex flex-col grow px-16 py-11 w-full text-white rounded-2xl bg-neutral-800 max-md:px-5 max-md:mt-7 max-md:max-w-full">
							<div className="mt-16 text-lg leading-6 max-md:mt-10">
								HAPPIER MEMBERS
								<br />
								“Our club started off as an experiment for me to bring together
								all the incredible women in my life together under a common
								interest (books), but it's turned into much more than that! Now
								after two years, we've come together as one group of friends and
								confidants who support, share, and challenge each other on
								everything from literature to love & loss to life in general.”
							</div>
							<div className="flex gap-2 justify-center self-start mt-7 text-xl font-semibold leading-6">
								<img
									loading="lazy"
									srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/729605b82b6bea9e8606b6f49353364ad7e90b4325c65e687f5e9ef245abc92a?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/729605b82b6bea9e8606b6f49353364ad7e90b4325c65e687f5e9ef245abc92a?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/729605b82b6bea9e8606b6f49353364ad7e90b4325c65e687f5e9ef245abc92a?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/729605b82b6bea9e8606b6f49353364ad7e90b4325c65e687f5e9ef245abc92a?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/729605b82b6bea9e8606b6f49353364ad7e90b4325c65e687f5e9ef245abc92a?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/729605b82b6bea9e8606b6f49353364ad7e90b4325c65e687f5e9ef245abc92a?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/729605b82b6bea9e8606b6f49353364ad7e90b4325c65e687f5e9ef245abc92a?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/729605b82b6bea9e8606b6f49353364ad7e90b4325c65e687f5e9ef245abc92a?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									className="rounded-full aspect-square w-[70px]"
								/>
								<div className="grow my-auto">zoe </div>
							</div>
						</div>
					</div>
					<div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
						<div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
							<div className="flex flex-col pl-14 text-base max-md:pl-5 max-md:max-w-full">
								<div className="flex gap-1.5 justify-between font-bold text-orange-300 whitespace-nowrap leading-[120%] max-md:flex-wrap max-md:max-w-full">
									<div className="my-auto w-12 h-0.5 bg-orange-300 rounded-none" />
									<div className="flex-auto max-md:max-w-full">
										TESTIMONIALS
									</div>
								</div>
								<div className="mt-1.5 text-4xl font-semibold leading-10 text-neutral-800 max-md:max-w-full">
									What Students Say About Us
								</div>
								<div className="mt-11 leading-5 text-neutral-400 max-md:mt-10 max-md:max-w-full">
									As we gather here , I can't help but reflect on the incredible
									journey we've embarked on at [Lore Club].I can't talk about my
									time here without highlighting the incredible support we
									receive on our journey toward success , I am proud to share
									with you what Students Say About us. <br />
								</div>
							</div>
							<div className="flex gap-5 justify-between self-start mt-14 max-md:mt-10">
								<div className="flex flex-1 justify-center items-center px-2.5 shadow-sm aspect-square bg-slate-400 bg-opacity-10 h-[59px] rounded-[89.394px]">
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/5812e4c1e397bd4be734fa54db10983b0f2ad89ca5484efb7c6463a1cbe6668b?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
										className="w-full aspect-square"
									/>
								</div>
								<div className="flex flex-1 justify-center items-center px-2.5 shadow-sm aspect-square bg-slate-400 bg-opacity-10 h-[59px] rounded-[89.394px]">
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9f1af49ba651ccc33208e38727aa5cfce464d571a45504667764f0433e389b2?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
										className="w-full aspect-square"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Carousel;
