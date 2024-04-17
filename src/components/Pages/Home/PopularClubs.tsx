import { getClubs } from "@/apis/club";
import Card from "@/components/ui/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const PopularClubs = () => {
	const [clubsArray, setClubArray] = useState<Club[] | undefined>();

	useEffect(() => {
		const fetchClubs = async () => {
			const data = await getClubs();
			setClubArray(data);
		};
		fetchClubs();
	}, []);
	if (!clubsArray) return;
	return (
		<>
			<div className="flex flex-col px-20 py-12 mt-44 w-full bg-slate-400 bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
				<div className="flex gap-1.5 self-start mt-6 ml-12 text-base font-bold leading-5 text-orange-300 max-md:ml-2.5">
					<div className="my-auto w-12 h-0.5 bg-orange-300 rounded-none" />
					<div className="flex-auto">POPULAR CLUBS</div>
				</div>
				<h2 className="self-start mt-1.5 ml-12 text-4xl font-semibold leading-10 text-neutral-800 max-md:ml-2.5">
					Join Clubs
				</h2>
				<div className="flex gap-5 justify-between self-center px-6 py-3 mt-16 max-w-full whitespace-nowrap rounded-xl border border-solid border-[color:var(--gray-01,#A7A7A9)] leading-[120%] w-[1098px] max-md:flex-wrap max-md:pl-5 max-md:mt-10">
					<input
						className="flex gap-2 justify-center text-base w-full h-14 px-5 py-3 font-semibold leading-6 text-neutral-800 rounded-md bg-transparent max-md:gap-1.5 max-md:px-3 max-md:py-2.5 max-md:text-sm max-md:leading-5 max-md:rounded-xl max-md:h-12 max-md:mt-10 max-md:pl-5 max-md:pr-3 max-md:py-3 max-md:w-full max-md:mt-10"
						placeholder="book club you can join 23.000+"
					/>
					<Link
						to={"/club"}
						className="justify-center px-16 py-3 text-xl font-semibold text-white rounded-md bg-stone-900 max-md:px-5"
					>
						Explore Now
					</Link>
				</div>
				<div className="self-center mt-12 w-full max-md:pr-5 max-md:mt-10 max-md:max-w-full">
					<section className="flex mx-16 mt-8 gap-5 ">
						{clubsArray.map((club, index) => (
							<div key={index} className="flex-grow w-full md:w-full lg:w-3/12">
								<Card {...club} />
							</div>
						))}
					</section>
				</div>

				<div className="flex gap-2 justify-center self-center px-10 py-5 mt-12 mb-5 text-xl font-semibold leading-6 text-white whitespace-nowrap rounded-md bg-neutral-800 max-md:px-5 max-md:mt-10">
					<Link to={"/club"} className="grow">
						Browse all Clubs
					</Link>
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/facd7238da559c416ee7a49aa3b480054f10e555d0547b0b011e9bcc54c1c6f2?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
						className="w-6 aspect-square"
					/>
				</div>
			</div>
		</>
	);
};

export default PopularClubs;
