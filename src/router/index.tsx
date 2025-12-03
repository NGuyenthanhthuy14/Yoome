import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Page from "../pages/Page";

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
];
