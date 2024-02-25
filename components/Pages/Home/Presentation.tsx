import Link from "next/link";

const Presentation = () => {
	return (
		<div className="self-center mt-3.5 w-full max-w-[1383px] max-md:max-w-full">
			<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
				<div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
					<div className="flex flex-col self-stretch px-5 my-auto text-xl max-md:mt-10 max-md:max-w-full">
						<div className="self-start text-6xl font-bold leading-[73px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
							Start your book club Journey now
						</div>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/8abae0cfd4484438896367ac5064a27699607c45629d645b46414576b4e0cf02?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
							className="self-center max-w-full aspect-[6.67] w-[223px]"
						/>
						<div className="mt-3 leading-6 text-zinc-700 text-opacity-80 max-md:max-w-full">
							Welcome to our website, the ultimate destination for students who
							love to read, connect, and grow together. Dive into a world where
							the joy of reading is magnified when shared with friends.
						</div>
						<div className="flex gap-4 justify-between mt-10 font-semibold leading-[120%] max-md:flex-wrap max-md:max-w-full">
							<div className="flex gap-2 justify-between px-14 py-5  text-white bg-teal-700 rounded-md max-md:px-5">
								<Link href={"#"} className="flex-auto text-center ">
									Start The Club
								</Link>
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5b1ffe29b68895324ddf197d8ed231c0dff565b516fd161dc7f990933da2c9e?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									className="w-6 aspect-square"
								/>
							</div>
							<Link
								href={"/club"}
								className="grow justify-center text-center  px-10 py-5 rounded-md border border-solid border-[color:var(--black-03,#252525)] text-neutral-800 max-md:px-5"
							>
								Join clubs
							</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
					<img
						loading="lazy"
						srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e7cd5033885996e062879211b33cf910f6a702d99a081b89d090d0311411aa3c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7cd5033885996e062879211b33cf910f6a702d99a081b89d090d0311411aa3c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7cd5033885996e062879211b33cf910f6a702d99a081b89d090d0311411aa3c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7cd5033885996e062879211b33cf910f6a702d99a081b89d090d0311411aa3c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7cd5033885996e062879211b33cf910f6a702d99a081b89d090d0311411aa3c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7cd5033885996e062879211b33cf910f6a702d99a081b89d090d0311411aa3c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7cd5033885996e062879211b33cf910f6a702d99a081b89d090d0311411aa3c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7cd5033885996e062879211b33cf910f6a702d99a081b89d090d0311411aa3c?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
						className="grow w-full aspect-[1.25] max-md:max-w-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Presentation;
