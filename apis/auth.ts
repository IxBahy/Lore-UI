type registerData = {
	username: string;
	first_name: string;
	last_name: string;
	password: string;
	email: string;
};

export const register = async (data: registerData): Promise<Response> => {
	const response = await fetch(process.env.API_URL + "register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return response;
};

export const login = async (data: {
	username: string;
	password: string;
}): Promise<Response> => {
	const response = await fetch(process.env.API_URL + "login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return response;
};

export const refreshToken = () => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("refresh_token") : "";

	if (token) {
		fetch(process.env.API_URL + "refresh-token", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ refresh: token }),
		})
			.then((res) => res.json())
			.then((data) => {
				localStorage.setItem("access_token", data.access);
				localStorage.setItem("refresh_token", data.refresh);
			});
	}
};
