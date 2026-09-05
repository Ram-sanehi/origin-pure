/**
 * Helper function to handle Amazon product redirects with tracking support
 */
export function redirectToAmazon(amazonUrl?: string, ctaLocation?: string, productId?: string) {
  const targetUrl = amazonUrl || 'https://www.amazon.in/dp/B0HG9J3ZDX';
  
  if (typeof window !== 'undefined') {
    console.log(`[Analytics Track] Amazon CTA Clicked`, {
      ctaLocation: ctaLocation || 'unknown',
      productId: productId || 'origin-pure-chamomile-citrus',
      targetUrl
    });
  }

  window.open(targetUrl, '_blank', 'noopener,noreferrer');
}
