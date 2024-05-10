import { addFriends, getFriends } from "@/apis/student";
import Header from "@/components/Pages/Profile/Header";
import Loader from "@/components/ui/Loader";

import React, { PropsWithChildren, useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { set } from "zod";

export const StudentLayout = () => {
	const token = localStorage.getItem("access_token") ?? "";
	const navigate = useNavigate();
	const { slug } = useParams();

	if (!slug) return;
	if (!token) {
		navigate("/login");
	}
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [refresh, setRefresh] = useState<boolean>(false);
	const [friends, setfriends] = useState<Friend[]>([]);
	useEffect(() => {
		setIsLoading(true);
		const getUserFirendsList = async () => {
			const res = await getFriends();
			setfriends(res);
		};
		getUserFirendsList();
		// setTimeout(() => {}, 400);
		setIsLoading(false);
	}, [refresh]);

	const handleAddFriend = (): void => {
		addFriends(slug);
		setRefresh((refresh) => !refresh);
	};
	const isFriend = !!friends.find((friend) => String(friend.id) === slug);
	console.log(isFriend, friends);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<main className="flex flex-col min-h-screen w-full items-center">
					<header>
						<div className="relative">
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfa1bd806d60d56c798aed22431ff644edc835f069adea770b865ceef6e75bd5?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								alt="Decorative image"
								className="w-full aspect-[3.57]"
							/>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55c00d2d5bb1c8954b1ebc0a6794f7ac58a5f64e27e1b64d8ef0d322a91ae60?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								alt="Profile"
								className="z-20 absolute -bottom-20 ml-32 max-w-full rounded-full aspect-[1.01] w-[217px] max-md:ml-2.5"
							/>
						</div>
					</header>
					<nav className="flex flex-col z-10 sticky top-0 justify-evenly items-center px-16  w-full text-xl leading-6 whitespace-nowrap bg-slate-100 text-neutral-800 max-md:px-5 max-md:max-w-full">
						<div className="flex flex-col ml-16 max-w-full w-full">
							<div className="flex gap-5  max-md:flex-wrap w-full justify-evenly">
								<div
									className={` text-center py-7 w-40 border-b-4 border-solid border-teal-700 font-semibold text-teal-700 `}
								>
									Clubs
								</div>
								<div className="flex justify-center items-center ">
									{!isFriend && (
										<button
											onClick={handleAddFriend}
											className="mx-4 border border-green-700 min-w-16 px-6 rounded-sm bg-slate-50 h-1/2 transition-all duration-300 hover:bg-green-700 hover:text-gray-100"
										>
											Add Friend
										</button>
									)}
									<button className="mx-4 border border-blue-800 min-w-16 px-6 rounded-sm bg-slate-50 h-1/2 transition-all duration-300 hover:bg-blue-400 hover:text-gray-100">
										Chat
									</button>
								</div>
								{/* <Link
									to={`/profile/`}
									className={`grow text-center py-7 min-w-40   ${
										lastNameInPath === undefined || lastNameInPath === ""
											? "border-b-4 border-solid border-teal-700 font-semibold text-teal-700 "
											: ""
									}`}
								>
									Clubs
								</Link> */}

								{/* <Link
									to={`/profile/progress`}
									className={`grow my-auto flex-auto  py-7 min-w-40 text-center ${
										lastNameInPath === "progress"
											? "border-b-4 border-solid border-teal-700 font-semibold text-teal-700"
											: ""
									}`}
								>
									Progress
								</Link> */}

								{/* <Link
									to={`/profile/friends`}
									className={`grow my-auto flex-auto py-7 min-w-40 text-center ${
										lastNameInPath === "friends"
											? "border-b-4 border-solid border-teal-700 font-semibold text-teal-700"
											: ""
									}`}
								>
									Friends
								</Link> */}
							</div>
						</div>
					</nav>

					<Outlet />
				</main>
			)}
		</>
	);
};
