import { removeTokens } from "@/lib/utils";
import { refreshToken } from "./auth";
const baseUrl: string = import.meta.env.VITE_HOST;
export const getClubs = async (filter: Filter): Promise<Club[]> => {
	const query = "";
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
	refreshToken();
	return res.json();
};

export const getClubMembers = async (id: string): Promise<ClubMember[]> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `club/${id}/members`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	if (res.status === 401 && token !== undefined) {
		removeTokens();
	}
	refreshToken();
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
	refreshToken();
	return res.json();
};
