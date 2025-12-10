import { Bars3Icon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { key: 1, label: "HOME", href: "/" },
    { key: 2, label: "PAGE", href: "/page" },
    { key: 3, label: "SHOP", href: "/shop" },
    { key: 4, label: "BLOG", href: "/blog" },
    { key: 5, label: "PORTFOLIO", href: "/portfolio" },
    { key: 6, label: "FEATURE", href: "/feature" },
  ];

  const handlCart = () => {
    navigate("/cart")
  }

  const [openMenu, setOpenMenu] = useState(false);
  const cartCount = useSelector((state: any) => state.cart?.length || 0);
  console.log(cartCount)

  return (
    <>
      <div className="w-full z-50 bg-[rgb(225,225,235)] text-gray-700 transition-colors duration-300 px-5 sm:px-0 pt-10 sm:py-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:px-6 lg:px-8 py-6">

          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://demo.theme-sky.com/yoome-cosmetic/wp-content/themes/yoome/images/logo.png"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <div className='flex gap-10'>
            <div className="items-center sm:flex hidden gap-10 font-montserrat font-semibold">

              {menu.map((item) => {
                const isActive = location.pathname === item.href;

                return (
                  <div
                    key={item.key}
                    className={`hover:text-pink-500 hover:border-b-2 duration-100 
                      ${isActive ? "text-pink-500 border-b-2" : ""}`}
                  >
                    <Link to={item.href}>
                      {item.label}
                    </Link>
                  </div>
                );
              })}

            </div>
            <div className="flex items-center space-x-4 gap-2 sm:gap-0">
              <button className="relative p-2" onClick={handlCart}>
                <ShoppingBagIcon className="w-5 h-5 text-gray-700 hover:text-pink-500" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 
                  text-xs font-bold text-white transform translate-x-1/2 -translate-y-1/2 
                  bg-pink-500 rounded-full">
                  {cartCount}
                </span>
              </button>

              <button className="p-2 sm:hidden flex" onClick={() => setOpenMenu(true)}>
                <Bars3Icon className="w-6 h-6 text-gray-700 hover:text-pink-500" />
              </button>
            </div>

          </div>
        </div>

      </div>


      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 sm:hidden transition-opacity duration-300
        ${openMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpenMenu(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-104 bg-white shadow-lg z-50  
        transform transition-transform duration-300 sm:hidden
        ${openMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className='bg-black h-20 px-3 py-3'>

          <div className="flex justify-between items-center">
            <div className=""><img src="https://demo.theme-sky.com/yoome-cosmetic/wp-content/themes/yoome/images/logo-menu-mobile.png" className='h-15'/></div>
            <button onClick={() => setOpenMenu(false)}><IoIosClose className='text-3xl text-white' /></button>
          </div>
        </div>


        <div className="flex flex-col gap-4 font-montserrat font-semibold p-6">
          {menu.map((item) => (
            <Link
              key={item.key}
              to={item.href}
              onClick={() => setOpenMenu(false)}
              className="hover:text-pink-500 mb-5 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

    </>
  );
};

export default Navbar;
