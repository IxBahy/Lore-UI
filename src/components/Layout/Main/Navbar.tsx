import { useAuthStore } from "@/store/zustand";
import { LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
	const token = localStorage.getItem("access_token") ?? "";
	const { isAuthenticated, setIsAuthenticated, setUserToken, setRefreshToken } =
		useAuthStore();
	const nav = useNavigate();
	const handleUserLogOut = () => {
		setIsAuthenticated(false);
		setUserToken("");
		setRefreshToken("");
		localStorage.removeItem("access_token");
		localStorage.removeItem("refresh_token");
		nav("/login");
	};
	let location = useLocation();
	const pathName = location.pathname.slice(1).split("/");
	const lastNameInPath = pathName.length > 0 ? pathName.pop() : pathName;

	return (
		<div className="flex bg-b justify-center  items-center px-16 py-7 w-full text-xl font-semibold leading-6 bg-white shadow-sm max-md:px-5 max-md:max-w-full">
			<div className="flex gap-5 justify-between items-center w-full max-w-[1264px] max-md:flex-wrap max-md:max-w-full">
				<Link
					to={"/"}
					className="flex gap-3.5 justify-between self-stretch px-1 text-3xl font-bold text-teal-700 whitespace-nowrap"
				>
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/84af958f1422b347e84c737c9258d2956449e6eabaf442df6d217e44a07b9325?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
						className="my-auto aspect-[0.81] w-[33px]"
					/>
					<div className="text-3xl">Lore</div>
				</Link>

				{token && (
					<div className="flex gap-5 justify-between self-stretch my-auto text-neutral-800 max-md:flex-wrap max-md:max-w-full">
						<Link
							to={"/"}
							className={`font-bold ${
								lastNameInPath === "" ? "text-teal-700" : ""
							}`}
						>
							Home
						</Link>

						<Link
							to={"/about"}
							className={`font-bold ${
								lastNameInPath === "about" ? "text-teal-700" : ""
							}`}
						>
							About Us
						</Link>

						<Link
							to={"/club"}
							className={`font-bold ${
								lastNameInPath === "club" ? "text-teal-700" : ""
							}`}
						>
							Join Book Club
						</Link>
						<Link
							to={"/profile"}
							className={`font-bold ${
								Array.isArray(pathName) && pathName.length > 0
									? "text-teal-700"
									: ""
							}`}
						>
							My Clubs
						</Link>
						<button onClick={handleUserLogOut}>
							<LogOut />{" "}
						</button>
					</div>
				)}
				{!token && (
					<div className="flex gap-2 self-stretch my-auto whitespace-nowrap">
						<Link
							to={"/login"}
							className="grow justify-center px-8 py-2.5 rounded-3xl border-2 border-solid border-[color:var(--green-04,#297373)] text-neutral-800 max-md:px-5"
						>
							Login
						</Link>
						<Link
							to={"/register"}
							className="grow justify-center px-5 py-2.5 text-white bg-teal-700 rounded-3xl"
						>
							Create Account
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
