export type Cart = {
	id: string,
	image: string,
	title: string,
	price: number,
	quantity: number,
	subtotal: number
}

export const carts : Cart[] = [
	 {
    id: "1",
    image: "https://via.placeholder.com/150",
    title: "Red Lipstick",
    price: 25.0,
    quantity: 2,
    subtotal: 50.0,
  },
  {
    id: "2",
    image: "https://via.placeholder.com/150",
    title: "Blue Eyeshadow",
    price: 15.5,
    quantity: 1,
    subtotal: 15.5,
  },
  {
    id: "3",
    image: "https://via.placeholder.com/150",
    title: "Makeup Brush",
    price: 10.0,
    quantity: 3,
    subtotal: 30.0,
  },
]