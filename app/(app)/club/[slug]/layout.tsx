"use client";
import { getClubDetails } from "@/apis/club";
import ClubHeader from "@/components/Pages/Club/About/ClubHeader";
import ClubNav from "@/components/Pages/Club/About/ClubNav";
import React, { PropsWithChildren, use } from "react";
interface Props extends PropsWithChildren {
	params: { slug: string };
}
const layout = ({ children, params }: Props) => {
	const { slug } = params;
	console.log(slug);

	if (!slug || typeof !slug === "string" || Array.isArray(slug)) return;

	const clubDetails = use(getClubDetails(slug));
	return (
		<main className="flex flex-col min-h-screen w-full items-center">
			<ClubHeader clubDetails={clubDetails} />
			<ClubNav params={params} />
			{children}
		</main>
	);
};

export default layout;
