import { getStudentClubs } from "@/apis/student";
import Card from "@/components/ui/Card";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { JwtPayload, jwtDecode } from "jwt-decode";
import EmptyContainer from "@/components/EmptyContainer";

export const StudentProfilePage = () => {
	const token = localStorage.getItem("access_token") ?? "";
	const navigate = useNavigate();
	if (!token) {
		navigate("/login");
	}
	const [clubsArray, setClubArray] = useState<Club[] | undefined>([]);
	const { slug } = useParams();
	if (!slug) return;
	const decoded = jwtDecode<
		JwtPayload & { user_id: number; username: string; type: string }
	>(token);

	if (String(decoded["user_id"]) === slug) {
		navigate("/profile");
	}
	useEffect(() => {
		const fetchClubs = async () => {
			const data = await getStudentClubs(slug);
			setClubArray(data);
		};
		fetchClubs();
	}, []);
	if (!Array.isArray(clubsArray) && !clubsArray) return;

	return (
		<>
			<main className="h-screen w-full flex flex-col">
				<h2 className="text-4xl font-semibold mt-40 ms-32 text-start">
					Clubs joined
				</h2>

				{clubsArray.length > 0 ? (
					<div className=" mx-16 my-8 gap-5 grid grid-cols-4 grid-rows-1">
						{clubsArray.map((club: Club, index) => (
							<div
								key={index}
								className="columns-1 col-span-1 w-full md:w-full "
							>
								<Card club={club} />
							</div>
						))}
					</div>
				) : (
					<EmptyContainer />
				)}
			</main>
		</>
	);
};
