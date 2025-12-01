import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Section7 = () => {
	const brands = [
		"https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/03/brand-6-200x90.png",
		"https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/03/brand-5-200x90.png",
		"https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/03/brand-4-200x90.png",
		"https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/03/brand-3-200x90.png",
		"https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/03/brand-2-200x90.png",
	];

	return (
		<div className="max-w-7xl mx-auto pt-20 pb-20">
			<h2 className="sm:text-4xl text-2xl font-playfair text-center italic">
				SHOP OUR TOP BRANDS
			</h2>

			<div className="mt-10 mb-20">
				<Swiper
					slidesPerView={2}         
					spaceBetween={10}
					loop={true}
					freeMode={true}
					autoplay={{ delay: 2000, disableOnInteraction: false }}
					modules={[FreeMode, Pagination]}
					breakpoints={{ 
						1024: { slidesPerView: 6, spaceBetween: 30 }, 
					}}
				>
					{brands.map((brand, index) => (
						<SwiperSlide key={index} className="flex justify-center">
							<Link to="#">
								<img src={brand} className="h-20 w-auto object-contain" />
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="mx-4 border-b border-gray-300"></div>
		</div>
	);
};

export default Section7;
