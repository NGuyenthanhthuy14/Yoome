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
      <div className="relative w-full  bg-[rgb(225,225,235)] py-10 sm:px-10 px-0">
        <div className="flex flex-col gap-50 mt-50">
          <div className="">
            <div className="text-sm text-gray-700 whitespace-nowrap transform rotate-90 origin-left sm:flex hidden">
              Welcome to Yoome
            </div>
          </div>

          <div className="sm:flex hidden flex-col gap-5 text-gray-500">
            <Link to="#" className="hover:text-pink-500"><FaFacebookF /></Link>
            <Link to="#" className="hover:text-pink-500"><FaTwitter /></Link>
            <Link to="#" className="hover:text-pink-500"><FaYoutube /></Link>
            <Link to="#" className="hover:text-pink-500"><AiFillInstagram /></Link>
          </div>
        </div>
        <div className="relative flex">
          <div className="">
            <img src="/banner.png" className="sm:w-[640px] w-[250px] sm:h-[700px] h-[300px] absolute -bottom-10 sm:left-35 left-0" />
          </div>

          <div className="flex flex-col absolute sm:right-[50px] right-5 sm:-top-100 -top-50 items-end">
            <div className="font-bold sm:text-5xl text-3xl text-white sm:mb-4 mb-1 text-right">COSMETIC</div>
            <div className="font-light sm:text-7xl text-3xl text-white sm:mb-15 mb-5 text-right ">BEAUTY OF LIFE</div>
            <div className="bg-white text-pink-500  hover:bg-pink-400 hover:text-white duration-300 sm:text-[17px] text-[10px] font-bold">
              <button className="sm:px-6 px-3 sm:py-3 py-2  transition-colors">
                SHOP NOW
              </button>
            </div>
          </div>

        </div>

      </div>
      <div className="w-full bg-pink-500 py-10  ">
        <div className="max-w-7xl mx-auto sm:px-0 px-5">
          <div className="grid sm:grid-cols-4 grid-cols-2 ">
            {product.map((item, index) => (
              <div className="sm:flex block gap-5 sm:w-[340px] w-[140px] justify-center items-center sm:mb-0 mb-5" key={index}>
                <div className="flex items-center">
                  <Link to="#">
                    <img src={item.image} className="sm:w-30 transform transition duration-500 hover:scale-110" />
                  </Link>
                </div>
                <div className="text-white flex flex-col gap-2 text-center">
                  <div className="sm:text-5xl text-2xl mt-2 sm:mt-0">
                    {item.id}
                  </div>
                  <div className="text-center">Lookbook</div>
                  <div className="text-center sm:text-3xl text-2xl font-light">{item.title}</div>
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