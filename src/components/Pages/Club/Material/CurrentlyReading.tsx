import { getClubDocument, getClubOwner } from "@/apis/club";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CurrentlyReading = () => {
	const { slug } = useParams();
	if (!slug) return;
	const [document, setDocument] = useState<ClubDocument>();
	const [owner, setOwner] = useState<Friend>();

	useEffect(() => {
		const fetchDocument = async () => {
			const res = await getClubDocument(slug);
			setDocument(res);
			const owner = await getClubOwner(slug);
			setOwner(owner);
		};
		fetchDocument();
	}, []);
	if (!document || !owner) return;
	return (
		<div className="flex flex-col self-center px-5 mt-24 w-full max-w-[1410px] max-md:mt-10 max-md:max-w-full">
			<div className="flex gap-5 justify-between items-start pr-20 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
				<div className="flex flex-col self-end mt-20 leading-[120%] max-md:mt-10 max-md:max-w-full">
					<div className="flex gap-1.5 self-start text-base font-bold text-orange-300">
						<div className="my-auto w-12 h-0.5 bg-orange-300 rounded-none" />
						<div className="flex-auto">CURRENTLY READING</div>
					</div>
					<div className="mt-1.5 text-4xl font-semibold text-neutral-800 max-md:max-w-full">
						Discover What We’re Reading Right Now
					</div>
				</div>
				<div className="flex justify-center items-center self-start px-9 w-28 h-28 bg-white border-solid shadow-sm border-[2.719px] border-[color:var(--green-04,#297373)] rounded-[90.625px] max-md:px-5">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6d103029ad2b581b17ac2c7087fb20011d3a7430fad906c7ea9c095b90e7076?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
						className="w-full aspect-square"
					/>
				</div>
			</div>
			<div className="mt-16 max-md:mt-10 max-md:max-w-full">
				<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
					<div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
						<img
							loading="lazy"
							srcSet={document?.cover_url}
							className="z-10 self-stretch my-auto max-w-full aspect-[0.7] w-[299px] max-md:mt-7"
						/>
					</div>
					<div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
						<div className="flex flex-col grow items-center px-20 py-12 w-full bg-slate-400 bg-opacity-10 max-md:px-5 max-md:max-w-full">
							<div className="flex gap-5 justify-between self-start mt-5 ml-36 text-sm whitespace-nowrap text-neutral-500 max-md:ml-2.5">
								<div className="flex gap-2.5 justify-between">
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c3e0c419a15db32d668959b18288326b90553497faad847858b5c388ce52909?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
										className="w-6 aspect-square"
									/>
									<div className="grow">Current</div>
								</div>
								<div className="flex gap-2.5 justify-between">
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/72f685cf529bed93d1aae589231ebf641f012c75a208997b485a30147bd99550?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
										className="w-6 aspect-square"
									/>
									<div className="grow">
										<span className="">Duration : </span>
										<span className="font-medium">3 months</span>
									</div>
								</div>
							</div>
							<div className="mt-3 text-3xl font-medium leading-9 text-neutral-800 max-md:max-w-full">
								{document?.title}
							</div>
							<div className="mt-3 text-lg font-semibold leading-5 text-neutral-500 max-md:max-w-full">
								Description
							</div>
							<div className="mt-1.5 text-base leading-5 text-neutral-500 w-[753px] max-md:max-w-full">
								{document?.description}
								<br />
							</div>
							<div className="flex gap-5 justify-between self-start pr-8 mt-2 ml-36 text-sm tracking-normal leading-6 text-neutral-800 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
								<div className="flex gap-1 justify-between items-center whitespace-nowrap">
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/4707128c4ea1185b8de3c9dae39cc27a60010cf325cc75961ecc1af2d9f47d6d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
										className="self-stretch w-6 aspect-square"
									/>
									<div className="self-stretch my-auto font-bold">4.5</div>
								</div>
								<div className="flex gap-1 px-px my-auto">
									<div className="grow whitespace-nowrap">Published By</div>
									<div className="my-auto font-medium underline">
										{owner?.first_name + "  " + owner?.last_name}
									</div>
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/8caeaea4770277fd8bcb7fbda3985c1f3d6c9297bc0fd6db5f5cabfb1c19ca37?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
										className="aspect-square w-[19px]"
									/>
								</div>
							</div>
							<div className="flex gap-4 pr-20 mt-10 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
								<div className="flex gap-2 justify-between px-16 py-4 text-xl font-semibold leading-6 text-white rounded-md bg-neutral-800 max-md:px-5">
									<div className="grow">Download </div>
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd5a468b69e8f2d458a4f4568d9aeb84276ea6d400c631056606f021d03acee?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
										className="my-auto w-5 aspect-square"
									/>
								</div>
								<div className="flex gap-2 justify-between px-16 py-4 text-xl font-semibold leading-6 whitespace-nowrap rounded-md border border-solid border-[color:var(--black-03,#252525)] text-neutral-800 max-md:px-5">
									<div className="grow">Read Sample </div>
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bd0b9e46c1ddaf2dcfb715469823a076ba31ec57d5d5fe8e5dc5459d8403787?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
										className="my-auto w-5 aspect-square"
									/>
								</div>
								<div className="flex justify-center items-center px-5 py-3 rounded-md border border-solid aspect-[1.25] bg-neutral-800 border-[color:var(--black-03,#252525)]">
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/025ee18e59c517c4abec67d9b50713708ec4c180cfca64e30aeb3fa34ad9cf46?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
										className="w-8 aspect-square"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentlyReading;
