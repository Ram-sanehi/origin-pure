import { Product } from '../types';
import { getProductImages } from './productImages';

// ─── Shared constants ─────────────────────────────────────────────────────────
// All products: 25 pyramid bags, 50g, 2g/bag, 80–85°C, 3–5 min steep, low caffeine
// Manufacturer: HNCO Infusions Pvt Ltd, Noida, UP - 201301
// NOTE: All listings are currently unavailable on Amazon.in — update prices when live

export const PRODUCTS: Product[] = [
  // ── 1. Hibiscus Berry Green Tea ────────────────────────────────────────────
  {
    id: 'hibiscus-berry-green-tea',
    name: 'Origin Pure Hibiscus Berry Green Tea',
    subtitle: '25 Biodegradable Pyramid Tea Bags (50g)',
    tagline: 'A floral, berry-citrus green tea with hibiscus petals and lemon peel.',
    category: 'herbal',
    price: 499,
    originalPrice: undefined,
    rating: 4.9,
    reviewCount: 0,
    badge: 'GREEN TEA',
    shortDescription: 'Floral. Berry. Citrus.',
    fullDescription: 'A green tea blend with hibiscus petals, lemon peel, and natural berry flavouring. The hibiscus gives the cup a deep rose tint and a tart floral note that balances the green tea base.',
    caffeineLevel: 'Low',
    steepTime: '3–5 mins',
    temperature: '80–85°C',
    servingsPerContainer: 25,
    images: getProductImages('hibiscus-berry-green-tea'),
    amazonUrl: 'https://www.amazon.in/dp/B0HG4LRXX1',
    flavorNotes: [
      { name: 'Hibiscus Petals', iconName: 'Sparkles', description: 'Tart floral rose note' },
      { name: 'Lemon Peel', iconName: 'Sun', description: 'Bright citrus top note' },
      { name: 'Natural Berry', iconName: 'Flame', description: 'Sweet berry undertone' }
    ],
    keyBenefits: [
      '25 Pyramid Tea Bags (50g)',
      'Green Tea + Hibiscus + Berry + Lemon',
      'Plant-Based Biodegradable Bags',
      'No Artificial Colours · Preservative-Free'
    ],
    ingredients: ['Green Tea Leaves', 'Hibiscus Petals', 'Lemon Peel', 'Natural Berry Flavouring'],
    bundles: [
      {
        id: 'hb-single',
        name: '1 Pack (25 Pyramid Bags)',
        quantity: 1,
        price: 499,
        savingsBadge: undefined,
        amazonUrl: 'https://www.amazon.in/dp/B0HG4LRXX1'
      }
    ],
    inStock: false
  },

  // ── 2. Evening Calm — Chamomile Lemon Green Tea ────────────────────────────
  {
    id: 'origin-pure-evening-calm',
    name: 'Origin Pure Evening Calm Chamomile Lemon Green Tea',
    subtitle: '25 Biodegradable Pyramid Tea Bags (50g)',
    tagline: 'A soothing floral-citrus green tea blend for a simple evening tea routine.',
    category: 'herbal',
    price: 499,
    originalPrice: undefined,
    rating: 4.97,
    reviewCount: 0,
    badge: 'EVENING RITUAL',
    shortDescription: 'Chamomile. Lemon. Green Tea.',
    fullDescription: 'A green tea blend combining chamomile flowers and lemon balm. The chamomile comes through properly — not just a background note — and the lemon keeps it from being heavy.',
    caffeineLevel: 'Low',
    steepTime: '3–5 mins',
    temperature: '80–85°C',
    servingsPerContainer: 25,
    images: getProductImages('origin-pure-evening-calm'),
    amazonUrl: 'https://www.amazon.in/dp/B0HG4S9PD2',
    flavorNotes: [
      { name: 'Chamomile Flowers', iconName: 'Sparkles', description: 'Soothing floral calm' },
      { name: 'Lemon Balm', iconName: 'Sun', description: 'Refreshing citrus note' },
      { name: 'Green Tea', iconName: 'Leaf', description: 'Light low-caffeine base' }
    ],
    keyBenefits: [
      '25 Pyramid Tea Bags (50g)',
      'Green Tea + Chamomile + Lemon Balm',
      'Plant-Based Biodegradable Bags',
      'Vegetarian · Made in India'
    ],
    ingredients: ['Green Tea Leaves', 'Chamomile Flowers', 'Lemon (Lemon Balm)'],
    bundles: [
      {
        id: 'ec-single',
        name: '1 Pack (25 Pyramid Bags)',
        quantity: 1,
        price: 499,
        savingsBadge: undefined,
        amazonUrl: 'https://www.amazon.in/dp/B0HG4S9PD2'
      }
    ],
    inStock: false
  },

  // ── 3. Fennel Harmony Green Tea with Star Anise ────────────────────────────
  {
    id: 'origin-pure-fennel-harmony',
    name: 'Origin Pure Fennel Harmony Green Tea',
    subtitle: '25 Biodegradable Pyramid Tea Bags (50g)',
    tagline: 'A refreshing green tea blend with fennel, star anise, and dried lemon slices.',
    category: 'herbal',
    price: 499,
    originalPrice: undefined,
    rating: 4.95,
    reviewCount: 0,
    badge: 'AROMATIC',
    shortDescription: 'Fennel. Star Anise. Lemon.',
    fullDescription: 'Green tea leaves with fennel, star anise, and dried lemon slices. The anise note is clear but not dominant — it sits alongside the lemon without overpowering the cup.',
    caffeineLevel: 'Low',
    steepTime: '3–5 mins',
    temperature: '80–85°C',
    servingsPerContainer: 25,
    images: getProductImages('origin-pure-fennel-harmony'),
    amazonUrl: 'https://www.amazon.in/dp/B0HG4NN2V7',
    flavorNotes: [
      { name: 'Green Tea', iconName: 'Leaf', description: 'Clean antioxidant-rich base' },
      { name: 'Fennel & Star Anise', iconName: 'Sparkles', description: 'Warm aromatic spice' },
      { name: 'Dried Lemon', iconName: 'Sun', description: 'Citrus brightness' }
    ],
    keyBenefits: [
      '25 Pyramid Tea Bags (50g)',
      'Green Tea + Fennel + Star Anise + Lemon',
      'Plant-Based Biodegradable Bags',
      'No Artificial Colours or Flavours'
    ],
    ingredients: ['Green Tea Leaves', 'Dried Lemon Slices', 'Fennel', 'Star Anise'],
    bundles: [
      {
        id: 'fh-single',
        name: '1 Pack (25 Pyramid Bags)',
        quantity: 1,
        price: 499,
        savingsBadge: undefined,
        amazonUrl: 'https://www.amazon.in/dp/B0HG4NN2V7'
      }
    ],
    inStock: false
  },

  // ── 4. Blue Pea Herbal Infusion ────────────────────────────────────────────
  {
    id: 'origin-pure-blue-pea',
    name: 'Origin Pure Blue Pea Herbal Infusion',
    subtitle: '25 Biodegradable Pyramid Infusion Bags (50g)',
    tagline: 'A five-botanical herbal infusion with butterfly pea flowers, lemongrass, and spearmint.',
    category: 'herbal',
    price: 499,
    originalPrice: undefined,
    rating: 4.93,
    reviewCount: 0,
    badge: 'HERBAL',
    shortDescription: 'Butterfly Pea. Spearmint. Ginger.',
    fullDescription: 'A five-botanical herbal infusion: butterfly pea flowers, lemongrass, spearmint leaves, dandelion root, and dried ginger. Caffeine-free. The butterfly pea gives the cup a distinctive deep blue colour.',
    caffeineLevel: 'Zero',
    steepTime: '3–5 mins',
    temperature: '80–85°C',
    servingsPerContainer: 25,
    images: getProductImages('origin-pure-blue-pea'),
    amazonUrl: 'https://www.amazon.in/dp/B0HG9CJN2H',
    flavorNotes: [
      { name: 'Butterfly Pea Flower', iconName: 'Sparkles', description: 'Deep blue colour, earthy base' },
      { name: 'Lemongrass & Spearmint', iconName: 'Leaf', description: 'Cool refreshing botanical' },
      { name: 'Ginger & Dandelion', iconName: 'Flame', description: 'Warm herbal finish' }
    ],
    keyBenefits: [
      '25 Pyramid Infusion Bags (50g)',
      'Five Botanical Ingredients · Caffeine-Free',
      'Plant-Based Biodegradable Bags',
      'No Artificial Colours or Preservatives'
    ],
    ingredients: ['Butterfly Pea Flowers', 'Lemongrass', 'Spearmint Leaves', 'Dandelion Root', 'Dried Ginger'],
    bundles: [
      {
        id: 'bp-single',
        name: '1 Pack (25 Pyramid Bags)',
        quantity: 1,
        price: 499,
        savingsBadge: undefined,
        amazonUrl: 'https://www.amazon.in/dp/B0HG9CJN2H'
      }
    ],
    inStock: false
  },

  // ── 5. Chamomile Citrus Herbal Infusion ────────────────────────────────────
  {
    id: 'origin-pure-chamomile-citrus',
    name: 'Origin Pure Chamomile Citrus Herbal Infusion',
    subtitle: '25 Biodegradable Pyramid Infusion Bags (50g)',
    tagline: 'Chamomile, dried lemon peel, and clove — three ingredients, nothing extra.',
    category: 'herbal',
    price: 499,
    originalPrice: undefined,
    rating: 4.96,
    reviewCount: 0,
    badge: 'HERBAL',
    shortDescription: 'Chamomile. Lemon. Clove.',
    fullDescription: 'Chamomile, dried lemon peel, and clove. Three ingredients. The lemon peel cuts the floral heaviness of the chamomile; the clove adds a warm finish without dominating.',
    caffeineLevel: 'Zero',
    steepTime: '3–5 mins',
    temperature: '80–85°C',
    servingsPerContainer: 25,
    images: getProductImages('origin-pure-chamomile-citrus'),
    amazonUrl: 'https://www.amazon.in/dp/B0HG9J3ZDX',
    flavorNotes: [
      { name: 'Chamomile', iconName: 'Sparkles', description: 'Gentle floral base' },
      { name: 'Dried Lemon Peel', iconName: 'Sun', description: 'Bright citrus cut' },
      { name: 'Clove', iconName: 'Flame', description: 'Warm spice finish' }
    ],
    keyBenefits: [
      '25 Pyramid Infusion Bags (50g)',
      'Three Ingredients · Caffeine-Free',
      'Plant-Based Biodegradable Bags',
      'No Artificial Colours or Flavours'
    ],
    ingredients: ['Chamomile', 'Dried Lemon Peel', 'Clove'],
    bundles: [
      {
        id: 'cc-single',
        name: '1 Pack (25 Pyramid Bags)',
        quantity: 1,
        price: 499,
        savingsBadge: undefined,
        amazonUrl: 'https://www.amazon.in/dp/B0HG9J3ZDX'
      }
    ],
    inStock: false
  },

  // ── 6. Turmeric Gold Green Tea with Black Pepper ───────────────────────────
  {
    id: 'turmeric-gold-green-tea',
    name: 'Origin Pure Turmeric Gold Green Tea',
    subtitle: '25 Biodegradable Pyramid Tea Bags (50g)',
    tagline: 'Green tea with crushed turmeric root, dried lemon slices, and black pepper.',
    category: 'herbal',
    price: 499,
    originalPrice: undefined,
    rating: 4.9,
    reviewCount: 0,
    badge: 'GREEN TEA',
    shortDescription: 'Turmeric. Lemon. Black Pepper.',
    fullDescription: 'Green tea with crushed turmeric root, dried lemon slices, and crushed black pepper. The black pepper is there in a small but functional amount — it pairs well with turmeric and adds a mild warmth.',
    caffeineLevel: 'Low',
    steepTime: '3–5 mins',
    temperature: '80–85°C',
    servingsPerContainer: 25,
    images: getProductImages('turmeric-gold-green-tea'),
    amazonUrl: 'https://www.amazon.in/dp/B0HG36XHC3',
    flavorNotes: [
      { name: 'Crushed Turmeric Root', iconName: 'Sparkles', description: 'Warm earthy spice' },
      { name: 'Dried Lemon Slices', iconName: 'Sun', description: 'Bright citrus balance' },
      { name: 'Black Pepper', iconName: 'Flame', description: 'Mild peppery warmth' }
    ],
    keyBenefits: [
      '25 Pyramid Tea Bags (50g)',
      'Green Tea + Turmeric + Lemon + Black Pepper',
      'Plant-Based Biodegradable Bags',
      'No Artificial Colours or Preservatives'
    ],
    ingredients: ['Green Tea Leaves', 'Crushed Turmeric Root', 'Dried Lemon Slices', 'Crushed Black Pepper'],
    bundles: [
      {
        id: 'tg-single',
        name: '1 Pack (25 Pyramid Bags)',
        quantity: 1,
        price: 499,
        savingsBadge: undefined,
        amazonUrl: 'https://www.amazon.in/dp/B0HG36XHC3'
      }
    ],
    inStock: false
  },

  // ── 7. Citrus Vitality — Moringa Lemongrass Green Tea ─────────────────────
  {
    id: 'citrus-vitality-moringa-lemongrass',
    name: 'Origin Pure Citrus Vitality Moringa Lemongrass Green Tea',
    subtitle: '25 Biodegradable Pyramid Tea Bags (50g)',
    tagline: 'Green tea with moringa leaves and lemongrass — a clean, herbaceous cup.',
    category: 'herbal',
    price: 499,
    originalPrice: undefined,
    rating: 4.9,
    reviewCount: 0,
    badge: 'GREEN TEA',
    shortDescription: 'Moringa. Lemongrass. Green Tea.',
    fullDescription: 'Green tea with lemongrass and moringa leaves. Moringa has a mildly grassy taste that pairs well with lemongrass. The result is a clean, herbal cup with a citrus edge.',
    caffeineLevel: 'Low',
    steepTime: '3–5 mins',
    temperature: '80–85°C',
    servingsPerContainer: 25,
    images: getProductImages('citrus-vitality-moringa-lemongrass'),
    amazonUrl: 'https://www.amazon.in/dp/B0HG3CGBP5',
    flavorNotes: [
      { name: 'Moringa Leaves', iconName: 'Leaf', description: 'Clean herbaceous base' },
      { name: 'Lemongrass', iconName: 'Sun', description: 'Fresh citrus herbal edge' },
      { name: 'Green Tea', iconName: 'Sparkles', description: 'Light antioxidant base' }
    ],
    keyBenefits: [
      '25 Pyramid Tea Bags (50g)',
      'Green Tea + Moringa + Lemongrass',
      'Plant-Based Biodegradable Bags',
      'No Artificial Colours or Flavours'
    ],
    ingredients: ['Green Tea Leaves', 'Lemongrass', 'Moringa Leaves'],
    bundles: [
      {
        id: 'cv-single',
        name: '1 Pack (25 Pyramid Bags)',
        quantity: 1,
        price: 499,
        savingsBadge: undefined,
        amazonUrl: 'https://www.amazon.in/dp/B0HG3CGBP5'
      }
    ],
    inStock: false
  },

  // ── 8. Daily Green Classic — Lemon Ginger Green Tea ───────────────────────
  {
    id: 'daily-green-classic-lemon-ginger',
    name: 'Origin Pure Daily Green Classic Lemon Ginger Green Tea',
    subtitle: '25 Biodegradable Pyramid Tea Bags (50g)',
    tagline: 'Green tea with dried ginger and lemon peel — a straightforward everyday cup.',
    category: 'herbal',
    price: 499,
    originalPrice: undefined,
    rating: 4.9,
    reviewCount: 0,
    badge: 'EVERYDAY',
    shortDescription: 'Ginger. Lemon. Green Tea.',
    fullDescription: 'Green tea with dried ginger and lemon peel. The combination is simple and it works — ginger adds warmth, lemon keeps it bright. A reliable everyday cup without anything unnecessary.',
    caffeineLevel: 'Low',
    steepTime: '3–5 mins',
    temperature: '80–85°C',
    servingsPerContainer: 25,
    images: getProductImages('daily-green-classic-lemon-ginger'),
    amazonUrl: 'https://www.amazon.in/dp/B0HG1XQTMJ',
    flavorNotes: [
      { name: 'Dried Ginger', iconName: 'Flame', description: 'Warm spice bite' },
      { name: 'Lemon Peel', iconName: 'Sun', description: 'Citrus brightness' },
      { name: 'Green Tea', iconName: 'Leaf', description: 'Clean everyday base' }
    ],
    keyBenefits: [
      '25 Pyramid Tea Bags (50g)',
      'Green Tea + Ginger + Lemon Peel',
      'Plant-Based Biodegradable Bags',
      'No Artificial Colours or Flavours'
    ],
    ingredients: ['Green Tea Leaves', 'Dried Ginger', 'Lemon Peel'],
    bundles: [
      {
        id: 'dg-single',
        name: '1 Pack (25 Pyramid Bags)',
        quantity: 1,
        price: 499,
        savingsBadge: undefined,
        amazonUrl: 'https://www.amazon.in/dp/B0HG1XQTMJ'
      }
    ],
    inStock: false
  },

  // ── 9. Twin Tulsi Green Tea ────────────────────────────────────────────────
  {
    id: 'twin-tulsi-green-tea',
    name: 'Origin Pure Twin Tulsi Green Tea',
    subtitle: '25 Biodegradable Pyramid Tea Bags (50g)',
    tagline: 'Green tea with both green tulsi and purple tulsi, plus lemon.',
    category: 'herbal',
    price: 499,
    originalPrice: undefined,
    rating: 4.9,
    reviewCount: 0,
    badge: 'GREEN TEA',
    shortDescription: 'Green Tulsi. Purple Tulsi. Lemon.',
    fullDescription: 'Green tea with both green tulsi (sweet basil) and purple tulsi (Krishna tulsi), plus lemon. The two tulsi varieties have slightly different flavour profiles — together they give the blend a layered herbal character.',
    caffeineLevel: 'Low',
    steepTime: '3–5 mins',
    temperature: '80–85°C',
    servingsPerContainer: 25,
    images: getProductImages('twin-tulsi-green-tea'),
    amazonUrl: 'https://www.amazon.in/dp/B0HG1Q7CT2',
    flavorNotes: [
      { name: 'Green Tulsi', iconName: 'Leaf', description: 'Sweet basil herbal note' },
      { name: 'Purple Tulsi', iconName: 'Sparkles', description: 'Clove-like herbal depth' },
      { name: 'Lemon', iconName: 'Sun', description: 'Citrus brightness' }
    ],
    keyBenefits: [
      '25 Pyramid Tea Bags (50g)',
      'Green Tea + Green Tulsi + Purple Tulsi + Lemon',
      'Plant-Based Biodegradable Bags',
      'No Artificial Colours or Preservatives'
    ],
    ingredients: ['Green Tea Leaves', 'Lemon', 'Green Tulsi', 'Purple Tulsi'],
    bundles: [
      {
        id: 'tt-single',
        name: '1 Pack (25 Pyramid Bags)',
        quantity: 1,
        price: 499,
        savingsBadge: undefined,
        amazonUrl: 'https://www.amazon.in/dp/B0HG1Q7CT2'
      }
    ],
    inStock: false
  }
];

// MAIN_FEATURED_PRODUCT — used by Hero, FeaturedProduct, StickyMobileCTA
// Currently pointing to Chamomile Citrus (index 4) — update if a different product becomes primary
export const MAIN_FEATURED_PRODUCT = PRODUCTS[4]; // Chamomile Citrus
