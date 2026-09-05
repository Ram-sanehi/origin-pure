import React from 'react';
import { Container } from '../ui/Container';
import { Rating } from '../ui/Rating';
import { REVIEWS, TRUST_STATS } from '../../data/reviews';
import { CheckCircle2, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-10 sm:py-24 section-clay">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-clay-700">
            REAL RESULTS & STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
            Loved By 25,000+ Daily Ritualists
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1">
            <Rating rating={4.95} reviewCount={4850} size="lg" />
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map(review => (
            <div
              key={review.id}
              className="bg-cream-50 p-6 rounded-3xl border border-cream-300 shadow-soft flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Rating rating={review.rating} showText={false} size="sm" />
                  <span className="text-[11px] text-charcoal-800/50">{review.date}</span>
                </div>
                <h4 className="font-serif font-bold text-base text-charcoal-900 leading-snug">
                  "{review.title}"
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed font-sans">
                  {review.comment}
                </p>
              </div>

              <div className="pt-4 border-t border-cream-200 flex items-center gap-3">
                {review.avatarUrl && (
                  <img
                    src={review.avatarUrl}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover border border-cream-300"
                  />
                )}
                <div>
                  <strong className="text-xs font-bold text-charcoal-900 block">{review.author}</strong>
                  <div className="flex items-center gap-1 text-[11px] text-teagreen-800 font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-teagreen-600" />
                    <span>Verified Buyer ({review.location})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-cream-100 p-6 rounded-2xl border border-cream-300 text-center">
          {TRUST_STATS.map((stat, index) => (
            <div key={index} className="space-y-0.5">
              <span className="font-serif font-bold text-2xl text-teagreen-950 block">
                {stat.value}
              </span>
              <span className="text-xs text-charcoal-800/70 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
