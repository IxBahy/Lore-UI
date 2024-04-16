import React from "react";

interface ClubReviewProps {
	numberOfStars: number;
	profileImage: string;
	name: string;
	reviewText: string;
	date: string;
}

function ClubReview({
	numberOfStars,
	profileImage,
	name,
	reviewText,
	date,
}: ClubReviewProps) {
	return (
		<form className="flex gap-5 justify-between mt-16 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
			<img
				loading="lazy"
				srcSet={profileImage}
				className="self-start rounded-full aspect-square w-[60px]"
				alt=""
			/>
			<div className="flex flex-col flex-1 items-start px-5 max-md:max-w-full">
				<header className="flex gap-3 items-center whitespace-nowrap leading-[120%]">
					<h2 className="grow self-stretch text-2xl font-medium text-right text-neutral-800">
						{name}
					</h2>
					<span className="self-stretch my-auto text-lg leading-6 text-right text-zinc-700 text-opacity-80">
						{" "}
						•{" "}
					</span>
					<span className="grow self-stretch my-auto text-xl text-neutral-500">
						{date}
					</span>
				</header>
				{numberOfStars} STARS HERE
				<div className="self-stretch mt-5">
					<p className="text-xl tracking-tight leading-8 text-zinc-700 text-opacity-80 max-md:max-w-full">
						{reviewText}
					</p>
				</div>
			</div>
		</form>
	);
}

export default ClubReview;
