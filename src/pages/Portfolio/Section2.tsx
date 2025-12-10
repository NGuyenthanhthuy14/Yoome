import { useState } from 'react';
import { portfolios, type Portfolio } from "@/pages/Portfolio/data/portfolio"
import { FaHeart } from 'react-icons/fa';

const Section2 = () => {
	const filters = [
		{ key: 'all', label: 'ALL' },
		{ key: 'fashion', label: 'FASHION' },
		{ key: 'web', label: 'WEB DESIGN' },
		{ key: 'graphics', label: 'GRAPHICS' },
		{ key: 'sports', label: 'SPORTS' },
		{ key: 'photo', label: 'PHOTOGRAPHY' },
	];

	const [activeFilter, setActiveFilter] = useState('all');
	const [heartActive, isHeartActive] = useState< {[key: string]: boolean}>({})

	const filteredProducts = portfolios.filter(product => {
		if (activeFilter === "all") return true;
		return product.categories?.some(cat => cat.toLowerCase() === activeFilter);
	});

	const heart = (slug: string) => {
		isHeartActive(prev => ({
			...prev, [slug]: !prev[slug]
		}))
	}
 
	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				<div className="flex flex-wrap justify-center gap-6 mb-12">
					{filters.map((filter) => (
						<div className=' flex justify-center font-semibold font-montserrat text-[15px] text-white '>
							<button
								key={filter.key}
								onClick={() => setActiveFilter(filter.key)}
								className={`px-6 py-3  uppercase tracking-wider transition-colors duration-300 cursor-pointer ${activeFilter === filter.key ? 'bg-pink-500': 'bg-black'}`}>
								{filter.label}
							</button>
						</div>
					))}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProducts.map((product) => (
						<div key={product.slug} className="relative overflow-hidden group">
							<img
								src={product.image}
								alt={`Product ${product.slug}`}
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
							/>
							<div className='absolute bottom-0 py-2 flex gap-10 px-5 bg-white/90 translate-y-full group-hover:translate-y-0 duration-500'>
								<div className=''>
									<div className='font-montserrat text-xl font-semibold'>Lorem ipsum dolor sit amet</div>
									<div className='mt-2'>Fashion / Web design</div>
								</div>
								<div className='border w-12 h-10 flex justify-center items-center my-5'>
									<button 
									onClick={() => heart(product.slug)}
									className='cursor-pointer'>
										<FaHeart className={`h-6 w-6 ${heartActive[product.slug] ? "text-red-600" : "text-black" } duration-300`}/>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Section2;