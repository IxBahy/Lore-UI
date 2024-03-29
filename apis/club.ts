import { refreshToken } from "./auth";
export const getClubs = async (params: string = ""): Promise<Club[]> => {
	const res = await fetch(process.env.API_URL + `club?${params}`);
	return res.json();
};
export const getClubDetails = async (id: string): Promise<ClubDetails> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(process.env.API_URL + `club/${id}`, {
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
