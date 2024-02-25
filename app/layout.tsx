import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Main/Navbar";
import Footer from "@/components/Layout/Main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Lore",
	description: "The best book club in the world!",
	icons:
		"https://cdn.builder.io/api/v1/image/assets/TEMP/84af958f1422b347e84c737c9258d2956449e6eabaf442df6d217e44a07b9325?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
