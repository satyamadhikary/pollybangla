export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  quantity: string;
  img: string;
};

export const productsData: Record<string, Product[]> = {
  "ধান ও চাল": [
    {
      id: 1,
      name: "প্রিমিয়াম নাজিরশাইল চাল",
      description:
        "Mustard Oil – 1L Authentic flavor. Zero chemicals. Just pure mustard.100% Cold-Pressed: Slow wood-press extraction, no heat or solvents. Retains natural pungency, aroma, and nutrients. Bold & Versatile: Perfect for curries, frying, pickles, tadkas & traditional massage. That real mustard kick.Heart-Smart: Rich in Omega-3, Vitamin E, and MUFA. Supports healthy cholesterol as part of a balanced diet. Clean Label: Single ingredient – only black mustard seeds. No additives, no refining, no blending. Farm Direct: Sourced from organic farms. Packed in amber glass to lock freshness. Ingredients: 100% Cold-Pressed Black Mustard Seeds Shelf Life: 9 Months | Net Qty: 1L Taste what refined oils can’t deliver.",
      price: "৮৫",
      quantity: "১ কেজি",
      img: "/Premium Nazirshail Rice.webp",
    },
    {
      id: 2,
      name: "মিনিকেট চাল (নতুন)",
      description:
        "উন্নত মানের মিনিকেট চাল যা প্রতিদিনের ব্যবহারের জন্য আদর্শ।",
      price: "৭২",
      quantity: "১ কেজি",
      img: "/hero.png",
    },
  ],

  মধু: [
    {
      id: 3,
      name: "সুন্দরবনের খাঁটি মধু",
      description: "সুন্দরবন থেকে সংগৃহীত শতভাগ খাঁটি প্রাকৃতিক মধু।",
      price: "৮৫০",
      quantity: "১ কেজি",
      img: "/category4.jpg",
    },
  ],
};