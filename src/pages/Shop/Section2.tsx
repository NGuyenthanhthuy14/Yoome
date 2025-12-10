import { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import ProductCart from "./components/ProductCart";
import { products, type Product } from "../Home/data/products";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Section3 from "./Section3";

const Section2 = () => {
	const [template, setTemplate] = useState<"grid" | "list">("grid");
	const [isGridActive, setIsGridActive] = useState(true);
	const [brand, setBrand] = useState<string | null>(null);
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState("Sort by popularity");

	const options = [
		"Sort by price: low to high",
		"Sort by price: high to low"
	];


	const filterProducts = (list: Product[]) => {
		if (!brand) return list;
		return list.filter(item => item.categories === brand);
	};

	const sortProducts = (list: Product[], type: string) => {
		switch (type) {
			case "Sort by price: low to high":
				return [...list].sort((a, b) => a.price - b.price);

			case "Sort by price: high to low":
				return [...list].sort((a, b) => b.price - a.price);

			default:
				return list;
		}
	};


	const filtered = filterProducts(products);
	const finalProducts = sortProducts(filtered, selected);

	const handleSelect = (value: string) => {
		setSelected(value);
		setOpen(false);
	};

	return (
		<div>
			<div className="max-w-7xl mx-auto sm:mt-20 mt-10 px-4 ">
				<div className="sm:flex block justify-between items-start relative">

					<div className="flex text-4xl gap-2 text-white">
						<button
							onClick={() => { setTemplate("grid"); setIsGridActive(true); }}
							className={`cursor-pointer p-2 ${isGridActive ? "bg-pink-500" : "bg-black"}`}
						>
							<IoGridOutline />
						</button>

						<button
							onClick={() => { setTemplate("list"); setIsGridActive(false); }}
							className={`cursor-pointer p-2 ${!isGridActive ? "bg-pink-500" : "bg-black"}`}
						>
							<CiBoxList />
						</button>
					</div>

					<div className="relative mt-6 sm:mt-0">
						<div
							onClick={() => setOpen(!open)}
							className="sm:w-[270px] w-full border-b border-gray-400 px-3 py-4 cursor-pointer text-gray-700 hover:border-pink-500 transition-all"
						>
							<div className="flex justify-between">
								{selected}
								{open ? (
									<ChevronUpIcon className="h-4 w-4" />
								) : (
									<ChevronDownIcon className="h-4 w-4" />
								)}
							</div>
						</div>

						{open && (
							<div className="absolute mt-1 w-[270px] bg-white border border-gray-200 rounded shadow-lg z-20">
								{options.map((opt, i) => (
									<div
										key={i}
										onClick={() => handleSelect(opt)}
										className="px-3 py-3 hover:bg-pink-100 border-b border-gray-200 cursor-pointer text-gray-700 text-[14px]"
									>
										{opt}
									</div>
								))}
							</div>
						)}
					</div>

				</div>
			</div>

			<Section3 setBrand={setBrand} />

			<div className="max-w-7xl mx-auto sm:mt-20 mt-10 px-4 mb-5">
				<div className={`grid ${template === "list" ? "grid-cols-1" : "sm:grid-cols-4 grid-cols-2"} mt-10 sm:gap-8 gap-4`}>
					<ProductCart template={template} products={finalProducts} />
				</div>
			</div>
		</div>
	);
};

export default Section2;
