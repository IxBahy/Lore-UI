"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ClubNav = ({ params }: { params: { slug: number } }) => {
	const pathName = usePathname().split("/");
	const lastNameInPath = pathName.pop();
	return (
		<nav className="flex flex-col z-50 sticky top-0 items-center px-16  w-full text-xl leading-6 whitespace-nowrap bg-slate-100 text-neutral-800 max-md:px-5 max-md:max-w-full">
			<div className="flex flex-col max-w-full w-[597px]">
				<div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
					<Link
						href={`/club/${params.slug}/`}
						className={`grow text-center py-7 min-w-40   ${
							pathName.length === 2
								? "border-b-4 border-solid border-teal-700 font-semibold text-teal-700 "
								: ""
						}`}
					>
						About Club
					</Link>
					<Link
						href={`/club/${params.slug}/material`}
						className={`grow text-center py-7 min-w-40   ${
							lastNameInPath === "material"
								? "border-b-4 border-solid border-teal-700 font-semibold text-teal-700 "
								: ""
						}`}
					>
						Material
					</Link>
					<Link
						href={`/club/${params.slug}/members`}
						className={`grow text-center py-7 min-w-40   ${
							lastNameInPath === "members"
								? "border-b-4 border-solid border-teal-700 font-semibold text-teal-700 "
								: ""
						}`}
					>
						Members
					</Link>
					<Link
						href={`/club/${params.slug}/reviews`}
						className={`grow text-center py-7 min-w-40   ${
							lastNameInPath === "reviews"
								? "border-b-4 border-solid border-teal-700 font-semibold text-teal-700 "
								: ""
						}`}
					>
						Reviews
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default ClubNav;
