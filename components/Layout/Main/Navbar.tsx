import Link from "next/link";

const Navbar = () => {
	return (
		<div className="flex justify-center items-center px-16 py-7 w-full text-xl font-semibold leading-6 bg-white shadow-sm max-md:px-5 max-md:max-w-full">
			<div className="flex gap-5 justify-between items-center w-full max-w-[1264px] max-md:flex-wrap max-md:max-w-full">
				<div className="flex gap-3.5 justify-between self-stretch px-1 text-3xl font-bold text-teal-700 whitespace-nowrap">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/84af958f1422b347e84c737c9258d2956449e6eabaf442df6d217e44a07b9325?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
						className="my-auto aspect-[0.81] w-[33px]"
					/>
					<div>Lore</div>
				</div>
				<div className="flex gap-5 justify-between self-stretch my-auto text-neutral-800 max-md:flex-wrap max-md:max-w-full">
					<Link href={"#"} className="font-bold text-teal-700">
						Home
					</Link>
					<Link href={"#"}>About Us</Link>
					<Link href={"#"} className="flex-auto">
						Join Book Club
					</Link>
					<Link href={"#"} className="flex-auto">
						My Clubs
					</Link>
				</div>
				<div className="flex gap-2 self-stretch my-auto whitespace-nowrap">
					<Link
						href={"#"}
						className="grow justify-center px-8 py-2.5 rounded-3xl border-2 border-solid border-[color:var(--green-04,#297373)] text-neutral-800 max-md:px-5"
					>
						Login
					</Link>
					<Link
						href={"#"}
						className="grow justify-center px-5 py-2.5 text-white bg-teal-700 rounded-3xl"
					>
						Create Account
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
