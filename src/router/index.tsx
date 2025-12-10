import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Page from "../pages/Page";
import Shop from "../pages/Shop";
import Blog from "@/pages/blog";
import Portfolio from "@/pages/Portfolio";
import Feature from "@/pages/feature";

export const router = [
  {
    path: "/",
    Component: Home,
    Layout: MainLayout,
  },

  {
    path: "/cart",
    Component: Cart,
    Layout: MainLayout,
  },
  {
    path: "/page",
    Component: Page,
    Layout: MainLayout,
  },
  {
    path: "/shop",
    Component: Shop,
    Layout: MainLayout,
  },
  {
    path: "/blog",
    Component: Blog,
    Layout: MainLayout,
  },
  {
    path: "/portfolio",
    Component: Portfolio,
    Layout: MainLayout,
  },
  {
    path: "/feature",
    Component: Feature,
    Layout: MainLayout,
  },
];
