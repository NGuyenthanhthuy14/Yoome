import { HeartIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import { useState, type SetStateAction } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import ProductQuickViewModal from "./components/detail";
import { products, type Product } from "./data/products";
import { Link } from "react-router-dom";

const Section2 = () => {
	const [openModal, isOpenModal] = useState(false)
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const handleDetail = (products: Product) => {
		isOpenModal(true);
		setSelectedProduct(products)
	}

	
	return (
		<>
			<div className="max-w-7xl mx-auto mt-20">
				<div className="text-4xl font-playfair text-center italic">
					NEW PRODUCTS
				</div>

				<div className="mt-10">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
						{products.slice(0, 4).map((product) => (
							<div key={product.id} className="group relative text-center">

								<div className="relative bg-white border border-gray-100 p-4 mb-4 overflow-hidden">

									{product.badge && (
										<span className={`absolute top-3 left-3 text-[15px] font-bold px-5 py-2 text-white z-10
                      ${product.badge === 'HOT' ? 'bg-pink-400' : 'bg-black'}`}
										>
											{product.badge}
										</span>
									)}

									<img
										src={product.image}
										alt={product.name}
										className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
										<div className="absolute inset-0 flex justify-center">
											<div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-62">
												
												<div className="text-gray-700 hover:text-pink-500">
													<button className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-black transition duration-150 bg-white" onClick={() => {handleDetail(product)}}>
														<MagnifyingGlassIcon className="w-5 h-5"/>
													</button>
												</div>
												<div className="text-gray-700 hover:text-pink-500">
													<button className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-black transition duration-150 bg-white">
														<HeartIcon className="w-5 h-5 " />
													</button>
												</div>

												<div className="text-gray-700 hover:text-pink-500">
													<button className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-black transition duration-150 bg-white">
														<IoCartOutline className="w-5 h-5 " />
													</button>
												</div>

												<div className="text-gray-700 hover:text-pink-500">
													<button className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-black transition duration-150 bg-white">
														<MdZoomOutMap className="w-5 h-5" />
													</button>
												</div>
											</div>
										</div>

									</div>
									<div className="text-gray-700 mb-1 hover:text-pink-500 duration-300">
										<Link to="#" className="text-base font-bold ">
											{product.name}
										</Link>
									</div>


								<p className="text-lg font-light">
									{product.oldPrice && (
										<span className="text-gray-400 line-through mr-2 font-normal">
											${product.oldPrice.toFixed(2)}
										</span>
									)}
									<span className="text-pink-500">
										${product.price.toFixed(2)}
									</span>
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<ProductQuickViewModal
				isOpen = {openModal}
				product={selectedProduct}
				onClose={() => isOpenModal(false)}
			/>
		</>
	)
}
export default Section2;