import * as React from "react";
import { getChatsData } from "@/apis/chat";
import MessageFactory from "@/components/Chat/MessageFactory";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

const UserChat: React.FC = () => {
	const { slug } = useParams();
	if (!slug) return;
	const [chatData, setChatData] = useState<ChatDetails>();
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const token = localStorage.getItem("access_token") ?? "";
	const navigate = useNavigate();
	if (!token) {
		navigate("/login");
	}
	const decoded = jwtDecode<
		JwtPayload & { user_id: number; username: string; type: string }
	>(token);
	const user_id = decoded.user_id;

	useEffect(() => {
		const fetchClubs = async () => {
			const data = await getChatsData(slug);
			setChatData(data);
			setMessages(
				data.messages ?? [
					{
						id: 1,
						content: "test test",
						created_at: "2022-01-01",
						sender_id: { id: 1, username: "bahy", img_url: "test" },
					},
					{
						id: 2,
						content: "test test",
						created_at: "2022-01-01",
						sender_id: { id: 2, username: "bahy", img_url: "test" },
					},
					{
						id: 1,
						content: "test test",
						created_at: "2022-01-01",
						sender_id: { id: 1, username: "bahy", img_url: "test" },
					},
					{
						id: 2,
						content: "test test",
						created_at: "2022-01-01",
						sender_id: { id: 2, username: "bahy", img_url: "test" },
					},
					{
						id: 1,
						content: "test test",
						created_at: "2022-01-01",
						sender_id: { id: 1, username: "bahy", img_url: "test" },
					},
					{
						id: 2,
						content: "test test",
						created_at: "2022-01-01",
						sender_id: { id: 2, username: "bahy", img_url: "test" },
					},
				]
			);
		};
		fetchClubs();
	}, []);

	const FormSchema = z.object({
		message: z.string().min(2, {
			message: "message must be at least 2 characters.",
		}),
		club: z.string(),
	});
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			message: "",
			club: "",
		},
	});
	function onSubmit(data: z.infer<typeof FormSchema>) {}

	return (
		<section className="flex flex-col  border-2 rounded-lg shadow-md  relative pt-7 pb-10  fill-white min-h-[682px] max-md:mt-8 max-md:max-w-full">
			<header className="flex px-4 justify-between w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
				<div className="flex gap-2.5">
					<img
						loading="lazy"
						src={chatData?.img_url}
						alt="Logo"
						className="shrink-0 aspect-square fill-[url(<path-to-image>)_lightgray_50%_/_cover_no-repeat] w-[52px]"
					/>
					<div className="flex flex-col flex-1 my-auto">
						<h3 className="text-black pb-2">{chatData?.name}</h3>
					</div>
				</div>
				<div
					className="flex justify-center items-center p-3.5 border border-gray-200 border-solid rounded-[40px]"
					tabIndex={0}
					role="button"
				>
					<img
						loading="lazy"
						src={
							"https://cdn.builder.io/api/v1/image/assets/TEMP/7c9d6b36fe8ccfdec59fb9a831a58981f10fbbe76b353a4ea8e19a481cfe1f80?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
						}
						alt={"chat settings"}
						className="w-6 aspect-square"
					/>
				</div>
			</header>

			<div className="flex relative flex-col pr-9 pl-3 mt-8 max-md:pr-5 max-md:max-w-full">
				<main className="min-h-[500px] h-[500px] pb-8 overflow-hidden overflow-y-auto ">
					{messages.map((message) => {
						return <MessageFactory key={message.id} message={message} />;
					})}
				</main>

				<footer className="flex justify-between  px-5 py-3   rounded-3xl border-t border-solid bg-zinc-100 borderinc-200 w-[628px] ">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex justify-evenly items-center  w-[628px] m-0 p-0 "
						>
							<div className="flex ">
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/eac3b9738f2cfab384459a79b40730b036639ab1228ce7e0683cf58711463da7?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									alt="Footer Icon 4"
									className="shrink-0 w-5 aspect-square"
								/>
							</div>
							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												{...field}
												className="w-[480px] border-none bg-transparent text-black"
											/>
										</FormControl>
									</FormItem>
								)}
							/>

							<Button className="bg-none bg-transparent hover:bg-transparent">
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c966de719760143fcccaa8eadfe62817762a75cfefb414a700668bbf38bf682?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									alt="Footer Icon 7"
									className="shrink-0 w-5 aspect-square"
								/>
							</Button>
						</form>
					</Form>
				</footer>
			</div>
		</section>
	);
};
export default UserChat;
