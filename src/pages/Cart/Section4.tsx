import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/CartStore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";
import { addCart, type CartItem } from "../../reducers/cartReducer";
import { products, type Product } from "../Home/data/products";
import { CheckCircleIcon, HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { IoCartOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { Link } from "react-router-dom";
import ProductQuickViewModal from "../Home/components/detail";
import { message } from "antd";

const Section4 = () => {
	const cartItems = useSelector((state: RootState) => state.cart);
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
		message.success("Thêm thành công vào giỏ hàng!")
	};


	if (cartItems.length === 0) {
		return (
			<div className='bg-white'>
			</div>
		);
	}
	return (
		<>
			<div className="max-w-7xl mx-auto sm:mt-20 mt-10 px-4 mb-10">
				<div className="sm:text-4xl text-2xl font-playfair text-center italic font-light">
					You may be interested in…
				</div>

				<div className="mt-10">
					<Swiper
						slidesPerView={2}
						loop={true}
						spaceBetween={20}
						breakpoints={{
							640: { slidesPerView: 2, spaceBetween: 20 },
							768: { slidesPerView: 3, spaceBetween: 30 },
							1024: { slidesPerView: 4, spaceBetween: 30 },
						}}
						modules={[Pagination, Navigation, Autoplay]}
					>
						{products.map((product) => (
							<SwiperSlide key={product.id}>
								<div className="group relative text-center">
									<div className="relative bg-white border border-gray-100 p-4 mb-4 overflow-hidden">
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
											className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
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

												<div className="hover:text-pink-500">
													<button className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-black transition duration-150 bg-white text-gray-700 hover:text-pink-500">
														<HeartIcon className="w-5 h-5" />
													</button>
												</div>

												<div className="hover:text-pink-500">
													<button
														className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-black transition duration-150 bg-white text-gray-700 hover:text-pink-500"
														onClick={() => handleAdd(product)}
													>
														{addedIds.includes(product.id)? (<CheckCircleIcon className="w-5 h-5" />): (<IoCartOutline className="w-5 h-5" />)}
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

									<div className="text-gray-700 mb-1 hover:text-pink-500 duration-300">
										<Link to="#" className="text-base font-bold">
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
								</div>

								<div className="flex sm:hidden justify-center border border-gray-300 mx-1 text-gray-400">
									<div className="hover:text-pink-500">
										<button className="w-10 h-10 flex items-center justify-center transition duration-150  text-gray-700 hover:text-pink-500">
											<HeartIcon className="w-5 h-5" />
										</button>
									</div>

									<div className="hover:text-pink-500">
										<button
											className="w-10 h-10 flex items-center justify-center transition duration-500  text-gray-700 hover:text-pink-500"
											onClick={() => handleAdd(product)}
										>
											{addedIds.includes(product.id)? (<CheckCircleIcon className="w-5 h-5" />): (<IoCartOutline className="w-5 h-5" />)}
										</button>
									</div>

									<div className="hover:text-pink-500">
										<button className="w-10 h-10 flex items-center justify-center transition duration-150 text-gray-700 hover:text-pink-500">
											<MdZoomOutMap className="w-5 h-5" />
										</button>
									</div>

								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			<ProductQuickViewModal
				isOpen={openModal}
				product={selectedProduct}
				onClose={() => isOpenModal(false)}
			/>

		</>
	)
}

export default Section4