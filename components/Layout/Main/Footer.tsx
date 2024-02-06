const Footer = () => {
	return (
		<div className="flex justify-center items-center px-16 py-12 mt-48 w-full bg-stone-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
			<div className="flex flex-col mt-2 mb-9 w-full max-w-[1294px] max-md:max-w-full">
				<div className="max-md:max-w-full">
					<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
						<div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
							<div className="flex flex-col text-base leading-5 text-white max-md:mt-10">
								<div className="flex gap-3.5 justify-center self-start px-1 py-px ml-7 text-3xl font-bold text-teal-700 whitespace-nowrap bg-stone-900 max-md:ml-2.5">
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c224c3a8385a5ee51c335f4ebe82ceea3bd902b66d862cc40cbc7171d7f47ae?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
										className="my-auto aspect-[0.83] w-[33px]"
									/>
									<div className="flex-auto">Lore</div>
								</div>
								<div className="mt-10 leading-5">
									Funding freemium long tail hypotheses
									<br />
									first mover advantage assets ownership
								</div>
								<div className="flex gap-3.5 justify-between mt-11 whitespace-nowrap max-md:mt-10">
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/b640b9325b2409cacacebb5e333ed5fa0b5e55a57c56c66f3cda846b21fc60e4?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
										className="aspect-[1.04] w-[25px]"
									/>
									<div className="flex-auto">agensi@mail.com</div>
								</div>
								<div className="flex gap-3.5 justify-between mt-6">
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b76cbebf4f6da4f88ee9ff4e84e08793e9080a35b6df57cebea7c36c8987693?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
										className="aspect-[1.04] w-[25px]"
									/>
									<div className="flex-auto">+ 12 3456 7890</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
							<div className="flex grow gap-5 justify-between items-start pr-20 mt-10 text-base leading-5 text-white max-md:flex-wrap max-md:max-w-full">
								<div className="flex flex-col flex-1 self-stretch">
									<div className="text-xl font-semibold">Services</div>
									<div className="mt-8">Web Hosting</div>
									<div className="mt-6">Domains</div>
									<div className="mt-6 whitespace-nowrap">Premium Hosting</div>
									<div className="mt-6 whitespace-nowrap">Private Server</div>
									<div className="mt-6 whitespace-nowrap">E-mail Hosting</div>
								</div>
								<div className="flex flex-col flex-1">
									<div className="text-xl font-semibold">Support</div>
									<div className="mt-6">Pricing Plan </div>
									<div className="mt-6">Documentation</div>
									<div className="mt-6">Guide</div>
									<div className="mt-6">Tutorial</div>
								</div>
								<div className="flex flex-col flex-1">
									<div className="text-xl font-semibold">Company</div>
									<div className="mt-6">About</div>
									<div className="mt-6">Blog</div>
									<div className="mt-6">Join Us</div>
									<div className="mt-6">Partners</div>
								</div>
								<div className="flex flex-col whitespace-nowrap basis-0">
									<div className="text-xl font-semibold">Legal</div>
									<div className="mt-6">Claim</div>
									<div className="mt-6">Privacy</div>
									<div className="mt-6">Terms</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f62056c56c5a65b62c8815844cabb7c4ae17cd80ca8154c98ed0791b8d4340?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
					className="mt-20 w-full stroke-[1px] stroke-neutral-400 max-md:mt-10 max-md:max-w-full"
				/>
				<div className="self-center mt-9 text-sm leading-4 text-center text-neutral-400">
					Design with love © TanahAirStudio 2020. All right reserved
				</div>
			</div>
		</div>
	);
};

export default Footer;
