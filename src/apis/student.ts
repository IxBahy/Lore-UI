import { removeTokens } from "@/lib/utils";
import { refreshToken } from "./auth";

const baseUrl: string = import.meta.env.VITE_HOST;

// export const getStudentClubsProgress = async (id: string): Promise<> => {
// 	const token =
// 		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
// 	const res = await fetch(baseUrl + `student/progress?student_id=${id}`, {
// 		method: "GET",
// 		headers: {
// 			"Content-Type": "application/json",
// 			Authorization: `Bearer ${token}`,
// 		},
// 	});
// 	if (res.status === 401) {
// 		removeTokens();
// 	}
// 	return res.json();
// };
export const getStudentClubs = async (id: string): Promise<Club[]> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `student/clubs?student_id=${id}`, {
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
	return res.json();
};

export const leaveClub = async (id: number): Promise<string> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `student/join-club?club_id=${id}`, {
		method: "DELETE",
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

export const addFriends = async (id: string): Promise<string> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `student/friends?id=${id}`, {
		method: "POST",
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

export const removeFriends = async (id: string): Promise<string> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `student/friends?id=${id}`, {
		method: "DELETE",
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

export const getFriends = async (): Promise<Friend[]> => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
	const res = await fetch(baseUrl + `student/friends`, {
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
