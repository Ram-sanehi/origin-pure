export interface CampaignConfig {
  id: string;
  name: string;
  heroHeadline: string;
  heroHeadlineItalic: string;
  heroEyebrow: string;
  heroSupportingText: string;
  primaryCtaText: string;
  secondaryCtaText: string;
}

export className MetaCampaigns {
  // Campaign A: Quality & Single-Origin Focus
  static quality: CampaignConfig = {
    id: 'campaign-quality',
    name: 'Campaign A — Single-Origin Quality Angle',
    heroEyebrow: '100% Ceremonial Grade • First Harvest Uji Matcha',
    heroHeadline: 'Your morning energy deserves better than',
    heroHeadlineItalic: 'a coffee crash.',
    heroSupportingText: 'Blended with whole natural botanicals and herbs in biodegradable pyramid bags. Origin Pure delivers calm, sustained energy with zero artificial flavours or preservatives.',
    primaryCtaText: 'SHOP THE COLLECTION',
    secondaryCtaText: 'EXPLORE THE STORY'
  };

  // Campaign B: Flavor & Zero Bitterness Focus
  static flavor: CampaignConfig = {
    id: 'campaign-flavor',
    name: 'Campaign B — Smooth Flavor & Zero Bitterness Angle',
    heroEyebrow: 'Silky Umami • Naturally Sweet Finish',
    heroHeadline: 'Matcha so smooth you can drink it',
    heroHeadlineItalic: 'without sweetener.',
    heroSupportingText: 'First-harvest Japanese leaves stone-ground fresh. Whisks into a velvety emerald froth with zero bitter bite.',
    primaryCtaText: 'CLAIM FIRST ORDER OFFER',
    secondaryCtaText: 'SEE TASTING NOTES'
  };

  // Campaign C: Lifestyle & Quiet Ritual Focus
  static lifestyle: CampaignConfig = {
    id: 'campaign-lifestyle',
    name: 'Campaign C — Daily Mindful Ritual Angle',
    heroEyebrow: 'Mindful Daily Ritual • 30-Second Morning Whisk',
    heroHeadline: 'Start your morning with quiet, steady',
    heroHeadlineItalic: 'mental clarity.',
    heroSupportingText: 'Trade anxious caffeine spikes for 6 hours of calm, sustained focus. Organic ceremonial tea crafted for real daily routines.',
    primaryCtaText: 'START YOUR RITUAL',
    secondaryCtaText: 'READ OUR STORY'
  };

  // Campaign D: Coffee Alternative Angle
  static coffeeAlternative: CampaignConfig = {
    id: 'campaign-coffee-alt',
    name: 'Campaign D — Coffee Alternative Angle',
    heroEyebrow: 'Zero Jitters • Zero Acid • 6 Hours Calm Focus',
    heroHeadline: 'The coffee alternative you will',
    heroHeadlineItalic: 'actually look forward to.',
    heroSupportingText: 'L-theanine paired with natural caffeine. Gives you clean morning energy without stomach burn or 3 PM brain fog.',
    primaryCtaText: 'TRY RISK-FREE FOR 30 DAYS',
    secondaryCtaText: 'WHY WE SWITCHED'
  };
}
