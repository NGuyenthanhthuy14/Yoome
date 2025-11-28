export type Videos = {
  slug: string;
  date: string;
  title: string;
  author: string;
  video: string;
	image: string
};

const video = [
  {
    date: "January 22, 2025",
    title: "Quisque elit mauris",
    author: "Jane Doe",
    video: "blob:https://player.vimeo.com/bb9a0a59-8f21-4778-8fde-eab184dc0e49",
		image:"https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/05/blog-1.jpg"
  },
  {
    date: "January 22, 2025",
    title: "Orrcis egetan feugia",
    author: "Jane Doe",
    video: "blob:https://player.vimeo.com/bb9a0a59-8f21-4778-8fde-eab184dc0e49",
		image:"https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/05/blog-2.jpg"
  },
  {
    date: "January 22, 2025",
    title: "Dolor amet consecte",
    author: "Jane Doe",
    video: "blob:https://player.vimeo.com/bb9a0a59-8f21-4778-8fde-eab184dc0e49",
		image:"https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/05/blog-3.jpg"
  },
  {
    date: "January 22, 2025",
    title: "Consec tetadip scinelit",
    author: "Jane Doe",
    video: "blob:https://player.vimeo.com/bb9a0a59-8f21-4778-8fde-eab184dc0e49",
		image:"https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2015/05/blog-4.jpg"
  },
	{
    date: "January 22, 2025",
    title: "Consect adipiscing elit",
    author: "Jane Doe",
    video: "blob:https://player.vimeo.com/bb9a0a59-8f21-4778-8fde-eab184dc0e49",
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

export const videos: Videos[] = video.map(item => ({
  ...item,
  slug: titleSlug(item.title, slugs),
}));
