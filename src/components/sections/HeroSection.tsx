import React, { useEffect, useState } from 'react';
import { Container } from '../ui/Container';
import { PRODUCTS } from '../../data/products';
import { redirectToAmazon } from '../../lib/amazon';
import { ExternalLink } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const HERO_PRODUCT_IDS = [
  'origin-pure-evening-calm',
  'origin-pure-blue-pea',
  'hibiscus-berry-green-tea',
  'origin-pure-fennel-harmony',
  'turmeric-gold-green-tea'
];

const HERO_ACCENTS = ['#9C5427', '#3B82A0', '#9F3F56', '#C28A32', '#B97720'];

export const HeroSection: React.FC = () => {
  const heroProducts = HERO_PRODUCT_IDS
    .map((id) => PRODUCTS.find((product) => product.id === id))
    .filter((product): product is (typeof PRODUCTS)[number] => Boolean(product));
  const [activeIndex, setActiveIndex] = useState(0);
  const product = heroProducts[activeIndex] || PRODUCTS[0];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroProducts.length);
    }, 5500);
    return () => window.clearInterval(interval);
  }, [heroProducts.length]);

  const handleAmazonShop = () => {
    redirectToAmazon(product.amazonUrl, 'hero-primary-cta', product.id);
  };

  return (
    <>
      {/* ─── Main Hero ─────────────────────────────────────────────────────── */}
      <section className="relative py-8 sm:py-16 lg:py-20 section-cream overflow-hidden">
        <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-amber-100/25 rounded-full blur-3xl pointer-events-none -mr-32 -mt-16" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

            {/* ── Left: Brand Message ──────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col space-y-5 lg:pr-6"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-clay-600">
                The Herbal Collection
              </span>

              {/* Headline */}
              <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-serif font-bold text-teagreen-950 leading-[1.1] tracking-tight">
                Tea that tastes like{' '}
                <span className="italic font-normal text-clay-600">what&apos;s in it.</span>
              </h1>

              {/* Short description */}
              <p className="text-base sm:text-lg text-charcoal-800/70 font-sans leading-relaxed max-w-sm">
                Whole botanicals, thoughtfully blended across a collection of floral, citrus, herbal, and warming infusions.
              </p>

              <div className="flex items-center gap-3 text-sm font-semibold text-teagreen-950">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: HERO_ACCENTS[activeIndex] }} />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={product.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    {product.shortDescription}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Action & Trust Block */}
              <div className="space-y-3 pt-1">
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <button
                    onClick={handleAmazonShop}
                    data-track-cta="hero-shop-amazon"
                    className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 bg-[#FF9900] hover:bg-[#E68A00] text-black text-xs sm:text-sm font-bold uppercase tracking-widest px-7 py-3.5 rounded-full transition-colors shadow-md border border-[#E68A00] cursor-pointer"
                  >
                    <span>Buy on Amazon</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="#shop"
                    className="min-h-11 inline-flex items-center justify-center text-xs sm:text-sm font-semibold text-charcoal-800/70 hover:text-teagreen-950 underline underline-offset-4 decoration-cream-400 transition-colors tracking-wide"
                  >
                    See the collection ↓
                  </a>
                </div>

                {/* Customer Rating — directly below primary CTA for tight social proof association */}
                <p className="text-xs text-charcoal-800/60 font-medium tracking-wide pt-0.5">
                  ★★★★★ &nbsp;<span className="font-bold text-teagreen-950">4.9 / 5</span> — verified Amazon India customers
                </p>
              </div>
            </motion.div>

            {/* ── Right: Product Visual (Scaled Up Image, Tight Internal Whitespace) ──── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-sm mx-auto">
                <div className="absolute inset-2 bg-sand-100 rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-cream-300/80 bg-sand-100 aspect-square flex items-center justify-center p-2 sm:p-3">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={product.id}
                      src={product.images[0]}
                      alt={product.name}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.55, ease: 'easeOut' }}
                      className="w-full h-full object-contain"
                      loading="eager"
                      decoding="async"
                      draggable={false}
                    />
                  </AnimatePresence>
                </div>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-cream-50/90 px-3 py-2 shadow-sm backdrop-blur-sm" aria-label="Choose a blend">
                  {heroProducts.map((heroProduct, index) => (
                    <button
                      key={heroProduct.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show ${heroProduct.name}`}
                      aria-current={index === activeIndex}
                      className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-6' : 'w-2'}`}
                      style={{ backgroundColor: index === activeIndex ? HERO_ACCENTS[index] : '#C4BEB4' }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ─── Benefit Strip ─────────────────────────────────────────────────── */}
      <div className="border-t border-cream-300 bg-cream-100 py-3.5">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-semibold text-charcoal-800/60 tracking-wider uppercase">
            <span>100% Natural Botanicals</span>
            <span className="hidden sm:block text-cream-400">·</span>
            <span>25 Pyramid Bags per Pack</span>
            <span className="hidden sm:block text-cream-400">·</span>
            <span>Plant-Based Biodegradable</span>
          </div>
        </Container>
      </div>
    </>
  );
};
