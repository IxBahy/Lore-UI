import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
export const AuthLayout = ({ children }: PropsWithChildren) => {
	return (
		<main className="flex h-screen">
			<section className="flex grow justify-center items-center  w-full h-full text-6xl font-bold text-teal-700 whitespace-nowrap bg-stone-900 max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
				<div className="flex gap-5 justify-center items-center  max-md:mt-10 max-md:text-4xl">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c2f82b2ea15506c101085c9173bd832b57bfabb6244bce3fa68381fdf4b0d29?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
						alt="Lore"
						className="shrink-0 my-auto aspect-[0.81] w-[72px]"
					/>
					<h1 className="max-md:text-4xl">Lore</h1>
				</div>
			</section>
			<Outlet />
		</main>
	);
};
