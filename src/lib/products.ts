export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  images?: string[];
  description: string;
  details?: string[];
  isNew?: boolean;
  isSale?: boolean;
  sizes?: string[];
  colors?: { name: string; hex: string }[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wool Overcoat",
    price: 425,
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1544923246-77307dd628b9?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544923246-77307dd628b9?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
    ],
    description: "A refined wool overcoat with a tailored silhouette. Perfect for formal occasions and cold-weather sophistication.",
    details: ["100% Italian Wool", "Fully lined interior", "Two-button closure", "Professional dry clean only"],
    isNew: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Charcoal", hex: "#36454F" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Navy", hex: "#1B2838" }
    ]
  },
  {
    id: "2",
    name: "Slim Fit Oxford Shirt",
    price: 89,
    originalPrice: 120,
    category: "Shirts",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop",
    description: "Classic Oxford shirt with a modern slim fit. Essential for both casual and business occasions.",
    details: ["100% Cotton", "Slim fit cut", "Button-down collar", "Machine wash cold"],
    isSale: true,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "Pink", hex: "#FFB6C1" }
    ]
  },
  {
    id: "3",
    name: "Italian Leather Derby Shoes",
    price: 295,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=800&fit=crop",
    description: "Handcrafted leather derby shoes with Goodyear welt construction. Built for style and durability.",
    details: ["Full-grain Italian leather", "Leather sole", "Goodyear welt", "Made in Italy"],
    isNew: true,
    sizes: ["40", "41", "42", "43", "44", "45", "46"],
    colors: [
      { name: "Dark Brown", hex: "#3D2314" },
      { name: "Black", hex: "#1A1A1A" }
    ]
  },
  {
    id: "4",
    name: "Cashmere Crewneck Sweater",
    price: 245,
    category: "Knitwear",
    image: "https://images.unsplash.com/photo-1638718297373-8b07e0b7f7eb?w=600&h=800&fit=crop",
    description: "Luxuriously soft cashmere sweater with a classic crewneck. Perfect for layering or wearing alone.",
    details: ["100% Mongolian Cashmere", "Regular fit", "Ribbed cuffs and hem", "Hand wash or dry clean"],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Grey", hex: "#808080" },
      { name: "Navy", hex: "#1B2838" },
      { name: "Burgundy", hex: "#800020" }
    ]
  },
  {
    id: "5",
    name: "Tailored Chino Trousers",
    price: 125,
    category: "Trousers",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop",
    description: "Refined chino trousers with a tailored fit. Versatile enough for office or weekend wear.",
    details: ["98% Cotton, 2% Elastane", "Tailored fit", "Side and back pockets", "Machine wash"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: [
      { name: "Khaki", hex: "#C3B091" },
      { name: "Navy", hex: "#1B2838" },
      { name: "Olive", hex: "#556B2F" }
    ]
  },
  {
    id: "6",
    name: "Leather Weekend Bag",
    price: 385,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
    description: "Spacious leather weekend bag with brass hardware. Perfect for short trips and gym visits.",
    details: ["Full-grain leather", "Cotton lining", "Adjustable shoulder strap", "Multiple pockets"],
    isNew: true,
    sizes: ["One Size"],
    colors: [
      { name: "Cognac", hex: "#9A4E20" },
      { name: "Black", hex: "#1A1A1A" }
    ]
  },
  {
    id: "7",
    name: "Merino Wool Polo",
    price: 135,
    originalPrice: 175,
    category: "Shirts",
    image: "https://images.unsplash.com/photo-1625910513413-5fc45e96c509?w=600&h=800&fit=crop",
    description: "Fine merino wool polo with a refined knit texture. Breathable and comfortable for all seasons.",
    details: ["100% Extra-fine Merino Wool", "Regular fit", "Three-button placket", "Machine wash cold"],
    isSale: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Forest Green", hex: "#228B22" },
      { name: "Charcoal", hex: "#36454F" }
    ]
  },
  {
    id: "8",
    name: "Suede Chelsea Boots",
    price: 325,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=800&fit=crop",
    description: "Classic Chelsea boots in premium suede. Elastic side panels for easy on/off.",
    details: ["Italian suede upper", "Leather lining", "Rubber sole", "Made in Portugal"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "Tan", hex: "#D2B48C" },
      { name: "Dark Brown", hex: "#3D2314" }
    ]
  },
  {
    id: "9",
    name: "Quilted Bomber Jacket",
    price: 275,
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
    description: "Lightweight quilted bomber with ribbed cuffs and hem. Perfect transitional piece for autumn and spring.",
    details: ["Nylon outer", "Down filling", "Zip closure", "Machine wash"],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Navy", hex: "#1B2838" },
      { name: "Black", hex: "#1A1A1A" },
      { name: "Olive", hex: "#556B2F" }
    ]
  },
  {
    id: "10",
    name: "Leather Belt",
    price: 95,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=800&fit=crop",
    description: "Hand-finished leather belt with a classic silver buckle. A wardrobe essential.",
    details: ["Full-grain leather", "Brass buckle", "1.3\" width", "Made in Spain"],
    sizes: ["32", "34", "36", "38", "40"],
    colors: [
      { name: "Brown", hex: "#8B4513" },
      { name: "Black", hex: "#1A1A1A" }
    ]
  },
  {
    id: "11",
    name: "Linen Blazer",
    price: 295,
    originalPrice: 395,
    category: "Suits",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop",
    description: "Unstructured linen blazer with a relaxed fit. Ideal for summer events and smart casual occasions.",
    details: ["100% Irish Linen", "Unstructured construction", "Two-button closure", "Dry clean recommended"],
    isSale: true,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Sand", hex: "#C2B280" },
      { name: "Light Grey", hex: "#D3D3D3" }
    ]
  },
  {
    id: "12",
    name: "Automatic Watch",
    price: 595,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&h=800&fit=crop",
    description: "Swiss automatic movement watch with sapphire crystal. A timeless investment piece.",
    details: ["Swiss automatic movement", "Sapphire crystal", "Stainless steel case", "Water resistant 50m"],
    isNew: true,
    sizes: ["One Size"],
    colors: [
      { name: "Silver/Black", hex: "#1A1A1A" },
      { name: "Gold/Brown", hex: "#C19A6B" }
    ]
  }
];

export const categories = [
  { name: "All", slug: "all" },
  { name: "Outerwear", slug: "outerwear" },
  { name: "Shirts", slug: "shirts" },
  { name: "Knitwear", slug: "knitwear" },
  { name: "Trousers", slug: "trousers" },
  { name: "Suits", slug: "suits" },
  { name: "Footwear", slug: "footwear" },
  { name: "Accessories", slug: "accessories" }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
};
