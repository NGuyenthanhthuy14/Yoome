import Categories from "./components/Categories"
import CategoriesMb from "./components/CategoriesMb"
import SectionBlog from "./components/SectionBlog"

const Section2 = () => {
	return (
		<>
			<div className="max-w-7xl mx-auto sm:mt-20 mt-7 ">
				<div className="sm:flex block sm:gap-15 gap-0">
					<div className="sm:w-[1000px] w-full px-5 sm:px-0">
						<SectionBlog />
					</div>
					<div className="flex-1 sm:flex  hidden">
						<Categories />
					</div>
					<div className="sm:hidden flex">
						<CategoriesMb/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Section2