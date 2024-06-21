import * as React from "react";
import placeholderImage from "/phone_holder.webp";
interface ButtonProps {
	className: string;
	text: string;
	iconSrc: string;
}

interface TextSectionProps {
	title: string;
	description: string;
}

const ChatPlaceholder: React.FC = () => {
	const Button: React.FC<ButtonProps> = ({ className, text, iconSrc }) => (
		<button className={className}>
			<div>{text}</div>
			<img
				src={iconSrc}
				alt=""
				className="shrink-0 my-auto aspect-square w-[17px]"
			/>
		</button>
	);

	const TextSection: React.FC<TextSectionProps> = ({ title, description }) => (
		<section className="flex flex-col">
			<h2 className="self-center text-3xl font-semibold text-neutral-800">
				{title}
			</h2>
			<p className="mt-4 text-xl text-neutral-500">{description}</p>
		</section>
	);
	return (
		<main className="flex flex-col border items-center self-end py-20  mr-32 max-w-full bg-white rounded-3xl shadow-md leading-[120%] w-full max-md:mr-2.5">
			<img
				src={placeholderImage}
				alt="Decorative Image"
				className="mt-4 max-w-full aspect-[0.88] w-[242px]"
			/>
			<div className="flex justify-center items-center self-stretch px-16 mt-6 max-md:px-5 max-md:max-w-full">
				<TextSection
					title="Direct Message"
					description="Send Private message to friends in your book club."
				/>
			</div>
			<Button
				className="flex gap-2 justify-center px-14 py-4 mt-6 mb-1.5 text-xl font-semibold text-white rounded-xl shadow-sm bg-stone-900 max-md:px-5"
				text="Start New Chat"
				iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ccb0536eabf3cab71079adea8ebdaf3dfb7c4b320717ad7fc3c365a46b128b9a?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
			/>
		</main>
	);
};

export default ChatPlaceholder;
