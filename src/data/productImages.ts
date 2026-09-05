/**
 * Centralized Product Image Mapper
 * Utilizes Vite's native import.meta.glob to dynamically load and map all 4 product images
 * (1.png, 2.png, 3.png, 4.png) from each folder in src/images/
 */

const globbedImages = import.meta.glob<{ default: string }>('../images/*/*.png', { eager: true });

/**
 * Returns sorted array of image URLs for a given folder name in src/images/
 */
export function getProductImagesByFolder(folderName: string): string[] {
  const matchingPaths = Object.keys(globbedImages)
    .filter((path) => path.includes(`/images/${folderName}/`))
    .sort((a, b) => {
      const numA = parseInt(a.match(/(\d+)\.png$/)?.[1] || '0', 10);
      const numB = parseInt(b.match(/(\d+)\.png$/)?.[1] || '0', 10);
      return numA - numB;
    });

  return matchingPaths.map((path) => globbedImages[path].default);
}

/**
 * Mapping of product ID to product images array (1.png, 2.png, 3.png, 4.png)
 */
export const PRODUCT_IMAGE_MAP: Record<string, string[]> = {
  'hibiscus-berry-green-tea': getProductImagesByFolder('HibiscusLemonBerry'),
  'origin-pure-evening-calm': getProductImagesByFolder('ChamomileLemon'),
  'origin-pure-fennel-harmony': getProductImagesByFolder('LemonFennel'),
  'origin-pure-blue-pea': getProductImagesByFolder('ButterflyPeaLemon'),
  'origin-pure-chamomile-citrus': getProductImagesByFolder('CloveLemon'),
  'turmeric-gold-green-tea': getProductImagesByFolder('LemonTurmeric'),
  'citrus-vitality-moringa-lemongrass': getProductImagesByFolder('MoringaLemonGrass'),
  'daily-green-classic-lemon-ginger': getProductImagesByFolder('LemonGinger'),
  'twin-tulsi-green-tea': getProductImagesByFolder('LemonTulsi'),
};

/**
 * Helper to safely retrieve product images by product ID
 */
export function getProductImages(productId: string, fallbackImages: string[] = []): string[] {
  const images = PRODUCT_IMAGE_MAP[productId];
  if (images && images.length > 0) {
    return images;
  }
  return fallbackImages;
}
