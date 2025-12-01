import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Section6 = () => {
  return (
    <div className="bg-gray-100 sm:py-30 py-20 -mt-30 z-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
				className="duration-500"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center sm:px-20 px-10 py-20 text-center">
            <p className="sm:text-2xl text-xl font-light max-w-3xl">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
              molestie consequat. Ut wisi enim ad minim veniam.
            </p>
            <div className="mt-6 text-xl font-medium">MR. JACK</div>
            <div className="text-gray-500">CEO - Themesky</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center sm:px-20 px-10 py-20 text-center">
            <p className="sm:text-2xl text-xl font-light max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              elementum odio laoreet tempus auctor. Vivamus scelerisque velit est.
            </p>
            <div className="mt-6 text-xl font-medium">MISS. BONNI</div>
            <div className="text-gray-500">CEO - Themesky</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center sm:px-20 px-10 py-20 text-center">
            <p className="sm:text-2xl text-xl font-light max-w-3xl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore.
            </p>
            <div className="mt-6 text-xl font-medium">MR. KEN</div>
            <div className="text-gray-500">CEO - Themesky</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Section6;
