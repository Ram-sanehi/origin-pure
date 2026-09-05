import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, Trash2, ShieldCheck, Truck, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { formatCurrency } from '../../lib/utils';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    totalSavings,
    amountAwayFromFreeShipping,
    freeShippingProgress,
    discountCode
  } = useCart();

  if (!isCartOpen) return null;

  const finalPrice = Math.max(0, subtotal - discountAmount);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0 bg-charcoal-950/60 backdrop-blur-sm transition-opacity"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="w-screen max-w-md bg-cream-100 text-charcoal-900 shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-5 border-b border-cream-300 flex items-center justify-between bg-cream-50">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-teagreen-800" />
                <h3 className="font-serif font-bold text-lg text-teagreen-950">
                  Your Ritual Cart
                </h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-charcoal-800/60 hover:text-charcoal-900 rounded-full hover:bg-cream-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Bar */}
            <div className="bg-teagreen-900 text-cream-100 p-4 text-xs">
              <div className="flex items-center justify-between font-medium mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-amber-400" />
                  {amountAwayFromFreeShipping <= 0 ? (
                    <strong className="text-amber-300 font-bold">
                      🎉 FREE US Express Shipping Unlocked!
                    </strong>
                  ) : (
                    <span>
                      Add <strong className="text-amber-300 font-bold">{formatCurrency(amountAwayFromFreeShipping)}</strong> for FREE Shipping
                    </span>
                  )}
                </span>
              </div>
              <div className="w-full h-2 bg-teagreen-950 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 transition-all duration-500 rounded-full"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cream-200 text-teagreen-800 flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-lg">Your cart is currently empty</h4>
                  <p className="text-sm text-charcoal-800/70 max-w-xs">
                    Start your tea ritual today and claim your Meta Ads 15% discount.
                  </p>
                  <Button variant="primary" onClick={() => setIsCartOpen(false)}>
                    EXPLORE MATCHAS
                  </Button>
                </div>
              ) : (
                cart.map(item => (
                  <div
                    key={`${item.product.id}-${item.selectedBundle.id}`}
                    className="flex gap-4 p-4 rounded-2xl bg-cream-50 border border-cream-300/80 shadow-soft"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-xl border border-cream-300/60 shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif font-semibold text-sm text-teagreen-950">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id, item.selectedBundle.id)}
                            className="text-charcoal-800/40 hover:text-rose-600 transition-colors p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs font-semibold text-clay-600 mt-0.5">
                          {item.selectedBundle.name}
                        </p>
                        {item.selectedBundle.savingsBadge && (
                          <span className="inline-block text-[10px] font-bold text-teagreen-800 bg-teagreen-100 px-1.5 py-0.5 rounded mt-1">
                            {item.selectedBundle.savingsBadge}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-cream-300 rounded-full bg-cream-100">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedBundle.id, item.quantity - 1)}
                            className="p-1 hover:text-teagreen-800"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 text-xs font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedBundle.id, item.quantity + 1)}
                            className="p-1 hover:text-teagreen-800"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-right">
                          <span className="font-serif font-bold text-sm text-teagreen-950">
                            {formatCurrency(item.selectedBundle.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer & Checkout */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-cream-300 bg-cream-50 space-y-3">
                {/* Meta discount tag */}
                <div className="flex items-center justify-between text-xs bg-amber-100/80 border border-amber-300/80 p-2.5 rounded-xl text-amber-900">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Tag className="w-3.5 h-3.5 text-amber-600" />
                    <span>Meta Offer ({discountCode}):</span>
                  </span>
                  <span className="font-bold text-teagreen-800">
                    -{formatCurrency(discountAmount)}
                  </span>
                </div>

                {/* Subtotal & Total Savings breakdown */}
                <div className="space-y-1 text-sm">
                  {totalSavings > 0 && (
                    <div className="flex justify-between text-xs text-teagreen-800 font-semibold">
                      <span>Total Bundle & Code Savings:</span>
                      <span>-{formatCurrency(totalSavings)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-serif font-bold text-lg text-teagreen-950 pt-1">
                    <span>Total Due:</span>
                    <span>{formatCurrency(finalPrice)}</span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  glow
                  onClick={() => alert("Redirecting to secure 256-bit SSL encrypted checkout...")}
                >
                  <span className="flex items-center gap-2">
                    <span>PROCEED TO SECURE CHECKOUT</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-charcoal-800/60 font-medium pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teagreen-800" />
                  <span>30-Day Money Back Guarantee • Encrypted Checkout</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
