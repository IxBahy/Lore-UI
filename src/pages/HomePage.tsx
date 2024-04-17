import AppSection from "@/components/Pages/Home/AppSection";
import Carousel from "@/components/Pages/Home/Carousel";
import Features from "@/components/Pages/Home/Features";
import PopularClubs from "@/components/Pages/Home/PopularClubs";
import Presentation from "@/components/Pages/Home/Presentation";
import Split from "@/components/Pages/Home/Split";

export function HomePage() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-between ">
				<Presentation />
				<Split />
				<Features />
				<PopularClubs />
				<Carousel />
				<AppSection />
			</main>
		</>
	);
}
