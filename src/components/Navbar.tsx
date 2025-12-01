import { useEffect, useState } from 'react';
import { ShoppingBagIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { ConfigProvider, Menu } from 'antd';
import NavbarHidden from './NavbarHidden';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate()
  const menu = [
    { label: "HOME", href: "/" },
    { label: "PAGE", href: "/page" },
    { label: "BLOG", href: "/" },
    { label: "PORTFOLIO", href: "/" },
    { label: "FEATURE", href: "/" },
  ];

  const handlCart = () => {
    console.log("Chyaj vào đay")
    navigate("/cart")
  }

  return (
    <>
      <div className="w-full z-50 bg-[rgb(225,225,235)] text-gray-700 transition-colors duration-300 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Link to="/">
              <img src="https://demo.theme-sky.com/yoome-cosmetic/wp-content/themes/yoome/images/logo.png" className="h-12 w-auto" />
            </Link>
          </div>
          <div className='flex gap-5'>
            <div className="gap-12 items-center sm:flex hidden">
              <ConfigProvider
                theme={{
                  components: {
                    Menu: {
                      colorBgContainer: 'transparent',
                      horizontalItemSelectedColor: '#ec4899',
                      horizontalItemHoverColor: '#ec4899',
                      itemHoverColor: '#ec4899',
                      itemSelectedColor: '#ec4899',
                    },
                  },
                }}
              >
                <Menu
                  defaultSelectedKeys={['0']}
                  mode="horizontal"
                  items={menu.map((item, index) => ({
                    key: index,
                    label: (
                      <Link
                        to={item.href}
                        className="text-black hover:text-pink-500 pb-1 font-semibold"
                      >
                        {item.label}
                      </Link>
                    ),
                  }))}
                  className="text-black pb-1 bg-transparent"
                  style={{ background: "transparent" }}
                />
              </ConfigProvider>


            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2" onClick={handlCart}>
                <ShoppingBagIcon className="w-5 h-5 text-gray-700 hover:text-pink-500" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-pink-500 rounded-full">
                  0
                </span>
              </button>

              <button className="p-2">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-700 hover:text-pink-500" />
              </button>

              <button className="p-2">
                <Bars3Icon className="w-6 h-6 text-gray-700 hover:text-pink-500" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {isScrolled && <NavbarHidden />}
    </>
  );
};

export default Navbar;
