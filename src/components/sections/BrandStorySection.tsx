import React from 'react';
import { Container } from '../ui/Container';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export const BrandStorySection: React.FC = () => {
  return (
    <section id="story" className="py-12 sm:py-28 section-cream border-t border-cream-300/80">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-clay-600">
              Our Story
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-teagreen-950 leading-[1.15] tracking-tight">
              From a Simple Idea to a Better Cup
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-charcoal-800/85 leading-relaxed font-sans">
              <p className="text-base sm:text-lg font-serif italic text-clay-700 border-l-2 border-clay-500 pl-4 py-1">
                Origin Pure was created with a simple belief: tea should be as honest as the ingredients that go into it.
              </p>

              <p>
                When our team at Foxgle began exploring herbal infusions, we noticed a common problem. Many products looked natural on the outside, but were filled with artificial flavouring, unnecessary additives, or low-quality ingredients that masked the true character of the herbs.
              </p>

              <p className="font-semibold text-teagreen-950">
                We wanted to do things differently.
              </p>

              <p>
                Instead of focusing on endless varieties, we focused on creating a small collection of carefully crafted blends made from real botanicals, thoughtfully sourced ingredients, and biodegradable pyramid bags designed to give the herbs enough space to fully infuse.
              </p>

              <p>
                Every blend was developed with one goal in mind — delivering a clean, balanced cup that tastes natural, feels comforting, and fits easily into everyday life.
              </p>

              <p>
                Today, Origin Pure continues to grow from the same philosophy: keep it simple, keep it honest, and never compromise on quality.
              </p>

              <p>
                What started as an idea inside Foxgle has become a commitment to creating herbal infusions that people can genuinely trust and enjoy.
              </p>
            </div>

            <div className="pt-4 border-t border-cream-300/80 space-y-1">
              <p className="font-serif font-bold text-base text-teagreen-950">
                Origin Pure by Foxgle
              </p>
              <p className="text-xs text-clay-700 font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-clay-600" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl overflow-hidden bg-sand-100 border border-cream-200 aspect-[4/5] flex items-center justify-center p-3 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80"
                alt="Origin Pure Natural Herbal Botanicals Sourcing"
                className="w-full h-full object-cover rounded-2xl"
                draggable={false}
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
