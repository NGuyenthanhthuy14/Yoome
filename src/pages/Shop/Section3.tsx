import React, { useState } from 'react';

import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { products, type Product } from "../Home/data/products";


interface Section3Props {
	setBrand: (brand: string | null) => void;
}
const FilterBlock = ({ title, children, defaultOpen = false }) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	const close = () => setIsOpen(false);

	return (
		<div className=" border border-gray-300  relative duration-500">

			<div
				className="flex justify-between items-center p-4 cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className="text-[15px] font-bold text-gray-800  tracking-wider">
					{title}
				</span>
				{isOpen ? (
					<ChevronUpIcon className="w-4 h-4 text-gray-500 duration-500" />
				) : (
					<ChevronDownIcon className="w-4 h-4 text-gray-500 duration-500" />
				)}
			</div>

			{isOpen && (
				<div className=" sm:w-[285px] w-[185px] bg-white border border-gray-200 rounded  z-20 absolute duration-500 p-5 ">
					{children(close)}
				</div>
			)}
		</div>
	);
};


const Section3 = ({ setBrand }: Section3Props) => {
	const colors = [
		{ name: "Black" },
		{ name: "Blue" },
		{ name: "Green" },
		{ name: "Red" },
		{ name: "Yellow" },
	];

	const getBrands = (list: Product[]) => {
		return [...new Set(list.map(item => item.categories))];
	};

	const [selectBrand, setSelectBrand] = useState<string | null>(null);

	const brands = getBrands(products);
	const sizes = ["L", "M", "S", "XL", "XS"];

	return (
		<section className="bg-gray-100 py-10 mt-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

					<FilterBlock title="Brand">
						{(close: any) => (
							<ul className="space-y-2">
								{brands.map((brand) => (
									<li
										key={brand}
										onClick={() => {
											setSelectBrand(brand);
											setBrand(brand);
											close(); // đóng dropdown
										}}
										className="text-gray-700 hover:text-pink-500 cursor-pointer text-[15px] mt-5"
									>
										{brand}
									</li>
								))}
							</ul>
						)}
					</FilterBlock>

					<FilterBlock title="Price">
						{() => (
							<>
								<div className="mb-4 relative h-1 bg-gray-300">
									<div
										className="absolute h-1 bg-black"
										style={{ left: "15%", right: "10%" }}
									/>
									<div
										className="absolute w-3 h-3 bg-black rounded-full top-1/2 -mt-1.5"
										style={{ left: "15%" }}
									/>
									<div
										className="absolute w-3 h-3 bg-black rounded-full top-1/2 -mt-1.5"
										style={{ right: "10%" }}
									/>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-gray-600 text-sm">Price: $90 - $600</span>
									<button className="px-4 py-2 border border-gray-800 text-gray-800 text-xs font-bold hover:bg-black hover:text-white transition duration-200">
										FILTER
									</button>
								</div>
							</>
						)}
					</FilterBlock>

					<FilterBlock title="Color">
						{() => (
							<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
							{colors.map((color) => (
								<div className='hover:text-white'>
									<button
									key={color.name}
									className="p-2 text-sm font-medium border border-gray-300 text-gray-800 hover:bg-black hover:text-white transition duration-500"
								>
									<span className="flex items-center justify-center text-[15px]">
										{color.name}
									</span>
								</button>
								</div>
							))}
						</div>

						)}
					</FilterBlock>

					<FilterBlock title="Size">
						{() => (
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
								{sizes.map((size) => (
									<button
										key={size}
										className="p-2 text-sm font-medium border border-gray-300 text-gray-800 hover:border-pink-500"
									>
										{size}
									</button>
								))}
							</div>
						)}
					</FilterBlock>


				</div>
			</div>
		</section>
	);
};


export default Section3;
