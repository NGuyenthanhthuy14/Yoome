import { useState } from "react";
import { videos, type Videos } from "./data/videoPoduction";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Section3 = () => {
	const mainVideo: Videos = videos[0];
	const listVideos: Videos[] = videos.slice(1);

	const [popupVideo, setPopupVideo] = useState<Videos | null>(null);

	return (
		<section className="py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

				<h2 className="text-4xl font-serif italic text-gray-800 tracking-wider mb-12">
					VIDEO
				</h2>
				<div className="relative mb-12 max-w-6xl mx-auto">
					<div className="bg-pink-500 w-full h-[580px] rounded-lg relative overflow-hidden"></div>

					<div
						className="relative w-full max-w-[1110px] mx-auto -mt-[550px] cursor-pointer overflow-hidden group"
						onClick={() => setPopupVideo(mainVideo)}
					>
						<img
							src={mainVideo.image}
							alt={mainVideo.title}
							className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
						/>

						<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-30 rounded-lg"></div>

						<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100">
							<FaRegCirclePlay className="text-8xl text-gray-400 " />
						</div>
					</div>

				</div>


				<div className="max-w-6xl mx-auto ml-12 text-left mb-12">
					<p className=" text-pink-500 mb-2 font-bold tracking-wider">
						{mainVideo.date}
					</p>
					<div className="text-3xl font-bold text-gray-800 mb-2 hover:text-pink-500 duration-300">
						<Link to={mainVideo.slug}>{mainVideo.title}</Link>
					</div>
					<p className="text-sm text-gray-500 mb-4">
						Post by{" "}
						<span className="text-pink-500 italic">{mainVideo.author}</span>
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
					{listVideos.map((item) => (
						<div
							key={item.slug}
							className="text-center cursor-pointer"
							onClick={() => setPopupVideo(item)}
						>
							<div className="relative overflow-hidden mb-3 cursor-pointer group">
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
								/>

								<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>

								<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100">
									<FaRegCirclePlay className="text-5xl text-white" />
								</div>
							</div>


							<h4 className="text-base font-medium text-gray-800 hover:text-pink-500">
								{item.title}
							</h4>
						</div>
					))}
				</div>

				<div className="text-white">
					<button className="px-10 py-3 bg-black  font-bold uppercase tracking-wider hover:bg-pink-500 transition duration-300">
						VIEW MORE
					</button>
				</div>
			</div>
				{popupVideo && (
					<div className="fixed inset-0 z-50 flex items-center justify-center">
						<div
							className="absolute inset-0 bg-black/70"
							onClick={() => setPopupVideo(null)}
						></div>

						<div className="relative z-50  p-4 rounded-lg max-w-3xl w-full mx-6 ">
							<div className="text-white">
								<button
									onClick={() => setPopupVideo(null)}
									className="absolute top-4 -right-8 hover:bg-pink-500 text-2xl bg-black/60 w-12 h-12"
								>
									✕
								</button>
							</div>

							<div className="relative pb-[56.25%]">
								<video
									src={popupVideo.video}
									controls
									autoPlay
									className="absolute top-0 left-0 w-full h-full rounded-lg"
								/>
							</div>
						</div>
					</div>
				)}

		</section>
	);
};

export default Section3;
