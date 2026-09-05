import React from 'react';
import { Container } from '../ui/Container';
import { Sparkles, Sun, Flame, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const ImmersiveIngredientsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 section-dark relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teagreen-800/15 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            THE ANATOMY OF PURITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-cream-50 tracking-tight">
            Three ingredients. Nothing hidden.
          </h2>
          <p className="text-sm sm:text-base text-cream-200/80 font-sans">
            100% natural herbal infusion crafted without artificial colours, artificial flavours, or preservatives.
          </p>
        </div>

        {/* 3 Ingredient Grid Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Ingredient 1 */}
          <motion.div
            variants={fadeInUp}
            className="bg-teagreen-900/60 border border-teagreen-800/80 p-6 rounded-3xl space-y-4 hover:border-amber-400/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold text-amber-400/90 uppercase tracking-widest block">
                INGREDIENT 01
              </span>
              <h3 className="text-xl font-serif font-bold text-cream-50">
                German Chamomile
              </h3>
              <p className="text-xs text-cream-200/75 leading-relaxed font-sans">
                Whole gentle blossoms offering delicate floral notes and natural evening calm for a soothing cup.
              </p>
            </div>
          </motion.div>

          {/* Ingredient 2 */}
          <motion.div
            variants={fadeInUp}
            className="bg-teagreen-900/60 border border-teagreen-800/80 p-6 rounded-3xl space-y-4 hover:border-amber-400/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold">
              <Sun className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold text-amber-400/90 uppercase tracking-widest block">
                INGREDIENT 02
              </span>
              <h3 className="text-xl font-serif font-bold text-cream-50">
                Dried Lemon Peel
              </h3>
              <p className="text-xs text-cream-200/75 leading-relaxed font-sans">
                Sun-dried citrus rind supplying bright, uplifting citrus aroma and refreshing taste notes.
              </p>
            </div>
          </motion.div>

          {/* Ingredient 3 */}
          <motion.div
            variants={fadeInUp}
            className="bg-teagreen-900/60 border border-teagreen-800/80 p-6 rounded-3xl space-y-4 hover:border-amber-400/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold">
              <Flame className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold text-amber-400/90 uppercase tracking-widest block">
                INGREDIENT 03
              </span>
              <h3 className="text-xl font-serif font-bold text-cream-50">
                Aromatic Whole Clove
              </h3>
              <p className="text-xs text-cream-200/75 leading-relaxed font-sans">
                Hand-picked whole spice bringing a warm, comforting note that rounds out the citrus-floral blend.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Brewing Tip Footer Bar */}
        <div className="mt-12 p-4 rounded-2xl bg-teagreen-900/90 border border-teagreen-800 text-center text-xs text-cream-200/80 font-medium flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 text-amber-400" />
          <span>Optimal Steep: 80–85°C water for 3–5 minutes • Dip bag gently 4–5 times • 25 Pyramid Bags</span>
        </div>
      </Container>
    </section>
  );
};
