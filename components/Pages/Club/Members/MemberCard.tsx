import Link from "next/link";
interface Props {
	id: string;
	image: string;
	name: string;
	email: string;
	isFriendCard?: boolean;
}
const MemberCard = ({
	email,
	id,
	image,
	name,
	isFriendCard = false,
}: Props) => {
	return (
		<>
			<div className="flex flex-col grow items-center pb-5 mx-auto w-full font-semibold bg-white  rounded-lg leading-[120%] max-md:mt-7">
				<img
					loading="lazy"
					srcSet={image}
					className="self-stretch w-full aspect-[1.89] rounded-lg"
					alt="Profile Image"
				/>
				<div className="mt-5 text-2xl whitespace-nowrap text-neutral-800">
					{name}
				</div>
				<div className="mt-1 text-base whitespace-nowrap text-neutral-500">
					<span className="text-neutral-500">@</span>{" "}
					<span className="text-neutral-500">{email}</span>
				</div>
				<div className="flex gap-3.5 mt-9 text-xl text-center whitespace-nowrap">
					{!isFriendCard && (
						<button
							className="flex gap-2 items-center px-6 justify-between py-3  text-white bg-teal-700 rounded-md "
							aria-label="Add Friend"
						>
							<div className="grow ">Add Friend</div>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/1697590af0209260919a9e1c2fc4a10fea0a10aa72a2f99548005318679dca23?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								className="my-auto w-4 aspect-square"
								alt=""
							/>
						</button>
					)}
					<button
						className="flex gap-2 justify-between items-center py-3 px-6 text-teal-700 rounded-md border border-solid border-[color:var(--green-04,#297373)]"
						aria-label="Message"
					>
						<div className="grow">Message</div>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/455611fe420b8c71f6efcacbc823cc579bd7a53a7a6dd73459b2662907645de9?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
							className="my-auto aspect-square w-[21px]"
							alt=""
						/>
					</button>
				</div>
				<hr className="shrink-0 self-stretch mt-12 h-px bg-gray-200 max-md:mt-10" />
				<Link
					href={`#/ID HERE`}
					className="mt-6 text-lg tracking-normal leading-7 text-center text-neutral-800"
				>
					View profile
				</Link>
			</div>
		</>
	);
};

export default MemberCard;
