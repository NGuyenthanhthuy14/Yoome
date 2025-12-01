import { Link } from "react-router-dom"

const Section1 = () => {
	return (
		<>
			<div className="bg-[url('https://demo.theme-sky.com/yoome-cosmetic/wp-content/themes/yoome/images/bg_breadcrumb_v3.jpg')] h-100  text-center py-40">
			<div className="font-playfair text-5xl italic mb-5 text-white">Shopping cart</div>
			<div className="">
				<span className="text-white hover:text-pink-500 duration-500">
					<Link to="/" className="font-light">Cosmetic</Link>
				</span>
				<span className="font-light text-white"> /  Shopping cart</span>
			</div>
			</div>
		</>
	)
}

export default Section1