import React from "react";
import {
	AccordionContent,
	AccordionItem,
	CustomAccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { moveWeekToInProgress } from "@/apis/student";
interface Props {
	roadmapWeek: RoadmapWeekProgress;
}
const InitalWeek = ({ roadmapWeek }: Props) => {
	const moveToInProgress = () => {
		moveWeekToInProgress(`${roadmapWeek.id}`);
	};
	return (
		<>
			<AccordionItem
				value={`${roadmapWeek.degree} ${roadmapWeek.title}`}
				className="my-3 z-10 gap-5 self-center px-7 pt-3 pb-5 w-full  border-2 border-solid  border-[color:var(--gray-white,#E9EAF0)] leading-[120%] max-w-[1254px] "
			>
				<CustomAccordionTrigger className="text-xl flex justify-between items-center leading-6 text-zinc-700">
					<div className="flex max-md:max-w-full">
						<span className="text-xl font-bold leading-6 text-teal-700">
							{`Week 0${roadmapWeek.degree} :  `}
						</span>
						<span className="text-xl leading-6 text-zinc-700">
							{roadmapWeek.title}
						</span>
					</div>
					<div className="flex items-center">
						<ChevronDown className="h-4 w-4 mx-2 shrink-0 transition-transform duration-200" />
					</div>
				</CustomAccordionTrigger>
				<AccordionContent>
					<div className="flex justify-between ">
						<span className="block">{roadmapWeek.description}</span>
						<Button onClick={moveToInProgress} className="">to in progress</Button>
					</div>
				</AccordionContent>
			</AccordionItem>
		</>
	);
};

export default InitalWeek;
