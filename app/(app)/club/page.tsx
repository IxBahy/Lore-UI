import FilterControls from "@/components/Pages/Club/Home/FilterControls";
import Header from "@/components/Pages/Club/Home/Header";
import Card from "@/components/ui/Card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
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
];
const page = () => {
	return (
		<main className="">
			<Header />
			<FilterControls />
			<div className="grid grid-cols-6  ">
				{/* Side Filter Accordings */}
				<section className="columns-1 col-span-1 border  mt-16 ms-8">
					<Accordion type="multiple" className=" ">
						<AccordionItem value="gener">
							<AccordionTrigger className="mx-4 text-md font-bold">
								GENER
							</AccordionTrigger>
							<AccordionContent>
								Here should be the gener with a check box - ronin code
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="rating">
							<AccordionTrigger className="mx-4 text-md font-bold">
								RATING
							</AccordionTrigger>
							<AccordionContent>
								Here should be the gener with a check box - ronin code
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="type">
							<AccordionTrigger className="mx-4 text-md font-bold">
								TYPE
							</AccordionTrigger>
							<AccordionContent>
								Here should be the gener with a check box - ronin code
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</section>
				<section className=" columns-5 col-span-5 flex flex-col min-h-screen w-full items-center">
					<div className=" mx-16 mt-8 gap-5 grid grid-cols-3 ">
						{clubData.map((club, index) => (
							<div
								key={index}
								className="columns-1 col-span-1 w-full md:w-full "
							>
								<Card {...club} />
							</div>
						))}
					</div>
				</section>
			</div>
		</main>
	);
};

export default page;
