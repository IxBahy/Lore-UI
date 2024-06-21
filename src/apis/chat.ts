import { removeTokens } from "@/lib/utils";

const baseUrl: string = import.meta.env.VITE_HOST;

export const getChatsData = async (id: string): Promise<ChatDetails> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `chats/${id}`, {
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
