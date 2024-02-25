import Link from "next/link";

const AppSection = () => {
	return (
		<>
			<div className="flex justify-center items-center self-center px-16 mt-52 w-full leading-[120%] max-w-[1254px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
				<div className="flex flex-col max-w-full w-[601px]">
					<div className="flex gap-1.5 self-center text-base font-bold text-orange-300 whitespace-nowrap">
						<div className="my-auto w-12 h-0.5 bg-orange-300 rounded-none" />
						<div className="flex-auto">APPLICATION</div>
					</div>
					<div className="mt-1.5 text-3xl text-center font-semibold text-neutral-800 max-md:max-w-full">
						Enjoy Your reading Journy With Lore
					</div>
				</div>
			</div>
			<img
				loading="lazy"
				srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/011fe9e793784f6db3185e4f31774e8720baa024339977a91e0acfc912c2d8b5?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/011fe9e793784f6db3185e4f31774e8720baa024339977a91e0acfc912c2d8b5?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/011fe9e793784f6db3185e4f31774e8720baa024339977a91e0acfc912c2d8b5?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/011fe9e793784f6db3185e4f31774e8720baa024339977a91e0acfc912c2d8b5?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/011fe9e793784f6db3185e4f31774e8720baa024339977a91e0acfc912c2d8b5?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/011fe9e793784f6db3185e4f31774e8720baa024339977a91e0acfc912c2d8b5?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/011fe9e793784f6db3185e4f31774e8720baa024339977a91e0acfc912c2d8b5?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/011fe9e793784f6db3185e4f31774e8720baa024339977a91e0acfc912c2d8b5?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
				className="self-center mt-16 max-w-full aspect-[1.79] w-[944px] max-md:mt-10"
			/>
			<div className="self-center mt-8 text-xl font-medium leading-6 text-center text-neutral-400 w-[919px] max-md:max-w-full">
				Our philosophy is simple — hire a team of diverse, passionate people and
				foster a culture that empowers you to do you best work.
			</div>
			<div className="flex gap-4 self-center mt-7 text-xl font-semibold leading-6 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
				<Link
					href={"#"}
					className="grow justify-center px-10 py-5 text-white rounded-md bg-neutral-800 max-md:px-5"
				>
					Download App
				</Link>
				<Link
					href={"/about"}
					className="grow justify-center px-10 py-5 rounded-md border border-black border-solid text-neutral-800 max-md:px-5"
				>
					About Us
				</Link>
			</div>
		</>
	);
};

export default AppSection;
