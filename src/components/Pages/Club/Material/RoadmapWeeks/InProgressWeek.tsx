import React from "react";
import {
	AccordionContent,
	AccordionItem,
	CustomAccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { moveWeekToInCompleted } from "@/apis/student";
interface Props {
	roadmapWeek: RoadmapWeekProgress;
}
const InProgressWeek = ({ roadmapWeek }: Props) => {
	const moveToInComplete = () => {
		moveWeekToInCompleted(`${roadmapWeek.id}`);
	};
	return (
		<>
			<AccordionItem
				value={`${roadmapWeek.degree} ${roadmapWeek.title}`}
				className="my-3 z-10 gap-5 self-center px-7 pt-3 pb-5 w-full border border-solid bg-slate-200/70 border-[color:var(--gray-white,#E9EAF0)] leading-[120%] max-w-[1254px] "
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
						<div className="flex gap-2 justify-between px-4 py-3 font-semibold rounded-lg border border-orange-300 border-solid bg-orange-200 bg-opacity-50 text-yellow-950">
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/6edc1cef2c05cb9a961ccb5061b0a6edc99fdac66a3ff4d015f6a8b51931e44e?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								className="aspect-square w-[18px]"
							/>
							<div className="grow">
								<span className="text-yellow-950">IN</span>{" "}
								<span className="text-yellow-950">PROGRESS</span>
							</div>
						</div>
						<ChevronDown className="h-4 w-4 mx-2 shrink-0 transition-transform duration-200" />
					</div>
				</CustomAccordionTrigger>
				<AccordionContent>
					<div className="flex justify-between ">
						<span className="block">{roadmapWeek.description}</span>
						<Button onClick={moveToInComplete} className="">
							to Completed
						</Button>
					</div>
				</AccordionContent>
			</AccordionItem>
		</>
	);
};

export default InProgressWeek;

// <div className="flex gap-5 justify-between mx-7 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
// 	<div className="flex gap-4 my-auto text-lg font-medium text-zinc-700 text-opacity-80 max-md:flex-wrap max-md:max-w-full">
// 		<img
// 			loading="lazy"
// 			src="https://cdn.builder.io/api/v1/image/assets/TEMP/a21a54b3442f47d4b0e344669be7e71bfd8429f4a6e837b4efcd166bc8b752f3?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
// 			className="self-start w-6 aspect-square"
// 		/>
// 		<div className="flex-auto max-md:max-w-full">
// 			<span className="text-xl font-bold leading-6 text-teal-700">
// 				Week 04:{" "}
// 			</span>
// 			<span className="text-xl leading-6">I</span>
// 			<span className="text-xl leading-6 text-zinc-700">
// 				nformation Architecture: Creating a Solid Foundation{" "}
// 			</span>
// 		</div>
// 	</div>
// 	<div className="flex gap-5 justify-between text-sm whitespace-nowrap">
// 		<div className="flex gap-2 justify-between px-4 py-3 font-semibold rounded-lg border border-orange-300 border-solid bg-orange-200 bg-opacity-50 text-yellow-950">
// 			<img
// 				loading="lazy"
// 				src="https://cdn.builder.io/api/v1/image/assets/TEMP/6edc1cef2c05cb9a961ccb5061b0a6edc99fdac66a3ff4d015f6a8b51931e44e?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
// 				className="aspect-square w-[18px]"
// 			/>
// 			<div className="grow">
// 				<span className="text-yellow-950">IN</span>{" "}
// 				<span className="text-yellow-950">PROGRESS</span>
// 			</div>
// 		</div>
// 		<div className="grow self-end mt-5 text-right text-zinc-700 text-opacity-80">
// 			5 Chapters . 89 minutes
// 		</div>
// 	</div>
// </div>;
