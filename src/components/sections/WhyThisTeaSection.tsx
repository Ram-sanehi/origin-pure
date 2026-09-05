import React from 'react';
import { Container } from '../ui/Container';
import { Leaf, Sun, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';

import { MAIN_FEATURED_PRODUCT } from '../../data/products';

export const WhyThisTeaSection: React.FC = () => {
  return (
    <section id="why-us" className="py-10 sm:py-24 section-cream relative border-t border-cream-300/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Storytelling Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card border-2 border-cream-200 bg-sand-100 aspect-[4/3] group">
              <img
                src={MAIN_FEATURED_PRODUCT.images[0]}
                alt="Origin Pure Chamomile Citrus Blend"
                className="w-full h-full object-contain p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teagreen-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Three Principles */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-clay-600">
                WHY WE MADE THIS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teagreen-950 tracking-tight">
                Herbal tea shouldn't feel like an afterthought.
              </h2>
              <p className="text-sm sm:text-base text-charcoal-800/85 font-sans leading-relaxed">
                Most commercial store teas use dusty tea fan-fittings and artificial flavorings. We created Origin Pure with whole natural ingredients—German chamomile, sun-dried lemon peel, and aromatic clove—packed in biodegradable pyramid bags so water flows freely around full leaves.
              </p>
            </div>

            {/* Three Principles List */}
            <div className="space-y-4 pt-2">
              {/* Principle 01 */}
              <motion.div variants={fadeInUp} className="flex gap-4 p-4 rounded-2xl bg-cream-50 border border-cream-300/80">
                <div className="w-10 h-10 rounded-xl bg-teagreen-100 text-teagreen-800 flex items-center justify-center shrink-0 font-bold">
                  <Leaf className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-clay-600 uppercase tracking-widest block">
                    01 — THREE SIMPLE INGREDIENTS
                  </span>
                  <h4 className="font-serif font-bold text-base text-teagreen-950">
                    Chamomile, Lemon Peel & Clove
                  </h4>
                  <p className="text-xs text-charcoal-800/80 leading-relaxed font-sans">
                    Zero artificial colours, zero artificial flavours, and completely preservative-free.
                  </p>
                </div>
              </motion.div>

              {/* Principle 02 */}
              <motion.div variants={fadeInUp} className="flex gap-4 p-4 rounded-2xl bg-cream-50 border border-cream-300/80">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold">
                  <Sun className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-clay-600 uppercase tracking-widest block">
                    02 — FLORAL & CITRUS HARMONY
                  </span>
                  <h4 className="font-serif font-bold text-base text-teagreen-950">
                    Bright, Soothing Flavour Profile
                  </h4>
                  <p className="text-xs text-charcoal-800/80 leading-relaxed font-sans">
                    Combines delicate floral chamomile with lively citrus zest and a gentle, warming clove finish.
                  </p>
                </div>
              </motion.div>

              {/* Principle 03 */}
              <motion.div variants={fadeInUp} className="flex gap-4 p-4 rounded-2xl bg-cream-50 border border-cream-300/80">
                <div className="w-10 h-10 rounded-xl bg-clay-100 text-clay-800 flex items-center justify-center shrink-0 font-bold">
                  <Flame className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-clay-600 uppercase tracking-widest block">
                    03 — PLANT-BASED PYRAMID BAGS
                  </span>
                  <h4 className="font-serif font-bold text-base text-teagreen-950">
                    Biodegradable & Convenient
                  </h4>
                  <p className="text-xs text-charcoal-800/80 leading-relaxed font-sans">
                    25 individually packed pyramid bags allowing maximum water expansion for rapid, full infusion.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
