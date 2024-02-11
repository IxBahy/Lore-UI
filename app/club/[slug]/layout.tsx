import ClubHeader from "@/components/Pages/Club/About/ClubHeader";
import ClubNav from "@/components/Pages/Club/About/ClubNav";
import React, { PropsWithChildren } from "react";
interface Props extends PropsWithChildren {
	params: { slug: number };
}
const layout = ({ children, params }: Props) => {
	return (
		<main className="flex flex-col min-h-screen w-full items-center">
			<ClubHeader />
			<ClubNav params={params} />
			{children}
		</main>
	);
};

export default layout;
