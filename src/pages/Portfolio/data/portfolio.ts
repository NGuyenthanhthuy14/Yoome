export type Portfolio = {
  title: string;
  image: string;
  categories?: string[];
  slug: string;
};

const portfolio= [
  {
    title: "Lorem ipsum dolor sit amet",
    image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/portfolio-1-640x640.jpg",
    categories: ["Fashion", "Web design"]
  },
  {
    title: "Pellentesque habitant morbi",
    image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/portfolio-2-640x640.jpg",
		categories: ["Graphics" , "Sports" , "Web design"]
  },
  {
    title: "Donec ut lobortis metus",
    image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/portfolio-3-640x640.jpg",
		categories: ["Photography" , "Web design" ]
  },
  {
    title: "Nulla sed faucibus urna",
    image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/portfolio-4-640x640.jpg",
		categories: ["Photography" , "Fashion" ]
  },
  {
    title: "Phasellus fringilla malesuada",
    image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/portfolio-5-640x640.jpg",
		categories: ["Photography" , "Web design" ]
  },
	{
    title: "Quisque dapibus diam et",
    image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/portfolio-6-640x640.jpg",
		categories: ["Photography" , "Fashion", "Photography" ]
  }
];

// Hàm tạo slug duy nhất
const titleSlug = (title: string, existingSlugs: Set<string>) => {
  let baseSlug = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

  let slug = baseSlug;
  let count = 1;

  while (existingSlugs.has(slug)) {
    slug = `${baseSlug}-${count++}`;
  }

  existingSlugs.add(slug);
  return slug;
};

const slugs = new Set<string>();

// Xuất ra blogs với slug
export const portfolios: Portfolio[] = portfolio.map(item => ({
  ...item,
  slug: titleSlug(item.title, slugs)
}));
