import { getClubDetails } from "@/apis/club";
import ClubHeader from "@/components/Pages/Club/About/ClubHeader";
import ClubNav from "@/components/Pages/Club/About/ClubNav";
import React, { PropsWithChildren, use, useEffect, useState } from "react";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Loader from "@/components/ui/Loader";
export const ClubLayout = () => {
	const token = localStorage.getItem("access_token") ?? "";
	const navigate = useNavigate();
	const { slug } = useParams();

	if (!token) {
		navigate("/login");
	}
	if (!slug) return;
	const [isLoading, setIsLoading] = useState<boolean>(true);
	useEffect(() => {
		setIsLoading(true);
		const fetchDetails = async () => {
			const data = await getClubDetails(slug);
			setClubDetails(data);
		};
		fetchDetails();
		// window.scrollTo(0, 0);
		setTimeout(() => {
			console.log("Loading");
		}, 200);
		setIsLoading(false);
	}, []);
	const [clubDetails, setClubDetails] = useState<ClubDetails>();
	useEffect(() => {}, []);
	if (!clubDetails) return;
	const decoded = jwtDecode<
		JwtPayload & { user_id: number; username: string; type: string }
	>(token);
	const id: number = decoded["user_id"];


	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<main className="flex flex-col min-h-screen w-full items-center">
					<ClubHeader clubDetails={clubDetails} id={id} />
					<Outlet />
				</main>
			)}
		</>
	);
};
