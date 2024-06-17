import React from "react";
import { Link } from "react-router-dom";
type ChatPeopleProps = {
	notificationCount?: number;
	imgSrc: string;
	name: string;
	message: string;
	time: string;
	alt: string;
	id: string;
};
const ChatView = ({
	id,
	imgSrc,
	name,
	message,
	time,
	alt,
	notificationCount,
}: ChatPeopleProps) => {
	return (
		<Link
			to={id}
			className="flex  justify-between mt-6 w-full max-md:flex-wrap max-md:max-w-full"
		>
			<div className="flex gap-4 whitespace-nowrap">
				<img
					loading="lazy"
					src={imgSrc}
					alt={alt}
					className="shrink-0 rounded-full aspect-[1.02] w-[51px]"
				/>
				<div className="flex flex-col py-0.5">
					<div className="text-base font-semibold text-neutral-800">{name}</div>
					<div className="mt-3 text-sm text-ellipsis text-neutral-400">
						{message}
					</div>
				</div>
			</div>
			<div className="flex flex-col my-auto">
				<div className="text-sm text-neutral-500">{time}</div>
				{notificationCount !== undefined && (
					<div className="justify-center items-center self-end mt-2.5 w-5 h-5 text-xs font-semibold text-center text-white whitespace-nowrap bg-red-700 rounded-3xl text-ellipsis max-md:mr-2.5">
						{notificationCount}
					</div>
				)}
			</div>
		</Link>
	);
};

export default ChatView;
