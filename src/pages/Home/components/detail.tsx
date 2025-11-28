import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { CiStar } from 'react-icons/ci';

type ProductQuickViewProps = {
	product: any;
	onClose: () => void;
	isOpen: boolean;
};

const ProductQuickViewModal = ({ product, onClose, isOpen }: ProductQuickViewProps) => {

	if (!isOpen || !product) return null;

	const [quantity, setQuantity] = useState(1);

	const StarRating = ({ count }: { count: number }) => {
		const totalStars = 5;
		return (
			<div className="flex">
				{Array.from({ length: totalStars }, (_, i) =>
					i < count ? (
						<CiStar key={i} className="w-4 h-4 text-gray-700" />
					) : (
						<CiStar key={i} className="w-4 h-4 text-gray-300" />
					)
				)}
			</div>
		);
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={onClose}>
			<div className="bg-white shadow-xl w-11/12 max-w-6xl py-15 p-0" onClick={(e) => e.stopPropagation()}>
				<div className="relative flex">

					{/* Close Button */}
					<button onClick={onClose} className="absolute -top-15 right-0 p-3 bg-black hover:bg-pink-500 ">
						<XMarkIcon className="w-5 h-5 stroke-current text-white" />
					</button>


					{/* Image */}
					<div className="w-1/2 p-10 flex items-center justify-center">
						<img
							src={product.image || "https://via.placeholder.com/300x400"}
							alt={product.name}
							className="max-h-full max-w-full object-contain"
						/>
					</div>

					{/* Details */}
					<div className="w-1/2 p-10 text-left space-y-4">
						<h2 className="text-2xl font-semibold">{product.name}</h2>
						<div className="flex items-center space-x-2">
							<StarRating count={product.reviews || 0} />
							<span className="text-xs text-gray-500">{product.reviews || 0} Reviews</span>
						</div>
						<div className="flex items-baseline gap-3 pb-4">
							{product.oldPrice && (
								<span className="text-pink-300 line-through text-lg">
									${product.oldPrice.toFixed(2)}
								</span>
							)}
							<span className="text-3xl font-bold text-pink-500">
								${product?.price ? product.price.toFixed(2) : "0.00"}
							</span>
						</div>
						<p className="text-gray-600 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sed purus augue et maximus elit aliquam dolor.</p>

						<div className="flex items-center gap-4 border-b pb-6">
							<div className="flex border border-gray-300 ">
								<div className='hover:text-white '>
									<button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 hover:bg-black duration-300">-</button>
								</div>
								<input value={quantity} readOnly className="w-17 text-center border-x border-gray-300 font-bold" />
							<div className='hover:text-white '>
								<button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-black duration-300">+</button>
							</div>
							</div>

							<div className='text-white font-bold'>
								<button className="grow px-6 py-3 bg-pink-400 hover:bg-black ">ADD TO CART</button>
							</div>
						</div>

						<div className="text-sm space-y-1">
							<p><strong>SKU:</strong> {product.sku}</p>
							<p><strong>Availability:</strong> {product.availability}</p>
							<p><strong>Categories:</strong> {product.categories}</p>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductQuickViewModal;
