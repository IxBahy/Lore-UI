import Header from "@/components/Pages/Profile/Header";
import Loader from "@/components/ui/Loader";

import React, { PropsWithChildren, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const ProfileLayout = () => {
	const token = localStorage.getItem("access_token") ?? "";
	const navigate = useNavigate();

	if (!token) {
		navigate("/login");
	}
	const [isLoading, setIsLoading] = useState<boolean>(false);
	useEffect(() => {
		setIsLoading(true);
		// window.scrollTo(0, 0);
		setTimeout(() => {
			console.log("Loading");
		}, 400);
		setIsLoading(false);
	}, []);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<main className="flex flex-col min-h-screen w-full items-center">
					<Header />
					<Outlet />
				</main>
			)}
		</>
	);
};
