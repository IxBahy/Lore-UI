import React from "react";

interface SocialIconProps {
	src: string;
	alt: string;
}

const socialIcons = [
	{
		src: "https://cdn.builder.io/api/v1/image/assets/TEMP/81d8a5e0aecb99ae524e91d2ac5d16986ea12e866046f4e022a99041caff2b1f?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&",
		alt: "Facebook icon",
	},
	{
		src: "https://cdn.builder.io/api/v1/image/assets/TEMP/21ec20f95b8b18f245659f33f2ca76311990358927f6f8e15524b2ae0192345d?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&",
		alt: "Twitter icon",
	},
	{
		src: "https://cdn.builder.io/api/v1/image/assets/TEMP/85c2a2a811d9c2b1cc12ef19200b3315120f63eb3ea0a647dc83f3559cbd3cf4?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&",
		alt: "Google icon",
	},
	{
		src: "https://cdn.builder.io/api/v1/image/assets/TEMP/58eb7ab3afc2414aac50618e1ee6dc162763d2b914dfa8771955ddbcbb73b1c6?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&",
		alt: "LinkedIn icon",
	},
];

const Login = () => {
	return (
		<div className="flex flex-col items-center  px-5 max-h-screen max-md:mt-4 max-md:max-w-full">
			<div className="flex flex-col self-stretch px-5 mt-6 max-md:mt-4 max-md:max-w-full">
				<h1 className="text-3xl font-semibold leading-9 text-neutral-800 max-md:max-w-full">
					Create Account
				</h1>

				<form action="" className="h-[360px]">
					a sdsa
				</form>
			</div>
			<div className="flex gap-4 items-center self-stretch mt-14 text-xl font-medium leading-6 text-neutral-400 max-md:flex-wrap max-md:mt-10">
				<hr className="shrink-0 self-stretch my-auto h-px bg-gray-200 border border-gray-200 border-solid w-[281px]" />
				<div className="text-sm w-14">Or Sign Up With</div>
				<hr className="shrink-0 self-stretch my-auto max-w-full h-px bg-gray-200 border border-gray-200 border-solid w-[281px]" />
			</div>
			<div className="flex gap-5 justify-between mt-8 max-w-full w-[413px] max-md:pr-5">
				{socialIcons.map((icon, index) => (
					<SocialIcon key={index} src={icon.src} alt={icon.alt} />
				))}
			</div>
			<div className="mt-9 text-sm leading-4 underline text-slate-400">
				<span className="text-neutral-400">Already have an account?</span>{" "}
				<a href="#" className="font-medium underline text-slate-400">
					Sign in
				</a>
			</div>
		</div>
	);
};

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
	<img src={src} alt={alt} className="shrink-0 aspect-[1.02] w-[50px]" />
);

export default Login;
