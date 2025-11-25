import { ShoppingBagIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menu = [
    {
      label: "HOME",
      href: "/"
    },
    {
      label: "PAGE",
      href: "/"
    },
    {
      label: "BLOG",
      href: "/"
    },
    {
      label: "PORTFOLIO",
      href: "/"
    },
    {
      label: "FEATURE",
      href: "/"
    }
  ]
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full z-50 bg-transparent text-gray-700 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 my-5">

          <div className="flex items-center ">
            <Link to="/">
              <img src="https://demo.theme-sky.com/yoome-cosmetic/wp-content/themes/yoome/images/logo.png" className="h-12 w-full" />
            </Link>
          </div>

          <div className="flex gap-12 items-center">
            <span className="hidden lg:flex space-x-10 text-sm font-semibold">
              {menu.map ((item, index) => (
                <Link key={index} to={item.href} className="text-black hover:text-pink-500 pb-1">{item.label}</Link>
              ))}
              
            </span>

            <div className="flex items-center space-x-4">

              <button className="relative p-2">
                <ShoppingBagIcon className="w-5 h-5 text-gray-700 hover:text-pink-500" />

                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-pink-500 rounded-full">
                  0
                </span>
              </button>

              <button className="p-2">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-700 hover:text-pink-500" />
              </button>

              <button className="p-2 ">
                <Bars3Icon className="w-6 h-6 text-gray-700 hover:text-pink-500" />
              </button>

            </div>
          </div>
        </div>
      </div>

      <div className="h-20 lg:h-20"></div>
    </>
  )
}
export default Navbar;