import Header from "@/components/Pages/Profile/Header";

import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

export const ProfileLayout = () => {
	return (
		<main className="flex flex-col min-h-screen w-full items-center">
			<Header />
			<Outlet />
		</main>
	);
};
