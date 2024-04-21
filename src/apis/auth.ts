type registerData = {
	username: string;
	first_name: string;
	last_name: string;
	password: string;
	email: string;
};
const baseUrl: string = import.meta.env.VITE_HOST;
export const register = async (data: registerData): Promise<Response> => {
	const response = await fetch(baseUrl + "register", {
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
	const response = await fetch(baseUrl + "login", {
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
	console.log(token);
	try {
		if (token) {
			fetch(baseUrl + "refresh-token", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ refresh: token }),
			})
				.then((res) => {
					if (res.status === 200) {
						return res.json();
					} else {
						throw new Error("Error");
					}
				})
				.then((data) => {
					console.log(data);
					if (data) {
						localStorage.setItem("access_token", data.access);
					}
				});
		}
	} catch (error) {
		console.log(error);
	}
};
