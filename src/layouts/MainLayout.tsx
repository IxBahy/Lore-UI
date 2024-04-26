import Footer from "@/components/Layout/Main/Footer";
import Navbar from "@/components/Layout/Main/Navbar";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "@/components/ui/Loader";
import ScrollToTop from "@/components/Layout/ScrollToTop";
export const MainLayout = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	useEffect(() => {
		setIsLoading(true);

		setIsLoading(false);
	}, []);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div
					className={cn("min-h-screen bg-background font-sans antialiased")}
					id="main-div"
				>
					<ScrollToTop />
					<Navbar />
					<Outlet />
					<Footer />
				</div>
			)}
		</>
	);
};
