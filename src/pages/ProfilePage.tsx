import ClubHeader from "@/components/Pages/Club/About/ClubHeader";
import { SectionHeader } from "@/components/Pages/Club/Home/SectionHeader";
import Card from "@/components/ui/Card";
import React from "react";
// FOR THIS CLUBG TYPE
// id: number;
// name: string;
// description: string;
// type: clubTypes;
// img_url: string;
// owner: string;
// create dummy data array
const clubData: Club[] = [
	{
		id: 1,
		type: "public",
		name: "DSC VIT",
		description:
			"Developer Student Clubs is a community where everyone is welcome. We help students bridge the gap between theory and practice and grow their knowledge by providing a peer-to-peer learning environment, by conducting workshops, study jams, and building solutions for local businesses.",
		img_url: "https://i.ibb.co/0r6k7mJ/csi.png",
		owner: "Google",
	},
	{
		id: 2,
		type: "public",
		name: "ACM VIT",
		description:
			"The Association for Computing Machinery is an international learned society for computing. It was founded in 1947, and is the world's largest scientific and educational computing society.",
		img_url: "https://i.ibb.co/6Jhjg6d/acm.png",
		owner: "VIT",
	},
	{
		id: 3,
		type: "public",
		name: "IEEE VIT",
		description:
			"The Institute of Electrical and Electronics Engineers is a professional association for electronic engineering and electrical engineering with its corporate office in New York City and its operations center in Piscataway, New Jersey.",
		img_url: "https://i.ibb.co/7Gq2j2L/ieee.png",
		owner: "VIT",
	},
	{
		id: 4,
		type: "public",
		name: "CSI VIT",
		description:
			"The Computer Society of India is a professional body where students can share their knowledge and exchange ideas. It is the largest, oldest and most professionally managed computer science organization in India.",
		img_url: "https://i.ibb.co/0r6k7mJ/csi.png",
		owner: "VIT",
	},
];

export const ProfilePage = () => {
	return (
		<>
			<main className="h-screen w-full flex flex-col">
				<h2 className="text-4xl font-semibold mt-40 ms-32 text-start">
					Clubs You have joined
				</h2>
				<SectionHeader />
				<div className=" mx-16 my-8 gap-5 grid grid-cols-4 grid-rows-1">
					{clubData.map((club: Club, index) => (
						<div key={index} className="columns-1 col-span-1 w-full md:w-full ">
							<Card club={club} />
						</div>
					))}
				</div>
			</main>
		</>
	);
};
