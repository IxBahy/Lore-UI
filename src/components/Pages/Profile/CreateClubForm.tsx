// @ts-nocheck
import React, { useCallback, useState } from "react";
import Modal from "@/components/Modal";
import { set, z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Control,
	UseFormRegisterReturn,
	UseFormReturn,
	useFieldArray,
	useForm,
} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { StepButton, Stepper } from "@mui/material";
import Step from "@mui/material/Step";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { addClubArticle, createClubRoadmap, createClubs } from "@/apis/club";
import { Button } from "@/components/ui/button";

interface Props {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const steps = ["", "", "", "", "", ""];
// resume the pattern until number 4 is reached
const map_week = {
	1: "first",
	2: "second",
	3: "third",
	4: "fourth",
};
const CreateClubForm = ({ show, setShow }: Props) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [createdClub, setCreatedClub] = useState<Club>();
	const token = localStorage.getItem("access_token");
	if (!token) return;
	const decoded = jwtDecode<
		JwtPayload & { user_id: number; username: string; type: string }
	>(token);
	const id: number = decoded["user_id"];
	const formSchema = z.object({
		name: z.string(),
		description: z.string(),
		type: z.string(),
		img_url: z.string(), // You might want to ensure it's a valid URL
		category: z.string(),
		current_capacity: z.number().int().min(0).max(50),
		max_capacity: z.number().int().min(0).max(50),
		owner: z.number().int().min(0), // Assuming owner ID should be non-negative
		rating: z.number().int().min(0).max(5), // Assuming rating is between 0 and 5
	});
	const fileSchema = z.object({
		file: z.instanceof(FileList),
		title: z.string(),
		description: z.string(),
		cover_url: z.string(),
	});

