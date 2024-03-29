const ClubInstructor = ({ owner }: { owner: Owner }) => {
	return (
		<div className="flex flex-col self-center px-5 mt-44 w-full max-w-[1257px] max-md:mt-10 max-md:max-w-full">
			<div className="flex gap-1.5 self-start text-lg font-bold leading-5 text-orange-300">
				<div className="my-auto w-12 h-0.5 bg-orange-300 rounded-none" />
				<div className="flex-auto">ABOUT INSTRUCTOR</div>
			</div>
			<div className="self-start mt-1 text-4xl font-semibold leading-10 whitespace-nowrap text-neutral-800">
				Our Expert Instructor
			</div>
			<div className="mt-16 max-md:mt-10 max-md:max-w-full">
				<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
					<div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
						<div className="flex flex-col grow text-sm tracking-normal leading-4 whitespace-nowrap text-zinc-700 text-opacity-80 max-md:mt-8">
							<img
								loading="lazy"
								srcSet={owner.img_url}
								alt="instructor image"
								className="w-full aspect-square"
							/>
							<div className="flex gap-4 justify-between mt-8">
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/920d27941ee7eb9fd58b0b410e4a97eb88cb0d574b1b406a1c44232dd76881fc?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									className="w-6 aspect-square"
								/>
								<div className="grow">
									<span className="text-sm font-bold leading-4 text-zinc-700">
										4.5
									</span>{" "}
									<span className="text-sm leading-4 text-zinc-700">
										Instructor Rating
									</span>
								</div>
							</div>
							<div className="flex gap-4 justify-between mt-3">
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/a64a0fae9f0bdc2cf6cd51746aa9231786ae5c4edd25e9513d28980dc3c6fcf0?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									className="w-6 aspect-square"
								/>
								<div className="grow self-start mt-2.5">
									<span className="text-sm font-bold leading-4 text-zinc-700">
										28,707
									</span>{" "}
									<span className="text-sm leading-4 text-zinc-700">
										Reviews
									</span>
								</div>
							</div>
							<div className="flex gap-4 justify-between mt-3">
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d62bbf0b19d05cdc3ed69ae2251f34ae701558c4a94b781188cb81e87766def?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									className="w-6 aspect-square"
								/>
								<div className="grow self-start mt-2.5">
									<span className="text-sm font-bold leading-4 text-zinc-700">
										155,242
									</span>{" "}
									<span className="text-sm leading-4 text-zinc-700">
										Students
									</span>
								</div>
							</div>
							<div className="flex gap-4 justify-between mt-3">
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed1205766d5d885127d8156cf5bdd61fd705e7c2be6a2192ec1a5335fc63e964?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									className="w-6 aspect-square"
								/>
								<div className="grow my-auto">
									<span className="text-sm font-bold leading-4 text-zinc-700">
										8{" "}
									</span>
									<span className="text-sm leading-4 text-zinc-700">Clubs</span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
						<div className="flex flex-col grow text-base leading-7 text-zinc-700 text-opacity-80 max-md:mt-8 max-md:max-w-full">
							<div className="flex gap-1 self-start pr-12 text-3xl font-semibold leading-9 whitespace-nowrap max-md:pr-5">
								<div className="grow">
									{owner.first_name + " " + owner.last_name}
								</div>
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c42677f36536abf2d469cdb140372c97ad405860c5f54512494bfee2bcc54bb?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									className="my-auto aspect-square fill-green-500 w-[26px]"
								/>
							</div>
							<div className="mt-3.5 text-xl font-medium leading-6 max-md:max-w-full">
								29-year UX + Design Veteran; Consultant, Author & Speaker
							</div>
							<div className="shrink-0 mt-7 h-px bg-gray-200 max-md:max-w-full" />
							<div className="mt-8 tracking-normal max-md:max-w-full">
								Joe Natoli has launched five successful online courses with
								Udemy on the topics of User Experience (UX) and User Interface
								(UI) Design, with more than 180,000+ students enrolled to date.
							</div>
							<div className="mt-5 tracking-normal max-md:max-w-full">
								Joe has been preaching and practicing the gospel of User
								Experience (UX) to Fortune 100, 500 and Government organizations
								for nearly three decades. That work includes commercial industry
								leaders like Google Ventures, Kroll/Duff + Phelps, Broadridge,
								Conde Nast, Johns Hopkins, Mettler-Toledo, PHH Arval, SC Johnson
								and Wolters Kluwer, as well as government agencies like the
								National Science Foundation, National Institutes of Health and
								the Dept. of Homeland Security.
							</div>
							<div className="shrink-0 h-32 max-md:max-w-full" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClubInstructor;
