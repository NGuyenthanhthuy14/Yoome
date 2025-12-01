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
			state.push(action.payload)
		}
	}
})

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer