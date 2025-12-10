import { FaFacebookF, FaTwitter, FaRss, FaGlobe } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Section6 = () => {
	const teamMembers = [
		{
			name: "MS. JENNY",
			title: "Developer",
			image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/06/team-1-400x400.jpg",
			social: ["facebook", "twitter", "rss", "web"],
		},
		{
			name: "MR. HENRY",
			title: "Developer",
			image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/06/team-2-400x400.jpg",
			social: ["facebook", "twitter", "rss", "web"],
		},
		{
			name: "MR. JOHN",
			title: "Live Help Operator",
			image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/06/team-3-400x400.jpg",
			social: ["facebook", "twitter", "rss", "web"],
		},
		{
			name: "MISS. LINA",
			title: "CEO of theme-sky",
			image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/06/team-4-400x400.jpg",
			social: ["facebook", "twitter", "rss", "web"],
		},
				{
			name: "MISS. LINA",
			title: "CEO of theme-sky",
			image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/06/team-4-400x400.jpg",
			social: ["facebook", "twitter", "rss", "web"],
		},
	];
	const SocialIcon = ({ type = "" }) => {
		const icons = {
			facebook: <FaFacebookF size={14} />,
			twitter: <FaTwitter size={14} />,
			rss: <FaRss size={14} />,
			web: <FaGlobe size={14} />,
		};

		return (
			<div className="w-9 h-9 flex items-center justify-center rounded-full border 
				border-gray-300 text-gray-600 hover:bg-pink-500 hover:text-white 
				transition-all duration-300 cursor-pointer">
				{icons[type] || null}
			</div>
		);
	};

	return (
		<section className="py-20 bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={20}
					loop={true}
					breakpoints={{
						0: { slidesPerView: 1 },
						640: { slidesPerView: 2 },
						1024: { slidesPerView: 4 },
					}}
					className="pb-10"
				>
					{teamMembers.map((member, index) => (
						<SwiperSlide key={index}>
							<div className="text-center group">
								<div className="relative bg-white shadow-sm mb-4 overflow-hidden">
									<img
										src={member.image}
										alt={member.name}
										className="w-full h-full object-cover transition-transform duration-300"
									/>

									<div
										className="absolute inset-x-0 bottom-0 bg-white p-2 border-t 
										border-gray-100 flex items-center justify-center gap-3 
										opacity-0 translate-y-3 group-hover:opacity-100 
										group-hover:translate-y-0 transition-all duration-300"
									>
										{member.social.map((type) => (
											<SocialIcon key={type} type={type} />
										))}
									</div>
								</div>

								<h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
								<p className="text-sm text-gray-500 italic">{member.title}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Section6;
