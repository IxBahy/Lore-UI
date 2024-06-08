import React from "react";
import CompletedWeek from "./CompletedWeek";
import InProgressWeek from "./InProgressWeek";
import InitalWeek from "./InitalWeek";
type week_status = "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED";
interface Props {
	roadmapWeek: RoadmapWeekProgress;
}
const WeekFactory = ({ roadmapWeek }: Props) => {
	const WEEKS_JSX: { [key in week_status]: React.JSX.Element } = {
		COMPLETED: <CompletedWeek roadmapWeek={roadmapWeek} />,
		IN_PROGRESS: <InProgressWeek roadmapWeek={roadmapWeek} />,
		NOT_STARTED: <InitalWeek roadmapWeek={roadmapWeek} />,
	} as const;

	const week_status: week_status = roadmapWeek.is_completed
		? "COMPLETED"
		: roadmapWeek.is_in_progress
		? "IN_PROGRESS"
		: "NOT_STARTED";

	return <>{WEEKS_JSX[week_status]}</>;
};
export default WeekFactory;
