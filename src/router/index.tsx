import { Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import PublicRouter from "./PublicRouter";

export const router = [
  {
    path: "/",
    Component: () => <Navigate to="/yoome-cosmetic/" replace />,
  },
  {
    path: "/yoome-cosmetic/",
    Component: Home,
    Layout: MainLayout,
    RouteType: PublicRouter,
  },
];
