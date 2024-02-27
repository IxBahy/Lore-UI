import Header from "@/components/Pages/Profile/Header";
import React, { PropsWithChildren } from "react";
interface Props extends PropsWithChildren {
	params: { slug: number };
}
const layout = ({ children, params }: Props) => {
	return (
		<main className="flex flex-col min-h-screen w-full items-center">
			<Header params={params} />
			{children}
		</main>
	);
};

export default layout;
