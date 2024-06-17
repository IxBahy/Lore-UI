import ChatView from "@/components/Chat/ChatView";
import React from "react";
import { Outlet } from "react-router-dom";

type ChatViewProps = {
	notificationCount?: number;
	imgSrc: string;
	name: string;
	message: string;
	time: string;
	alt: string;
};
const ChatLayout = () => {
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
								<h2 className="text-2xl font-bold text-neutral-800">Groups</h2>
								<ChatView
									id={"2"}
									imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b372dc7bead4609b0dee49cae20e0583cbe5a293419e87d7696e63489f7c7d44?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									name="Robert"
									message="Hahahahah!"
									time="Today, 9.52pm"
									alt="Robert's image"
								/>
								<ChatView
									id={"2"}
									imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/00b0780283d42bb28a70b06e2cebbf88b152ef2e105dc6b71524f5c9c67d1158?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									name="Jenny"
									message="Hahahahah!"
									time="Yesterday, 12.31pm"
									alt="Jenny's image"
									notificationCount={1}
								/>
								<ChatView
									id={"2"}
									imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3389b0af6688375867f8584efd0eb047fc61cedb757a6e9d9e12cf9b6cdb9658?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									name="Jon"
									message="That's a good idea. I'll have to try that. So..."
									time="Wednesday, 9.12am"
									alt="Jon's image"
								/>
								<ChatView
									id={"2"}
									imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f354f8f04fcb105f1f6239e5494e1daadb222ee4780c169f5c7f9ced7c09bcf9?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									name="Bessie"
									message="That's a good idea. I'll have to try that. So..."
									time="Wednesday, 9.12am"
									alt="Bessie's image"
								/>
							</div>
						</div>
					</section>
					<section className="flex flex-col px-6 py-11 mt-3.5 w-full  bg-white rounded-3xl border shadow-md  max-md:pl-5 max-md:max-w-full">
						<div className="flex gap-5 justify-between max-md:flex-wrap w-full  ">
							<div className="flex flex-col whitespace-nowrap w-full  ">
								<h2 className="text-2xl font-bold text-neutral-800">People</h2>
								<ChatView
									id={"2"}
									imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b372dc7bead4609b0dee49cae20e0583cbe5a293419e87d7696e63489f7c7d44?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									name="Robert"
									message="Hahahahah!"
									time="Today, 9.52pm"
									alt="Robert's image"
								/>
								<ChatView
									id={"2"}
									imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/00b0780283d42bb28a70b06e2cebbf88b152ef2e105dc6b71524f5c9c67d1158?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									name="Jenny"
									message="Hahahahah!"
									time="Yesterday, 12.31pm"
									alt="Jenny's image"
									notificationCount={1}
								/>
								<ChatView
									id={"2"}
									imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3389b0af6688375867f8584efd0eb047fc61cedb757a6e9d9e12cf9b6cdb9658?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									name="Jon"
									message="That's a good idea. I'll have to try that. So..."
									time="Wednesday, 9.12am"
									alt="Jon's image"
								/>
								<ChatView
									id={"2"}
									imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f354f8f04fcb105f1f6239e5494e1daadb222ee4780c169f5c7f9ced7c09bcf9?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									name="Bessie"
									message="That's a good idea. I'll have to try that. So..."
									time="Wednesday, 9.12am"
									alt="Bessie's image"
								/>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div className="col-span-2 flex flex-col justify-center items-center">
				<Outlet />
			</div>
		</main>
	);
};

export default ChatLayout;
