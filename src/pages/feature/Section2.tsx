import { Collapse } from "antd"
import { IoIosPlayCircle } from "react-icons/io";

const Section2 = () => {
	const Key1 = () => {
		return (
			<>
				<div className="mt-5">
					<div className="mb-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elit mauris, volutpat id feugiat eget, lobortis nec sapien. Mauris ac maximus odio. 
						Etiam nec dui id nibh viverra faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non risus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque elit mauris, volutpat id feugiat eget, lobortis nec sapien. Mauris ac maximus odio. Etiam nec dui id nibh viverra faucibus.
					</div>

					<div className="font-playfair">
						Quisque elit mauris, volutpat id feugiat eget
					</div>

					<div className="mt-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elit mauris, volutpat id feugiat eget, lobortis nec sapien. Mauris ac maximus odio. 
						Etiam nec dui id nibh viverra faucibus lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Mauris non risus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</div>

					<div className="mt-5">
						<ul className="">
							<li className="flex gap-2 items-center">
								<div className="">
									<IoIosPlayCircle />
								</div>
								<div className="">
									Mauris non risus sem
								</div>
								
							</li>
							<li className="flex gap-2 items-center">
								<div className="">
									<IoIosPlayCircle />
								</div>
								<div className="">
									Consectetur adipiscing elit
								</div>
								
							</li>
							<li className="flex gap-2 items-center">
								<div className="">
									<IoIosPlayCircle />
								</div>
								<div>Duibh viverra faucibus</div>
								
							</li>
							<li className="flex gap-2 items-center">
								<div className="">
									<IoIosPlayCircle />
								</div>
								<div className="">Lorem ipsum dolor sit amet</div>
								
							</li>
							<li className="flex gap-2 items-center">
								<div className="">
									<IoIosPlayCircle />
								</div>
								<div>
									Etiam nec dui id nibh
								</div>
								
							</li>
						</ul>
					</div>

					<div className="">
						Lobortis nec sapie nmauris ac maximus odio. Etiam nec dui id nibh viverra faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Mauris non risus consectetur adipiscing elit. Mauris non risus sem faucibus .
					</div>
				</div>
			</>
		)
	}

	const getItems = [
  {
    key: '1',
    label: 'What are your esthetics needs?',
    children:<Key1/>
  },
  {
    key: '2',
    label: 'Do you need a website or blog based theme?',
    children: <Key1/>
  },
  {
    key: '3',
    label: 'What level of browser support do you require?',
    children: <Key1/>
  },
	{
    key: '4',
    label: 'Do you need a website or blog based theme?',
    children: <Key1/>
  },
	{
    key: '5',
    label: 'What level of browser support do you require?',
    children: <Key1/>
  },
	{
    key: '6',
    label: 'Do you need a fixed width or responsive theme?',
    children: <Key1/>
  },
	{
    key: '7',
    label: 'Does the theme’s navigation support your website or blog’s content?',
    children: <Key1/>
  },
	{
    key: '8',
    label: 'Does the theme offer call to actions for the home page and/or sidebar?',
    children: <Key1/>
  },
	{
    key: '9',
    label: 'Is the theme SEO friendly?',
    children: <Key1/>
  },
	{
    key: '10',
    label: 'What level of support will you require?',
    children: <Key1/>
  },
];

	
	return (
		<>
		<div className="max-w-7xl mx-auto my-10 px-5 sm:px-0">
			<Collapse
      bordered={false}

      items={getItems}
    />
		</div>
		
		</>
	)
}

export default Section2