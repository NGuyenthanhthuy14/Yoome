import { Link } from "react-router-dom"

const Section1 = () => {
	return (
		<>
			<div className="bg-[url('https://demo.theme-sky.com/yoome-cosmetic/wp-content/themes/yoome/images/bg_breadcrumb_v3.jpg')] sm:h-100 h-40  text-center sm:py-40 py-10">
			<div className="font-playfair sm:text-5xl text-2xl italic sm:mb-5 mb-2 text-white">FAQ</div>
			<div className="">
				<span className="text-white hover:text-pink-500 duration-500">
					<Link to="/" className="font-light">Cosmetic</Link>
				</span>
				<span className="font-light text-white"> /  FAQ</span>
			</div>
			</div>
		</>
	)
}

export default Section1