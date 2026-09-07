import React from 'react';
import { CheckCircle2, CreditCard, Headphones, RotateCcw, ShieldCheck, Truck, ExternalLink } from 'lucide-react';
import { Container } from '../ui/Container';
import { redirectToAmazon } from '../../lib/amazon';
import { MAIN_FEATURED_PRODUCT } from '../../data/products';

const TRUST_ITEMS = [
  [ShieldCheck, 'Secure Payments'],
  [Truck, 'Fast Delivery'],
  [RotateCcw, 'Easy Returns'],
  [CheckCircle2, 'Verified Customer Reviews'],
  [Headphones, 'Amazon Customer Support'],
  [CreditCard, 'Trusted Checkout Experience']
];

export const AmazonTrustSection: React.FC = () => (
  <section className="section-clay border-t border-cream-300/80 py-14 sm:py-20">
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-clay-700">A familiar way to shop</span>
          <h2 className="text-3xl font-serif font-bold tracking-tight text-teagreen-950 sm:text-4xl">Prefer Buying Through Amazon?</h2>
          <p className="text-sm leading-relaxed text-charcoal-800/75">Many customers feel more comfortable purchasing from Amazon when trying a new brand for the first time. We make that choice easy.</p>
          <button
            type="button"
            onClick={() => redirectToAmazon(MAIN_FEATURED_PRODUCT.amazonUrl, 'amazon-trust-section', MAIN_FEATURED_PRODUCT.id)}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#E68A00] bg-[#FF9900] px-6 py-3 text-sm font-bold text-black shadow-md transition-colors hover:bg-[#E68A00]"
          >
            <span>Buy on Amazon</span><ExternalLink className="h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7">
          {TRUST_ITEMS.map(([Icon, label]) => (
            <div key={label as string} className="flex min-h-24 flex-col justify-center gap-2 rounded-2xl border border-cream-300/80 bg-cream-50 p-4">
              {React.createElement(Icon as React.ElementType, { className: 'h-5 w-5 text-teagreen-800' })}
              <span className="text-xs font-bold leading-snug text-teagreen-950">{label as string}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
