import { Link, useLocation } from "react-router-dom";

const ClubNav = ({ slug }: { slug: string }) => {
	let location = useLocation();
	const pathName = location.pathname.split("/");
	const lastNameInPath = pathName.pop();
	return (
		<nav className="flex flex-col z-50 sticky top-0 items-center px-16  w-full text-xl leading-6 whitespace-nowrap bg-slate-100 text-neutral-800 max-md:px-5 max-md:max-w-full">
			<div className="flex flex-col max-w-full w-[597px]">
				<div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
					<Link
						to={`/club/${slug}/`}
						className={`grow text-center py-7 min-w-40   ${
							pathName.length === 2
								? "border-b-4 border-solid border-teal-700 font-semibold text-teal-700 "
								: ""
						}`}
					>
						About Club
					</Link>
					<Link
						to={`/club/${slug}/material`}
						className={`grow text-center py-7 min-w-40   ${
							lastNameInPath === "material"
								? "border-b-4 border-solid border-teal-700 font-semibold text-teal-700 "
								: ""
						}`}
					>
						Material
					</Link>
					<Link
						to={`/club/${slug}/members`}
						className={`grow text-center py-7 min-w-40   ${
							lastNameInPath === "members"
								? "border-b-4 border-solid border-teal-700 font-semibold text-teal-700 "
								: ""
						}`}
					>
						Members
					</Link>
					<Link
						to={`/club/${slug}/reviews`}
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
