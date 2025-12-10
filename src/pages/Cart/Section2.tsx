import { XMarkIcon } from '@heroicons/react/24/outline';
import type { AppDispatch, RootState } from '../../store/CartStore';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, deleteCart, increaseQuantity, updateCart } from '../../reducers/cartReducer'
import { message } from 'antd';
import { useState } from 'react';

const Section2 = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const [isChange, setIsChange] = useState(false)

  if (cartItems.length === 0) {
    return (
      <div className='bg-white'>
        <div className="max-w-7xl mx-auto py-20 px-4 text-center">
          <h2 className="text-2xl text-gray-800">Your cart is empty.</h2>
        </div>
      </div>
    );
  }

  const handleDelete = (id: string) => {
    dispatch(deleteCart(id))
    setIsChange(true)
    message.success("Xoá sản phẩm thành công!");
  }

  const handleAcrease = (id: string) => {
    dispatch(increaseQuantity(id))
    setIsChange(true)
  }

  const handleDecrease = (id: string) => {
    dispatch(decreaseQuantity(id))
    setIsChange(true)
  }

  const handleUpdate = () => {
    cartItems.forEach(item => {
      dispatch(updateCart(item))
    });
    message.success("Cập nhật giỏ hàng thành công!");
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        <div className="hidden md:grid grid-cols-5 text-center font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-4">
          <div className="col-span-2">PRODUCT</div>
          <div>PRICE</div>
          <div>QUANTITY</div>
          <div>SUBTOTAL</div>
        </div>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid md:grid-cols-5 items-center text-center py-6 border-b border-gray-100 gap-4 md:gap-0"
          >
            <div className="col-span-2 flex items-center space-x-4 text-left">
              <button
                className="text-gray-400 hover:text-pink-500 transition duration-150 cursor-pointer"
                onClick={() => handleDelete(item.id)}
              >
                <XMarkIcon className="w-5 h-5" />
              </button>

              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain border border-gray-100 p-1"
              />

              <span className="text-gray-700 font-bold text-bas ml-15">
                {item.title}
              </span>

              
            </div>

            <div className='flex sm:gap-40 gap-10 sm:ml-20 ml-15'>
              <div className="text-pink-500 font-light text-xl md:text-center">
              ${item.price.toFixed(2)}
            </div>

            <div className="flex justify-center md:justify-center">
              <div className="flex border border-gray-300">
                <button
                  className="px-2 py-2 hover:bg-black text-gray-800 hover:text-white font-medium duration-500"
                  disabled={item.quantity <= 1}
                  onClick={() => handleDecrease(item.id)}
                >
                  -
                </button>
                <input
                  type="text"
                  value={item.quantity}
                  readOnly
                  className="w-12 text-center text-gray-800 font-medium border-x border-gray-300"
                />
                <button
                  className="px-2 py-2 hover:bg-black text-gray-800 hover:text-white font-medium duration-500"
                  onClick={() => handleAcrease(item.id)}
                >
                  +
                </button>
              </div>
            </div>
            </div>

            <div className="text-pink-500 font-light text-xl md:text-center sm:ml-80">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 space-y-4 md:space-y-0">
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Coupon code"
              className="border border-gray-200 px-4 py-2 text-sm focus:border-pink-500 focus:ring-pink-500 text-gray-800 outline-none w-full md:w-auto"
            />
            <button className="px-6 py-2 border border-black text-black font-bold uppercase hover:bg-black hover:text-white transition duration-500">
              APPLY COUPON
            </button>
          </div>

          <div className='w-full text-white ml-160'>
            <button
            className={`px-8 py-3 font-bold uppercase transition duration-500 md:w-auto 
              ${isChange ? 'bg-black hover:bg-pink-500 text-white' : 'bg-gray-400 cursor-not-allowed text-gray-200'}`}
            onClick={handleUpdate}
            disabled={!isChange}
          >
            UPDATE CART
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
