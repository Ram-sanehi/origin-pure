import React from 'react';
import { Container } from '../ui/Container';
import { Leaf, MapPin } from 'lucide-react';
import aboutImage from '../../images/about.png';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-10 sm:py-24 section-dark relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300">
              <Leaf className="w-3.5 h-3.5" />
              <span>OUR STORY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-50 leading-tight">
              From a Simple Idea to a Better Cup
            </h2>

            <div className="space-y-4 text-cream-200/85 text-sm sm:text-base leading-relaxed font-sans">
              <p className="text-base sm:text-lg font-serif italic text-amber-200/90 border-l-2 border-amber-400 pl-4 py-1">
                Origin Pure was created with a simple belief: tea should be as honest as the ingredients that go into it.
              </p>

              <p>
                When our team at Foxgle began exploring herbal infusions, we noticed a common problem. Many products looked natural on the outside, but were filled with artificial flavouring, unnecessary additives, or low-quality ingredients that masked the true character of the herbs.
              </p>

              <p className="font-medium text-cream-100">
                We wanted to do things differently.
              </p>

              <p>
                Instead of focusing on endless varieties, we focused on creating a small collection of carefully crafted blends made from real botanicals, thoughtfully sourced ingredients, and biodegradable pyramid bags designed to give the herbs enough space to fully infuse.
              </p>

              <p>
                Every blend was developed with one goal in mind — delivering a clean, balanced cup that tastes natural, feels comforting, and fits easily into everyday life.
              </p>

              <p>
                Today, Origin Pure continues to grow from the same philosophy: keep it simple, keep it honest, and never compromise on quality.
              </p>

              <p>
                What started as an idea inside Foxgle has become a commitment to creating herbal infusions that people can genuinely trust and enjoy.
              </p>
            </div>

            {/* Origin Signature Footer */}
            <div className="pt-4 border-t border-teagreen-800/80 space-y-1">
              <p className="font-serif font-bold text-base text-cream-50">
                Origin Pure by Foxgle
              </p>
              <p className="text-xs text-amber-300/90 font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </p>
            </div>
          </div>

          {/* Right Column: Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-teagreen-700/80 shadow-2xl bg-teagreen-900">
              <img
                src={aboutImage}
                alt="Origin Pure Herbal Infusions Sourcing"
                className="w-full h-[480px] lg:h-[540px] object-cover opacity-90"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
