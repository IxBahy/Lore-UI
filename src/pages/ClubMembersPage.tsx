import { getClubMembers } from "@/apis/club";
import MemberCard from "@/components/Pages/Club/Members/MemberCard";
import SearchBar from "@/components/Pages/Club/Members/SearchBar";
import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ClubMembersPage = () => {
	const { slug } = useParams();
	const [members, setMembers] = useState<ClubMember[]>();
	useEffect(() => {
		const fetchMembers = async () => {
			const data = await getClubMembers(`${slug}`);
			setMembers(data);
		};
		fetchMembers();
	}, []);
	if (!Array.isArray(members)) return;

	return (
		<main className="w-full p-24 flex flex-col">
			<div className="w-full text-xl leading-6 text-gray-500 max-md:max-w-full">
				Search:
			</div>
			<SearchBar />
			<div className="grid gap-x-8 grid-cols-3 gap-y-4 my-6">
				{members.map((member, index) => (
					<MemberCard
						key={index}
						id={member.id}
						email={member.email}
						image={member.img_url ?? "none"}
						name={member.first_name + " " + member.last_name}
					/>
				))}
			</div>
		</main>
	);
};
