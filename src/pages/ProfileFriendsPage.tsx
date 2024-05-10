import { getFriends } from "@/apis/student";
import MemberCard from "@/components/Pages/Club/Members/MemberCard";
import React, { useEffect, useState } from "react";

export const ProfileFriendsPage = () => {
	const [friends, setfriends] = useState<Friend[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true);
		const getUserFirendsList = async () => {
			const res = await getFriends();
			setfriends(res);
		};
		getUserFirendsList();
		setIsLoading(false);
	}, []);

	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<main>
			<div className="grid gap-x-8 grid-cols-3 gap-y-4 my-6 mx-8">
				{friends.map((item, index) => (
					<MemberCard
						key={index}
						isFriendCard={true}
						id={item.id}
						email={item.email}
						image={item.img_url}
						name={`${item.first_name} ${item.last_name}`}
					/>
				))}
			</div>
		</main>
	);
};
