import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Toaster } from "./components/ui/toaster";
import { MainLayout } from "./layouts/MainLayout";
import { cn } from "./lib/utils";
import { AboutPage } from "./pages/AboutPage";
import { AuthLayout } from "./layouts/AuthLayout";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ClubsPage } from "./pages/ClubsPage";
import { ClubLayout } from "./layouts/ClubLayout";
import ClubDetails from "./components/Pages/Club/About/ClubDetails";
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <MainLayout />,
			children: [
				{
					path: "/",
					element: <HomePage />,
				},
				{
					path: "/about",
					element: <AboutPage />,
				},
				{
					path: "/club/",
					element: <ClubsPage />,
				},
				{
					path: "/club/:slug",
					element: <ClubLayout />,
					children: [
						{
							path: "",
							element: <ClubDetails />,
						},
					],
				},
			],
		},
		{
			path: "/",
			element: <AuthLayout />,
			children: [
				{
					path: "/login",
					element: <LoginPage />,
				},
				{
					path: "/register",
					element: <RegisterPage />,
				},
			],
		},
	]);
	return (
		<>
			<div
				className={cn(
					"min-h-screen bg-background font-sans antialiased w-full"
				)}
			>
				<RouterProvider router={router} />
				<Toaster />
			</div>
		</>
	);
}

export default App;
