const Section3 = () => {
	const data = [
		{
			image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/09/about-us-feature-icon-1.png",
			title: "Creative Idea",
			desc: "Growth lasting change, making progress informal economies replicable. Efficient evolution nutrition social."
		},
		{
			image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/09/about-us-feature-icon-2.png",
			title: "Easy Customize",
			desc: "Growth lasting change, making progress informal economies replicable. Efficient evolution nutrition social."
		},
		{
			image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/09/about-us-feature-icon-3.png",
			title: "Integrated Marketing",
			desc: "Growth lasting change, making progress informal economies replicable. Efficient evolution nutrition social."
		}
	]
	return (
		<>
			<div className="bg-gray-100 sm:mt-40 mt-30">
				<div className="sm:flex block max-w-6xl mx-auto sm:py-30 py-15  text-center gap-20">
					{data.map((item, index) => (
						<>
							<div key={index}>
								<div className="flex justify-center">
									<img src={item.image} />
								</div>
								<div className="text-2xl font-bold mt-4 hover:text-pink-500">
									{item.title}
								</div>
								<div className="text-[15px] mt-4 leading-relaxed pb-10 mx-15 sm:mx-0">
									{item.desc}
								</div>
							</div>
						</>
					))}
				</div>
			</div>
		</>
	)
}
export default Section3