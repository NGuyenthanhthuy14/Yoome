export type Blog ={
	slug: string,
	title: string,
	author: string,
	image: string
}

const blog = [
	{
		title: "Quisque elit mauris",
		author: "Jane Doe",
		image:"https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/05/blog-1.jpg"
	},
	{
		title: "Orrcis egetan feugia",
		author: "Jane Doe",
		image:"https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/05/blog-2.jpg"
	},
	{
		title: "Dolor amet consecte",
		author: "Jane Doe",
		image:"https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/05/blog-3.jpg"
	},
	{
		title: "Consec tetadip scinelit",
		author: "Jane Doe",
		image:"https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/05/blog-4.jpg"
	},
	{
		title: "Consect adipiscing elit",
		author: "Jane Doe",
		image:"https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/05/blog-5.jpg"
	},
];

const titleSlug = (title: string, existingSlugs: Set<string>) => {
	let baseSlug = title
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, "")
		.replace(/\s+/g, "-");

	let slug = baseSlug;
	let count = 1;

	// Kiểm tra slug hiện tại đã tồn tại chưa
	while (existingSlugs.has(slug)) {
		slug = `${baseSlug}-${count++}`;
	}

	existingSlugs.add(slug);
	return slug;
};

const slugs = new Set<string>();

export const blogs: Blog[] = blog.map(item => ({
	...item,
	slug: titleSlug(item.title, slugs),
}));
