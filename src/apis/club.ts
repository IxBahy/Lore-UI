import { removeTokens } from "@/lib/utils";
import { refreshToken } from "./auth";
const baseUrl: string = import.meta.env.VITE_HOST;
export const getClubs = async (
	filter: Filter = {},
	sortBy: SortBy = "created_at"
): Promise<Club[]> => {
	let query = "";
	Object.entries(filter).forEach(([key, value]) => {
		query = query + `${key}=${value}&`;
	});

	const res = await fetch(baseUrl + `club?${query}`);
	return res.json();
};
export const getClubDetails = async (id: string): Promise<ClubDetails> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `club/${id}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	if (res.status === 401) {
		removeTokens();
	}

	return res.json();
};

export const getClubMembers = async (
	id: string,
	name: string = ""
): Promise<ClubMember[]> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `club/${id}/members?name=${name}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	if (res.status === 401 && token !== undefined) {
		removeTokens();
	}
	return res.json();
};

export const getClubReviews = async (id: string): Promise<Review[]> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `club/${id}/reviews`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	if (res.status === 401) {
		removeTokens();
	}
	return res.json();
};

export const getClubDocument = async (id: string): Promise<ClubDocument> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `club/${id}/document`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	if (res.status === 401) {
		removeTokens();
	}
	return res.json();
};
export const getClubOwner = async (id: string): Promise<Friend> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `club/${id}/owner`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	if (res.status === 401) {
		removeTokens();
	}
	return res.json();
};

// POST REQUESTS
export const createClubs = async (data: FormData): Promise<Club> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `club/`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		body: data,
	});
	return res.json();
};

export const createClubRoadmap = async (
	data: FormData,
	id: string
): Promise<string> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `club/${id}/roadmap`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		body: data,
	});
	return res.json();
};

// PUT REQUESTS
export const addClubArticle = async (data: FormData): Promise<string> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `club/`, {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		body: data,
	});
	return res.json();
};
