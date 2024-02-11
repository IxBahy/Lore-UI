const RoadmapCard = ({ number, desc }: { number: number; desc: string }) => {
	return (
		<div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full min-h-72">
			<div className="flex flex-col grow px-4 py-12 w-full text-center bg-white rounded-xl shadow-sm max-md:mt-7">
				<div className="mt-6 text-2xl font-bold leading-8 whitespace-nowrap text-neutral-800">
					Week {number}
				</div>
				<div className="mt-6 text-xs leading-3 text-zinc-700 text-opacity-80">
					{desc}
				</div>
			</div>
		</div>
	);
};

export default RoadmapCard;
