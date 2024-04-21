import { getClubs } from "@/apis/club";
import FilterControls from "@/components/Pages/Club/Home/FilterControls";
import Header from "@/components/Pages/Club/Home/Header";
import Card from "@/components/ui/Card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
// import { use } from "react";

export const ClubsPage = () => {
	const clubData = [] as Club[];
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
								<Card club={club} />
							</div>
						))}
					</div>
				</section>
			</div>
		</main>
	);
};
