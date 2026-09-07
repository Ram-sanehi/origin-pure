import React from 'react';
import { Container } from '../ui/Container';
import { Leaf, Sun, PackageCheck, Recycle, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';

const STEPS = [
  { number: '01', icon: Leaf, title: 'Carefully Sourced Botanicals', text: 'Premium herbs selected from trusted growers.' },
  { number: '02', icon: Sun, title: 'Naturally Dried', text: 'Preserving aroma, flavour, and character.' },
  { number: '03', icon: PackageCheck, title: 'Packed In Pyramid Bags', text: 'More room for herbs to fully infuse.' },
  { number: '04', icon: Recycle, title: 'Plant-Based & Biodegradable', text: 'Designed with sustainability in mind.' },
  { number: '05', icon: Truck, title: 'Delivered Through Amazon', text: 'Fast shipping, secure checkout, easy returns.' }
];

export const WhyThisTeaSection: React.FC = () => {
  return (
    <section id="why-us" className="py-10 sm:py-24 section-cream relative border-t border-cream-300/80">
      <Container>
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-clay-600">Our Process</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-teagreen-950 tracking-tight">From Farm To Cup</h2>
          <p className="text-sm sm:text-base text-charcoal-800/70 leading-relaxed">A thoughtful path from whole botanicals to the cup waiting in your kitchen.</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative mx-auto mt-12 max-w-3xl space-y-4 before:absolute before:bottom-5 before:left-[1.1rem] before:top-5 before:w-px before:bg-cream-300 sm:before:left-1/2"
        >
          {STEPS.map(({ number, icon: Icon, title, text }, index) => (
            <motion.div key={number} variants={fadeInUp} className={`relative flex items-start gap-4 sm:gap-8 ${index % 2 ? 'sm:flex-row-reverse' : ''}`}>
              <div className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-clay-300 bg-cream-100 text-clay-700 text-xs font-bold sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                {number}
              </div>
              <div className={`flex-1 rounded-2xl border border-cream-300/80 bg-cream-50 p-4 shadow-sm sm:w-[calc(50%-2rem)] sm:flex-none ${index % 2 ? 'sm:text-right' : ''}`}>
                <div className={`flex items-center gap-3 ${index % 2 ? 'sm:flex-row-reverse' : ''}`}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teagreen-100 text-teagreen-800"><Icon className="h-5 w-5" /></div>
                  <h3 className="font-serif text-base font-bold text-teagreen-950">{title}</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-charcoal-800/75">{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
