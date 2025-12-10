import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

const Categories = () => {
	return (
		<>
			<div className="">
				<div className="">
					<div className="font-montserrat font-bold text-xl">CATEGORIES</div>
					<div className="flex flex-col gap-y-5 text-[15px] text-gray-600 mt-5">
						<Link to="#" className="hover:text-pink-500"><span className="hover:text-pink-500 duration-300">Domestic</span></Link>
						<Link to="#"><span className="hover:text-pink-500 duration-300">Fashion's Star</span></Link>
						<Link to="#"><span className="hover:text-pink-500 duration-300">High Fashion</span></Link>
						<Link to="#"><span className="hover:text-pink-500 duration-300">International</span></Link>
						<Link to="#"><span className="hover:text-pink-500 duration-300">Kid’s Clothing</span></Link>
						<Link to="#"><span className="hover:text-pink-500 duration-300">Men’s Clothing</span></Link>
						<Link to="#"><span className="hover:text-pink-500 duration-300">New Arrivals</span></Link>
						<Link to="#"><span className="hover:text-pink-500 duration-300">New Collections</span></Link>
						<Link to="#"><span className="hover:text-pink-500 duration-300">Quote</span></Link>
						<Link to="#"><span className="hover:text-pink-500 duration-300">What's New</span></Link>
					</div>
				</div>
				<div className="mt-10">
					<div className="font-montserrat font-bold text-xl">ARCHIVES</div>
					<div className="flex flex-col gap-y-5 text-[15px] text-gray-600 mt-5">
						<Link to="#">February 2025 (2)</Link>
						<Link to="#">January 2025 (11)</Link>
					</div>
				</div>

				<div className="mt-10">
					<div className="font-montserrat font-bold text-xl">RECENT COMMENTS</div>
					<div className="mt-5">
						<div className="flex gap-5 items-center">
							<div className="">
								<img src="https://secure.gravatar.com/avatar/785b53880fbc1590686ea2494850c83d?s=192&d=mm&r=g" className="w-15 h-15" />
							</div>
							<div className="">
								<div className="font-montserrat font-bold text-pink-500">MARCH 4, 2025</div>
								<div className="mt-1 text-[13px]">Post by <span className="text-pink-500">Jane Doe</span></div>
							</div>
						</div>

						<div className="mt-3 w-65 leading-5 text-[14px] font-montserrat text-gray-600">Lorem ipsum dolor sit amet, vulputate placerat, etiam pede erat sed proin ultrices, erat sit</div>
					</div>

					<div className="border-b border-gray-200 mt-5 w-65"></div>

					<div className="mt-5">
						<div className="flex gap-5 items-center">
							<div className="">
								<img src="https://secure.gravatar.com/avatar/785b53880fbc1590686ea2494850c83d?s=192&d=mm&r=g" className="w-15 h-15" />
							</div>
							<div className="">
								<div className="font-montserrat font-bold text-pink-500">MARCH 4, 2025</div>
								<div className="mt-1 text-[13px]">Post by <span className="text-pink-500">Jane Doe</span></div>
							</div>
						</div>

						<div className="mt-3 w-65 leading-5 text-[14px] font-montserrat text-gray-600">Lorem ipsum dolor sit amet, vulputate placerat, etiam pede erat sed proin ultrices, erat sit</div>
					</div>
				</div>

				<div className="mt-10">
					<div className="font-montserrat font-bold text-xl">RECENT POSTS</div>
					<div className="mt-5">
						<div className="relative group  border-gray-200  overflow-hidden group">
							<img
								src="https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/05/blog-5.jpg"
								alt="Blog"
								className="w-70 h-auto object-cove duration-500 group-hover:scale-110"
							/>
						</div>


						<div className="mt-5">
							<div className="flex gap-10">
								<div className="text-pink-500 font-bold font-montserrat">
									FEBRUARY 5, 2025
								</div>

								<div className="flex gap-3 text-gray-500 text-[14px] items-center">
									<div className="flex gap-1">
										<div className=""><HeartIcon className="h-4 w-4" /></div>
										<div className="">1</div>
									</div>

									<div className="flex gap-1">
										<div className=""><ChatBubbleOvalLeftEllipsisIcon className="h-4 w-4" /></div>
										<div className="">1</div>
									</div>
								</div>
							</div>

							<div className="mt-3 text-xl font-bold text-black hover:text-pink-500 duration-300 font-montserrat">
								Lorem ipsum dolor
							</div>

							<div className="mt-1 text-[14px]">
								<span className="">Post by </span>
								<span className="text-pink-500">Jane Doe</span>
							</div>

							<div className="mt-3 text-[15px] leading-6 text-gray-600 w-70">
								Solve challenges Action Against Hunger citizenry Martin Luther
							</div>
						</div>
					</div>

					<div className="border-b border-gray-200 mt-5 w-65"></div>

					<div className="mt-5">
						<div className="relative group  border-gray-200  overflow-hidden group">
							<img
								src="https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/05/blog-4.jpg"
								alt="Blog"
								className="w-70 h-auto object-cove duration-500 group-hover:scale-110"
							/>
						</div>

						<div className="mt-5">
							<div className="flex gap-10">
								<div className="text-pink-500 font-bold font-montserrat">
									FEBRUARY 5, 2025
								</div>

								<div className="flex gap-3 text-gray-500 text-[14px] items-center">
									<div className="flex gap-1">
										<div className=""><HeartIcon className="h-4 w-4" /></div>
										<div className="">1</div>
									</div>

									<div className="flex gap-1">
										<div className=""><ChatBubbleOvalLeftEllipsisIcon className="h-4 w-4" /></div>
										<div className="">1</div>
									</div>
								</div>
							</div>

							<div className="mt-3 text-xl font-bold text-black hover:text-pink-500 duration-300 font-montserrat">
								Lorem ipsum dolor
							</div>

							<div className="mt-1 text-[14px]">
								<span className="">Post by </span>
								<span className="text-pink-500">Jane Doe</span>
							</div>

							<div className="mt-3 text-[15px] leading-6 text-gray-600 w-70">
								Solve challenges Action Against Hunger citizenry Martin Luther
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Categories