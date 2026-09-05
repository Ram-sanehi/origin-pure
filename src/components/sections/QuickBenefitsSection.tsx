import React from 'react';
import { Container } from '../ui/Container';
import { Leaf, Zap, Coffee, PackageCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';

const QUICK_BENEFITS = [
  {
    id: 'qb-1',
    icon: <Leaf className="w-5 h-5 text-teagreen-800" />,
    title: '100% First-Harvest Leaves',
    description: 'Sourced from single-estate farms in Kyoto, stone-ground fresh.',
  },
  {
    id: 'qb-2',
    icon: <Zap className="w-5 h-5 text-teagreen-800" />,
    title: '6 Hours Clean Focus',
    description: 'L-theanine paired with clean caffeine. Zero jitters or crashes.',
  },
  {
    id: 'qb-3',
    icon: <Coffee className="w-5 h-5 text-teagreen-800" />,
    title: 'Silky, Smooth Flavor',
    description: 'Naturally sweet and umami-rich with zero bitter bite.',
  },
  {
    id: 'qb-4',
    icon: <PackageCheck className="w-5 h-5 text-teagreen-800" />,
    title: 'Freshly Sealed at Origin',
    description: 'Micro-batched weekly in Japan to lock in vibrant nutrients.',
  },
];

export const QuickBenefitsSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 section-beige border-y border-cream-300/80 relative z-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {QUICK_BENEFITS.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={fadeInUp}
              className="flex items-start gap-3.5 p-4 rounded-2xl bg-cream-100/80 border border-cream-300/60 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-teagreen-100/90 text-teagreen-800 flex items-center justify-center shrink-0 mt-0.5">
                {benefit.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-sm text-teagreen-950 tracking-tight">
                  {benefit.title}
                </h4>
                <p className="text-xs text-charcoal-800/80 leading-relaxed font-sans">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
