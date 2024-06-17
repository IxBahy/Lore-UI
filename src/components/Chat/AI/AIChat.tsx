import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { presets, books } from "./ModelsPresets";
import { askBot } from "@/apis/ChatBot";

interface Props {
	isHidden: boolean;
}
export const AIChat = ({ isHidden }: Props) => {
	const books: books[] = ["book_a", "book_b"] as const;
	const [messages, setMessages] = React.useState<Message[]>([
		{ role: "system", content: "Hello, how can I help you today?" },
	]);

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
	function onSubmit(data: z.infer<typeof FormSchema>) {
		setMessages((prev) => [...prev, { role: "user", content: data.message }]);
		const preset = presets[data.club as books];
		// toast({
		// 	title: "You submitted the following values:",
		// 	description: (
		// 		<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
		// 			<code className="text-white">{JSON.stringify(data, null, 2)}</code>
		// 		</pre>
		// 	),
		// });
		form.reset({ club: data.club });
		console.log(preset);

		const res = askBot(preset);
		res.then((message) => {
			setMessages((prev) => [...prev, message]);
		});
	}

	return isHidden ? (
		<></>
	) : (
		<div className="flex flex-col w-[529px] max-w-[529px]  ">
			<main className="flex flex-col py-7 w-full   bg-white rounded-xl  max-md:max-w-full border-2 shadow-md ">
				<header className="flex gap-5 justify-between px-6 py-px w-full text-lg font-semibold text-black whitespace-nowrap max-md:flex-wrap max-md:px-5 max-md:max-w-full">
					<div className="flex gap-2.5 justify-between">
						<img
							loading="lazy"
							src="https://cdn-icons-png.flaticon.com/512/8943/8943377.png"
							alt="LoreAI logo"
							className="shrink-0 rounded-full aspect-[1.03] w-[29px]"
						/>
						<span>LoreAI</span>
					</div>
					<FormField
						control={form.control}
						name="club"
						render={({ field }) => (
							<FormItem>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Clubs" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Clubs</SelectLabel>
											{books.map((book, index) => {
												return (
													<SelectItem key={index} value={book}>
														{book}
													</SelectItem>
												);
											})}
										</SelectGroup>
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
				</header>
				<section className="flex flex-col h-[400px] max-h-[400px] overflow-y-auto items-end px-5 mt-10 w-full text-base font-medium leading-5 text-zinc-700 text-opacity-80 max-md:max-w-full">
					{messages.map((message, index) => {
						return <Message key={index} {...message} />;
					})}
					{/* <Message content="Hello, how can I help you today?" isUser />
					<Message content="I want to Summarize this book" />
					<Message content="Detailed Summary" />
					<Message
						content='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"'
						isUser
					/> */}
				</section>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="relative">
						<section className=" relative flex flex-col px-5 mt-5 w-full max-md:pl-5 max-md:max-w-full">
							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												{...field}
												className="flex gap-5 justify-between px-3.5 py-2 mt-6 w-full rounded-2xl border-t border-solid bg-zinc-100 border-zinc-200 max-md:flex-wrap max-md:max-w-full"
											/>
										</FormControl>
									</FormItem>
								)}
							/>

							<Button className="bg-none bg-transparent w-4 h-4 hover:bg-transparent p-0 m-0 fixed bottom-[155px] right-14">
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/293289466261626135c9d77bb603beb0ad5f9e4894353d424261c8194dd2ef35?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									alt="Control icon 7"
									className="shrink-0 aspect-[0.93] w-[13px]"
								/>
							</Button>
						</section>
					</form>
				</Form>
			</main>
			<img
				loading="lazy"
				src="https://cdn.builder.io/api/v1/image/assets/TEMP/a49b01816890daf32183606a0ec28396878cdbbc6566615d3b0682e3ce292afb?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
				alt="Decorative element"
				className="z-10 self-end -mt-1.5 mr-6 aspect-[1.43] fill-white w-[30px] max-md:mr-2.5"
			/>
		</div>
	);
};

const Message: React.FC<Message> = ({ content, role }) => (
	<div
		className={`justify-center px-4 py-${
			role === "user" ? "3.5 text-white bg-teal-700" : "2.5 bg-zinc-100"
		} mt-5 text-base font-medium leading-5 rounded-2xl max-md:max-w-full`}
	>
		{content}
	</div>
);
