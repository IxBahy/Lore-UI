import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export const ProfileProgressPage = () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
					{array.map((item, index) => (
						<TableRow
							className={` h-36 hover:bg-gray-100 ${
								index % 2 === 1 ? "bg-[#70B7B7]  hover:bg-[#70B7B7]/80" : ""
							}`}
						>
							<TableCell className="text-center">
								<img src="" alt="img here" />
							</TableCell>
							<TableCell className="text-center">Title</TableCell>
							<TableCell className="text-center">progress</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</main>
	);
};
