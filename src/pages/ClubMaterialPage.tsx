import ClubContent from "@/components/Pages/Club/Material/ClubContent";
import ClubVote from "@/components/Pages/Club/Material/ClubVote";
import CurrentlyReading from "@/components/Pages/Club/Material/CurrentlyReading";

export const ClubMaterialPage = () => {
	return (
		<main>
			<CurrentlyReading />
			<ClubContent />
			<ClubVote />
		</main>
	);
};
