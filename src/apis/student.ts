const baseUrl: string = import.meta.env.VITE_HOST;
export const join_club = async (id: number): Promise<Response> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const response = await fetch(baseUrl + "student/join-club", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ club_id: id }),
	});
	return response;
};
