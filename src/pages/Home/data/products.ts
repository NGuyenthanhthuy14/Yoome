export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number | null;
  reviews: number;
  sku: string;
  availability: string;
  categories: string;
  image: string;
  badge?: string | null;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Phasellus auctor tortor",
    price: 599.0,
    oldPrice: null,
    reviews: 4,
    sku: "0333",
    availability: "In Stock",
    categories: "Skin Care",
    image:
      "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/13-400x400.jpg",
    badge: "HOT",
  },
  {
    id: 2,
    name: "Mollis metus pellentest",
    price: 349.0,
    oldPrice: 400.0,
    reviews: 3,
    sku: "0334",
    availability: "In Stock",
    categories: "Makeup",
    image:
      "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/04-400x400.jpg",
    badge: "SALE",
  },
  {
    id: 3,
    name: "Mauris volutpat feugiat",
    price: 180.0,
    oldPrice: null,
    reviews: 5,
    sku: "0335",
    availability: "Out of Stock",
    categories: "Skin Care",
    image:
      "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/15-400x400.jpg",
    badge: null,
  },
  {
    id: 4,
    name: "Elitem mauris voluptate",
    price: 299.0,
    oldPrice: null,
    reviews: 4,
    sku: "0336",
    availability: "In Stock",
    categories: "Body Care",
    image:
      "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/06-400x400.jpg",
    badge: null,
  },
  {
    id: 1,
    name: "Phasellus auctor tortor",
    price: 599.0,
    oldPrice: null,
    reviews: 4,
    sku: "0333",
    availability: "In Stock",
    categories: "Skin Care",
    image:
      "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/13-400x400.jpg",
    badge: "HOT",
  },
  {
    id: 2,
    name: "Mollis metus pellentest",
    price: 349.0,
    oldPrice: 400.0,
    reviews: 3,
    sku: "0334",
    availability: "In Stock",
    categories: "Makeup",
    image:
      "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/04-400x400.jpg",
    badge: "SALE",
  },
  {
    id: 3,
    name: "Mauris volutpat feugiat",
    price: 180.0,
    oldPrice: null,
    reviews: 5,
    sku: "0335",
    availability: "Out of Stock",
    categories: "Skin Care",
    image:
      "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/15-400x400.jpg",
    badge: null,
  },
  {
    id: 4,
    name: "Elitem mauris voluptate",
    price: 299.0,
    oldPrice: null,
    reviews: 4,
    sku: "0336",
    availability: "In Stock",
    categories: "Body Care",
    image:
      "https://demo.theme-sky.com/yoome-cosmetic/wp-content/uploads/2019/07/06-400x400.jpg",
    badge: null,
  },
];
