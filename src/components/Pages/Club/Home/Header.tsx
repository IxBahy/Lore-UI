export const Header = () => {
	return (
		<>
			{" "}
			<header className="flex flex-col self-stretch px-20 py-12 w-full text-center text-white bg-teal-700 bg-opacity-70 leading-[120%] max-md:px-5 max-md:max-w-full">
				<h1 className="mx-4 mt-2.5 text-3xl font-semibold max-md:mr-2.5 max-md:max-w-full">
					Join Book Club
				</h1>
				<Breadcrumb items={["Home", "/", "Join Book Club"]} />
			</header>
		</>
	);
};

export default Header;
const Breadcrumb = ({ items }) => {
	return (
		<nav aria-label="breadcrumb">
			<ol className="flex gap-2 justify-center self-center mt-4 mb-2.5 text-base whitespace-nowrap">
				{items.map((item, index) => (
					<li
						key={index}
						className={`${index === items.length - 1 ? "font-semibold" : ""}`}
					>
						{item}
					</li>
				))}
			</ol>
		</nav>
	);
};
