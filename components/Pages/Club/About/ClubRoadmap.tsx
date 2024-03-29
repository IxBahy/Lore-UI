import React from "react";
import RoadmapCard from "./RoadmapCard";

const ClubRoadmap = ({ clubDetails }: { clubDetails: ClubDetails }) => {
	const firstWeek = clubDetails.roadmap.weeks[0] ?? undefined;
	const secondWeek = clubDetails.roadmap.weeks[1] ?? undefined;
	const thirdWeek = clubDetails.roadmap.weeks[2] ?? undefined;
	const fourthWeek = clubDetails.roadmap.weeks[3] ?? undefined;
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
										{firstWeek && (
											<RoadmapCard
												number={firstWeek.degree}
												desc={firstWeek.description}
											/>
										)}
										{secondWeek && (
											<RoadmapCard
												number={secondWeek.degree}
												desc={secondWeek.description}
											/>
										)}
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
										{thirdWeek && (
											<RoadmapCard
												number={thirdWeek.degree}
												desc={thirdWeek.description}
											/>
										)}
										{fourthWeek && (
											<RoadmapCard
												number={fourthWeek.degree}
												desc={fourthWeek.description}
											/>
										)}
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
