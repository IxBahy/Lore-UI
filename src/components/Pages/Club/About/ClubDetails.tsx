const ClubDetails = () => {
	const clubDetails = {} as ClubDetails; //api req here
	return (
		<div className="flex flex-col items-start self-center px-5 w-full leading-[120%] max-w-[1256px] max-md:max-w-full">
			<div className="flex gap-5 justify-between items-start self-stretch text-2xl max-md:flex-wrap max-md:max-w-full">
				<div className="flex flex-col flex-1 text-base text-neutral-500 max-md:max-w-full">
					<div className="flex gap-1.5 self-start font-bold text-orange-300 whitespace-nowrap">
						<div className="my-auto w-12 h-0.5 bg-orange-300 rounded-none" />
						<div className="grow">ABOUT OUR CLUB</div>
					</div>
					<div className="mt-3 text-4xl font-semibold leading-10 text-neutral-800 max-md:max-w-full">
						Welcome to Our club “{clubDetails.name}” - A Journey through
						History!
					</div>
					<div className="mt-20 text-2xl font-bold text-zinc-600 max-md:mt-10 max-md:max-w-full">
						Details:
					</div>
					<div className="mt-6 tracking-normal leading-7 max-md:max-w-full">
						{clubDetails.description}
					</div>
					{/* <div className="mt-7 text-2xl font-bold text-zinc-700 text-opacity-80 max-md:max-w-full">
						Our Mission:
					</div>
					<div className="flex gap-2 self-start mt-3 max-md:flex-wrap max-md:max-w-full">
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/149e01504f88fa02784802e506220954e2a65cc5e0c0a526563fdbf3cbd69924?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
							className="w-6 aspect-square"
						/>
						<div className="grow max-md:max-w-full">
							Provide a platform for students to expand their historical
							knowledge
						</div>
					</div>
					<div className="flex gap-2 justify-between mt-1 max-md:flex-wrap max-md:max-w-full">
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9397b088b4465e1d265a3c66a76d30c141ab72ed3484c58f382e12bcaa20477?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
							className="self-start w-6 aspect-square"
						/>
						<div className="flex-auto max-md:max-w-full">
							Cultivate a welcoming space where students can connect, share
							insights
						</div>
					</div>
					<div className="flex gap-2.5 self-start mt-2 whitespace-nowrap">
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/acd63e7bba6179c93cc5fc20eecd347b776399f73531545d9bdcb148a34427e7?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
							className="self-start w-6 aspect-square"
						/>
						<div className="grow">Explore a spectrum of historical topics</div>
					</div>
					<div className="flex gap-2 self-start mt-2 text-zinc-600 max-md:flex-wrap max-md:max-w-full">
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/d22428819fbc855aa71453d35526ae248841be0855059a6f51455f2320ba53f3?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
							className="w-6 aspect-square"
						/>
						<div className="flex-auto max-md:max-w-full">
							Design and code a B2B website, a B2C blog, and an ecommerce site
						</div>
					</div>
					<div className="mt-6 font-bold tracking-normal text-teal-700 leading-[160%] max-md:max-w-full">
						Read More...
					</div> */}
				</div>
				<div className="flex flex-col self-end pb-12 mt-9 text-white whitespace-nowrap basis-0 max-md:hidden">
					<div className="flex justify-center items-center px-5 bg-orange-300 aspect-[1.04] h-[49px] rounded-[140.25px]">
						1
					</div>
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/e24f272eaab71f93b22b276763829f2384752f0e3c844c87ae77714d21a3e006?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
						className="self-center aspect-[0.03] stroke-[3.117px] stroke-orange-300 w-[3px]"
					/>
					<div className="flex justify-center items-center px-4 bg-orange-300 aspect-[1.04] h-[49px] rounded-[140.25px]">
						2
					</div>
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f0311036980881c75305ef2aab4e2478114a584a3515c021c9e2ee4646383a6?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
						className="self-center aspect-[0.03] stroke-[3.117px] stroke-orange-300 w-[3px]"
					/>
					<div className="flex  justify-center items-center px-4 aspect-[1.04] bg-neutral-300 h-[49px] rounded-[140.25px]">
						3
					</div>
				</div>
				<div className="flex flex-col mt-11 font-semibold basis-0 text-neutral-800 max-md:mt-10">
					<div>Join</div>
					<div className="text-sm leading-4 text-neutral-500">
						Sign up and become a member of our history-loving community.
					</div>
					<div className="mt-16 max-md:mt-10">Read </div>
					<div className="text-sm leading-4 text-neutral-500">
						Dive into our carefully Selected historical reads ans immerse
						yourself in captivating narratives
					</div>
					<div className="mt-16 max-md:mt-10">Discuss </div>
					<div className="text-sm leading-4 text-neutral-500">
						Participate in lively discussions, share your thoughts and learn
						from your peers
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClubDetails;
