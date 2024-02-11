import React from "react";
import RoadmapCard from "./RoadmapCard";

const ClubRoadmap = () => {
	return (
		<>
			{RoadMapTitle()}
			<div className="flex justify-center items-center py-6 mt-16 w-full bg-slate-400 bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
				<div className="w-full max-w-[1148px] max-md:max-w-full">
					<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
						<div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
							<div className="flex flex-col grow max-md:mt-7 max-md:max-w-full">
								<div className="flex z-10 gap-5 justify-between self-center max-w-full text-4xl font-semibold leading-10 text-white whitespace-nowrap w-[372px]">
									<div className="flex flex-col justify-center px-2 py-2.5 rounded-full">
										<div className="justify-center px-6 py-5 rounded-full aspect-[1.03] max-md:px-5">
											1
										</div>
									</div>
									<div className="flex flex-col justify-center p-2.5 rounded-full">
										<div className="justify-center px-6 py-5 rounded-full aspect-[1.03] max-md:px-5">
											2
										</div>
									</div>
								</div>
								<div className="max-md:max-w-full">
									<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
										<RoadmapCard
											number={1}
											desc={`		In our first week, we'll kick off our literary journey by immersing
					ourselves in Chapter 1. Get
					ready to meet the characters and set the foundation for the adventure
					that lies ahead.`}
										/>
										<RoadmapCard
											number={2}
											desc={`As we enter the second week, we'll dive into the
													layers of the story with
													<span className="font-semibold">
														{" "}
														Chapters 2 and 3
													</span>
													. Expect new developments, deeper character insights,
													and a more intricate plot.`}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
							<div className="flex flex-col grow max-md:mt-7 max-md:max-w-full">
								<div className="flex z-10 gap-5 justify-between self-center max-w-full text-4xl font-semibold leading-10 text-white whitespace-nowrap w-[372px]">
									<div className="flex flex-col justify-center px-2 py-2.5 rounded-full">
										<div className="justify-center px-6 py-5 rounded-full aspect-[1.03] max-md:px-5">
											3
										</div>
									</div>
									<div className="flex flex-col justify-center p-2.5 rounded-full">
										<div className="justify-center px-6 py-5 rounded-full aspect-[1.03] max-md:px-5">
											4
										</div>
									</div>
								</div>
								<div className="max-md:max-w-full">
									<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
										<RoadmapCard
											number={3}
											desc={`	Week 3 unfolds with the intensification of the plot in
                      Chapters 4 and 5.
                      Join the discussion as the story takes unexpected turns and
                      our understanding deepens.`}
										/>
										<RoadmapCard
											number={4}
											desc={`Our final week crescendos with the climax and conclusion in Chapters 6 to 10.
                      Brace yourselves for the culmination of our reading journey`}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ClubRoadmap;

const RoadMapTitle = (): React.JSX.Element => {
	return (
		<div className="flex flex-col items-start ">
			<div className="flex justify-start gap-1.5 mt-44 text-lg font-bold text-orange-300 whitespace-nowrap max-md:mt-10">
				<div className="my-auto w-12 h-0.5 bg-orange-300 rounded-none" />
				<div className="grow">OUR ROADMAP</div>
			</div>
			<div className="mt-1 text-start text-4xl font-semibold text-neutral-800 max-md:max-w-full">
				The Roadmap To Book Club Enjoyment{" "}
			</div>
		</div>
	);
};
