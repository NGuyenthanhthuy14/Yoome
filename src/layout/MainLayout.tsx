import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <header><Navbar/></header>
      <main className="bg-gray-50">{children}</main>
      <footer><Footer/></footer>
    </div>
  );
};

export default MainLayout;
