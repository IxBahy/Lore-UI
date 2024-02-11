import ClubContent from "@/components/Pages/Club/Material/ClubContent";
import ClubVote from "@/components/Pages/Club/Material/ClubVote";
import CurrentlyReading from "@/components/Pages/Club/Material/CurrentlyReading";

const page = () => {
	return (
		<main>
			<CurrentlyReading />
			<ClubContent />
			<ClubVote />
		</main>
	);
};

export default page;