	// make it 8 for premuime
	const week_schema = z.object({
		degree: z.number().min(1).max(4),
		title: z.string(),
		description: z.string(),
	});
	const roadmapSchema = z.object({
		weeks_capacity: z.number().min(1).max(4).optional(),
		weeks: z.array(week_schema),
	});
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			current_capacity: 0,
			max_capacity: 50,
			img_url: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
			rating: 0,
			owner: id,
		},
	});
	const fileForm = useForm<z.infer<typeof fileSchema>>({
		resolver: zodResolver(fileSchema),
		defaultValues: {
			cover_url: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
		},
	});
	const fileRef = fileForm.register("file");

	const roadmapForm = useForm<z.infer<typeof roadmapSchema>>({
		resolver: zodResolver(roadmapSchema),
		defaultValues: {
			weeks_capacity: 4,
			weeks: [],
		},
	});
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = roadmapForm;

	const { fields, append, remove } = useFieldArray({
		control: roadmapForm.control,
		name: "weeks",
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const formData = new FormData();
		formData.append("name", values.name);
		formData.append("description", values.description);
		formData.append("type", values.type);
		formData.append("img_url", values.img_url);
		formData.append("category", values.category);
		formData.append("current_capacity", String(values.current_capacity));
		formData.append("max_capacity", String(values.max_capacity));
		formData.append("owner", String(values.owner));
		formData.append("rating", String(values.rating));

		const club_id = await createClubs(formData);
		if (club_id) {
			setCreatedClub(club_id);
			setCurrentStep((prev) => prev + 1);
		}
	};
	const onFileSubmit = async (values: z.infer<typeof fileSchema>) => {
		const formData = new FormData();
		formData.append("title", values.title);
		formData.append("description", values.description);
		formData.append("cover_url", values.cover_url);
		if (createdClub) {
			const file = values.file[0];
			formData.append("article", file);

			formData.append("club_id", String(createdClub.id));
			const res = await addClubArticle(formData);
			if (res === "File uploaded") {
				handleClose();
			}
		}
	};
	const addWeek = () => {
		append({ title: "", description: "", degree: fields.length + 1 });
	};
	const onRoadmapSubmit = async (values: z.infer<typeof roadmapSchema>) => {
		values.weeks_capacity = fields.length;
		const formData = new FormData();
		formData.append("weeks_capacity", values["weeks_capacity"]);
		formData.append("weeks", JSON.stringify({ value: values["weeks"] }));
		if (createdClub) {
			const res = await createClubRoadmap(formData, String(createdClub.id));
			console.log(res);

			if ((res === res.status) === 200) {
				handleClose();
			}
		}
	};
	const handleClose = useCallback(() => {
		setShow(false);
		form.reset();
		setTimeout(() => {
			setCurrentStep(0);
			setCreatedClub(undefined);
		}, 200);
	}, []);
	const handleStep = (index: number) => {
		// because index starts from zero I add 1 to it so it matches the step
		console.log(index, currentStep);

		if (index === 0 && currentStep !== index) {
			setCurrentStep(0);
		} else if (index === 1 && currentStep !== index) {
			setCurrentStep(1);
		} else if (index === 2 && currentStep !== index) {
			setCurrentStep(2);
		}
	};

	return (
		<>
			<Modal
				id={"create-club-modal"}
				ariaLabel={"Create Club Modal"}
				show={show}
				handleClose={handleClose}
			>
				<div className="min-w-[600px] min-h-[400px] max-h-[400px] overflow-auto ">
					<section className="flex flex-col pt-7 pb-16 bg-white max-w-[756px]">
						<header className="flex gap-5 items-start self-center w-full max-w-[551px] max-md:flex-wrap max-md:max-w-full">
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd2a65e2a70e8e99410992446b421928638805fcbc3588dfc2a02d2c39da824a?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
								className=" grow shrink-0 mt-4 aspect-[2.7] basis-0 w-fit max-md:max-w-full h-32"
								alt=""
							/>
							<button onClick={handleClose}>
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/ada4fe0b575f3887e38a88290538f4eb1dfa96b40bab27e411e9834d9d40fffb?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
									className="shrink-0 w-8 aspect-square absolute right-8"
									alt=""
								/>
							</button>
						</header>
						<div>
							<div className="min-w-[400px] px-8 ">
								<Stepper activeStep={currentStep}>
									{steps.map((label, index) => {
										return (
											<Step key={index}>
												<StepButton onClick={() => handleStep(index)}>
													{label}
												</StepButton>
											</Step>
										);
									})}
								</Stepper>
							</div>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="flex flex-col px-16 w-full text-xl font-semibold leading-6 text-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full"
								>
									{currentStep === 0 && (
										<FirstForm
											setCurrentStep={setCurrentStep}
											control={form.control}
										/>
									)}
									{currentStep === 1 && (
										<SecondForm
											setCurrentStep={setCurrentStep}
											control={form.control}
										/>
									)}
								</form>
							</Form>
							{currentStep >= 2 && currentStep < 4 && (
								<Form {...fileForm}>
									<form
										onSubmit={fileForm.handleSubmit(onFileSubmit)}
										className="flex flex-col px-16 w-full text-xl font-semibold leading-6 text-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full"
									>
										{currentStep === 2 && (
											<ThirdForm
												control={fileForm.control}
												setCurrentStep={setCurrentStep}
											/>
										)}
										{currentStep === 3 && (
											<FourthForm
												control={fileForm.control}
												fileRef={fileRef}
											/>
										)}
									</form>
								</Form>
							)}
							{currentStep === 4 && (
								<Form {...roadmapForm}>
									<form
										onSubmit={roadmapForm.handleSubmit(onRoadmapSubmit)}
										className="flex flex-col px-16 w-full text-xl font-semibold leading-6 text-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full"
									>
										<h3 className="mt-4">Create RoadMap</h3>
										<div>
											{fields.map((field, index) => {
												return (
													<div key={field.id} className=" my-4">
														<div className="flex  items-center ">
															<label
																htmlFor={`week_${index + 1}_title`}
																className="text-xs pe-1 min-w-16 max-w-16"
															>
																index
															</label>
															<Input
																type="number"
																className="my-2"
																title={`Week ${index + 1} index`}
																{...register(`weeks.${index}.degree`)}
																disabled={true}
															/>
														</div>
														<div className="flex  items-center ">
															<label
																htmlFor={`week_${index + 1}_title`}
																className="text-xs pe-1 min-w-16 max-w-16"
															>
																Title
															</label>
															<Input
																id={`week_${index + 1}_title`}
																className="my-2"
																type="text"
																title={`Week ${map_week[index + 1]} - Title`}
																{...register(`weeks.${index}.title`)}
															/>
														</div>
														<div className="flex  items-center">
															<label
																htmlFor={`week_${index + 1}desc`}
																className="text-xs pe-1 min-w-16 max-w-16"
															>
																Description
															</label>
															<Input
																type="text"
																id={`week_${index + 1}desc`}
																className="my-2"
																title={`Week ${index + 1} - Description`}
																{...register(`weeks.${index}.description`)}
															/>
														</div>
														{fields.length === index + 1 && (
															<Button
																type="button"
																onClick={() => remove(index)}
															>
																Remove Week
															</Button>
														)}
													</div>
												);
											})}
										</div>
										<div className="mt-4 w-full flex  items-end justify-end ">
											{fields.length < 4 && (
												<Button
													className="mx-4"
													type="button"
													onClick={addWeek}
												>
													Add Week
												</Button>
											)}
											<Button type="submit">Submit</Button>
										</div>
									</form>
								</Form>
							)}
						</div>
						{/* <SecondForm /> */}
					</section>
				</div>
			</Modal>
		</>
	);
};

