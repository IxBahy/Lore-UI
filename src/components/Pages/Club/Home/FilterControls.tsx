import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
interface Props {
	setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}
// to-do: Add the filter controls for the club home page
const FilterControls = ({ setFilter }: Props) => {
	return (
		<div className="flex items-center mx-8 gap-5 justify-between mt-16 w-[95%] bg-transparent  flex-wrap">
			<div className="flex ms-8 flex-1 h-14 justify-center items-center py-4  pl-4 text-base leading-5 bg-white rounded-md border-solid border-[0.951px] border-[color:var(--stroke,#DADADA)] text-stone-900">
				<img
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/47ddaac5b694cdae8ee3c3200441d4ca04a8e0a569a2a46612177232b19561f5?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
					alt=""
					className="aspect-[1.04] w-[23px]"
				/>
				<input
					className="grow !w-full focus:outline-none ps-2"
					placeholder="Club Name"
					onChange={(e) => {
						setFilter({ name: e.target.value });
					}}
				/>
			</div>
			<button className="flex gap-5 justify-between px-6 py-4 font-semibold bg-white rounded-md border-solid border-[0.951px] border-teal-700 border-opacity-30 items-center">
				<img
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ccbdee8045c0e0e790115349430d488838ca4b1bc174c33524f62b435ad628d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
					alt=""
					className="aspect-[1.04] w-[23px]"
				/>
				<div>Filter</div>
			</button>
			<SortOption />
		</div>
	);
};

const SortOption = () => (
	<>
		<div className="flex justify-end me-8 w-1/2 items-center px-4 py-5 text-base bg-white rounded-md  border-[color:var(--stroke,#DADADA)]">
			<h5>Sort By</h5>
			<div className=" px-4 mx-4 py-5 text-base bg-white rounded-md ">
				<Select>
					<SelectTrigger className="w-[180px] border-solid border-[0.951px] border-[color:var(--stroke,#DADADA)]">
						<SelectValue placeholder="test" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="first">first</SelectItem>
						<SelectItem value="second">second</SelectItem>
						<SelectItem value="third">third</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	</>
);

export default FilterControls;
