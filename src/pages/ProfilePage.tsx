import { getUserClubs } from "@/apis/user";
import Card from "@/components/ui/Card";
import React, { useEffect, useState } from "react";

export const ProfilePage = () => {
	const [clubsArray, setClubArray] = useState<Club[] | undefined>();

	useEffect(() => {
		const fetchClubs = async () => {
			const data = await getUserClubs();
			setClubArray(data);
		};
		fetchClubs();
	}, []);
	if (!clubsArray) return;
	console.log(clubsArray);

	return (
		<>
			<main className="h-screen w-full flex flex-col">
				<h2 className="text-4xl font-semibold mt-40 ms-32 text-start">
					Clubs You have joined
				</h2>
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