export default CreateClubForm;

interface SubFormProps {
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
	control: Control<
		{
			name: string;
			description: string;
			type: string;
			img_url: string;
			category: string;
			current_capacity: number;
			max_capacity: number;
			owner: number;
			rating: number;
			file?: FileList | undefined;
		},
		any
	>;
}
interface fileFormProps {
	fileRef?: UseFormRegisterReturn<"file">;
	control: Control<
		{
			file: FileList;
			description: string;
			title: string;
			cover_url: string;
		},
		any
	>;
}

const FirstForm = ({ setCurrentStep, control }: SubFormProps) => {
	return (
		<>
			<FormField
				control={control}
				name="name"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Club Name</FormLabel>
						<FormControl>
							<Input
								className="justify-center items-start py-3 pr-3 pl-6 mt-3 text-base rounded-md border border-teal-700 border-solid text-neutral-400 max-md:px-5 max-md:mr-0.5 max-md:max-w-full"
								placeholder="Enter club name"
								defaultValue={""}
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={control}
				name="description"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Description</FormLabel>
						<FormControl>
							<Input
								className="justify-center items-start py-3 pr-3 pl-6 mt-3 text-base rounded-md border border-teal-700 border-solid text-neutral-400 max-md:px-5 max-md:mr-0.5 max-md:max-w-full"
								placeholder="Enter description"
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={control}
				name="category"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Genre</FormLabel>
						<FormControl>
							<Input
								className="justify-center items-start py-3 pr-3 pl-6 mt-3 text-base rounded-md border border-teal-700 border-solid text-neutral-400 max-md:px-5 max-md:mr-0.5 max-md:max-w-full"
								placeholder="Enter book club genre"
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<button
				className="flex gap-1 justify-center self-end px-10 py-4 mt-6 text-white bg-teal-700 rounded-md max-md:px-5"
				onClick={() => {
					setCurrentStep((prev) => prev + 1);
				}}
				type="button"
			>
				Next Step
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ed5507f7992a14d6253238d8924de1dd4447b0b74cdcbbc3e337e15c4490617?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
					className="shrink-0 w-6 aspect-square"
					alt=""
				/>
			</button>
		</>
	);
};

