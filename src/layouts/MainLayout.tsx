import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";
export function MainLayout() {
	return (
		<div
			className={cn("min-h-screen bg-background font-sans antialiased w-full")}
		>
			<Outlet />
			<Toaster />
		</div>
	);
}
