import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const removeTokens = () => {
	localStorage.removeItem("access_token");
	localStorage.removeItem("refresh_token");
};
