import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

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
];
