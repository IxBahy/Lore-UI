type registerData = {
	username: string;
	first_name: string;
	last_name: string;
	password: string;
	email: string;
};

export const register = async (data: registerData): Promise<Response> => {
	console.log(process.env.API_URL + "register");

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
