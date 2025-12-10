import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartReducer";
import { loadFromLocalStorage, saveToLocalStorage } from "./storage";

export const cartStore = configureStore({
	reducer: {
		cart: cartReducer
	},
	preloadedState: loadFromLocalStorage()
});

cartStore.subscribe(() => {
	saveToLocalStorage({
		cart: cartStore.getState().cart
	});
});

export type RootState = ReturnType<typeof cartStore.getState>;
export type AppDispatch = typeof cartStore.dispatch;
