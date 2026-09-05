import { Review } from '../types';

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Elena Rostova',
    location: 'Austin, TX',
    rating: 5,
    date: '2 days ago',
    title: 'Replaced my 3-cup coffee addiction completely!',
    comment: 'I came across a Meta ad for the Morning Glow Matcha and was skeptical. But after 1 week, I have NO morning brain fog, zero stomach jitters, and sustained focus until 4 PM. Plus the green shade is unbelievable!',
    verifiedBuyer: true,
    productName: 'Morning Glow Ceremonial Matcha',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-2',
    author: 'Marcus Vance',
    location: 'Seattle, WA',
    rating: 5,
    date: '1 week ago',
    title: 'Silky smooth with zero bitter bite',
    comment: 'Most store-bought tea bags taste like dusty paper. Origin Pure Evening Calm Chamomile is sweet, soothing, and brews into a fragrant cup with full natural flowers and lemon balm. Worth every rupee.',
    verifiedBuyer: true,
    productName: 'Morning Glow Ceremonial Matcha',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-3',
    author: 'Sophia Lin',
    location: 'San Francisco, CA',
    rating: 5,
    date: '3 weeks ago',
    title: 'The Golden Chamomile is my nighttime sacred ritual',
    comment: 'As a startup founder, sleeping was a battle. Drinking a warm cup of this chamomile lavender tea 30 minutes before bed shuts off my racing thoughts completely.',
    verifiedBuyer: true,
    productName: 'Golden Chamomile & Lavender Rest',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  }
];

export const TRUST_STATS = [
  { label: 'Verified 5-Star Reviews', value: '4,850+' },
  { label: 'Organic First-Harvest Leaves', value: '100%' },
  { label: 'Satisfaction Guarantee', value: '30 Days' },
  { label: 'Carbon Neutral Shipping', value: '100%' }
];
