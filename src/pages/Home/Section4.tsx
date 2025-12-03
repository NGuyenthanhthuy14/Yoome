import { useState } from "react"
import { products, type Product } from "./data/products"
import { IoCartOutline } from "react-icons/io5"
import { CheckCircleIcon, HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { MdZoomOutMap } from "react-icons/md"
import { Link } from "react-router-dom"
import ProductQuickViewModal from "./components/detail"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { AppDispatch } from "../../store/CartStore"
import { useDispatch } from "react-redux"
import { addCart, type CartItem } from "../../reducers/cartReducer"

const Section4 = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isSelectProduct, setIsSelectProduct] = useState<Product | null>(null)
  const [addedIds, setAddedIds] = useState<string[]>([]);

  const handleDetail = (product: Product) => {
    setIsOpenModal(true)
    setIsSelectProduct(product)
  }

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
	};

  return (
    <>
      <div className="max-w-7xl mx-auto mt-20">
        <div className="sm:text-4xl text-2xl font-playfair text-center italic">
          FEATURE PRODUCTS
        </div>

        <div className="sm:flex block gap-8 sm:py-20 py-10 px-2 sm:px-0">
          <div className="sm:w-[45%] relative">
            <Swiper
              slidesPerView={2} 
              loop={true}
              navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
              modules={[Autoplay, Pagination, Navigation,FreeMode]}
              className="duration-500"
              spaceBetween={30} 
              freeMode={true}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="group relative text-center p-4">
                    <div className="relative bg-white border border-gray-100 p-4 mb-4 overflow-hidden">
                      {product.badge && (
                        <span
                          className={`absolute top-3 left-3 text-[13px] font-bold px-4 py-1 text-white z-10 ${
                            product.badge === "HOT"
                              ? "bg-pink-400"
                              : "bg-black"
                          }`}
                        >
                          {product.badge}
                        </span>
                      )}

                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                      {/* Hover buttons */}
                      <div className="absolute inset-0 flex justify-center">
                        <div className="sm:flex hidden space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-49">
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
                            onClick={() => {handleAdd(product)}}
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

                      {/* Product text */}
                      
                    </div>
                    <div className="text-left mt-4">
                        <div className="text-gray-700 mb-1 hover:text-pink-500 duration-300">
                          <Link to="#" className="text-base font-bold">
                            {product.name}
                          </Link>
                        </div>

                        <p className="text-lg font-light flex sm:flex-col">
                          {product.oldPrice && (
                            <span className="text-gray-400 line-through mr-2 font-normal">
                              ${product.oldPrice.toFixed(2)}
                            </span>
                          )}
                          <span className="text-pink-500">${product.price.toFixed(2)}</span>
                        </p>
                      </div>
                  </div>

                  <div className="flex sm:hidden justify-center border border-gray-300 mx-1 text-gray-400">
									<div className="hover:text-pink-500">
										<button className="w-10 h-10 flex items-center justify-center transition duration-150  text-gray-700 hover:text-pink-500">
											<HeartIcon className="w-5 h-5" />
										</button>
									</div>

									<div className="hover:text-pink-500">
										<button
											className="w-10 h-10 flex items-center justify-center transition duration-150  text-gray-700 hover:text-pink-500"
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

            <div className="flex gap-4 sm:mt-4 mt-0  absolute sm:bottom-0 -bottom-15 left-0 z-50">
              <div className="text-pink-500 hover:text-white">
                <button className="btn-prev w-12 h-12 bg-gray-100 flex items-center justify-center hover:bg-black  duration-500">←</button>
              </div>
              <div className="text-pink-500 hover:text-white">
                <button className="btn-next w-12 h-12 bg-gray-100 flex items-center justify-center hover:bg-black  duration-500">→</button>
              </div>
              
            </div>
          </div>

          <div className="flex-1 sm:mt-0 mt-30 sm:px-3 px-0">
            <div
              className="bg-[url('https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/04/cosmetic-banner-bg-2.jpg')] sm:h-full h-[250px]  bg-cover duration-500 hover:scale-105 sm:py-10 py-6"
            >
              <div className="sm:w-135 w-85 sm:h-80 h-50 bg-black/60 sm:mx-15 mx-10 pt-5 text-white text-center sm:px-8 px-4">
                <div className="font-montserrat font-bold sm:text-3xl text-2xl sm:mt-8 mt-2">
                  LIPSTICK
                </div>
                <div className="font-montserrat font-light sm:text-3xl text-2xl mt-2 sm:mb-0 mb-6">
                  PERFECT ROUGUE
                </div>

                <div className="font-montserrat font-light mt-4 mb-6 sm:flex hidden">
                  Yoome’s essential lipstick formulas wrap your lips in velvet-soft color from day to night.
                </div>

                <button className="px-10 py-3 bg-pink-500 font-bold uppercase tracking-wider mt-7 hover:bg-white hover:text-pink-500 transition duration-300">
                  VIEW MORE
                </button>
              </div>
            </div>
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
