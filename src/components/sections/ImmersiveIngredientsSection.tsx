import React from 'react';
import { Container } from '../ui/Container';
import { Leaf, Flower2, Droplets, Citrus, Sprout, CircleDot, PackageCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../../data/products';

const PANELS = [
  { name: 'Green Tea', benefit: 'Naturally rich in antioxidants and refreshing flavour.', story: 'A clean, lightly caffeinated base for bright everyday blends.', icon: Leaf, image: PRODUCTS[0].images[1] },
  { name: 'Chamomile', benefit: 'Gentle floral notes loved for evening infusions.', story: 'Whole blossoms bring a soft, honeyed aroma to the cup.', icon: Flower2, image: PRODUCTS[1].images[1] },
  { name: 'Butterfly Pea', benefit: 'Naturally vibrant blue botanical.', story: 'A distinctive flower that makes an instantly memorable infusion.', icon: Droplets, image: PRODUCTS[3].images[1] },
  { name: 'Hibiscus', benefit: 'Bright, fruity character with deep colour.', story: 'Tart petals give the blend its jewel-toned brightness.', icon: Flower2, image: PRODUCTS[0].images[2] },
  { name: 'Lemon', benefit: 'Fresh citrus brightness.', story: 'Peel and slices lift every blend with sunlit aroma.', icon: Citrus, image: PRODUCTS[2].images[1] },
  { name: 'Tulsi', benefit: 'Traditional botanical known for its aromatic profile.', story: 'A familiar Indian herb with a warm, peppery freshness.', icon: Sprout, image: PRODUCTS[8].images[1] },
  { name: 'Fennel', benefit: 'Naturally sweet and refreshing.', story: 'A gentle anise note that makes the finish feel clean.', icon: CircleDot, image: PRODUCTS[2].images[2] },
  { name: 'Turmeric', benefit: 'Golden spice with distinctive warmth.', story: 'Earthy and vivid, balanced by lemon and black pepper.', icon: CircleDot, image: PRODUCTS[5].images[1] },
  { name: 'Biodegradable Pyramid Bags', benefit: 'Designed for proper infusion and sustainability.', story: 'Plant-based bags give whole botanicals the space to open.', icon: PackageCheck, image: PRODUCTS[4].images[2] }
];

export const ImmersiveIngredientsSection: React.FC = () => {
  return (
    <section id="ingredients" className="section-dark relative overflow-hidden">
      <Container>
        <div className="mx-auto max-w-2xl space-y-3 py-16 text-center sm:py-24">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">The Origin Pure pantry</span>
          <h2 className="text-3xl font-serif font-bold tracking-tight text-cream-50 sm:text-5xl">Why Every Ingredient Matters</h2>
          <p className="text-sm leading-relaxed text-cream-200/80 sm:text-base">Scroll through the botanicals, spices, and thoughtful details that shape every blend.</p>
        </div>
        <div className="pb-16 sm:pb-24">
          {PANELS.map(({ name, benefit, story, icon: Icon, image }, index) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.55, delay: index % 2 * 0.04 }}
              className="sticky top-20 mb-4 grid min-h-[65vh] grid-cols-1 overflow-hidden rounded-3xl border border-cream-50/10 bg-teagreen-900/90 sm:grid-cols-2"
              style={{ zIndex: index + 1 }}
            >
              <div className="relative min-h-64 overflow-hidden bg-sand-100/10 sm:min-h-full">
                <img src={image} alt={name} className="h-full w-full object-contain p-6 transition-transform duration-700 hover:scale-105" loading="lazy" />
                <span className="absolute left-5 top-5 text-xs font-bold tracking-[0.22em] text-amber-300">0{index + 1}</span>
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-12">
                <Icon className="mb-6 h-8 w-8 text-amber-400" />
                <h3 className="text-3xl font-serif font-bold text-cream-50 sm:text-5xl">{name}</h3>
                <p className="mt-5 text-lg leading-relaxed text-cream-100">{benefit}</p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-200/70">{story}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};
