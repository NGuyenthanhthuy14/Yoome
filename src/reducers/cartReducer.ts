import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface CartItem {
	id: string;
	image: string;
	title: string;
	price: number;
	quantity: number;
	subtotal: number;
}


const initialState : CartItem [] = []

const cartSlice = createSlice ({
	name: "cart", 
	initialState,
	reducers: {
		addCart: (state, action: PayloadAction<CartItem>) => {
			const exitItem = state.find(item => item.id == action.payload.id)

			if (exitItem) {
				exitItem.quantity = exitItem.quantity + 1;
				exitItem.subtotal = exitItem.quantity * exitItem.price;
			}
			else {
				state.push ({
					...action.payload,
					subtotal: action.payload.price * action.payload.quantity
				})
			}
			
		},
		deleteCart : (state, action: PayloadAction<string>) => {
			return state.filter(item => item.id !== action.payload)
		},
		updateCart : (state, action: PayloadAction<CartItem>) => {
			const items = state.find (item => item.id == action.payload.id)
			if (items) {
				items.image = action.payload.image,
				items.title = action.payload.title,
				items.price = action.payload.price,
				items.quantity = action.payload.quantity,
				items.subtotal = action.payload.subtotal
			} 
		},
		decreaseQuantity: (state, action: PayloadAction<string>) => {
			const items = state.find(item => item.id == action.payload)
			if (items && items.quantity >=1) {
				items.quantity -= 1,
				items.subtotal = items.quantity * items.price
			}
		},
		increaseQuantity: (state, action: PayloadAction<string>) => {
			const items= state.find(item => item.id == action.payload)
			if (items) {
				items.quantity += 1,
				items.subtotal = items.quantity * items.price
			}
		}
	}
})

export const { addCart } = cartSlice.actions;
export const { deleteCart,decreaseQuantity, increaseQuantity,updateCart} = cartSlice.actions

export default cartSlice.reducer