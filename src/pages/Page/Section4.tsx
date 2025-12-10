const Section4 = () => {
	const skills = [
		{ name: "Development", percent: 60, color: "pink-500" },
		{ name: "Design", percent: 80, color: "pink-500" },
		{ name: "Marketing", percent: 40, color: "pink-500" },
		{ name: "Photoshop", percent: 90, color: "pink-500" },
	];

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

					<div className="w-full lg:w-1/2 flex relative">
						<div className="lg:pl-8 text-gray-700 leading-relaxed text-base">
							<p>
								Lasting change local solutions NGO, citizens of change, activist pursue these aspirations outcomes poverty social impact. Human being healthcare gun control, necessities, Action Against. Growth lasting change, making progress informal economies replicable. Efficient nutrition social innovation education.
							</p>
							<p className="mt-4">
								Growth lasting change, making progress informal economies replicable. Efficient evolution nutrition social innovation education.
							</p>
						</div>
					</div>

					<div className="w-full lg:w-1/2 space-y-8">
						{skills.map((skill) => (
							<div key={skill.name}>

								<div className="flex justify-between items-end mb-2">
									<span className="text-gray-800 font-medium uppercase text-sm">
										{skill.name}
									</span>
									<span className={`text-${skill.color} font-bold text-sm`}>
										{skill.percent}%
									</span>
								</div>

								<div className="w-full bg-gray-200 h-2">
									<div
										className={`h-2 bg-black`}
										style={{ width: `${skill.percent}%` }}
									></div>
								</div>
							</div>
						))}
					</div>

				</div>
			</div>
		</section>
	);
};

export default Section4;