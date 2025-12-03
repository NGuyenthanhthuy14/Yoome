import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const Section8 = () => {
  return (
    <div className=" sm:pt-20 pt-0 pb-5">
			<div className="sm:text-4xl text-2xl font-playfair text-center italic">
				FOLLOW US ON INSTAGRAM
			</div>

			<div className=" flex items-center justify-center gap-5 mt-10 mb-5 sm:mx-7 mx-4">
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
				<SwiperSlide>
					<Link to="#"><img src="https://scontent-det1-1.cdninstagram.com/v/t51.2885-15/61518148_147030549761174_8359153953636858033_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=vauJMIroVyQQ7kNvwGcS7Ck&_nc_oc=AdnbtxycRtvfVMtqOOqmJWGVKoMkE1rGGZQEYYuVP0shSXZGI6ThS3_1R23M7IebdMY&_nc_zt=23&_nc_ht=scontent-det1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfjncI7YkZwsTDG_e2f8P2D3gwZZ4gj-TixXYSee1wWMyg&oe=692D88A9"/></Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to="#"><img src="https://scontent-det1-1.cdninstagram.com/v/t51.2885-15/61102296_2317939355152585_9096066040028726025_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=hpu5Z9Mv5SgQ7kNvwFlCIlu&_nc_oc=Adkw37tuC021PKALM8BhgTyM32YDVxiT8yRwboeepZpZeaUSEcKhXrZt34eS67ts3uc&_nc_zt=23&_nc_ht=scontent-det1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfiGQdkyoVSz68AeOQqn8aKZJuxfTFF5TS_80lIVJ3pcYQ&oe=692DAE5A"/></Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to="#"><img src="https://scontent-det1-1.cdninstagram.com/v/t51.2885-15/60594345_704229566697800_6297485904734081708_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=tJF4cDSvF00Q7kNvwG47d4j&_nc_oc=AdkCgz43iqw6Ea0orIyXsF17QpNrsnsX4shxmYvXOdg5qunEOpRahW0673UuQdJ59_w&_nc_zt=23&_nc_ht=scontent-det1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_Afj2an5OZwWylvmTnb-_u-d385ILKxINH96ewOEqA8T70g&oe=692D926B"/></Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to="#"><img src="https://scontent-det1-1.cdninstagram.com/v/t51.2885-15/60909995_417815209065489_3213318890132729801_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=TB-Ez1RM4n0Q7kNvwGrvpd4&_nc_oc=AdkdIHcO5D-7zbY_u6WTC7vq_BL4PSspI-GGTY3SYjsyp1mjjAU7zrS6Ia4Mwvu2isE&_nc_zt=23&_nc_ht=scontent-det1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfhaVEnspIaqaItkgs4GnfkwfcHmk49jWuL4FCPp8UoI7w&oe=692DA5C8"/></Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to="#"><img src="https://scontent-det1-1.cdninstagram.com/v/t51.2885-15/60522626_345645052764434_2009206611057719230_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=odL2HVQYYIAQ7kNvwEcVSlG&_nc_oc=Adll2HbabXoS23bOfmaWavF4_NaLKYZfUiBg84u4oPnWirTXHfbZThvJ_-CYLmnKH7U&_nc_zt=23&_nc_ht=scontent-det1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfgK_9ECSfkunGg0W46wNRUPG4PuO8z9rHlhwINeM10GAw&oe=692D93AA"/></Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to="#"><img src="https://scontent-det1-1.cdninstagram.com/v/t51.2885-15/60708601_468390527243331_968772070680876184_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=QgE2CuAIr7wQ7kNvwE7H5eF&_nc_oc=Adk6bGlGqp-wc8-0Q_tiQaKW7U1n7xOvQN-D2xFEWe-nULeuxWeoIigiF6LleozNlfc&_nc_zt=23&_nc_ht=scontent-det1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_Afi8tX9SUeIy--1seAcq9wA3rk94aFRyOgr4-wJh48gJfw&oe=692D8CE9"/></Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to="#"><img src="https://scontent-det1-1.cdninstagram.com/v/t51.2885-15/61518148_147030549761174_8359153953636858033_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=vauJMIroVyQQ7kNvwGcS7Ck&_nc_oc=AdnbtxycRtvfVMtqOOqmJWGVKoMkE1rGGZQEYYuVP0shSXZGI6ThS3_1R23M7IebdMY&_nc_zt=23&_nc_ht=scontent-det1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfjncI7YkZwsTDG_e2f8P2D3gwZZ4gj-TixXYSee1wWMyg&oe=692D88A9"/></Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to="#"><img src="https://scontent-det1-1.cdninstagram.com/v/t51.2885-15/61102296_2317939355152585_9096066040028726025_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=hpu5Z9Mv5SgQ7kNvwFlCIlu&_nc_oc=Adkw37tuC021PKALM8BhgTyM32YDVxiT8yRwboeepZpZeaUSEcKhXrZt34eS67ts3uc&_nc_zt=23&_nc_ht=scontent-det1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfiGQdkyoVSz68AeOQqn8aKZJuxfTFF5TS_80lIVJ3pcYQ&oe=692DAE5A"/></Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to="#"><img src="https://scontent-det1-1.cdninstagram.com/v/t51.2885-15/60594345_704229566697800_6297485904734081708_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=tJF4cDSvF00Q7kNvwG47d4j&_nc_oc=AdkCgz43iqw6Ea0orIyXsF17QpNrsnsX4shxmYvXOdg5qunEOpRahW0673UuQdJ59_w&_nc_zt=23&_nc_ht=scontent-det1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_Afj2an5OZwWylvmTnb-_u-d385ILKxINH96ewOEqA8T70g&oe=692D926B"/></Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to="#"><img src="https://scontent-det1-1.cdninstagram.com/v/t51.2885-15/60909995_417815209065489_3213318890132729801_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=TB-Ez1RM4n0Q7kNvwGrvpd4&_nc_oc=AdkdIHcO5D-7zbY_u6WTC7vq_BL4PSspI-GGTY3SYjsyp1mjjAU7zrS6Ia4Mwvu2isE&_nc_zt=23&_nc_ht=scontent-det1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfhaVEnspIaqaItkgs4GnfkwfcHmk49jWuL4FCPp8UoI7w&oe=692DA5C8"/></Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to="#"><img src="https://scontent-det1-1.cdninstagram.com/v/t51.2885-15/60522626_345645052764434_2009206611057719230_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=odL2HVQYYIAQ7kNvwEcVSlG&_nc_oc=Adll2HbabXoS23bOfmaWavF4_NaLKYZfUiBg84u4oPnWirTXHfbZThvJ_-CYLmnKH7U&_nc_zt=23&_nc_ht=scontent-det1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfgK_9ECSfkunGg0W46wNRUPG4PuO8z9rHlhwINeM10GAw&oe=692D93AA"/></Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to="#"><img src="https://scontent-det1-1.cdninstagram.com/v/t51.2885-15/60708601_468390527243331_968772070680876184_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=QgE2CuAIr7wQ7kNvwE7H5eF&_nc_oc=Adk6bGlGqp-wc8-0Q_tiQaKW7U1n7xOvQN-D2xFEWe-nULeuxWeoIigiF6LleozNlfc&_nc_zt=23&_nc_ht=scontent-det1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_Afi8tX9SUeIy--1seAcq9wA3rk94aFRyOgr4-wJh48gJfw&oe=692D8CE9"/></Link>
				</SwiperSlide>
			</Swiper>
				
			</div>

		</div>
  );
};

export default Section8;
