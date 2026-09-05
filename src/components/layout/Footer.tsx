import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Leaf, ArrowRight, CheckCircle } from 'lucide-react';

import brandLogo from '../../images/logo.jpeg';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-teagreen-950 text-cream-100 border-t border-teagreen-900 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-teagreen-900">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <img
                src={brandLogo}
                alt="Origin Pure Logo"
                className="h-10 w-auto rounded-lg object-contain bg-cream-50 p-0.5 shadow-xs"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl tracking-tight text-cream-50 leading-none">
                  Origin Pure
                </span>
                <span className="text-[9px] tracking-widest uppercase text-amber-400 font-bold mt-0.5">
                  Natural Botanicals
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-cream-200/75 leading-relaxed font-sans max-w-sm">
              Authentic Indian botanical tea blends crafted with whole natural ingredients and plant-based biodegradable pyramid bags.
            </p>

            <p className="text-xs text-teagreen-400 font-medium">
              © {new Date().getFullYear()} Origin Pure by Foxgle · Coimbatore, Tamil Nadu, India. All rights reserved.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-sm text-cream-50 uppercase tracking-wider">
                About
              </h4>
              <ul className="space-y-2 text-xs text-cream-200/80 font-sans">
                <li><a href="#story" className="hover:text-amber-300 transition-colors">Our Story</a></li>
                <li><a href="#why-us" className="hover:text-amber-300 transition-colors">Why Us</a></li>
                <li><a href="#reviews" className="hover:text-amber-300 transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-amber-300 transition-colors">Lab Reports</a></li>
              </ul>
            </div>
          </div>

          {/* Natural Email Newsletter Signup */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-cream-50 uppercase tracking-wider">
              Occasional good things in your inbox.
            </h4>
            <p className="text-xs text-cream-200/75 leading-relaxed font-sans">
              No daily spam. Just fresh harvest announcements, tea brewing notes, and subscriber discounts.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-teagreen-900 border border-teagreen-800 text-cream-100 placeholder:text-teagreen-400 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-amber-400 flex-1"
                />
                <button
                  type="submit"
                  className="bg-amber-400 hover:bg-amber-300 text-teagreen-950 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1 shrink-0"
                >
                  <span>JOIN</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <p className="text-xs text-amber-300 font-semibold flex items-center gap-1 animate-fadeIn">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Welcome! You’re on the VIP list.</span>
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-cream-300/60 font-sans">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-cream-200 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-cream-200 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-cream-200 transition-colors">Shipping & Returns</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
