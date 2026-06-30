export type ProductVariant = {
  quantity: string;
  price: string;
};

export type Product = {
  id: number;
  categoryId: string;
  img: string;
  price?: string;
  quantity?: string;
  variants?: readonly ProductVariant[];
};

type ProductWithCategory = Product & {
  categoryId: string;
  img: string;
};

export const productsData: Product[] = [
  {
    id: 1,
    categoryId: "rice",
    img: "/images/gobindobhog.jpg",
  },
  {
    id: 2,
    categoryId: "rice",
    img: "/images/dudheswar.jpg",
  },
  {
    id: 3,
    categoryId: "rice",
    img: "/images/tulaipanji.jpg",
  },
  {
    id: 4,
    categoryId: "rice",
    img: "/images/kalijeera.jpg",
  },
  {
    id: 5,
    categoryId: "lentils",
    img: "/images/moong.jpg",
  },
  {
    id: 6,
    categoryId: "lentils",
    img: "/images/bhaja_kolai.jpg",
  },
  {
    id: 7,
    categoryId: "oilandghee",
    img: "/images/mustard.jpg",
  },
  {
    id: 8,
    categoryId: "oilandghee",
    img: "/images/ghee.jpg",
  },
  {
    id: 9,
    categoryId: "honey",
    img: "/images/honey.jpg",
  },
  {
    id: 10,
    categoryId: "pickleandkasundi",
    img: "/images/kasundi.jpg",
  },
  {
    id: 11,
    categoryId: "pickleandkasundi",
    img: "/images/pickel_mango.jpg",
  },
  {
    id: 12,
    categoryId: "sweetsandmorrobba",
    img: "/images/morobba.jpg",
  },
  {
    id: 13,
    categoryId: "sweetsandmorrobba",
    img: "/images/sandesh.jpg",
  },
  {
    id: 14,
    categoryId: "sweetsandmorrobba",
    img: "/images/rasogolla.png",
  },
  {
    id: 15,
    categoryId: "drinksandantioxidants",
    img: "/images/darjeeling_tea.jpg",
  },
  {
    id: 16,
    categoryId: "drinksandantioxidants",
    img: "/images/ctc.png",
  },
  {
    id: 17,
    categoryId: "drinksandantioxidants",
    img: "/images/herbal.jpg",
  },
  {
    id: 18,
    categoryId: "drinksandantioxidants",
    img: "/images/blue_pea.jpg",
  }
];