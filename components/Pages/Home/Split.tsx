const Split = () => {
	return (
		<div className="flex justify-center items-center py-6 mt-28 w-full whitespace-nowrap bg-neutral-800 leading-[120%] max-md:px-5 max-md:mt-10 max-md:max-w-full ">
			<div className="flex gap-5 justify-between max-w-full max-md:flex-wrap">
				<div className="flex flex-col basis-0">
					<div className="text-5xl font-semibold text-white max-md:text-4xl">
						8K+
					</div>
					<div className="self-center text-xl text-white">Books</div>
				</div>
				<div className="flex flex-col text-white basis-0">
					<div className="self-center text-5xl font-semibold max-md:text-4xl">
						+4K
					</div>
					<div className="text-xl">Reading Rooms</div>
				</div>
				<div className="flex flex-col ms-5  flex-1 text-white">
					<div className="self-center text-5xl font-semibold max-md:text-4xl">
						100+
					</div>
					<div className="text-xl">New book coming out every day</div>
				</div>
			</div>
		</div>
	);
};

export default Split;
