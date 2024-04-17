import { getClubDetails } from "@/apis/club";
import ClubHeader from "@/components/Pages/Club/About/ClubHeader";
import ClubNav from "@/components/Pages/Club/About/ClubNav";
import React, { PropsWithChildren, use, useEffect, useState } from "react";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { Outlet, useParams } from "react-router-dom";

export const ClubLayout = () => {
	const { slug } = useParams();
	console.log(slug);
	if (!slug) return;
	// if (!slug || typeof !slug === "string" || Array.isArray(slug)) return;

	const [clubDetails, setClubDetails] = useState<ClubDetails>();
	useEffect(() => {
		const fetchDetails = async () => {
			const data = await getClubDetails(slug);
			setClubDetails(data);
		};
		fetchDetails();
	}, []);
	if (!clubDetails) return;
	// const token = localStorage.getItem("access_token") ?? "";
	// const decoded = jwtDecode<
	// 	JwtPayload & { user_id: number; username: string; type: string }
	// >(token);
	// const id: number = decoded["user_id"];
	return (
		<main className="flex flex-col min-h-screen w-full items-center">
			<ClubHeader clubDetails={clubDetails} id={1} />
			<ClubNav slug={slug} />
			<Outlet />
		</main>
	);
};
