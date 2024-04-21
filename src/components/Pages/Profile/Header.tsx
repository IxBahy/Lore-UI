import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Header = () => {
	const { slug } = useParams();
	let location = useLocation();
	const pathName = location.pathname.split("/");
	const lastNameInPath = pathName.pop();
	return (
		<>
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
				<div className="flex flex-col ml-16 max-w-full w-1/2">
					<div className="flex gap-5  max-md:flex-wrap max-md:max-w-full">
						<Link
							to={`/profile/${slug}/`}
							className={`grow text-center py-7 min-w-40   ${
								pathName.length === 2
									? "border-b-4 border-solid border-teal-700 font-semibold text-teal-700 "
									: ""
							}`}
						>
							Clubs
						</Link>
						<Link
							to={`/profile/${slug}/progress`}
							className={`grow my-auto flex-auto  py-7 min-w-40 text-center ${
								lastNameInPath === "progress"
									? "border-b-4 border-solid border-teal-700 font-semibold text-teal-700"
									: ""
							}`}
						>
							Progress
						</Link>

						<Link
							to={`/profile/${slug}/friends`}
							className={`grow my-auto flex-auto py-7 min-w-40 text-center ${
								lastNameInPath === "friends"
									? "border-b-4 border-solid border-teal-700 font-semibold text-teal-700"
									: ""
							}`}
						>
							Friends
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
