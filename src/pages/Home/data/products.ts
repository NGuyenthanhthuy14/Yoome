export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number | null;
  reviews: number;
  sku: string;
  availability: string;
  categories: string;
  image: string;
  badge?: string | null;
  colors?: string[];
  sizes?: string[];
};

export const products: Product[] = [
  {
    id: "1",
    name: "Phasellus auctor tortor",
    price: 599.0,
    oldPrice: null,
    reviews: 4,
    sku: "0333",
    availability: "In Stock",
    categories: "Skin Care",
    image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/13-400x400.jpg",
    badge: "HOT",
    colors: ["Red", "Blue", "Green"],
    sizes: ["S", "M", "L"]
  },
  {
    id: "2",
    name: "Mollis metus pellentest",
    price: 349.0,
    oldPrice: 400.0,
    reviews: 3,
    sku: "0334",
    availability: "In Stock",
    categories: "Makeup",
    image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/04-400x400.jpg",
    badge: "SALE",
    colors: ["Black", "White"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: "3",
    name: "Mauris volutpat feugiat",
    price: 180.0,
    oldPrice: null,
    reviews: 5,
    sku: "0335",
    availability: "Out of Stock",
    categories: "Skin Care",
    image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/15-400x400.jpg",
    badge: null,
    colors: ["Pink", "Purple"],
    sizes: ["S", "M"]
  },
  {
    id: "4",
    name: "Elitem mauris voluptate",
    price: 299.0,
    oldPrice: null,
    reviews: 4,
    sku: "0336",
    availability: "In Stock",
    categories: "Body Care",
    image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/06-400x400.jpg",
    badge: null,
    colors: ["Yellow", "Orange"],
    sizes: ["M", "L"]
  },
  {
    id: "5",
    name: "Sapieny mauris maximus",
    price: 200.0,
    oldPrice: null,
    reviews: 4,
    sku: "0007",
    availability: "In Stock",
    categories: "Manicuring",
    image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/05-800x800.jpg",
    badge: null,
    colors: ["Red", "Black"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "6",
    name: "Pelleny tesquest habitant",
    price: 400.0,
    oldPrice: null,
    reviews: 3,
    sku: "0334",
    availability: "In Stock",
    categories: "Makeup",
    image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/02-800x800.jpg",
    badge: null,
    colors: ["White", "Gold"],
    sizes: ["M", "L"]
  },
  {
    id: "7",
    name: "Consec netur tipiscit elit",
    price: 235.0,
    oldPrice: null,
    reviews: 2,
    sku: "0335",
    availability: "Out of Stock",
    categories: "Skin Care",
    image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/12-800x800.jpg",
    badge: null,
    colors: ["Blue", "Gray"],
    sizes: ["S", "M"]
  },
  {
    id: "8",
    name: "Risus aliquamteo tenean",
    price: 249.0,
    oldPrice: null,
    reviews: 4,
    sku: "0336",
    availability: "In Stock",
    categories: "Body Care",
    image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/03-800x800.jpg",
    badge: "HOT",
    colors: ["Purple", "Pink"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: "9",
    name: "Lobortis sapien maurist",
    price: 249.0,
    oldPrice: null,
    reviews: 4,
    sku: "0336",
    availability: "In Stock",
    categories: "Body Care",
    image: "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/14-400x400.jpg",
    badge: "HOT",
    colors: ["Green", "Brown"],
    sizes: ["S", "M", "L"]
  },
];
