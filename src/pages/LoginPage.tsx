import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "@/apis/auth";
import { useAuthStore } from "@/store/zustand";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
interface SocialIconProps {
	src: string;
	alt: string;
}
interface LoginResponseBody {
	refresh: string;
	access: string;
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

const formSchema = z.object({
	username: z.string().min(4).max(50),
	password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/),
});
export const LoginPage = () => {
	const {
		setUserToken,
		setIsAuthenticated,
		setRefreshToken,
		isAuthenticated,
		userToken,
	} = useAuthStore();
	const { toast } = useToast();
	console.log(isAuthenticated);
	const navigate = useNavigate();
	if (isAuthenticated || userToken) {
		navigate("/");
	}
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		const res = await login(values);
		if (res.ok) {
			const data = (await res.json()) as LoginResponseBody;
			localStorage.setItem("access_token", data?.access);
			localStorage.setItem("refresh_token", data?.refresh);
			setUserToken(data?.access);
			setRefreshToken(data?.refresh);
			setIsAuthenticated(true);
		} else {
			toast({
				variant: "destructive",
				title: "Error",
				description: "Invalid username or password",
			});
		}
	};

	return (
		<div className="flex flex-col items-center w-full justify-evenly px-5 max-h-screen max-md:mt-4 max-md:max-w-full">
			<div className="flex flex-col self-stretch px-5 mt-6 max-md:mt-4 max-md:max-w-full">
				<h1 className="text-3xl font-semibold leading-9 text-neutral-800 max-md:max-w-full">
					Welcome Back
				</h1>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 mt-8"
					>
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder="Username" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input placeholder="Password" {...field} type="password" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							className="justify-center w-full items-center px-16 py-5 mt-7 text-2xl font-bold leading-8 text-white bg-teal-700 rounded-md max-md:px-5 max-md:max-w-full"
							type="submit"
						>
							Submit
						</Button>
					</form>
				</Form>
			</div>
			<div className="flex gap-4 items-center self-stretch mt-14 text-xl font-medium leading-6 text-neutral-400 max-md:flex-wrap max-md:mt-10">
				<hr className="shrink-0 self-stretch my-auto h-px bg-gray-200 border border-gray-200 border-solid w-[44%]" />
				<div className="text-sm w-14">Or Sign In With</div>
				<hr className="shrink-0 self-stretch my-auto max-w-full h-px bg-gray-200 border border-gray-200 border-solid w-[44%]" />
			</div>
			<div className="flex gap-5 justify-between mt-8 max-w-full w-[413px] max-md:pr-5">
				{socialIcons.map((icon, index) => (
					<SocialIcon key={index} src={icon.src} alt={icon.alt} />
				))}
			</div>
			<div className="mt-9 text-sm leading-4 underline text-slate-400">
				<span className="text-neutral-400">Don't have an account? </span>{" "}
				<Link to="/register" className="font-medium underline text-slate-400">
					Sign Up
				</Link>
			</div>
		</div>
	);
};

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
	<img src={src} alt={alt} className="shrink-0 aspect-[1.02] w-[50px]" />
);
