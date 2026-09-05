import React from 'react';
import { Container } from '../ui/Container';
import { MAIN_FEATURED_PRODUCT } from '../../data/products';
import { redirectToAmazon } from '../../lib/amazon';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const handleAmazonShop = () => {
    redirectToAmazon(MAIN_FEATURED_PRODUCT.amazonUrl, 'hero-primary-cta', MAIN_FEATURED_PRODUCT.id);
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
                Four herbal infusions made with real botanicals, in biodegradable pyramid bags. No fillers, no sprayed flavouring.
              </p>

              {/* Action & Trust Block */}
              <div className="space-y-3 pt-1">
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <button
                    onClick={handleAmazonShop}
                    data-track-cta="hero-shop-amazon"
                    className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 bg-[#7C3A18] hover:bg-[#5C2B10] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-7 py-3.5 rounded-full transition-colors shadow-md border border-[#5C2B10] cursor-pointer"
                  >
                    <span>SHOP ON AMAZON</span>
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
                  <img
                    src={MAIN_FEATURED_PRODUCT.images[0]}
                    alt="Origin Pure Herbal Collection"
                    className="w-full h-full object-contain"
                    loading="eager"
                    decoding="async"
                    draggable={false}
                  />
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
