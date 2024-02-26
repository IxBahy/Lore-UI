import Card from "@/components/ui/Card";
import Link from "next/link";
const clubData = [
	{
		imageSrc:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/d4cb8502fdbf66e0db0be5cd2dbed94d170c52be56592f8b31608a621fc1eead?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&",
		imageAlt: "Past Perspectives Society",
		title: "Past Perspectives Society",
		description:
			"Embark on a captivating journey through time with the Past Perspectives Society, where history comes alive through engaging discussions.",
		joinIconSrc:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/11d86b516dda64d74867508485cc62235188d953f6b56913e3a36ab7a4176d8b?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&",
		joinIconAlt: "Join club icon",
	},
	{
		imageSrc:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/8bab3aa4e07f71afa97e3634610c80c839703734016c58b34413ae69bc782643?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&",
		imageAlt: "Ancient Chronicles Book Club",
		title: "Ancient Chronicles Book Club",
		description:
			"Journey through time with the Ancient Chronicles Book Club, where each page turns into a portal to the past. Join our community of history enthusiasts",
		joinIconSrc:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/11d86b516dda64d74867508485cc62235188d953f6b56913e3a36ab7a4176d8b?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&",
		joinIconAlt: "Join club icon",
	},
	{
		imageSrc:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/1bd85a80393010ad6d1348e661ba8190813ae01eef2f21267f3066edb5958e25?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&",
		imageAlt: "ArchaeoReads Society",
		title: "ArchaeoReads Society",
		description:
			"Dive into the fascinating world of ArchaeoReads Society, where the pages of history are unearthed through captivating narratives.",
		joinIconSrc:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/7db23a090460a9ad7b5a4066197aae8aa4a9cd0528ad9bd0fa95adf366d42714?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&",
		joinIconAlt: "Join club icon",
	},
	{
		imageSrc:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/8a0103155ae18a50b9e6c3e382e4ab378a76c52739118acb1efce0f3222931fe?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&",
		imageAlt: "Artifacts Adventures Club",
		title: "Artifacts Adventures Club",
		description:
			"Embark on a literary expedition with Artifacts Adventures Club, where every book is an artifact waiting to be discovered.",
		joinIconSrc:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/7db23a090460a9ad7b5a4066197aae8aa4a9cd0528ad9bd0fa95adf366d42714?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&",
		joinIconAlt: "Join club icon",
	},
];
const PopularClubs = () => {
	return (
		<>
			<div className="flex flex-col px-20 py-12 mt-44 w-full bg-slate-400 bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
				<div className="flex gap-1.5 self-start mt-6 ml-12 text-base font-bold leading-5 text-orange-300 max-md:ml-2.5">
					<div className="my-auto w-12 h-0.5 bg-orange-300 rounded-none" />
					<div className="flex-auto">POPULAR CLUBS</div>
				</div>
				<h2 className="self-start mt-1.5 ml-12 text-4xl font-semibold leading-10 text-neutral-800 max-md:ml-2.5">
					Join Clubs
				</h2>
				<div className="flex gap-5 justify-between self-center px-6 py-3 mt-16 max-w-full whitespace-nowrap rounded-xl border border-solid border-[color:var(--gray-01,#A7A7A9)] leading-[120%] w-[1098px] max-md:flex-wrap max-md:pl-5 max-md:mt-10">
					<input
						className="flex gap-2 justify-center text-base w-full h-14 px-5 py-3 font-semibold leading-6 text-neutral-800 rounded-md bg-transparent max-md:gap-1.5 max-md:px-3 max-md:py-2.5 max-md:text-sm max-md:leading-5 max-md:rounded-xl max-md:h-12 max-md:mt-10 max-md:pl-5 max-md:pr-3 max-md:py-3 max-md:w-full max-md:mt-10"
						placeholder="book club you can join 23.000+"
					/>
					<Link
						href={"/club"}
						className="justify-center px-16 py-3 text-xl font-semibold text-white rounded-md bg-stone-900 max-md:px-5"
					>
						Explore Now
					</Link>
				</div>
				<div className="self-center mt-12 w-full max-md:pr-5 max-md:mt-10 max-md:max-w-full">
					<section className="flex mx-16 mt-8 gap-5 ">
						{clubData.map((club, index) => (
							<div key={index} className="flex-grow w-full md:w-full lg:w-3/12">
								<Card {...club} />
							</div>
						))}
					</section>
				</div>

				<div className="flex gap-2 justify-center self-center px-10 py-5 mt-12 mb-5 text-xl font-semibold leading-6 text-white whitespace-nowrap rounded-md bg-neutral-800 max-md:px-5 max-md:mt-10">
					<Link href={"/club"} className="grow">
						Browse all Clubs
					</Link>
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/facd7238da559c416ee7a49aa3b480054f10e555d0547b0b011e9bcc54c1c6f2?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
						className="w-6 aspect-square"
					/>
				</div>
			</div>
		</>
	);
};

export default PopularClubs;
