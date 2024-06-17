type clubTypes = "public" | "private";
type Filter = {
	category?: string;
	rating?: string;
	type?: string;
	name?: string;
};
type SortBy = "current_capacity" | "rating" | "created_at";
interface Club {
	id: number;
	name: string;
	description: string;
	type: clubTypes;
	img_url: string;
	owner: string;
	category: string;
	current_capacity: number;
	created_at: string;
	rating: number;
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
type ClubProgress = {
	name: string;
	image: string;
	progress: string;
};

type Friend = {
	id: number;
	email: string;
	username: string;
	img_url: string;
	type: string;
	first_name: string;
	last_name: string;
};

type ClubDocument = {
	id: number;
	uploaded_at: string;
	description: string;
	title: string;
	cover_url: string;
	club_id: number;
};

type RoadmapWeekProgress = {
	id: number;
	title: string;
	description: string;
	degree: number;
	is_completed: boolean;
	is_in_progress: boolean;
};

type RoadmapProgress = RoadmapWeekProgress[];

type Message = { role: "system" | "user"; content: string };
