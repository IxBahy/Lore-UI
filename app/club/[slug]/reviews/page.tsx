import ClubReview from "@/components/Pages/Club/Reviews/ClubReview";

const page = () => {
	return (
		<main className="w-full p-24 flex flex-col">
			<h2 className="flex-auto my-auto text-4xl font-semibold text-neutral-800">
				Students Feedback
			</h2>
			<ClubReview
				name="Guy Hawkins"
				profileImage="https://cdn.builder.io/api/v1/image/assets/TEMP/6c6bb028ab4d53097c6531d3af8ac841911fda82ff339e296a76dccdaa38c464?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c6bb028ab4d53097c6531d3af8ac841911fda82ff339e296a76dccdaa38c464?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c6bb028ab4d53097c6531d3af8ac841911fda82ff339e296a76dccdaa38c464?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c6bb028ab4d53097c6531d3af8ac841911fda82ff339e296a76dccdaa38c464?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c6bb028ab4d53097c6531d3af8ac841911fda82ff339e296a76dccdaa38c464?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c6bb028ab4d53097c6531d3af8ac841911fda82ff339e296a76dccdaa38c464?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c6bb028ab4d53097c6531d3af8ac841911fda82ff339e296a76dccdaa38c464?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c6bb028ab4d53097c6531d3af8ac841911fda82ff339e296a76dccdaa38c464?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
				numberOfStars={5}
				reviewText="Being a part of the Time Travelers Book Club - Historical Club has been an
      incredible journey through the annals of history. The carefully curated
      selection of books transports us to different eras, providing a vivid and
      immersive experience. The discussions are enlightening, and the
      camaraderie among fellow readers is unparalleled. It's not just a book
      club; it's a time-traveling adventure that brings history to life.&quot;"
				date={"5 weeks old"}
			/>
		</main>
	);
};

export default page;
