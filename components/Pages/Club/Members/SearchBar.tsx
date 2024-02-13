const SearchBar = () => {
	return (
		<>
			<label
				htmlFor="searchInput"
				className="flex flex-col relative justify-center items-start ps-12 h-20 rounded-lg mt-3.5 w-full text-base leading-5 text-gray-400 whitespace-nowrap bg-white border-solid border-[1.764px] border-[color:var(--gray-white,#E9EAF0)] max-md:px-5 max-md:max-w-full"
			>
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b0b9c264f11d89eb1541825c24054e70dc1c73bd975d97948e8820ecdd0c752?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
					className="aspect-[0.97] w-[31px] absolute left-2"
				/>
				<input
					id="searchInput"
					className="w-full h-full text-xl text-black"
					placeholder="Search in your club members..."
				/>
			</label>
		</>
	);
};

export default SearchBar;
