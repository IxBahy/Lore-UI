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

interface ClubMember {
	id: number;
	last_login: string | null;
	is_superuser: boolean;
	is_staff: boolean;
	is_active: boolean;
	date_joined: string;
	first_name: string;
	last_name: string;
	username: string;
	password: string;
	img_url: string | null;
	birth_date: string | null;
	phone: string | null;
	email: string;
	type: string | null;
	roles: string[] | null;
	groups: string[];
	user_permissions: string[];
	clubs: string[];
	chats: string[];
	friends: number[];
}

interface Review {
	id: number;
	review: string;
	rating: number;
	club_id: number;
	user_id: number;
}
