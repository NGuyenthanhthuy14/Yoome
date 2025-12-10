import { ArrowRightIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { blogs, type Blog } from "@/pages/blog/data/blog"
const SectionBlog = () => {

	return (
		<>
			<div className="">
				{blogs.map((item) => (
					<div key={item.slug}>
						<div className="relative group border border-gray-200  overflow-hidden group">
							<img
								src={item.image}
								alt="Blog"
								className="w-full h-auto object-cove duration-500 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
						</div>


						<div className="mt-5">
							<div className="flex justify-between">
								<div className="text-pink-500 font-bold font-montserrat">
									FEBRUARY 5, 2025
								</div>

								<div className="flex gap-5 text-gray-500">
									<div className="flex gap-1">
										<div className=""><HeartIcon className="h-5 w-5" /></div>
										<div className="">1</div>
									</div>

									<div className="flex gap-1">
										<div className=""><ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" /></div>
										<div className="">1</div>
									</div>
								</div>
							</div>

							<div className="mt-5 text-3xl font-bold text-black hover:text-pink-500 duration-300 font-montserrat">
								{item.title}
							</div>

							<div className="mt-1 text-[14px]">
								<span className="">Post by </span>
								<span className="text-pink-500">{item.author}</span>
							</div>

							<div className="mt-5 text-[15px] leading-6 text-gray-600">
								Solve challenges Action Against Hunger citizenry Martin Luther King Jr. Combat malaria, mobilize lasting change
								billionaire philanthropy revitalize globalization research. Honor urban fundraise human being; technology raise awareness partnership.
								Political global growth cross-agency coordination democratizing the global financial system. Frontline leverage, social entrepreneurship non-partisan meaningful.
							</div>

							<div className="mt-5 text-pink-500 sm:mb-20 mb-10">
								<Link to={`${item.slug}`} className="flex gap-2 items-center">
									<span className="font-montserrat font-bold text-[15px]">READ MORE</span>
									<span><ArrowRightIcon className="h-4 w-4" /></span>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}
export default SectionBlog;