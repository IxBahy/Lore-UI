import { getClubMembers } from "@/apis/club";
import MemberCard from "@/components/Pages/Club/Members/MemberCard";
import SearchBar from "@/components/Pages/Club/Members/SearchBar";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { JwtPayload, jwtDecode } from "jwt-decode";
export const ClubMembersPage = () => {
	const token = localStorage.getItem("access_token") ?? "";
	const navigate = useNavigate();
	if (!token) {
		navigate("/login");
	}
	const decoded = jwtDecode<
		JwtPayload & { user_id: number; username: string; type: string }
	>(token);

	const { slug } = useParams();

	const [memberName, setMemberName] = useState<string>("");
	const [members, setMembers] = useState<ClubMember[]>();
	useEffect(() => {
		const fetchMembers = async () => {
			const data = await getClubMembers(`${slug}`, memberName);
			setMembers(data);
		};
		const newTimeoutId = setTimeout(() => {
			fetchMembers();
		}, 500);
		return () => clearTimeout(newTimeoutId);
	}, [memberName]);
	if (!Array.isArray(members)) return;

	return (
		<main className="w-full p-24 flex flex-col">
			<div className="w-full text-xl leading-6 text-gray-500 max-md:max-w-full">
				Search:
			</div>
			<SearchBar setMemberName={setMemberName} />
			<div className="grid gap-x-8 grid-cols-3 gap-y-4 my-6">
				{members
					.filter((member) => member.id !== decoded.user_id)
					.map((member, index) => (
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
