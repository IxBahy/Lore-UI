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
import { register } from "@/apis/auth";

import { useToast } from "@/components/ui/use-toast";
import { useAuthStore } from "@/store/zustand";
import { Link, useNavigate } from "react-router-dom";
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

const formSchema = z.object({
	username: z.string().min(4).max(50),
	password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/),
	confirmPassword: z.string().optional(),
	email: z.string().email(),
	first_name: z.string().min(2).max(50),
	last_name: z.string().min(2).max(50),
});

export const RegisterPage = () => {
	const { isAuthenticated } = useAuthStore();
	const navigate = useNavigate();
	if (isAuthenticated || !!localStorage.getItem("access_token")) {
		navigate("/");
	}
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
			email: "",
			confirmPassword: "",
			first_name: "",
			last_name: "",
		},
	});
	const { toast } = useToast();

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		if (values.password !== values.confirmPassword) {
			form.setError("confirmPassword", {
				type: "manual",
				message: "Passwords do not match",
			});
			return;
		}
		delete values.confirmPassword;
		const data: {
			username: string;
			password: string;
			email: string;
			first_name: string;
			last_name: string;
		} = values;
		const res = await register(data);
		if (res.ok) {
			navigate("/login");
		} else {
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: "There was a problem with your request.",
			});
		}
	};

	return (
		<div className="flex flex-col items-center justify-evenly px-5 max-h-screen w-full max-md:mt-4 max-md:max-w-full">
			<div className="flex flex-col self-stretch px-5 mt-6 max-md:mt-4 max-md:max-w-full">
				<h1 className="text-3xl font-semibold leading-9 text-neutral-800 max-md:max-w-full">
					Sign up
				</h1>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
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
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="Email" type="email" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex justify-between">
							<FormField
								control={form.control}
								name="first_name"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel>First Name</FormLabel>
										<FormControl>
											<Input placeholder="First Name" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="last_name"
								render={({ field }) => (
									<FormItem className="w-full ms-4">
										<FormLabel>Last Name</FormLabel>
										<FormControl>
											<Input placeholder="Last Name" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
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

						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirm Password</FormLabel>
									<FormControl>
										<Input
											placeholder="Confirm Password"
											{...field}
											type="password"
										/>
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

			<div className="mt-4 text-sm leading-4 underline text-slate-400">
				<span className="text-neutral-400">Already have an account?</span>{" "}
				<Link to="/login" className="font-medium underline text-slate-400">
					Sign in
				</Link>
			</div>
		</div>
	);
};
