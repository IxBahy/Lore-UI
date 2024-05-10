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
import { ClubMaterialPage } from "./pages/ClubMaterialPage";
import { ClubMembersPage } from "./pages/ClubMembersPage";
import { ClubReviewsPage } from "./pages/ClubReviewsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ProfileLayout } from "./layouts/ProfileLayout";
import { ProfileProgressPage } from "./pages/ProfileProgressPage";
import { ProfileFriendsPage } from "./pages/ProfileFriendsPage";
import { StudentLayout } from "./layouts/StudentLayout";
import { StudentProfilePage } from "./pages/StudentProfilePage";
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
						{
							path: "material",
							element: <ClubMaterialPage />,
						},
						{
							path: "members",
							element: <ClubMembersPage />,
						},
						{
							path: "reviews",
							element: <ClubReviewsPage />,
						},
					],
				},
				{
					path: "/profile/",
					element: <ProfileLayout />,
					children: [
						{
							path: "",
							element: <ProfilePage />,
						},
						{
							path: "progress",
							element: <ProfileProgressPage />,
						},
						{
							path: "friends",
							element: <ProfileFriendsPage />,
						},
					],
				},
				{
					path: "/student/:slug",
					element: <StudentLayout />,
					children: [
						{
							path: "",
							element: <StudentProfilePage />,
						},
						// {
						// 	path: "progress",
						// 	element: <ProfileProgressPage />,
						// },
						// {
						// 	path: "friends",
						// 	element: <ProfileFriendsPage />,
						// },
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
