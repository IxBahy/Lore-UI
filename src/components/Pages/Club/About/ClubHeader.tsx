import { getClubMembers } from "@/apis/club";
import { joinClub } from "@/apis/student";
import React, { useEffect, useState } from "react";
import ClubNav from "./ClubNav";
import { useParams } from "react-router-dom";

const ClubHeader = ({
	clubDetails,
	id,
}: {
	clubDetails: ClubDetails;
	id: number;
}) => {
	const { slug } = useParams();
	if (!slug) return;
	const [isMember, setIsMember] = useState<boolean>(false);
	useEffect(() => {
		const check_if_memeber = (data: ClubMember[]): boolean => {
			const member = data?.filter((member) => member.id === id);
			if (member.length > 0) return true;
			return false;
		};
		const fetchMembers = async () => {
			const data = await getClubMembers(`${clubDetails.id}`);
			setIsMember(check_if_memeber(data));
		};
		fetchMembers();
	}, []);

	const handleJoinClub = async () => {
		const res = await joinClub(clubDetails.id);
		console.log(res);
		if (res === "club joined") {
			setIsMember(true);
		}
	};

	return (
		<>
			<header className="flex justify-center items-center px-16 py-8 w-full bg-teal-900 max-md:px-5 max-md:max-w-full">
				<div className="flex flex-col items-start w-full max-w-[1171px] max-md:max-w-full">
					<div className="flex gap-1.5 text-base font-semibold leading-5 text-neutral-400 max-md:flex-wrap max-md:max-w-full">
						<div className="flex gap-1.5 justify-between whitespace-nowrap">
							<div className="grow">Home</div>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/566bec3210216144382f6527e65e1fec33681e03bbca2f56fd421e429c5ff31b?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								className="my-auto w-4 aspect-square"
							/>
						</div>
						<div className="flex-auto">Popular Clubs</div>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f5ad7c45d3584e2b8fd01ad9dc5e596c13a8c1646bc384e26d9e96ad8270271?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
							className="my-auto w-4 aspect-square"
						/>
						<div className="grow my-auto whitespace-nowrap">
							Time Travelers Book Club
						</div>
					</div>
					<div className="self-stretch mt-6 max-md:max-w-full">
						<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
							<div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
								<div className="flex flex-col items-start mt-20 text-white max-md:mt-10 max-md:max-w-full">
									<div className="justify-center px-8 py-2 text-xs font-medium tracking-normal leading-4 text-center whitespace-nowrap rounded-sm bg-slate-400 max-md:px-5">
										POPULAR
									</div>
									<div className="self-stretch mt-3 mr-4 text-3xl font-bold leading-9 max-md:mr-2.5 max-md:max-w-full">
										{clubDetails.name}
									</div>
									<div className="self-stretch mt-3 text-base leading-5 text-neutral-200 max-md:max-w-full">
										{clubDetails.description}
									</div>
									<div className="flex gap-5 justify-between mt-2 text-sm leading-4">
										<div className="flex gap-1 items-center whitespace-nowrap">
											<img
												loading="lazy"
												src="https://cdn.builder.io/api/v1/image/assets/TEMP/49030370f497e9d42ffd03a14e5c3328d4d08b8a7e7ef7fba0ea4d0a00de05ad?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
												className="self-stretch w-6 aspect-square"
											/>
											<div className="self-stretch my-auto font-bold">4.5</div>
											<div className="grow self-stretch my-auto font-medium text-center underline">
												(
												<span className="underline">
													{(Math.random() * 50).toFixed()} Reviews
												</span>
												)
											</div>
										</div>
										<div className="flex gap-1.5 py-0.5">
											<div className="grow whitespace-nowrap">Created By</div>
											<div className="font-medium underline">
												{clubDetails.owner.first_name +
													" " +
													clubDetails.owner.last_name}
											</div>
											<img
												loading="lazy"
												src="https://cdn.builder.io/api/v1/image/assets/TEMP/96c2e328566ed4c51ccb7f94c9f7672a13152f59f1dfb7f22f8c1904397241d4?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
												className="aspect-[0.95] w-[19px]"
											/>
										</div>
									</div>
									<div className="flex gap-4 mt-10 text-xl font-semibold leading-6 text-white whitespace-nowrap">
										<div className="flex gap-2 justify-center self-start px-10 py-3.5 rounded-md border border-white border-solid max-md:px-5">
											<img
												loading="lazy"
												src="https://cdn.builder.io/api/v1/image/assets/TEMP/c94f58058674c1b2712405d67a155888d02899489779e71a60100a7551e4c2ae?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
												className="my-auto w-5 aspect-square"
											/>
											<div>Chat</div>
										</div>
										{isMember ? (
											<div className="flex gap-2 justify-between px-16 py-4 rounded-md bg-neutral-800 max-md:px-5">
												<div className="grow">Joined</div>
												<img
													loading="lazy"
													src="https://cdn.builder.io/api/v1/image/assets/TEMP/7587357d4d438a6615093365d5d71ad12cd8a65c178c032e6e5b1ca0fc95f3a6?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
													className="my-auto aspect-[1.28] fill-white w-[18px]"
												/>
											</div>
										) : (
											<button
												onClick={() => handleJoinClub()}
												className="flex gap-2 justify-between px-16 py-4 rounded-md bg-neutral-800 max-md:px-5"
											>
												<div className="grow">Join Now</div>
											</button>
										)}
									</div>
								</div>
							</div>
							<div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
								<img
									loading="lazy"
									srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/05980d0b65c62ade0da01c427e2491ccf0141bd0e261af83e6e006cc5f0b1b41?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/05980d0b65c62ade0da01c427e2491ccf0141bd0e261af83e6e006cc5f0b1b41?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/05980d0b65c62ade0da01c427e2491ccf0141bd0e261af83e6e006cc5f0b1b41?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/05980d0b65c62ade0da01c427e2491ccf0141bd0e261af83e6e006cc5f0b1b41?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/05980d0b65c62ade0da01c427e2491ccf0141bd0e261af83e6e006cc5f0b1b41?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/05980d0b65c62ade0da01c427e2491ccf0141bd0e261af83e6e006cc5f0b1b41?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/05980d0b65c62ade0da01c427e2491ccf0141bd0e261af83e6e006cc5f0b1b41?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/05980d0b65c62ade0da01c427e2491ccf0141bd0e261af83e6e006cc5f0b1b41?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									className="grow w-full aspect-[1.35] max-md:mt-2 max-md:max-w-full"
								/>
							</div>
						</div>
					</div>
					<div className="flex gap-5 justify-between mt-6 text-sm leading-4 text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
						<div className="flex gap-2.5 justify-between">
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3423c4c9df40a47b2085e3dc8202ca2de06c64e22d0efb36cdb0ad4b877be21?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								className="aspect-square w-[29px]"
							/>
							<div className="grow my-auto">
								<span className="text-sm leading-4">Instructor</span>
								<span className=""> : </span>
								<span className="text-sm font-medium leading-4">
									John Natoli
								</span>
							</div>
						</div>
						<div className="flex gap-2.5 justify-between">
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/af967db6eeff7f593e3da6da78a80cfeeb7e2dd8b445b6bd7af2ac47ee0bb1ac?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								className="aspect-square w-[29px]"
							/>
							<div className="grow my-auto">
								<span className="text-sm leading-4">20,000+</span>{" "}
								<span className="text-sm font-medium leading-4">Learners</span>
							</div>
						</div>
						<div className="flex gap-2.5 my-auto text-white">
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/27e99eec9ee5eb8a5838bfb29bf840bb9b4d55006a851849e2668152a2452cbd?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								className="w-6 aspect-square"
							/>
							<div className="grow my-auto">
								<span className="text-sm leading-4">Duration : </span>
								<span className="text-sm font-medium leading-4">
									{clubDetails.roadmap.weeks_count} weeks
								</span>
							</div>
						</div>
					</div>
				</div>
			</header>
			<ClubNav slug={slug} isMember={isMember} />
		</>
	);
};

export default ClubHeader;
