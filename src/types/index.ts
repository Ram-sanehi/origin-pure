export interface FlavorNote {
  name: string;
  iconName?: string;
  description?: string;
}

export interface BundleOption {
  id: string;
  name: string;
  quantity: number;
  price: number;
  originalPrice?: number;
  savingsBadge?: string;
  isPopular?: boolean;
  freeGifts?: string[];
  amazonUrl?: string;
}

export interface CartItem {
  product: Product;
  selectedBundle: BundleOption;
  quantity: number;
}

export interface BenefitPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlightText: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  category: 'matcha' | 'black' | 'herbal' | 'oolong';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  caffeineLevel: 'High' | 'Medium' | 'Low' | 'Zero';
  steepTime: string;
  temperature: string;
  servingsPerContainer: number;
  images: string[];
  flavorNotes: FlavorNote[];
  keyBenefits: string[];
  ingredients: string[];
  bundles: BundleOption[];
  inStock: boolean;
  amazonUrl: string; // Direct Amazon product listing URL
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedBuyer: boolean;
  avatarUrl?: string;
  location?: string;
  productName?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
