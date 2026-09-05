import React from 'react';
import { Container } from '../ui/Container';
import { ShieldCheck, CheckCircle, Leaf, Sparkles } from 'lucide-react';

export const IngredientsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 section-sage relative">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-teagreen-900 text-amber-300 mx-auto flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream-50">
            Uncompromising Purity & Lab-Tested Standards
          </h2>
          <p className="text-cream-200/80 text-sm sm:text-base leading-relaxed">
            Every batch undergo rigorous ISO-certified third-party laboratory testing for heavy metals, pesticides, micro-plastics, and radiation before being tin-sealed in Japan.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 text-left">
            {[
              'Heavy Metal Free',
              'Pesticide Tested',
              'Non-GMO Verified',
              '100% Vegan & Keto'
            ].map((cert, index) => (
              <div key={index} className="p-4 rounded-2xl bg-teagreen-900/60 border border-teagreen-700/60 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-bold text-cream-100">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
