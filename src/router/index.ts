import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import PublicRouter from "./PublicRouter";

export const router = [
	{
		path: "/",
		Component: Home,
		Layout: MainLayout,
		RouteType: PublicRouter,
	}
]