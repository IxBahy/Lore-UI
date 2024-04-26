import { getClubs } from "@/apis/club";
import FilterControls from "@/components/Pages/Club/Home/FilterControls";
import Header from "@/components/Pages/Club/Home/Header";
import Card from "@/components/ui/Card";
import Loader from "@/components/ui/Loader";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
// import { use } from "react";

export const ClubsPage = () => {
	const [clubsArray, setClubArray] = useState<Club[] | undefined>();
	const [filter, setFilter] = useState<Filter>({});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	useEffect(() => {
		setIsLoading(true);
		const fetchClubs = async () => {
			const data = await getClubs(filter);
			setClubArray(data);
			setTimeout(() => {}, 500);
		};
		fetchClubs();
		setIsLoading(false);
	}, []);
	if (!clubsArray) return;
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<main className="">
					<Header />
					<FilterControls setFilter={setFilter} />
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
								{clubsArray.map((club, index) => (
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
			)}
		</>
	);
};
