import Card from "@/components/ui/Card";
import Link from "next/link";

const PopularClubs = () => {
	return (
		<>
			<div className="flex flex-col px-20 py-12 mt-44 w-full bg-slate-400 bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
				<div className="flex gap-1.5 self-start mt-6 ml-12 text-base font-bold leading-5 text-orange-300 max-md:ml-2.5">
					<div className="my-auto w-12 h-0.5 bg-orange-300 rounded-none" />
					<div className="flex-auto">POPULAR CLUBS</div>
				</div>
				<h2 className="self-start mt-1.5 ml-12 text-4xl font-semibold leading-10 text-neutral-800 max-md:ml-2.5">
					Join Clubs
				</h2>
				<div className="flex gap-5 justify-between self-center px-6 py-3 mt-16 max-w-full whitespace-nowrap rounded-xl border border-solid border-[color:var(--gray-01,#A7A7A9)] leading-[120%] w-[1098px] max-md:flex-wrap max-md:pl-5 max-md:mt-10">
					<input
						className="flex gap-2 justify-center text-base w-full h-14 px-5 py-3 font-semibold leading-6 text-neutral-800 rounded-md bg-transparent max-md:gap-1.5 max-md:px-3 max-md:py-2.5 max-md:text-sm max-md:leading-5 max-md:rounded-xl max-md:h-12 max-md:mt-10 max-md:pl-5 max-md:pr-3 max-md:py-3 max-md:w-full max-md:mt-10"
						placeholder="book club you can join 23.000+"
					/>
					<Link
						href={"/club"}
						className="justify-center px-16 py-3 text-xl font-semibold text-white rounded-md bg-stone-900 max-md:px-5"
					>
						Explore Now
					</Link>
				</div>
				<div className="self-center mt-12 w-full max-w-[1302px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
					<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
						<Card
							img={
								"https://cdn.builder.io/api/v1/image/assets/TEMP/54b0837b9f547b9e86d49cdd6303c75581032f9c61de9c16d8d451187d738dc3?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/54b0837b9f547b9e86d49cdd6303c75581032f9c61de9c16d8d451187d738dc3?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/54b0837b9f547b9e86d49cdd6303c75581032f9c61de9c16d8d451187d738dc3?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/54b0837b9f547b9e86d49cdd6303c75581032f9c61de9c16d8d451187d738dc3?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/54b0837b9f547b9e86d49cdd6303c75581032f9c61de9c16d8d451187d738dc3?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/54b0837b9f547b9e86d49cdd6303c75581032f9c61de9c16d8d451187d738dc3?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/54b0837b9f547b9e86d49cdd6303c75581032f9c61de9c16d8d451187d738dc3?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/54b0837b9f547b9e86d49cdd6303c75581032f9c61de9c16d8d451187d738dc3?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
							}
							desc={
								"Dive into the depths of thought and join our Philosophical Ponderings Club, where minds converge to explore profound questions."
							}
							link={"#"}
						/>
						<Card
							desc={`Embark on a captivating journey through time with the Past
                Perspectives Society, where history comes alive through
                engaging discussions.`}
							img={
								"https://cdn.builder.io/api/v1/image/assets/TEMP/35aa5112e379ab583c11bfdb89588d9c28fca84bd258cf229b09080e50baa14d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35aa5112e379ab583c11bfdb89588d9c28fca84bd258cf229b09080e50baa14d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35aa5112e379ab583c11bfdb89588d9c28fca84bd258cf229b09080e50baa14d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35aa5112e379ab583c11bfdb89588d9c28fca84bd258cf229b09080e50baa14d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35aa5112e379ab583c11bfdb89588d9c28fca84bd258cf229b09080e50baa14d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35aa5112e379ab583c11bfdb89588d9c28fca84bd258cf229b09080e50baa14d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35aa5112e379ab583c11bfdb89588d9c28fca84bd258cf229b09080e50baa14d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35aa5112e379ab583c11bfdb89588d9c28fca84bd258cf229b09080e50baa14d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
							}
							link={"#"}
						/>

						<Card
							img={
								"https://cdn.builder.io/api/v1/image/assets/TEMP/531a95028521789c0f8de48851afad178c237ddd93fca90ba51095d11ebd310b?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/531a95028521789c0f8de48851afad178c237ddd93fca90ba51095d11ebd310b?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/531a95028521789c0f8de48851afad178c237ddd93fca90ba51095d11ebd310b?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/531a95028521789c0f8de48851afad178c237ddd93fca90ba51095d11ebd310b?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/531a95028521789c0f8de48851afad178c237ddd93fca90ba51095d11ebd310b?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/531a95028521789c0f8de48851afad178c237ddd93fca90ba51095d11ebd310b?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/531a95028521789c0f8de48851afad178c237ddd93fca90ba51095d11ebd310b?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/531a95028521789c0f8de48851afad178c237ddd93fca90ba51095d11ebd310b?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
							}
							desc={`Embark on a thrilling expedition of knowledge with The
                Science Safari club, where curiosity leads the way, and
                every meeting is a captivating exploration.`}
							link={"#"}
						/>

						<Card
							img={
								"https://cdn.builder.io/api/v1/image/assets/TEMP/739760f041a72fe1c9327be2bfe911a002a0035ab7a7bd8518c4e05a9189eb8d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/739760f041a72fe1c9327be2bfe911a002a0035ab7a7bd8518c4e05a9189eb8d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/739760f041a72fe1c9327be2bfe911a002a0035ab7a7bd8518c4e05a9189eb8d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/739760f041a72fe1c9327be2bfe911a002a0035ab7a7bd8518c4e05a9189eb8d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/739760f041a72fe1c9327be2bfe911a002a0035ab7a7bd8518c4e05a9189eb8d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/739760f041a72fe1c9327be2bfe911a002a0035ab7a7bd8518c4e05a9189eb8d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/739760f041a72fe1c9327be2bfe911a002a0035ab7a7bd8518c4e05a9189eb8d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/739760f041a72fe1c9327be2bfe911a002a0035ab7a7bd8518c4e05a9189eb8d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
							}
							desc={`Unlock the secrets of programming and venture into the
                digital realm with Code Chronicles Circle club, where coding
                enthusiasts converge to share.`}
							link={"#"}
						/>
					</div>
				</div>

				<div className="flex gap-2 justify-center self-center px-10 py-5 mt-12 mb-5 text-xl font-semibold leading-6 text-white whitespace-nowrap rounded-md bg-neutral-800 max-md:px-5 max-md:mt-10">
					<Link href={"/club"} className="grow">
						Browse all Clubs
					</Link>
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/facd7238da559c416ee7a49aa3b480054f10e555d0547b0b011e9bcc54c1c6f2?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
						className="w-6 aspect-square"
					/>
				</div>
			</div>
		</>
	);
};

export default PopularClubs;
