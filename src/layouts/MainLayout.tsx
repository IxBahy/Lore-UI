import Footer from "@/components/Layout/Main/Footer";
import Navbar from "@/components/Layout/Main/Navbar";
import { cn } from "@/lib/utils";
import React from "react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
	React.useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [])
	return (
		<div className={cn("min-h-screen bg-background font-sans antialiased")}>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};
