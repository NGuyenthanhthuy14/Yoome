import { useState } from "react"
import { products, type Product } from "./data/products"
import { IoCartOutline } from "react-icons/io5"
import { HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { MdZoomOutMap } from "react-icons/md"
import { Link } from "react-router-dom"
import ProductQuickViewModal from "./components/detail"

const Section4 = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isSelectProduct, setIsSeclectProduct] = useState<Product | null>(null);

	const handleDetail = (products: Product) => {
		setIsOpenModal(true);
		setIsSeclectProduct(products)
	}
	return (
		<>
			<div className="max-w-7xl mx-auto mt-20">
				<div className="text-4xl font-playfair text-center italic">
					FEATURE PRODUCTS
				</div>

				<div className="flex gap-8 py-20">
					<div className="grid grid-cols-2">
						{products.slice(0, 4).map((product) => (
							<div key={product.id} className="group relative text-center">

								<div className="relative w-[330px] gap-3 flex p-4 mb-4 overflow-hidden">

									{product.badge && (
										<span className={`absolute top-3 left-3 text-[13px] font-bold px-4 py-1 text-white z-10
                      ${product.badge === 'HOT' ? 'bg-pink-400' : 'bg-black'}`}
										>
											{product.badge}
										</span>
									)}

									<img
										src={product.image}
										alt={product.name}
										className="w-45 h-auto object-cover transition-transform duration-300 group-hover:scale-105"
									/>
									
									<div className="absolute inset-0 bg-black opacity-0 w-50 h-50 group-hover:opacity-10 transition-opacity duration-300 top-15"></div>
									<div className="absolute inset-0 flex justify-center">
										<div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-40 relative -left-15">
											<div className="text-gray-700 hover:text-pink-500">
												<button className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-black transition duration-150 bg-white" onClick={() => { handleDetail(product) }}>
													<MagnifyingGlassIcon className="w-5 h-5" />
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
									<div className="">
										<div className="text-left">
											<div className="text-gray-700 mb-1 hover:text-pink-500 duration-300">
												<Link to="#" className="text-base font-bold ">
													{product.name}
												</Link>
											</div>


											<p className="text-lg font-light flex flex-col">
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
									</div>
								</div>

							</div>

						))}
					</div>
					<div className="flex-1">
						<div
							className="bg-[url('https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/04/cosmetic-banner-bg-2.jpg')] h-full bg-cover duration-500 hover:scale-105"
						></div>

					</div>
				</div>
			</div>

			<ProductQuickViewModal
				isOpen={isOpenModal}
				product={isSelectProduct}
				onClose={() => setIsOpenModal(false)}
			/>
		</>
	)
}
export default Section4