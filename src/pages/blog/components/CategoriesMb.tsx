import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Collapse } from "antd";
import { Link } from "react-router-dom";

const CategoriesMb = () => {
	const Categories = () => {
		return (
			<>
				<div className="flex flex-col gap-y-5 text-[15px] text-gray-600 mt-2">
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
			</>
		)
	};
	const Archives = () => {
		return (
			<>
				<div className="flex flex-col gap-y-5 text-[15px] text-gray-600 mt-2">
					<Link to="#">February 2025 (2)</Link>
					<Link to="#">January 2025 (11)</Link>
				</div>
			</>
		)
	};
	const RecentComments = () => {
		return (
			<>
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

					<div className="mt-3  leading-5 text-[14px] font-montserrat text-gray-600">Lorem ipsum dolor sit amet, vulputate placerat, etiam pede erat sed proin ultrices, erat sit</div>
				</div>

				<div className="border-b border-gray-200 mt-5 "></div>

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

					<div className="mt-3 leading-5 text-[14px] font-montserrat text-gray-600">Lorem ipsum dolor sit amet, vulputate placerat, etiam pede erat sed proin ultrices, erat sit</div>
				</div>
			</>
		)
	};
	const RecentPosts = () => {
		return (
			<>
				<div className="relative group  border-gray-200  overflow-hidden group">
					<img
						src="https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/05/blog-5.jpg"
						alt="Blog"
						className="w-full h-auto object-cove duration-500 group-hover:scale-110"
					/>
				</div>


				<div className="mt-5">
					<div className="flex justify-between">
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

					<div className="mt-1 text-[14px] ">
						<span className="">Post by </span>
						<span className="text-pink-500">Jane Doe</span>
					</div>

					<div className="mt-3 text-[15px] leading-6 text-gray-600">
						Solve challenges Action Against Hunger citizenry Martin Luther
					</div>
				</div>

				<div className="mt-10">
					<div className="relative group  border-gray-200  overflow-hidden group ">
						<img
							src="https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/05/blog-4.jpg"
							alt="Blog"
							className="w-full h-auto object-cove duration-500 group-hover:scale-110"
						/>
					</div>


					<div className="mt-5">
						<div className="flex justify-between">
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

						<div className="mt-3 text-[15px] leading-6 text-gray-600">
							Solve challenges Action Against Hunger citizenry Martin Luther
						</div>
					</div>
				</div>
			</>
		)
	}

	const items = [
		{
			key: '1',
			label: 'CATEGORIES',
			children: <Categories />,
		},
		{
			key: '2',
			label: 'ARCHIVES',
			children: <Archives />,
		},
		{
			key: '3',
			label: 'RECENT COMMENTS',
			children: <RecentComments />,
		},
		{
			key: '4',
			label: 'RECENT POSTS',
			children: <RecentPosts />,
		},
	];

	return (
		<div className="mx-5 w-full mb-10">
			<Collapse items={items} />
		</div>
	);
};

export default CategoriesMb;
