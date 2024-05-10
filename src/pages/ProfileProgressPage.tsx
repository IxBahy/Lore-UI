import React, { useEffect, useState } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { getUserClubsProgress } from "@/apis/user";

export const ProfileProgressPage = () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const [progressArray, setProgressArray] = useState<
		ClubProgress[] | undefined
	>();

	useEffect(() => {
		const fetchClubs = async () => {
			const data = await getUserClubsProgress();
			setProgressArray(data);
		};
		fetchClubs();
	}, []);
	if (!progressArray) return;
	return (
		<main className="w-full">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="text-center">Document</TableHead>
						<TableHead className="text-center">Title</TableHead>
						<TableHead className="text-center">Progress</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{progressArray.map((item, index) => (
						<TableRow
							key={index}
							className={` h-36 hover:bg-gray-100 ${
								index % 2 === 1 ? "bg-[#70B7B7]  hover:bg-[#70B7B7]/80" : ""
							}`}
						>
							<TableCell className="text-center">
								<img src={item.image} alt="img here" />
							</TableCell>
							<TableCell className="text-center">{item.name}</TableCell>
							<TableCell className="text-center">{item.progress}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</main>
	);
};
