import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InitalWeek from "./RoadmapWeeks/InitalWeek";
import CompletedWeek from "./RoadmapWeeks/CompletedWeek";
import { getRoadmapProgress } from "@/apis/student";
import { Accordion } from "@/components/ui/accordion";
import WeekFactory from "./RoadmapWeeks/WeekFactory";

const ClubContent = () => {
	const { slug } = useParams();
	if (!slug) return;
	const [roadmap, setRoadmap] = useState<RoadmapProgress>();

	useEffect(() => {
		const fetchRoadmap = async () => {
			const res = await getRoadmapProgress(slug);
			setRoadmap(res);
		};
		fetchRoadmap();
	}, []);
	if (!roadmap) return <></>;
	return (
		<>
			<div className="flex gap-1.5 self-start mt-44 text-lg font-bold leading-5 text-orange-300 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
				<div className="my-auto w-12 h-0.5 bg-orange-300 rounded-none" />
				<div className="flex-auto max-md:max-w-full">CLUB CONTENT</div>
			</div>
			<div className="self-start mt-1 text-4xl font-semibold leading-10 text-neutral-800 max-md:max-w-full">
				Our Document Chapters{" "}
			</div>
			<Accordion type="single" collapsible className="w-full">
				{roadmap.map((week, index) => {
					return <WeekFactory key={index} roadmapWeek={week} />;
				})}
			</Accordion>
		</>
	);
};

export default ClubContent;
