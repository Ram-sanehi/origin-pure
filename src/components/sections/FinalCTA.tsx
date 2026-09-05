import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { MAIN_FEATURED_PRODUCT } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Sparkles, ShieldCheck, Truck, ArrowRight } from 'lucide-react';
import { formatCurrency } from '../../lib/utils';

export const FinalCTA: React.FC = () => {
  const { addToCart } = useCart();
  const popularBundle = MAIN_FEATURED_PRODUCT.bundles.find(b => b.isPopular) || MAIN_FEATURED_PRODUCT.bundles[0];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-teagreen-900 to-teagreen-950 text-cream-50 relative overflow-hidden">
      <Container size="md">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>RISK-FREE 30-DAY TASTE TRIAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
            Ready to Upgrade Your Morning Ritual?
          </h2>

          <p className="text-cream-200/80 text-base sm:text-lg leading-relaxed">
            Join thousands of daily tea lovers. Experience sustained focus, calm energy, and 100% ceremonial purity with zero bitterness.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="clay"
              size="xl"
              glow
              onClick={() => addToCart(MAIN_FEATURED_PRODUCT, popularBundle)}
            >
              <span className="flex items-center gap-2">
                <span>CLAIM META SPECIAL (SAVE 38%)</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-xs text-cream-200/70 font-medium pt-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-amber-400" />
              Free Express US Shipping over $45
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              30-Day Taste Paradise Guarantee
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
