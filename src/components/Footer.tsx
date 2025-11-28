import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-gray-400">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 ">
          <div className="flex ">
            <Link to="/">
              <img src="https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/09/logo-menu-mobile.png" className="h-12 w-full" />
            </Link>
          </div>
          
          <div className="space-y-3">
            <ul className="space-y-5 text-sm font-semibold text-white">
              <li><Link to="#" className="hover:text-pink-500">Fashion Clothing</Link></li>
              <li><Link to="#" className="hover:text-pink-500">Bags & Handbags</Link></li>
              <li><Link to="#" className="hover:text-pink-500">Sport & Outdoors</Link></li>
              <li><Link to="#" className="hover:text-pink-500">Decor & Home</Link></li>
              <li><Link to="#" className="hover:text-pink-500">Electronic & Hitech</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <ul className="space-y-5 text-sm font-semibold text-white">
              <li><Link to="#" className="hover:text-pink-500">Help & FAQs</Link></li>
              <li><Link to="#" className="hover:text-pink-500">Track Order</Link></li>
              <li><Link to="#" className="hover:text-pink-500">Delivery Returns</Link></li>
              <li><Link to="#" className="hover:text-pink-500">Support</Link></li>
              <li><Link to="#" className="hover:text-pink-500">Orders & Returns</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-pink-500 text-xl font-bold uppercase mb-4 ">NEWSLETTER</h3>
            <p className="text-sm">
              Enjoy our newsletter to stay updated with the latest news and special sales. Let's your email address here!
            </p>

            <form className="mt-4 flex">
              <input 
                type="email"
                placeholder="Your email here..."
                className="grow bg-[#2d2d2d] border-none text-white p-3 text-sm focus:ring-pink-500 focus:border-pink-500"
              />
              <button type="submit" className="bg-[#2d2d2d] p-3 hover:bg-pink-500 transition duration-300">
                <ArrowRightIcon className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            </form>

            <div className="flex space-x-4 pt-2">
              <Link to="#" className="hover:text-pink-500"><FaFacebookF/></Link>
              <Link to="#" className="hover:text-pink-500"><FaTwitter /></Link>
              <Link to="#" className="hover:text-pink-500"><FaYoutube /></Link>
              <Link to="#" className="hover:text-pink-500"><AiFillInstagram /></Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 mx-auto max-w-7xl" />

      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
        
        <p className="text-pink-500">© Yoome Theme. All Rights Reserved.</p>
        
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
					<img src="https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/03/payment_01.png"/>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
