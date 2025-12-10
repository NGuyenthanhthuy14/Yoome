import { CheckCircleIcon, HeartIcon, MagnifyingGlassIcon, StarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { products, type Product } from "../../Home/data/products";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart, type CartItem } from "../../../reducers/cartReducer";
import ProductQuickViewModal from "../../Home/components/detail";
import type { AppDispatch } from "@/store/CartStore";
import { message } from "antd";

const ProductCart = ({
	template,
	products
}: {
	template: "grid" | "list";
	products: Product[];
}) => {
	const [openModal, isOpenModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const [addedIds, setAddedIds] = useState<string[]>([]);

	const handleDetail = (product: Product) => {
		isOpenModal(true);
		setSelectedProduct(product);
	};

	const dispatch = useDispatch<AppDispatch>();

	const handleAdd = (product: Product) => {
		const cartItem: CartItem = {
			id: product.id,
			image: product.image,
			title: product.name,
			price: product.price,
			quantity: 1,
			subtotal: product.price,
		};
		dispatch(addCart(cartItem));
		setAddedIds((prev) => prev.includes(product.id) ? prev : [...prev, product.id]);
		message.success("Thêm vào giỏ hàng thành công!")
	};

	return (
		<>
			{products?.map((product) => (
				<div key={product.id}>
					<div className={`group relative text-center  ${template === "list" ? "flex sm:gap-10 gap-6" : ""}`}>
						<div className={`relative bg-white border border-gray-200 p-4 mb-5 overflow-hidden ${template === "list" ? "sm:w-82 w-48 " : "sm:w-72 w-46"}`}>
							{product.badge && (
								<span
									className={`absolute top-3 left-3 text-[15px] font-bold px-5 py-2 text-white z-10 ${product.badge === "HOT" ? "bg-pink-400" : "bg-black"
										}`}
								>
									{product.badge}
								</span>
							)}

							<img
								src={product.image}
								alt={product.name}
								className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 "
							/>
							<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
							<div className="absolute inset-0 flex justify-center">
								<div className="sm:flex hidden space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-60">
									<div className="hover:text-pink-500">
										<button
											className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-black transition duration-150 bg-white text-gray-700 hover:text-pink-500"
											onClick={() => handleDetail(product)}
										>
											<MagnifyingGlassIcon className="w-5 h-5" />
										</button>
									</div>

									<div className="hover:text-pink-500 ">
										<button className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-black transition duration-150 bg-white text-gray-700 hover:text-pink-500">
											<HeartIcon className="w-5 h-5" />
										</button>
									</div>

									<div className="hover:text-pink-500">
										<button
											className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-black transition duration-150 bg-white text-gray-700 hover:text-pink-500"
											onClick={() => handleAdd(product)}
										>
											{addedIds.includes(product.id) ? (<CheckCircleIcon className="w-5 h-5" />) : (<IoCartOutline className="w-5 h-5" />)}
										</button>
									</div>

									<div className="hover:text-pink-500">
										<button className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-black transition duration-150 bg-white text-gray-700 hover:text-pink-500">
											<MdZoomOutMap className="w-5 h-5" />
										</button>
									</div>

								</div>
							</div>
						</div>

						<div className={`${template === "list" ? "text-left" : ""}`}>
							<div className="text-gray-700 mb-1 hover:text-pink-500 duration-300">
								<Link to="#" className={`${template === "list" ? "sm:text-2xl text-xl" : "text-base"} font-bold`}>
									{product.name}
								</Link>
							</div>

							<p className="text-lg font-light">
								{product.oldPrice && (
									<span className="text-gray-400 line-through mr-2 font-normal">
										${product.oldPrice.toFixed(2)}
									</span>
								)}
								<span className="text-pink-500">${product.price.toFixed(2)}</span>
							</p>

							<div className={`pb-4 ${template === "list" ? "flex " : "hidden"}`}>
								{[...Array(5)].map((_, i) => (
									<StarIcon
										key={i}
										className={`w-4 h-4 ${i < product.reviews ? "text-yellow-400" : "text-gray-300"
											}`}
									/>
								))}
							</div>

							<div className="flex sm:hidden justify-center border border-gray-300 mx-1 text-gray-400 mb-5">
						<div className="hover:text-pink-500">
							<button className="w-10 h-10 flex items-center justify-center transition duration-150  text-gray-700 hover:text-pink-500">
								<HeartIcon className="w-5 h-5" />
							</button>
						</div>

						<div className="hover:text-pink-500">
							<button
								className="w-10 h-10 flex items-center justify-center transition duration-150  text-gray-700 hover:text-pink-500"
								onClick={() => handleAdd(product)}
							>
								<IoCartOutline className="w-5 h-5" />
							</button>
						</div>

						<div className="hover:text-pink-500">
							<button className="w-10 h-10 flex items-center justify-center transition duration-150 text-gray-700 hover:text-pink-500">
								<MdZoomOutMap className="w-5 h-5" />
							</button>
						</div>

					</div>


							<div className={`${template === "list" ? "sm:flex hidden" : "hidden"}`}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sed purus augue et maximus elit aliquam dolor .</div>
						</div>
					</div>

					
				</div>
			))}

			<ProductQuickViewModal
				isOpen={openModal}
				product={selectedProduct}
				onClose={() => isOpenModal(false)}
			/>
		</>
	);
};

export default ProductCart;
