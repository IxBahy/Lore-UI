type clubTypes = "public" | "private";

interface Club {
	id: number;
	name: string;
	description: string;
	type: clubTypes;
	img_url: string;
	owner: string;
}
type RoadmapWeek = {
	id: number;
	degree: number;
	title: string;
	description: string;
	roadmap_id: number;
};

type Roadmap = {
	id: number;
	weeks_count: number;
	weeks_capacity: number;
	weeks: RoadmapWeek[];
};

type Owner = {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	img_url: string;
};

interface ClubDetails extends Club {
	roadmap: Roadmap;
	current_capacity: number;
	max_capacity: number;
	owner: Owner;
	rating: number;
}
