import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, BundleOption, CartItem } from '../types';
import { MAIN_FEATURED_PRODUCT } from '../data/products';

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, bundle?: BundleOption, quantity?: number) => void;
  removeFromCart: (productId: string, bundleId: string) => void;
  updateQuantity: (productId: string, bundleId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  totalSavings: number;
  freeShippingThreshold: number;
  amountAwayFromFreeShipping: number;
  freeShippingProgress: number;
  discountCode: string;
  discountAmount: number;
  applyDiscountCode: (code: string) => boolean;
}

const FREE_SHIPPING_THRESHOLD = 45;

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Initial default cart item for instant demo/conversion preview
    const defaultBundle = MAIN_FEATURED_PRODUCT.bundles.find(b => b.isPopular) || MAIN_FEATURED_PRODUCT.bundles[0];
    return [
      {
        product: MAIN_FEATURED_PRODUCT,
        selectedBundle: defaultBundle,
        quantity: 1,
      }
    ];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState('META15');
  const [appliedDiscountRate, setAppliedDiscountRate] = useState(0.15); // 15% off for Meta ads traffic

  const addToCart = (product: Product, bundle?: BundleOption, quantity: number = 1) => {
    const targetBundle = bundle || product.bundles.find(b => b.isPopular) || product.bundles[0];
    
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(
        item => item.product.id === product.id && item.selectedBundle.id === targetBundle.id
      );

      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += quantity;
        return newCart;
      } else {
        return [...prevCart, { product, selectedBundle: targetBundle, quantity }];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, bundleId: string) => {
    setCart(prevCart => prevCart.filter(
      item => !(item.product.id === productId && item.selectedBundle.id === bundleId)
    ));
  };

  const updateQuantity = (productId: string, bundleId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, bundleId);
      return;
    }
    setCart(prevCart => prevCart.map(item => {
      if (item.product.id === productId && item.selectedBundle.id === bundleId) {
        return { ...item, quantity };
      }
      return item;
    }));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const subtotal = cart.reduce(
    (sum, item) => sum + item.selectedBundle.price * item.quantity,
    0
  );

  const originalSubtotal = cart.reduce(
    (sum, item) => sum + (item.selectedBundle.originalPrice || item.selectedBundle.price) * item.quantity,
    0
  );

  const bundleSavings = originalSubtotal - subtotal;
  const discountAmount = subtotal * appliedDiscountRate;
  const totalSavings = bundleSavings + discountAmount;

  const amountAwayFromFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - (subtotal - discountAmount));
  const freeShippingProgress = Math.min(100, ((subtotal - discountAmount) / FREE_SHIPPING_THRESHOLD) * 100);

  const applyDiscountCode = (code: string): boolean => {
    if (code.toUpperCase() === 'META15' || code.toUpperCase() === 'RITUAL15') {
      setDiscountCode(code.toUpperCase());
      setAppliedDiscountRate(0.15);
      return true;
    }
    return false;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        totalSavings,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountAwayFromFreeShipping,
        freeShippingProgress,
        discountCode,
        discountAmount,
        applyDiscountCode
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
