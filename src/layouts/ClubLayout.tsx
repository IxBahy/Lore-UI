import { getClubDetails } from "@/apis/club";
import ClubHeader from "@/components/Pages/Club/About/ClubHeader";
import ClubNav from "@/components/Pages/Club/About/ClubNav";
import React, { PropsWithChildren, use, useEffect, useState } from "react";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Loader from "@/components/ui/Loader";
import { AIChat } from "@/components/Chat/AI/AIChat";
export const ClubLayout = () => {
	const token = localStorage.getItem("access_token") ?? "";
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isChatHidden, setIsChatHidden] = useState<boolean>(true);
	const handleToggle = () => {
		setIsChatHidden((prev) => !prev);
	};
	const navigate = useNavigate();
	const { slug } = useParams();

	if (!token) {
		navigate("/login");
	}
	if (!slug) return;
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
					<div className="fixed flex flex-col items-end bottom-5 right-5  z-30 w-1/3 ">
						<AIChat isHidden={isChatHidden} />
						<button onClick={handleToggle} className="w-20">
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d61fa5f4545ac607ddc84a49926c1dd77cf0a76446e45abfb97f2ca8010390a?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								alt="Description of the image"
								className="w-full aspect-square max-w-[112px]"
							/>
						</button>
					</div>
					<ClubHeader clubDetails={clubDetails} id={id} />
					<Outlet />
				</main>
			)}
		</>
	);
};
