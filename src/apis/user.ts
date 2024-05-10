import { removeTokens } from "@/lib/utils";
import { refreshToken } from "./auth";

const baseUrl: string = import.meta.env.VITE_HOST;

export const getUserClubsProgress = async (): Promise<ClubProgress[]> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `student/progress`, {
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

export const getUserClubs = async (): Promise<Club[]> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `student/clubs`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});

	if (res.status === 401) {
		console.log(res.status);
		removeTokens();
	}
	return res.json();
};
