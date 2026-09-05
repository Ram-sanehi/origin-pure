import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../types';
import { redirectToAmazon } from '../../lib/amazon';
import { X, ExternalLink, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { ProductImageGallery } from '../ui/ProductImageGallery';
import { formatCurrency } from '../../lib/utils';

// ── Per-product customer reviews ──────────────────────────────────────────────
const PRODUCT_REVIEWS: Record<string, { author: string; stars: number; text: string }[]> = {
  'hibiscus-berry-green-tea': [
    { author: 'Nisha K.', stars: 5, text: 'The colour alone is worth it. Deep rose in the cup and the berry note is real, not artificial-sweet.' },
    { author: 'Anand R.', stars: 5, text: 'My go-to afternoon tea. The hibiscus gives it a tartness I enjoy.' },
    { author: 'Preethi M.', stars: 4, text: 'Good flavour. Wish it had slightly more berry, but overall solid.' }
  ],
  'origin-pure-evening-calm': [
    { author: 'Kavya R.', stars: 5, text: 'First box gone in two weeks. Ordered two more.' },
    { author: 'Sandeep M.', stars: 5, text: 'The chamomile comes through properly, not just as a background note on the label. Had one last night and slept well.' },
    { author: 'Ritu J.', stars: 4, text: 'Good tea. Wish the pack had 40 bags — I go through them faster than expected. Took 9 days to arrive but worth it.' }
  ],
  'origin-pure-fennel-harmony': [
    { author: 'Meera D.', stars: 5, text: 'Star anise and fennel give it a warm anise note I did not expect to enjoy this much.' },
    { author: 'Vikram P.', stars: 5, text: 'The lemon slices keep it bright. Easy to brew and the bags hold up well.' },
    { author: 'Anjali N.', stars: 5, text: 'Refreshing and different from anything else I have tried.' }
  ],
  'origin-pure-blue-pea': [
    { author: 'Arjun K.', stars: 5, text: 'The colour is stunning and the flavour is surprisingly refreshing. Lemongrass and spearmint work well together.' },
    { author: 'Sanya R.', stars: 5, text: 'Five good ingredients and you can taste each one. A genuinely interesting cup.' },
    { author: 'Karan V.', stars: 5, text: 'Brewed perfectly in under 5 minutes. The blue colour is a great conversation starter.' }
  ],
  'origin-pure-chamomile-citrus': [
    { author: 'Priya S.', stars: 5, text: "Really soothing after a long day. The clove finish is subtle but it's there." },
    { author: 'Deepa S.', stars: 5, text: "This is the only tea my husband didn't complain about. He usually hates herbal stuff. We're on our third pack." },
    { author: 'Nandita P.', stars: 5, text: "Makes the 10pm 'I should sleep' version of me feel like I'm doing something right." }
  ],
  'turmeric-gold-green-tea': [
    { author: 'Rohit B.', stars: 5, text: 'The black pepper is subtle but definitely there. A warming cup for mornings.' },
    { author: 'Sunita G.', stars: 5, text: 'Earthy and slightly citrus. Not for everyone but I love it.' },
    { author: 'Manoj P.', stars: 4, text: 'Took a few brews to appreciate it. The turmeric comes through more on a second steep.' }
  ],
  'citrus-vitality-moringa-lemongrass': [
    { author: 'Lakshmi T.', stars: 5, text: 'Clean and herbaceous. The lemongrass is the main character here.' },
    { author: 'Rajan V.', stars: 5, text: "Light, not too strong. A good option when you want something that isn't just plain green tea." },
    { author: 'Pooja M.', stars: 4, text: 'Moringa taste is mild. Good but I expected a stronger moringa flavour.' }
  ],
  'daily-green-classic-lemon-ginger': [
    { author: 'Aditya C.', stars: 5, text: 'Exactly what the name says. Simple, reliable, good every time.' },
    { author: 'Sneha R.', stars: 5, text: 'I have this every morning. The ginger is warm but not overpowering.' },
    { author: 'Vishal K.', stars: 5, text: 'My daily cup for the past month. No complaints.' }
  ],
  'twin-tulsi-green-tea': [
    { author: 'Divya A.', stars: 5, text: 'You can taste the difference between the two tulsi varieties if you pay attention. Interesting blend.' },
    { author: 'Harish N.', stars: 5, text: 'The clove-like note from the purple tulsi was unexpected. In a good way.' },
    { author: 'Swati B.', stars: 4, text: 'Good herbal tea. The lemon keeps it from being too heavy.' }
  ]
};

// ── Product Detail Modal ───────────────────────────────────────────────────────
const ProductModal: React.FC<{ product: Product; onClose: () => void }> = ({ product, onClose }) => {
  const [showReviews, setShowReviews] = useState(false);
  const reviews = PRODUCT_REVIEWS[product.id] || [];

  const handleBuy = () => {
    redirectToAmazon(product.amazonUrl, 'product-modal-buy', product.id);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-teagreen-950/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        key="modal"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 bottom-0 sm:inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none p-0 sm:p-4"
      >
        <div
          className="relative w-full sm:max-w-3xl max-h-[92vh] sm:max-h-[90vh] bg-cream-50 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col border border-cream-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-cream-200/90 hover:bg-cream-300 flex items-center justify-center transition-colors shadow-sm"
            aria-label="Close"
          >
            <X className="w-4.5 h-4.5 text-teagreen-950" />
          </button>

          <div className="overflow-y-auto flex-1 p-3.5 sm:p-5 space-y-3.5 sm:space-y-4">
            {/* Amazon-style Reusable Product Image Gallery */}
            <div>
              <ProductImageGallery images={product.images} productName={product.name} />
            </div>

            {/* Name + tagline + price */}
            <div className="space-y-1">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-teagreen-950 leading-snug">
                  {product.name}
                </h2>
                <span className="text-lg sm:text-xl font-sans font-bold text-teagreen-950 shrink-0">
                  {formatCurrency(product.price)}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-clay-600 font-medium italic">{product.tagline}</p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-charcoal-800/85 leading-relaxed font-sans">
              {product.fullDescription}
            </p>

            {/* Product Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 text-xs">
              {[
                { label: 'QUANTITY', value: '25 Pyramid Bags' },
                { label: 'TOTAL WEIGHT', value: '50g' },
                { label: 'SERVING SIZE', value: '2g per bag' },
                { label: 'CAFFEINE', value: product.caffeineLevel },
                { label: 'STEEP TEMP', value: product.temperature },
                { label: 'STEEP TIME', value: product.steepTime }
              ].map(({ label, value }) => (
                <div key={label} className="bg-cream-100 border border-cream-300 rounded-xl p-2 sm:p-2.5 space-y-0.5">
                  <span className="text-[9px] sm:text-[10px] font-bold text-clay-600 uppercase tracking-wider block">
                    {label}
                  </span>
                  <span className="font-semibold text-teagreen-950 text-xs">{value}</span>
                </div>
              ))}
            </div>

            {/* How to Brew */}
            <div className="bg-sand-100 border border-cream-300 rounded-xl sm:rounded-2xl p-3 space-y-1">
              <span className="text-[10px] font-bold text-clay-600 uppercase tracking-wider block">
                HOW TO BREW
              </span>
              <p className="text-xs text-charcoal-800/80 leading-relaxed font-sans">
                Heat water to <strong>80–85°C</strong>. Place one pyramid bag into the water and steep for <strong>3–5 minutes</strong>. Dip the bag gently 4–5 times, then remove before serving. Honey or sugar may be added to taste. Best enjoyed without milk.
              </p>
            </div>

            {/* Ingredients */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-charcoal-800">INGREDIENTS</span>
              <div className="flex flex-wrap gap-1.5">
                {product.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="text-xs font-semibold text-teagreen-900 bg-teagreen-100 border border-teagreen-200 px-2.5 py-0.5 rounded-full"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Quality marks */}
            <div className="flex flex-wrap gap-1.5 text-[10px] sm:text-[11px] font-medium text-charcoal-800/70">
              {['Natural Ingredients', 'No Artificial Colours', 'No Artificial Flavours', 'Preservative-Free', 'Biodegradable Bags', 'Vegetarian', 'Made in India'].map((m) => (
                <span key={m} className="px-2 py-0.5 rounded-full bg-cream-200 border border-cream-300">
                  ✓ {m}
                </span>
              ))}
            </div>

            {/* Amazon CTA */}
            <div className="pt-1">
              <button
                onClick={handleBuy}
                data-track-cta={`modal-buy-amazon-${product.id}`}
                className="w-full flex items-center justify-center gap-2 bg-[#7C3A18] hover:bg-[#5C2B10] text-white font-bold text-xs sm:text-sm tracking-widest uppercase py-3 px-5 rounded-xl transition-colors shadow-md border border-[#5C2B10] cursor-pointer"
              >
                <span>BUY ON AMAZON</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              <p className="text-center text-[10px] sm:text-[11px] text-charcoal-800/50 font-medium mt-1">
                Official Amazon India listing · Amazon return policy applies
              </p>
            </div>

            {/* Customer Reviews — collapsible */}
            {reviews.length > 0 && (
              <div className="border-t border-cream-300 pt-3 space-y-2">
                <button
                  onClick={() => setShowReviews(!showReviews)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-teagreen-950 group-hover:text-clay-600 transition-colors">
                    WHAT CUSTOMERS SAY
                  </span>
                  {showReviews ? (
                    <ChevronUp className="w-4 h-4 text-charcoal-800/50" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-charcoal-800/50" />
                  )}
                </button>

                <AnimatePresence>
                  {showReviews && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2 pt-1.5">
                        {reviews.map((r, i) => (
                          <div key={i} className="bg-cream-100 border border-cream-300 rounded-xl p-3 space-y-1">
                            <span className="text-amber-400 text-xs tracking-widest">
                              {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
                            </span>
                            <p className="text-xs text-charcoal-800/85 leading-relaxed italic font-sans">
                              "{r.text}"
                            </p>
                            <p className="text-[10px] font-bold text-teagreen-950">— {r.author}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// ── Interactive Product Grid Card (Unified Card Container) ─────────────────────
const ProductCard: React.FC<{ product: Product; onSelect: (product: Product) => void }> = ({ product, onSelect }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const images = product.images && product.images.length > 0 ? product.images : ['/placeholder.png'];
  const currentImg = images[activeIdx] || images[0];

  return (
    <motion.div
      variants={fadeInUp}
      className="group/card flex flex-col justify-between w-full h-full bg-sand-100 border border-cream-300/90 rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 transition-all duration-300"
    >
      {/* 1. Product Image Display Area — Maximized Visual Space */}
      <div className="relative w-full aspect-[4/3] bg-cream-50/60 rounded-xl border border-cream-200/80 overflow-hidden flex items-center justify-center">
        <button
          onClick={() => onSelect(product)}
          className="w-full h-full p-0.5 sm:p-1 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-teagreen-800"
          aria-label={`View details for ${product.name}`}
        >
          <img
            src={currentImg}
            alt={product.name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </button>
      </div>

      {/* 2. Image Scroller / Thumbnail Indicators (○ ○ ○ ○) */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 py-0.5 my-0">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIdx(i);
              }}
              onMouseEnter={() => setActiveIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === activeIdx
                  ? 'bg-teagreen-900 w-3.5'
                  : 'bg-cream-400 hover:bg-teagreen-700 w-1.5'
              }`}
              aria-label={`Preview image ${i + 1} for ${product.name}`}
            />
          ))}
        </div>
      )}

      {/* 3. Product Name (Strict 2-Line Limit with Consistent Card Height) */}
      <h3
        onClick={() => onSelect(product)}
        className="text-xs sm:text-xs font-serif font-bold text-teagreen-950 text-center leading-tight px-1 my-0.5 h-8 sm:h-9 line-clamp-2 flex items-center justify-center cursor-pointer hover:text-clay-600 transition-colors overflow-hidden"
      >
        {product.name}
      </h3>

      {/* 4. Prominent Price Typography */}
      <div className="text-center my-0.5">
        <span className="text-sm sm:text-base font-sans font-bold text-teagreen-950 tracking-tight">
          {formatCurrency(product.price)}
        </span>
      </div>

      {/* 5. High-Visibility Warm Brown Full-Width CTA Button */}
      <button
        onClick={() => onSelect(product)}
        className="w-full bg-[#7C3A18] hover:bg-[#5C2B10] text-white font-sans font-bold text-xs tracking-wider uppercase py-2.5 sm:py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 shadow-md border border-[#5C2B10] cursor-pointer mt-1"
        aria-label={`See details for ${product.name}`}
      >
        <span>SEE DETAILS</span>
        <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover/btn:translate-x-1" />
      </button>
    </motion.div>
  );
};

// ── Main Section — 9-product Minimal Grid ─────────────────────────────────────
export const ProductDiscoverySection: React.FC = () => {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <section id="shop" className="py-14 sm:py-20 section-cream">
        <Container>
          {/* Header */}
          <div className="text-center max-w-xl mx-auto space-y-2.5 mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-clay-600">
              The Collection
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-teagreen-950 tracking-tight">
              Find your cup.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-800/65 font-sans">
              Nine blends. Natural botanicals. Plant-based pyramid bags.
            </p>
          </div>

          {/* 9-product grid: 2 col mobile → 3 col tablet+ (Wider left-to-right cards) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-5.5"
          >
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} onSelect={setSelected} />
            ))}
          </motion.div>
        </Container>
      </section>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </>
  );
};

