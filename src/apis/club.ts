import { refreshToken } from "./auth";
const baseUrl: string = import.meta.env.VITE_HOST;
export const getClubs = async (params: string = ""): Promise<Club[]> => {
	console.log("url ", baseUrl);

	const res = await fetch(baseUrl + `club?${params}`);
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
		refreshToken();
		const rec_res = getClubDetails(id);
		return rec_res;
	}
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
	if (res.status === 401) {
		refreshToken();
		const rec_res = getClubMembers(id);
		return rec_res;
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
		refreshToken();
		const rec_res = getClubReviews(id);
		return rec_res;
	}
	return res.json();
};
