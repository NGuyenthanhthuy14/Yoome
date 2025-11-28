import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  const product = [
    {
      id: "1",
      image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/04/cometic-step-1.jpg",
      title: "FACE POWDER"
    },
    {
      id: "2",
      image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/04/cometic-step-2.jpg",
      title: "FACE POWDER"
    },
    {
      id: "3",
      image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/04/cometic-step-3.jpg",
      title: "FACE POWDER"
    },
    {
      id: "4",
      image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/04/cometic-step-4.jpg",
      title: "FACE POWDER"
    },
  ]
  return (
    <>
      <div className="relative w-full  bg-[rgb(225,225,235)] py-10 px-10">
        <div className="flex flex-col gap-50 mt-50">
          <div className="">
            <div className="text-sm text-gray-700 whitespace-nowrap transform rotate-90 origin-left">
              Welcome to Yoome
            </div>
          </div>

          <div className="flex flex-col gap-5 text-gray-500">
            <Link to="#" className="hover:text-pink-500"><FaFacebookF /></Link>
            <Link to="#" className="hover:text-pink-500"><FaTwitter /></Link>
            <Link to="#" className="hover:text-pink-500"><FaYoutube /></Link>
            <Link to="#" className="hover:text-pink-500"><AiFillInstagram /></Link>
          </div>
        </div>
        <div className="relative flex">
          <div className="">
            <img src="/banner.png" className="w-[640px] h-[700px] absolute -bottom-10 left-35" />
          </div>

          <div className="flex flex-col absolute right-[50px] -top-100 items-end">
            <div className="font-bold text-5xl text-white mb-4 text-right">COSMETIC</div>
            <div className="font-light text-7xl text-white mb-15 text-right">BEAUTY OF LIFE</div>
            <div className="bg-white text-pink-500  hover:bg-pink-400 hover:text-white duration-300 ">
              <button className="px-6 py-3  transition-colors">
                SHOP NOW
              </button>
            </div>
          </div>

        </div>

      </div>
      <div className="w-full bg-pink-500 py-10 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4">
            {product.map((item, index) => (
              <div className="flex gap-5 w-[340px] justify-center items-center" key={index}>
                <div className="">
                  <Link to="#">
                    <img src={item.image} className="w-30 transform transition duration-500 hover:scale-110" />
                  </Link>
                </div>
                <div className="text-white flex flex-col gap-2">
                  <div className="text-5xl">
                    {item.id}
                  </div>
                  <div className="">Lookbook</div>
                  <div className="text-3xl font-light">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default Banner;