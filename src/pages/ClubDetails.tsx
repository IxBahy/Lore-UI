import ClubDetails from "@/components/Pages/Club/About/ClubDetails";
import ClubInstructor from "@/components/Pages/Club/About/ClubInstructor";
import ClubRoadmap from "@/components/Pages/Club/About/ClubRoadmap";
import Recommendations from "@/components/Pages/Club/Recommendations";
import { use } from "react";
import { getClubDetails, getClubs } from "@/apis/club";

const page = ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	const clubData = use(getClubs());
	console.log(slug);

	if (!slug || typeof !slug === "string" || Array.isArray(slug)) return;

	const clubDetails = use(getClubDetails(slug));
	return (
		<>
			<div className="flex z-10 justify-center items-center self-end px-9 mt-24 mr-20 w-28 h-28 bg-white border-solid shadow-sm border-[2.719px] border-[color:var(--green-04,#297373)] rounded-[90.625px] max-md:px-5 max-md:mt-10 max-md:mr-2.5">
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6d103029ad2b581b17ac2c7087fb20011d3a7430fad906c7ea9c095b90e7076?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
					className="w-full aspect-square"
				/>
			</div>
			<ClubDetails clubDetails={clubDetails} />
			<ClubRoadmap clubDetails={clubDetails} />
			<ClubInstructor owner={clubDetails.owner} />
			<Recommendations clubs={clubData} />
		</>
	);
};

export default page;
