import { getUserClubs } from "@/apis/user";
import CreateClubForm from "@/components/Pages/Profile/CreateClubForm";
import Card from "@/components/ui/Card";
import React, { useEffect, useState } from "react";

export const ProfilePage = () => {
	const [clubsArray, setClubArray] = useState<Club[] | undefined>([]);
	const [show, setShow] = useState<boolean>(false);
	useEffect(() => {
		const fetchClubs = async () => {
			const data = await getUserClubs();
			setClubArray(data);
		};
		fetchClubs();
	}, []);
	if (!Array.isArray(clubsArray) || !clubsArray) return;

	return (
		<>
			<CreateClubForm show={show} setShow={setShow} />
			<main className="h-screen w-full flex flex-col">
				<div className="flex items-end justify-between ">
					<h2 className="text-4xl font-semibold mt-40 ms-32 text-start">
						Clubs You have joined
					</h2>
					<button
						onClick={() => {
							setShow(true);
						}}
						className=" me-16  rounded-full border w-12 h-12 flex pb-1 justify-center items-center text-3xl bg-green-600"
					>
						+
					</button>
				</div>
				<div className=" mx-16 my-8 gap-5 grid grid-cols-4 grid-rows-1">
					{clubsArray.map((club: Club, index) => (
						<div key={index} className="columns-1 col-span-1 w-full md:w-full ">
							<Card club={club} />
						</div>
					))}
				</div>
			</main>
		</>
	);
};
