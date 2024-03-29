"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Layout/Main/Navbar";
import Footer from "@/components/Layout/Main/Footer";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/zustand";
import { redirect } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { isAuthenticated } = useAuthStore();
	if (
		!isAuthenticated ||
		(typeof window !== "undefined" && !localStorage.getItem("access_token"))
	) {
		redirect("/login");
	}
	return (
		<div
			className={cn(
				"min-h-screen bg-background font-sans antialiased",
				fontSans.variable
			)}
		>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
