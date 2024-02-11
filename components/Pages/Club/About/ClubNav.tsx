import Link from "next/link";

const ClubNav = ({ params }: { params: { slug: number } }) => {
	return (
		<nav className="flex flex-col z-50 sticky top-0 items-center px-16 pt-7 w-full text-xl leading-6 whitespace-nowrap bg-slate-100 text-neutral-800 max-md:px-5 max-md:max-w-full">
			<div className="flex flex-col ml-16 max-w-full w-[597px]">
				<div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
					<Link
						href={`/club/${params.slug}/`}
						className="grow font-semibold text-center text-teal-700"
					>
						About Club
					</Link>
					<Link
						href={`/club/${params.slug}/material`}
						className="flex-auto text-center"
					>
						Material
					</Link>
					<Link
						href={`/club/${params.slug}/members`}
						className="flex-auto text-center"
					>
						Members
					</Link>
					<Link
						href={`/club/${params.slug}/reviews`}
						className="grow my-auto text-zinc-900"
					>
						Reviews
					</Link>
				</div>
				<div className="shrink-0 mt-6 h-1 bg-teal-700 max-md:max-w-full" />
			</div>
		</nav>
	);
};

export default ClubNav;
