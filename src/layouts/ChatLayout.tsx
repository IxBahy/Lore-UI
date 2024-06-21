import { getChats, getFriends, getStudentClubs } from "@/apis/student";
import ChatView from "@/components/Chat/ChatView";
import { JwtPayload, jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

type ChatViewProps = {
	notificationCount?: number;
	imgSrc: string;
	name: string;
	message: string;
	time: string;
	alt: string;
};
const ChatLayout = () => {
	const token = localStorage.getItem("access_token") ?? "";

	const navigate = useNavigate();
	if (!token) {
		navigate("/login");
	}
	const decoded = jwtDecode<
		JwtPayload & { user_id: number; username: string; type: string }
	>(token);
	const slug = useParams()["slug"];
	const [currentChat, setCurrentChat] = useState<string>();
	const [friends, setFriends] = useState<Chat[]>([]);
	const [clubs, setClubs] = useState<Chat[]>([]);
	useEffect(() => {
		if (slug) {
			setCurrentChat(slug);
		}
		const fetchDetails = async () => {
			const chats = await getChats();
			const clubsData = chats.filter((chat) => chat.is_channel);
			const friendsData = chats.filter((chat) => !chat.is_channel);
			setClubs(clubsData);
			setFriends(friendsData);
		};
		fetchDetails();
	}, []);
	console.log(currentChat);

	return (
		<main className="grid grid-cols-3  w-full  px-16 py-px mt-16 max-w-full text-base font-bold leading-5 text-orange-300  max-md:mt-10">
			<div className="col-span-1">
				<div className="flex flex-col leading-[120%] max-w-[507px]">
					<header className="flex justify-center items-center px-16 py-5 w-full text-xl font-semibold text-white rounded-xl shadow-sm bg-stone-900 max-md:px-5 max-md:max-w-full">
						<div className="flex gap-2">
							<div>Start New Chat</div>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/356f6a6b0cfa7e5283c911bffe5a96773e1307eb43d3ebaa735d7dca95ba8471?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								alt=""
								className="shrink-0 my-auto aspect-square w-[17px]"
							/>
						</div>
					</header>

					<section className="flex flex-col px-6 py-11 mt-3.5 w-full bg-white rounded-3xl border shadow-md max-md:pl-5 max-md:max-w-full">
						<div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
							<div className="flex flex-col whitespace-nowrap">
								<h2 className="text-2xl font-bold text-neutral-800">Clubs</h2>
								{clubs.map((club) => (
									<ChatView
										key={club.id}
										id={club.id}
										img_url={club.img_url}
										name={`${club.name}`}
										is_channel={club.is_channel}
									/>
								))}
							</div>
						</div>
					</section>
					<section className="flex flex-col px-6 py-11 mt-3.5 w-full  bg-white rounded-3xl border shadow-md  max-md:pl-5 max-md:max-w-full">
						<div className="flex gap-5 justify-between max-md:flex-wrap w-full  ">
							<div className="flex flex-col whitespace-nowrap w-full  ">
								<h2 className="text-2xl font-bold text-neutral-800">People</h2>
								{friends.map((friend) => (
									<ChatView
										key={friend.id}
										id={friend.id}
										img_url={friend.img_url}
										name={`${friend.name}`}
										is_channel={friend.is_channel}
									/>
								))}
							</div>
						</div>
					</section>
				</div>
			</div>
			<div className="col-span-2 flex flex-col justify-center items-center w-full">
				<Outlet />
			</div>
		</main>
	);
};

export default ChatLayout;
