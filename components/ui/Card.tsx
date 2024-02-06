import Link from "next/link";

const Card = ({ img, desc, link }) => {
	return (
		<>
			<div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
				<div className="flex flex-col grow px-2.5 pt-2.5 pb-5 mx-auto mt-1.5 w-full bg-white rounded-xl shadow-sm max-md:mt-9">
					<img
						loading="lazy"
						srcSet={img}
						className="w-full rounded-md aspect-[1.05]"
					/>
					<div className="mt-2 ml-3.5 w-60 text-xs leading-3 text-neutral-400 max-md:ml-2.5">
						{desc}
					</div>
					<div className="shrink-0 mt-3.5 h-px bg-orange-300 bg-opacity-50" />
					<div className="flex gap-5 justify-between mt-7 leading-[120%]">
						<div className="flex gap-1 justify-center my-auto text-xs font-semibold bg-white text-neutral-400">
							<img
								loading="lazy"
								srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e6abc40aeb9b5c5ca0fc40760e38dd9f580d572704ecc190b04a44d19c6aee11?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6abc40aeb9b5c5ca0fc40760e38dd9f580d572704ecc190b04a44d19c6aee11?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6abc40aeb9b5c5ca0fc40760e38dd9f580d572704ecc190b04a44d19c6aee11?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6abc40aeb9b5c5ca0fc40760e38dd9f580d572704ecc190b04a44d19c6aee11?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6abc40aeb9b5c5ca0fc40760e38dd9f580d572704ecc190b04a44d19c6aee11?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6abc40aeb9b5c5ca0fc40760e38dd9f580d572704ecc190b04a44d19c6aee11?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6abc40aeb9b5c5ca0fc40760e38dd9f580d572704ecc190b04a44d19c6aee11?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6abc40aeb9b5c5ca0fc40760e38dd9f580d572704ecc190b04a44d19c6aee11?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								className="aspect-[2.78] w-[72px]"
							/>
							<div className="grow my-auto"> Students</div>
						</div>
						<div className="flex gap-2 justify-between px-6 py-1.5 text-xl font-bold text-teal-700 whitespace-nowrap rounded-2xl border-solid bg-teal-700 bg-opacity-10 border-[0.731px] border-[color:var(--green-04,#297373)] max-md:px-5">
							<Link href={link} className="grow">
								Join
							</Link>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/3beeb9395a086c89cb45c24f969ecac15b0872c19f2a0f3a4a59e6eb165e0b71?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								className="aspect-[1.04] w-[25px]"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
