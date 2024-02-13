import MemberCard from "@/components/Pages/Club/Members/MemberCard";
import SearchBar from "@/components/Pages/Club/Members/SearchBar";

const page = () => {
	return (
		<main className="w-full p-24 flex flex-col">
			<div className="w-full text-xl leading-6 text-gray-500 max-md:max-w-full">
				Search:
			</div>
			<SearchBar />
			<div className="grid gap-x-8 grid-cols-3 gap-y-4 my-6">
				<MemberCard
					id="1"
					email="sara.cruz@them.com"
					image="https://cdn.builder.io/api/v1/image/assets/TEMP/294aeaeffc06635dd8937f7fa92d6660a7e0314f5cf6d43425f1a785d78c0223?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/294aeaeffc06635dd8937f7fa92d6660a7e0314f5cf6d43425f1a785d78c0223?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/294aeaeffc06635dd8937f7fa92d6660a7e0314f5cf6d43425f1a785d78c0223?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/294aeaeffc06635dd8937f7fa92d6660a7e0314f5cf6d43425f1a785d78c0223?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/294aeaeffc06635dd8937f7fa92d6660a7e0314f5cf6d43425f1a785d78c0223?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/294aeaeffc06635dd8937f7fa92d6660a7e0314f5cf6d43425f1a785d78c0223?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/294aeaeffc06635dd8937f7fa92d6660a7e0314f5cf6d43425f1a785d78c0223?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/294aeaeffc06635dd8937f7fa92d6660a7e0314f5cf6d43425f1a785d78c0223?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
					name="Bessie Copper"
				/>
			</div>
		</main>
	);
};

export default page;
