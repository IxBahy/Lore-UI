import { removeTokens } from "@/lib/utils";
import { refreshToken } from "./auth";

const baseUrl: string = import.meta.env.VITE_HOST;
export const joinClub = async (id: number): Promise<string> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `student/join-club?club_id=${id}`, {
		method: "POST",
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
