import React, { useCallback, useState } from "react";
import Modal from "@/components/Modal";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Control, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { StepButton, Stepper } from "@mui/material";
import Step from "@mui/material/Step";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
interface Props {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const steps = ["", "", "", "", ""];

const CreateClubForm = ({ show, setShow }: Props) => {
	const [currentStep, setCurrentStep] = useState(0);

	const formSchema = z.object({
		name: z.string(),
		description: z.string(),
		type: z.string(),
		img_url: z.string().url(), // You might want to ensure it's a valid URL
		category: z.string(),
		current_capacity: z.number().int().min(0).max(2147483647),
		max_capacity: z.number().int().min(0).max(2147483647),
		owner: z.number().int().min(0), // Assuming owner ID should be non-negative
		rating: z.number().int().min(0).max(5), // Assuming rating is between 0 and 5
	});
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
		},
	});
	const handleForwardStep = () => {
		setCurrentStep((prev) => prev + 1);
	};
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	const handleClose = useCallback(() => {
		setShow(false);
		form.reset();
		setTimeout(() => {
			setCurrentStep(0);
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
				<div className="min-w-[600px] min-h-[400px] ">
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
		},
		any
	>;
}

const FirstForm = ({ setCurrentStep, control }: SubFormProps) => {
	return (
		<form className="flex flex-col px-16 w-full text-xl font-semibold leading-6 text-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
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
		</form>
	);
};

const SecondForm = ({ setCurrentStep, control }: SubFormProps) => {
	const items = [
		{
			id: "recents",
			label: "Recents",
		},
		{
			id: "home",
			label: "Home",
		},
	] as const;
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
