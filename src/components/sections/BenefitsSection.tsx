import React from 'react';
import { Container } from '../ui/Container';
import { BENEFIT_PILLARS } from '../../data/benefits';
import { Brain, Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6 text-teagreen-800" />,
  Leaf: <Leaf className="w-6 h-6 text-teagreen-800" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-teagreen-800" />,
  Sparkles: <Sparkles className="w-6 h-6 text-teagreen-800" />,
};

export const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-10 sm:py-24 section-beige relative overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-clay-600">
            THE RITUAL DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teagreen-950">
            Why Modern High-Performers Are Switching From Coffee
          </h2>
          <p className="text-charcoal-800/70 text-sm sm:text-base font-sans">
            Standard commercial teas contain dusty fan-fittings and artificial flavourings. Origin Pure natural botanical green teas provide clean, soothing energy and organic digestive balance.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {BENEFIT_PILLARS.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={fadeInUp}
              className="bg-cream-100 p-6 rounded-3xl border border-cream-300 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-teagreen-100 flex items-center justify-center">
                  {iconMap[pillar.icon] || <Sparkles className="w-6 h-6 text-teagreen-800" />}
                </div>
                <h3 className="font-serif font-bold text-xl text-teagreen-950">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-cream-200">
                <span className="text-[11px] font-bold text-clay-600 uppercase tracking-wider">
                  ✓ {pillar.highlightText}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
