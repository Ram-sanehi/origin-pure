import React from 'react';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { QuickBenefitsSection } from './components/sections/QuickBenefitsSection';
import { ProductDiscoverySection } from './components/sections/ProductDiscoverySection';
import { FeaturedProductSection } from './components/sections/FeaturedProductSection';
import { CustomerReviewsSection } from './components/sections/CustomerReviewsSection';
import { WhyThisTeaSection } from './components/sections/WhyThisTeaSection';
import { ImmersiveIngredientsSection } from './components/sections/ImmersiveIngredientsSection';
import { BrandStorySection } from './components/sections/BrandStorySection';
import { LaunchOfferSection } from './components/sections/LaunchOfferSection';
import { FAQSection } from './components/sections/FAQSection';
import { FinalCTASection } from './components/sections/FinalCTASection';
import { StickyMobileCTA } from './components/layout/StickyMobileCTA';
import { Footer } from './components/layout/Footer';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-100 font-sans text-charcoal-900 selection:bg-teagreen-800 selection:text-cream-50">
      {/* Top Meta Ads Announcement Banner */}
      <AnnouncementBar />

      {/* Minimal D2C Navigation Header */}
      <Header />

      {/* Complete Landing Page Funnel -> Direct Amazon Listing Redirect */}
      <main className="flex-grow">
        {/* Above-the-fold Hero */}
        <HeroSection />

        {/* Quick Benefits Strip */}
        <QuickBenefitsSection />

        {/* Product Discovery Showcase */}
        <ProductDiscoverySection />

        {/* Featured Flagship Product Deep Dive */}
        <FeaturedProductSection />

        {/* Realistic Customer Social Proof */}
        <CustomerReviewsSection />

        {/* Brand Philosophy & Sourcing */}
        <WhyThisTeaSection />

        {/* Immersive Ingredient Experience */}
        <ImmersiveIngredientsSection />

        {/* Human Founder Story */}
        <BrandStorySection />

        {/* Amazon Launch Offer */}
        <LaunchOfferSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Final Conversion CTA */}
        <FinalCTASection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Persistent Mobile Bottom Buy Bar -> Amazon Listing */}
      <StickyMobileCTA />
    </div>
  );
}

export default App;
