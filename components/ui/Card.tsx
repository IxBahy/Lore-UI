import { cn } from "@/lib/utils";
import Link from "next/link";

const Card = ({
	imageSrc,
	imageAlt,
	title,
	description,
	joinIconSrc,
	joinIconAlt,
}) => (
	<div className="border flex flex-col px-2.5 pt-2.5  pb-5 w-full bg-white rounded-xl shadow-sm">
		<img
			src={imageSrc}
			alt={imageAlt}
			className="w-full rounded-md aspect-[1.19]"
		/>
		<h3 className="mt-4 ml-3.5 text-base font-semibold text-neutral-800">
			{title}
		</h3>
		<p className="mt-3 text-xs text-neutral-400">{description}</p>
		<div className="mt-3.5 h-px bg-orange-300 bg-opacity-50"></div>
		<div className="flex gap-5 justify-between items-center mt-5">
			<div className="flex gap-1 items-center text-xs font-semibold bg-white text-neutral-400">
				<img
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/43d47fdb19748c6b748637fb6c41ca81bcc6932ad068ebfdcf45e97a0dc3a910?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
					alt="Student icon"
					className="aspect-[2.78] w-[72px]"
				/>
				<span>Students</span>
			</div>
			<button className="flex gap-1 items-center px-5 py-1.5 text-xl font-bold text-teal-700 whitespace-nowrap rounded-md bg-teal-700 bg-opacity-10 border border-[color:var(--green-04,#297373)]">
				<span>Join</span>
				<img
					src={joinIconSrc}
					alt={joinIconAlt}
					className="aspect-[1.04] w-[25px]"
				/>
			</button>
		</div>
	</div>
);

export default Card;
