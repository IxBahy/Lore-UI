import React from "react";
// to-do: Add the filter controls for the club home page
const FilterControls = () => {
	return (
		<div className="flex gap-5 justify-between mt-16 w-[95%] bg-transparent  flex-wrap">
			<FilterChip count={3} label="Filter" />
			<CategoryCard
				icon="https://cdn.builder.io/api/v1/image/assets/TEMP/47ddaac5b694cdae8ee3c3200441d4ca04a8e0a569a2a46612177232b19561f5?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
				category="Philosophy Book Clubs"
			/>
			<SortOption />
		</div>
	);
};

// FilterChip Component
const FilterChip = ({ count, label }) => (
	<div className="flex gap-5 justify-between px-6 py-4 font-semibold bg-white rounded-md border-solid border-[0.951px] border-teal-700 border-opacity-30">
		<div className="flex gap-3 items-center">
			<img
				src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ccbdee8045c0e0e790115349430d488838ca4b1bc174c33524f62b435ad628d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
				alt=""
				className="aspect-[1.04] w-[23px]"
			/>
			<div>{label}</div>
		</div>
		<div className="justify-center px-1.5 py-1 text-xs leading-4 text-center text-teal-700 rounded-md aspect-[0.79] bg-teal-700 bg-opacity-30">
			{count}
		</div>
	</div>
);

// CategoryCard Component
const CategoryCard = ({ icon, category }) => (
	<div className="flex flex-col flex-1 justify-center items-start py-4 pr-16 pl-4 text-base leading-5 bg-white rounded-md border-solid border-[0.951px] border-[color:var(--stroke,#DADADA)] text-stone-900">
		<div className="flex gap-2">
			<img src={icon} alt="" className="aspect-[1.04] w-[23px]" />
			<div className="grow">{category}</div>
		</div>
	</div>
);

const SortOption = () => (
	<div className="flex flex-col flex-1 justify-center px-4 py-5 text-base bg-white rounded-md border-solid border-[0.951px] border-[color:var(--stroke,#DADADA)]">
		<div className="flex gap-5 items-center">
			<div>Trending</div>
			<img
				src="https://cdn.builder.io/api/v1/image/assets/TEMP/47ddaac5b694cdae8ee3c3200441d4ca04a8e0a569a2a46612177232b19561f5?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
				alt=""
				className="aspect-[0.93] w-[15px]"
			/>
		</div>
	</div>
);

export default FilterControls;
