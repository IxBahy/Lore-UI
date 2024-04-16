import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
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
			],
		},
	]);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
