import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../../data/products';
import { Container } from '../ui/Container';

const INGREDIENTS = [
  ['Tea Leaves', 'Clean, lightly caffeinated body.', 'Bright and refreshing', PRODUCTS[0].images[1]],
  ['Dried Ginger', 'A warming botanical finish.', 'Comforting warmth', PRODUCTS[3].images[3]],
  ['Dried Lemon Peel', 'Sun-dried citrus aroma.', 'Lifts the blend', PRODUCTS[4].images[1]],
  ['Lemon Slices', 'A vivid natural citrus note.', 'Fresh brightness', PRODUCTS[2].images[1]],
  ['Tulsi', 'Aromatic traditional Indian herb.', 'Herbal depth', PRODUCTS[8].images[1]],
  ['Turmeric', 'Distinctive golden spice.', 'Earthy warmth', PRODUCTS[5].images[1]],
  ['Crushed Black Pepper', 'A subtle peppery lift.', 'Balances spice', PRODUCTS[5].images[2]],
  ['Lemongrass', 'Fresh, clean citrus grassiness.', 'Cooling finish', PRODUCTS[3].images[2]],
  ['Moringa Leaves', 'A clean, herbaceous note.', 'Green character', PRODUCTS[6].images[1]],
  ['Hibiscus Petals', 'Deep colour and tart fruitiness.', 'Berry-like brightness', PRODUCTS[0].images[2]],
  ['Chamomile', 'Soft floral whole blossoms.', 'Evening calm', PRODUCTS[1].images[1]],
  ['Fennel', 'Naturally sweet anise aroma.', 'Refreshing finish', PRODUCTS[2].images[2]],
  ['Star Anise', 'Warm aromatic spice.', 'Rounded flavour', PRODUCTS[2].images[3]],
  ['Spearmint', 'A cool, lifted herbal note.', 'Clean freshness', PRODUCTS[3].images[2]],
  ['Dandelion Root', 'Earthy depth in herbal blends.', 'Grounded character', PRODUCTS[3].images[3]],
  ['Butterfly Pea', 'A naturally vibrant blue flower.', 'Memorable colour', PRODUCTS[3].images[1]],
  ['Clove', 'A gently warming spice finish.', 'Aromatic comfort', PRODUCTS[4].images[2]]
];

export const BotanicalCollectionSection: React.FC = () => (
  <section id="botanicals" className="section-beige border-t border-cream-300/80 py-14 sm:py-24">
    <Container>
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-clay-600">Transparent by design</span>
        <h2 className="text-3xl font-serif font-bold tracking-tight text-teagreen-950 sm:text-5xl">Crafted From Nature&apos;s Finest Botanicals</h2>
        <p className="text-sm leading-relaxed text-charcoal-800/70 sm:text-base">Every blend starts with an ingredient you can recognise, taste, and trace across the collection.</p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {INGREDIENTS.map(([name, description, benefit, image], index) => (
          <motion.article
            key={name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: (index % 4) * 0.04 }}
            className="group overflow-hidden rounded-2xl border border-cream-300/80 bg-cream-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
          >
            <div className="aspect-[4/3] overflow-hidden bg-sand-100">
              <img src={image} alt={name} loading="lazy" className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="space-y-2 p-3.5 sm:p-4">
              <h3 className="font-serif text-base font-bold text-teagreen-950">{name}</h3>
              <p className="text-xs leading-relaxed text-charcoal-800/70">{description}</p>
              <span className="inline-flex rounded-full bg-teagreen-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-teagreen-800">{benefit}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
);