const SecondForm = ({ setCurrentStep, control }: SubFormProps) => {
	return (
		<>
			<FormField
				control={control}
				name="type"
				render={({ field }) => (
					<FormItem className="space-y-3">
						<FormLabel className="text-xl mb-2">Club Type</FormLabel>
						<FormControl>
							<RadioGroup
								onValueChange={field.onChange}
								defaultValue={field.value}
								className="flex flex-col space-y-1"
							>
								<FormItem className="justify-center items-start space-x-3 space-y-0 py-3 pr-3 pl-6 mt-3 text-base rounded-md border border-teal-700 border-solid text-neutral-400 max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
									<FormControl>
										<RadioGroupItem value="public" />
									</FormControl>
									<FormLabel className="font-normal">Public</FormLabel>
								</FormItem>
								<FormItem className="justify-center items-start space-x-3 space-y-0 py-3 pr-3 pl-6 mt-3 text-base rounded-md border border-teal-700 border-solid text-neutral-400 max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
									<FormControl>
										<RadioGroupItem value="private" />
									</FormControl>
									<FormLabel className="font-normal">Private</FormLabel>
								</FormItem>
							</RadioGroup>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<button
				className="flex gap-1 justify-center self-end px-10 py-4 mt-6 text-white bg-teal-700 rounded-md max-md:px-5"
				type="submit"
			>
				Create?
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ed5507f7992a14d6253238d8924de1dd4447b0b74cdcbbc3e337e15c4490617?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
					className="shrink-0 w-6 aspect-square"
					alt=""
				/>
			</button>
		</>
	);
};
// File Forms
const ThirdForm = ({
	control,
	setCurrentStep,
}: fileFormProps & {
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
	return (
		<>
			<FormField
				control={control}
				name="title"
				render={({ field }) => (
					<FormItem>
						<FormLabel>article title</FormLabel>
						<FormControl>
							<Input
								className="justify-center items-start py-3 pr-3 pl-6 mt-3 text-base rounded-md border border-teal-700 border-solid text-neutral-400 max-md:px-5 max-md:mr-0.5 max-md:max-w-full"
								placeholder="Enter article title"
								defaultValue={""}
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={control}
				name="description"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Description</FormLabel>
						<FormControl>
							<Input
								className="justify-center items-start py-3 pr-3 pl-6 mt-3 text-base rounded-md border border-teal-700 border-solid text-neutral-400 max-md:px-5 max-md:mr-0.5 max-md:max-w-full"
								placeholder="Enter description"
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={control}
				name="cover_url"
				render={({ field }) => (
					<FormItem>
						<FormLabel>cover_url</FormLabel>
						<FormControl>
							<Input
								className="justify-center items-start py-3 pr-3 pl-6 mt-3 text-base rounded-md border border-teal-700 border-solid text-neutral-400 max-md:px-5 max-md:mr-0.5 max-md:max-w-full"
								placeholder="Enter the article cover image"
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<button
				className="flex gap-1 justify-center self-end px-10 py-4 mt-6 text-white bg-teal-700 rounded-md max-md:px-5"
				type="button"
				onClick={() => {
					setCurrentStep((prev) => prev + 1);
				}}
			>
				Next Step
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ed5507f7992a14d6253238d8924de1dd4447b0b74cdcbbc3e337e15c4490617?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
					className="shrink-0 w-6 aspect-square"
					alt=""
				/>
			</button>
		</>
	);
};

const FourthForm = ({ control, fileRef }: fileFormProps) => {
	return (
		<>
			<FormField
				control={control}
				name="file"
				render={({ field }) => {
					return (
						<FormItem>
							<FormLabel>File</FormLabel>
							<FormControl>
								<Input type="file" placeholder="article" {...fileRef} />
							</FormControl>
							<FormMessage />
						</FormItem>
					);
				}}
			/>
			<button
				className="flex gap-1 justify-center self-end px-10 py-4 mt-6 text-white bg-teal-700 rounded-md max-md:px-5"
				type="submit"
			>
				Attach To Club
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ed5507f7992a14d6253238d8924de1dd4447b0b74cdcbbc3e337e15c4490617?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
					className="shrink-0 w-6 aspect-square"
					alt=""
				/>
			</button>
		</>
	);
};

interface RoadmapFormProps {
	control: Control<
		{
			weeks_capacity: number;
			weeks: {
				degree: number;
				title: string;
				description: string;
			}[];
		},
		any
	>;
}

interface WeekFormProps {
	control: Control<
		{
			weeks_capacity: number;
			weeks: {
				description: string;
				title: string;
				degree: number;
			}[];
		},
		any
	>;
}
// Roadmap Form
const WeekFormComponent = ({ control }: WeekFormProps) => {
	return (
		<>
			<FormField
				control={control}
				name="name"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Club Name</FormLabel>
						<FormControl>
							<Input
								className="justify-center items-start py-3 pr-3 pl-6 mt-3 text-base rounded-md border border-teal-700 border-solid text-neutral-400 max-md:px-5 max-md:mr-0.5 max-md:max-w-full"
								placeholder="Enter club name"
								defaultValue={""}
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	);
};
