import {
	AccordionContent,
	AccordionItem,
	CustomAccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import React from "react";
interface Props {
	roadmapWeek: RoadmapWeekProgress;
}
const CompletedWeek = ({ roadmapWeek }: Props) => {
	return (
		<>
			<AccordionItem
				value={`${roadmapWeek.degree} ${roadmapWeek.title}`}
				className="my-2 z-10 gap-5 self-center px-7 pt-3 pb-5 w-full border border-solid bg-teal-700 bg-opacity-10 border-[color:var(--gray-white,#E9EAF0)] leading-[120%] max-w-[1254px] max-md:flex-wrap max-md:px-5 max-md:max-w-full"
			>
				<CustomAccordionTrigger className="text-xl flex justify-between leading-6 text-zinc-700">
					<div className="flex max-md:max-w-full">
						<span className="text-xl font-bold leading-6 text-teal-700">
							{`Week 0${roadmapWeek.degree}:`}
						</span>
						<span className="text-xl leading-6 text-zinc-700">
							{roadmapWeek.title}
						</span>
					</div>
					<div className="flex items-center">
						<div className="flex gap-2 justify-between px-4 py-2.5 font-semibold text-green-600 whitespace-nowrap rounded-lg border border-solid bg-green-500 bg-opacity-10 border-[color:var(--Status-Tag-Complete-Text,#3EA53C)]">
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b43ae1decb4a1f39cdef9d772d405ec9c98eba33819791d6a17705c1a7412d8?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								className="aspect-square w-[19px]"
							/>
							<div className="grow self-start">COMPLETED</div>
						</div>
						<ChevronDown className="h-4 w-4 mx-2 shrink-0 transition-transform duration-200" />
					</div>
				</CustomAccordionTrigger>
				<AccordionContent>{roadmapWeek.description}</AccordionContent>
			</AccordionItem>
		</>
	);
};

export default CompletedWeek;
