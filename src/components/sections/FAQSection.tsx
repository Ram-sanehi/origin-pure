import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    id: 'faq-1',
    question: 'What is actually in the bags?',
    answer: 'Each pyramid bag contains 2g of dried botanicals — no fillers, no flavour oils sprayed on, no artificial colouring. The Chamomile Citrus blend, for example, is chamomile, dried lemon peel, and clove. Three things. The ingredients list on the Amazon page matches exactly what is in the bag.'
  },
  {
    id: 'faq-2',
    question: 'How do I brew it properly?',
    answer: 'Heat water to 80–85°C — not a full rolling boil, which can make herbal teas bitter or flat. Place the pyramid bag into the cup, steep for 3–5 minutes, dip gently 4–5 times, then remove. The pyramid shape lets water circulate through the botanicals properly. You can drink it as-is, or add honey. We would skip milk — it flattens the citrus and floral notes.'
  },
  {
    id: 'faq-3',
    question: 'Does it contain caffeine?',
    answer: 'The Chamomile Citrus and Blue Pea infusions are caffeine-free. The Fennel Harmony and Evening Calm blends contain green tea leaves, so they have a low caffeine level — significantly less than a cup of black tea or coffee, but not zero. If you are caffeine-sensitive, the herbal infusions are the safer option in the evening.'
  },
  {
    id: 'faq-4',
    question: 'How long does delivery take?',
    answer: 'Delivery timelines depend on your location and Amazon\'s current stock. Most customers in major cities report 2–5 days. Some have mentioned it taking up to 9 days for remote pin codes. If your order is taking longer than expected, Amazon\'s support team handles fulfilment queries directly.'
  },
  {
    id: 'faq-5',
    question: 'Are the pyramid bags actually biodegradable?',
    answer: 'Yes. The bags are plant-based and biodegradable. They are not the standard polypropylene mesh bags that most supermarket pyramid teas use. You can compost them along with the used botanicals after brewing.'
  },
  {
    id: 'faq-6',
    question: 'Can I return it if I do not like it?',
    answer: 'Returns are handled through Amazon\'s standard return policy. If you open the pack and genuinely find the product is not what you expected, Amazon\'s process is straightforward — log into your order history and raise a return request. We cannot process returns directly, but Amazon\'s coverage applies.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 sm:py-24 section-cream border-t border-cream-300/80">
      <Container size="md">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-clay-600">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teagreen-950 tracking-tight">
            Common questions.
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="bg-cream-50 rounded-2xl border border-cream-300 overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-teagreen-950 hover:text-clay-600 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-charcoal-800/50 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-charcoal-800/80 leading-relaxed font-sans border-t border-cream-200/60 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
