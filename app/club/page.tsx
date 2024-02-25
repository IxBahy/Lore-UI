import FilterControls from "@/components/Pages/Club/Home/FilterControls";
import Header from "@/components/Pages/Club/Home/Header";
import { SectionHeader } from "@/components/Pages/Club/Home/SectionHeader";

const page = () => {
	return (
		<main className="flex flex-col min-h-screen w-full items-center ">
			<Header />
			<FilterControls />
			<SectionHeader />
		</main>
	);
};

export default page;
