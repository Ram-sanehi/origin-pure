import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Rating } from '../ui/Rating';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Check } from 'lucide-react';
import { formatCurrency } from '../../lib/utils';

export const ProductShowcase: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[0].id);

  const activeProduct = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];
  const [selectedBundleId, setSelectedBundleId] = useState(
    activeProduct.bundles.find(b => b.isPopular)?.id || activeProduct.bundles[0].id
  );

  const activeBundle = activeProduct.bundles.find(b => b.id === selectedBundleId) || activeProduct.bundles[0];

  return (
    <section id="ceremony" className="py-10 sm:py-24 section-cream border-t border-cream-300/60">
      <Container>
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teagreen-800">
            EXPLORE THE COLLECTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teagreen-950">
            Crafted for Morning Energy & Nighttime Rest
          </h2>
          <p className="text-charcoal-800/70 text-sm sm:text-base">
            Select your preferred blend bundle below to unlock Meta Ads launch savings.
          </p>
        </div>

        {/* Product Selector Tabs */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {PRODUCTS.map(product => (
            <button
              key={product.id}
              onClick={() => {
                setSelectedProductId(product.id);
                setSelectedBundleId(product.bundles.find(b => b.isPopular)?.id || product.bundles[0].id);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap ${
                selectedProductId === product.id
                  ? 'bg-teagreen-800 text-cream-50 shadow-md'
                  : 'bg-cream-200 text-charcoal-800 hover:bg-cream-300'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Product Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-cream-50 p-6 sm:p-10 rounded-3xl border border-cream-300 shadow-card">
          {/* Images */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-cream-300 h-72 sm:h-96">
              <img
                src={activeProduct.images[0]}
                alt={activeProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {activeProduct.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${activeProduct.name} ${i}`}
                  className="w-full h-24 object-cover rounded-xl border border-cream-300 cursor-pointer hover:opacity-90"
                />
              ))}
            </div>
          </div>

          {/* Details & Bundle selector */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Rating rating={activeProduct.rating} reviewCount={activeProduct.reviewCount} />
                {activeProduct.badge && (
                  <Badge variant="amber">{activeProduct.badge}</Badge>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-teagreen-950">
                {activeProduct.name}
              </h3>
              <p className="text-xs sm:text-sm text-clay-600 font-semibold mt-1">
                {activeProduct.subtitle}
              </p>
              <p className="text-sm text-charcoal-800/80 mt-3 leading-relaxed">
                {activeProduct.fullDescription}
              </p>
            </div>

            {/* Bundle Options Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-charcoal-900 uppercase tracking-wider block">
                Select Order Bundle:
              </label>
              {activeProduct.bundles.map(bundle => (
                <div
                  key={bundle.id}
                  onClick={() => setSelectedBundleId(bundle.id)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                    selectedBundleId === bundle.id
                      ? 'border-teagreen-800 bg-teagreen-50/50 shadow-sm'
                      : 'border-cream-300 bg-cream-100/50 hover:border-cream-400'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-teagreen-950">{bundle.name}</span>
                      {bundle.isPopular && (
                        <span className="text-[10px] font-bold bg-amber-400 text-teagreen-950 px-2 py-0.5 rounded-full">
                          MOST POPULAR
                        </span>
                      )}
                    </div>
                    {bundle.freeGifts && (
                      <p className="text-xs text-teagreen-800 font-semibold">
                        🎁 Includes: {bundle.freeGifts.join(', ')}
                      </p>
                    )}
                  </div>

                  <div className="text-right">
                    <div className="font-serif font-bold text-base text-teagreen-950">
                      {formatCurrency(bundle.price)}
                    </div>
                    {bundle.savingsBadge && (
                      <span className="text-[11px] font-bold text-clay-600">
                        {bundle.savingsBadge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <Button
              variant="primary"
              size="lg"
              fullWidth
              glow
              onClick={() => addToCart(activeProduct, activeBundle)}
            >
              <span className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                <span>ADD TO CART ({formatCurrency(activeBundle.price)})</span>
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
