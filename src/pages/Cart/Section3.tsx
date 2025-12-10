import { useSelector } from "react-redux";
import type { RootState } from "../../store/CartStore";
import { useState } from "react";
import FormBill from "./components/FormBill";

const Section3 = () => {
	const cartItems = useSelector((state: RootState) => state.cart);
	const [isForm, setIsForm] = useState(false);
	const [isShiping, setIsShiping] = useState(0)
	if (cartItems.length === 0) {
		return (
			<div className='bg-white'>
			</div>
		);
	}

	const subtotal = cartItems.reduce ((sum, item) => {
		return sum + item.subtotal;
	},0)

	const total = subtotal + isShiping;

	return (
		<div className="bg-white">
			<div className=" sm:mx-110 mx-5 bg-gray-50 p-10">
				<div className=" pb-4  border-b border-gray-300 ">
					<div className="font-playfair font-light text-2xl italic text-gray-800">
						CART TOTALS
					</div>

					<div className="pt-6 ">
						<span className="text-base font-normal">Subtotal: </span>
						<span className="ml-17 text-pink-500">${(subtotal).toFixed(2)}</span>
					</div>
				</div>

				<div className="space-y-4 mb-6 text-gray-700 mt-3">
					<div className="flex gap-20 pt-2">
						<span className="text-base font-normal">Shipping</span>
						<div className="flex flex-col text-sm text-gray-600 text-left">

							<label className="flex items-center justify-start mb-1 cursor-pointer">
								<input type="radio" name="shipping" defaultChecked className="text-pink-500 form-radio focus:ring-pink-500" onChange={() => setIsShiping(0)}/>
								<span className="ml-2">Free shipping</span>
							</label>

							<label className="flex items-center justify-start mb-3 cursor-pointer">
								<input type="radio" name="shipping" className="text-pink-500 form-radio focus:ring-pink-500" onChange={() => setIsShiping(10)}/>
								<span className="ml-2">Local Pickup: <span className="text-pink-500 font-light">$10.00</span></span>
							</label>

							<p className="text-xs text-gray-500 mb-2">
								Shipping options will be updated during checkout.
							</p>

							<div className="hover:text-pink-600 text-black text-sm">
								<button
									className="underline"
									onClick={() => setIsForm(prev => !prev)}
								>
									Calculate shipping
								</button>
							</div>

							<div
								className={`overflow-hidden transition-all duration-500 ease-in-out ${isForm ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
							>
								<FormBill />
							</div>

						</div>

					</div>

					<div className="flex gap-26 items-center pt-4 border-t border-gray-200">
						<span className=" font-normal text-gray-800">Total</span>
						<span className="text-3xl font-bold text-red-600">${(total.toFixed(2))}</span>
					</div>
				</div>
				<div className="space-y-3">

					<div className="hover:text-pink-500 text-white">
						<button className="w-full px-6 py-4 bg-pink-500  font-bold uppercase tracking-wider hover:bg-white transition duration-200 shadow-md hover:border-pink-500 hover:border">
							PROCEED TO CHECKOUT
						</button>
					</div>

					<div className="text-white hover:text-black">
						<button className="w-full flex items-center justify-center px-6 py-4 bg-black  font-bold uppercase tracking-wider hover:bg-white transition duration-200  hover:border-black hover:border">
							CONTINUE SHOPPING
							<span className="ml-2">→</span>
						</button>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Section3;