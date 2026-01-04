
/**
 * @file Static data definitions for Etsy creators and products used across the platform.
 */

export type VettingStatus = 'Verified' | 'Pending review' | 'Watchlist'

/**
 * Represents a top-selling product for an Etsy creator.
 */
export interface CreatorProduct {
  /** Unique product identifier. */
  id: string
  /** Product display name. */
  name: string
  /** Short marketing description. */
  description: string
  /** Display price for the product. */
  price: number
  /** Currency code for product price. */
  currency: 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD'
  /** Preview image URL for the product. */
  imageUrl: string
  /** Affiliate link to purchase the product. */
  affiliateUrl: string
  /** Whether this item is a flagship bestseller. */
  isBestSeller?: boolean
}

/**
 * Affiliate program configuration for a creator.
 */
export interface CreatorAffiliateDetails {
  /** Primary affiliate program type. */
  programType: 'Etsy Affiliate' | 'Direct' | 'Hybrid'
  /** Base commission rate offered to affiliates. */
  baseCommissionRate: number
  /** Optional boosted commission rate for special campaigns. */
  boostedCommissionRate?: number
  /** Cookie window in days for tracking. */
  cookieWindowDays: number
  /** Minimum monthly click requirement, if applicable. */
  minMonthlyClicks?: number
  /** Notes about payout model and expectations. */
  notes: string
  /** Standard affiliate application URL, if external. */
  applicationUrl?: string
}

/**
 * Social media links for a creator.
 */
export interface CreatorSocialLinks {
  /** Instagram profile URL. */
  instagram?: string
  /** TikTok profile URL. */
  tiktok?: string
  /** Pinterest profile URL. */
  pinterest?: string
  /** YouTube channel URL. */
  youtube?: string
  /** Personal website or portfolio URL. */
  website?: string
}

/**
 * Represents an Etsy creator featured in the platform.
 */
export interface Creator {
  /** Unique slug used for routing and referencing. */
  id: string
  /** Public-facing Etsy shop name. */
  shopName: string
  /** Primary owner or brand name. */
  ownerName: string
  /** Full Etsy shop URL. */
  shopUrl: string
  /** Avatar image representing the brand. */
  avatarUrl: string
  /** Hero or cover image for the creator profile. */
  headerImageUrl: string
  /** Primary product category. */
  primaryCategory: string
  /** Extended category tags for discovery. */
  tags: string[]
  /** Country or main operating location. */
  location: string
  /** Average rating score. */
  rating: number
  /** Number of individual reviews. */
  reviewCount: number
  /** Estimated total sales for the shop. */
  sales: number
  /** One-line overview for cards and summaries. */
  shortDescription: string
  /** More detailed biography for profile pages. */
  bio: string
  /** Vetting status for affiliates using this platform. */
  vettingStatus: VettingStatus
  /** Internal notes explaining vetting decision. */
  vettingNotes: string
  /** Badge labels to highlight strengths. */
  badges: string[]
  /** Affiliate configuration details. */
  affiliate: CreatorAffiliateDetails
  /** Social media and external links. */
  social: CreatorSocialLinks
  /** Top-selling products with affiliate links. */
  topProducts: CreatorProduct[]
}

/**
 * Top Etsy creators curated for affiliate marketers.
 * Shop names and URLs are based on real Etsy shops; performance metrics are illustrative.
 */
export const creators: Creator[] = [
  {
    id: 'caitlynminimalist',
    shopName: 'CaitlynMinimalist',
    ownerName: 'Caitlyn',
    shopUrl: 'https://www.etsy.com/shop/CaitlynMinimalist',
    avatarUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/3694782e-c4a7-494d-8c38-9b5a89b7cc59.jpg',
    headerImageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/811cdb26-35bb-42f5-a54b-9152dea0a608.jpg',
    primaryCategory: 'Jewelry',
    tags: ['Jewelry', 'Minimalist', 'Personalized', 'Gift'],
    location: 'Los Angeles, USA',
    rating: 4.9,
    reviewCount: 560000,
    sales: 2800000,
    shortDescription: 'Personalized minimalist jewelry with millions of happy customers.',
    bio: 'CaitlynMinimalist is one of Etsy’s most recognizable jewelry brands, specializing in delicate, personalized pieces. Their signature name necklaces and custom handwriting jewelry have become staples for influencers and gift guides.',
    vettingStatus: 'Verified',
    vettingNotes:
      'Consistent 4.9+ rating, extremely high sales volume, fast processing times, and strong fulfillment history. Ideal anchor partner for jewelry-focused affiliates.',
    badges: ['High Conversion', 'Fast Shipping', 'Gift-Friendly'],
    affiliate: {
      programType: 'Hybrid',
      baseCommissionRate: 8,
      boostedCommissionRate: 12,
      cookieWindowDays: 30,
      minMonthlyClicks: 300,
      notes:
        'High-intent search traffic converts well on personalized pieces. Performs best with UGC and gift-guide style content.',
      applicationUrl: 'https://www.etsy.com/affiliates'
    },
    social: {
      instagram: 'https://www.instagram.com/caitlynminimalist',
      pinterest: 'https://www.pinterest.com/search/pins/?q=caitlynminimalist',
      website: 'https://www.etsy.com/shop/CaitlynMinimalist'
    },
    topProducts: [
      {
        id: 'cm-name-necklace',
        name: 'Custom Name Necklace',
        description:
          'Delicate personalized name necklace available in gold, silver, and rose gold — a bestseller for birthdays and holidays.',
        price: 39,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/3aa1c66f-6c0f-422a-bd01-2840910455b0.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/219322438/custom-name-necklace?utm_source=affiliate_hub&amp;utm_medium=creator&amp;aff_platform=custom_caitlyn',
        isBestSeller: true
      },
      {
        id: 'cm-handwriting',
        name: 'Handwriting Necklace',
        description:
          'Custom necklace created from real handwriting — an emotional, keepsake-style bestseller.',
        price: 55,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/f9b934d9-1813-4d90-b0c5-b804e6d8e2c0.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/253112774/custom-handwriting-necklace?utm_source=affiliate_hub&amp;utm_medium=creator',
        isBestSeller: true
      },
      {
        id: 'cm-roman-numeral-ring',
        name: 'Roman Numeral Ring',
        description: 'Minimalist roman numeral ring, perfect for anniversaries and milestone dates.',
        price: 32,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/0e193f26-d943-4f64-87e8-7538090472ed.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/400786844/custom-roman-numeral-ring?utm_source=affiliate_hub&amp;utm_medium=creator'
      }
    ]
  },
  {
    id: 'modparty',
    shopName: 'ModParty',
    ownerName: 'ModParty',
    shopUrl: 'https://www.etsy.com/shop/ModParty',
    avatarUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/dc84934c-7b44-474e-9b74-0fea5ea39e9a.jpg',
    headerImageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/40c53ad1-b0d5-4ebf-bbc8-a0d9044cd34e.jpg',
    primaryCategory: 'Wedding & Party',
    tags: ['Wedding', 'Bridal Party', 'Gifts', 'Personalized'],
    location: 'Orange County, USA',
    rating: 4.9,
    reviewCount: 350000,
    sales: 1900000,
    shortDescription:
      'Bridesmaid proposal boxes, bridal party gifts, and custom wedding accessories at scale.',
    bio: 'ModParty is a powerhouse for wedding and bridal party gifts on Etsy. Their catalog is tailored for bridal showers, bridesmaid proposals, and customizable day-of details that photograph beautifully on social media.',
    vettingStatus: 'Verified',
    vettingNotes:
      'Exceptional product photography and AOV. Perfect for wedding blogs, Pinterest creators, and TikTok “wedding haul” content.',
    badges: ['High AOV', 'Photo-Ready', 'Seasonal Peaks'],
    affiliate: {
      programType: 'Etsy Affiliate',
      baseCommissionRate: 6,
      boostedCommissionRate: 10,
      cookieWindowDays: 30,
      notes:
        'Strong seasonality (Q2–Q3). Best for curated “bridal bundle” roundups and Pinterest boards.',
      applicationUrl: 'https://www.etsy.com/affiliates'
    },
    social: {
      instagram: 'https://www.instagram.com/modparty',
      pinterest: 'https://www.pinterest.com/search/pins/?q=modparty'
    },
    topProducts: [
      {
        id: 'mp-bridesmaid-box',
        name: 'Personalized Bridesmaid Proposal Box',
        description:
          'Custom gift box with name printing, perfect for bridesmaid proposals and bridal party reveals.',
        price: 34,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/e300d14f-97fc-4223-9f16-f0c40d7c0ee3.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/197775046/personalized-bridesmaid-proposal-box?utm_source=affiliate_hub&amp;utm_medium=creator',
        isBestSeller: true
      },
      {
        id: 'mp-satin-robes',
        name: 'Bridesmaid Satin Robes',
        description:
          'Matching satin robes for your bridal party, monogrammed in your preferred script style.',
        price: 29,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/1957e583-36c5-4611-8709-ea7b0a0cdc93.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/180036287/bridesmaid-robe-set?utm_source=affiliate_hub&amp;utm_medium=creator'
      },
      {
        id: 'mp-tumblers',
        name: 'Custom Bridesmaid Tumblers',
        description: 'Personalized tumblers ideal for getting-ready photos and bachelorette trips.',
        price: 24,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/6fcebb07-b63c-4be1-b6a3-0343c9e54385.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/522764760/personalized-bridesmaid-tumblers?utm_source=affiliate_hub&amp;utm_medium=creator'
      }
    ]
  },
  {
    id: 'bohemianfindings',
    shopName: 'BohemianFindings',
    ownerName: 'Bohemian Findings',
    shopUrl: 'https://www.etsy.com/shop/BohemianFindings',
    avatarUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/99503e64-5f19-4aad-b12f-ec7a6adea197.jpg',
    headerImageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/78c4ad80-66a8-414b-8006-2da17b860353.jpg',
    primaryCategory: 'Craft Supplies',
    tags: ['Supplies', 'Jewelry', 'Findings', 'Beads'],
    location: 'Prince Edward Island, Canada',
    rating: 4.9,
    reviewCount: 450000,
    sales: 2000000,
    shortDescription:
      'High-volume seller of jewelry findings, charms, and craft supplies for makers.',
    bio: 'BohemianFindings serves Etsy creators themselves, supplying the charms, chains, and findings that power thousands of small brands. Affiliates can monetize both DIY hobbyists and small business audiences.',
    vettingStatus: 'Verified',
    vettingNotes:
      'High repeat order rates and cart sizes. Ideal for YouTube tutorial creators and craft bloggers.',
    badges: ['B2B Friendly', 'Repeat Orders'],
    affiliate: {
      programType: 'Etsy Affiliate',
      baseCommissionRate: 6,
      cookieWindowDays: 30,
      notes:
        'Works well as an “essential supplies” recommendation set under tutorial videos and class descriptions.',
      applicationUrl: 'https://www.etsy.com/affiliates'
    },
    social: {
      instagram: 'https://www.instagram.com/bohemianfindings',
      pinterest: 'https://www.pinterest.com/search/pins/?q=bohemianfindings'
    },
    topProducts: [
      {
        id: 'bf-charm-mix',
        name: 'Mixed Charm Grab Bag',
        description:
          'Bulk assortments of themed charms, perfect for beginners and subscription box fillers.',
        price: 18,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/6c2648de-f688-4081-b20c-12a221f70b47.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/165363183/mixed-jewelry-charms?utm_source=affiliate_hub&amp;utm_medium=creator',
        isBestSeller: true
      },
      {
        id: 'bf-earring-hooks',
        name: 'Hypoallergenic Earring Hooks',
        description:
          'Nickel-free earring hooks ideal for sensitive ears and daily-wear designs.',
        price: 12,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/37c8b2b3-cf8d-4a9b-9fa7-75a52e3b2a22.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/163412170/earring-hooks-bulk?utm_source=affiliate_hub&amp;utm_medium=creator'
      }
    ]
  },
  {
    id: 'yakutum',
    shopName: 'YAKUTUM',
    ownerName: 'Yakut',
    shopUrl: 'https://www.etsy.com/shop/YAKUTUM',
    avatarUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/41dc404f-bb05-4ecb-a0f6-669e0c5cc1d6.jpg',
    headerImageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/206245fa-cac8-4d64-9fa5-5524781d0870.jpg',
    primaryCategory: 'Jewelry',
    tags: ['Jewelry', 'Rings', 'Engagement', 'Wedding'],
    location: 'Istanbul, Turkey',
    rating: 4.9,
    reviewCount: 120000,
    sales: 650000,
    shortDescription:
      'Elegant, customizable engagement and wedding rings with a global buyer base.',
    bio: 'YAKUTUM focuses on engagement, wedding, and fine jewelry pieces that photograph beautifully and command premium price points. Perfect for luxury-leaning audiences and wedding content creators.',
    vettingStatus: 'Verified',
    vettingNotes:
      'High AOV and strong photo assets. Works best with long-form reviews, comparison content, and wedding planning funnels.',
    badges: ['High AOV', 'Global Shipping'],
    affiliate: {
      programType: 'Hybrid',
      baseCommissionRate: 7,
      boostedCommissionRate: 10,
      cookieWindowDays: 45,
      notes:
        'Position as an affordable alternative to traditional fine jewelry while highlighting craftsmanship.',
      applicationUrl: 'https://www.etsy.com/affiliates'
    },
    social: {
      instagram: 'https://www.instagram.com/yakutum_jewelry'
    },
    topProducts: [
      {
        id: 'ya-morganite-ring',
        name: 'Morganite Engagement Ring',
        description:
          'Rose gold morganite engagement ring with a vintage-inspired halo setting.',
        price: 320,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/b7337377-f81e-4888-8cc5-a12fc24d7743.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/624816166/morganite-engagement-ring?utm_source=affiliate_hub&amp;utm_medium=creator',
        isBestSeller: true
      },
      {
        id: 'ya-wedding-band',
        name: 'Curved Wedding Band',
        description:
          'Delicate curved wedding band designed to stack perfectly with engagement rings.',
        price: 145,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/989a9523-8df4-4d43-ad97-31dd8d0a8571.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/509016055/curved-wedding-band?utm_source=affiliate_hub&amp;utm_medium=creator'
      }
    ]
  },
  {
    id: 'plannerpress',
    shopName: 'PlannerPress',
    ownerName: 'Planner Press',
    shopUrl: 'https://www.etsy.com/shop/PlannerPress',
    avatarUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/31df7de8-4a16-44e0-8d3b-51336f22d257.jpg',
    headerImageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/82590c1b-1823-4473-9781-5e4f55b33234.jpg',
    primaryCategory: 'Digital Products',
    tags: ['Digital Planner', 'Printables', 'Productivity'],
    location: 'Austin, USA',
    rating: 4.8,
    reviewCount: 62000,
    sales: 480000,
    shortDescription: 'High-converting digital planners, inserts, and productivity tools.',
    bio: 'PlannerPress specializes in aesthetic, productivity-focused digital planners that perform extremely well on TikTok, YouTube, and Pinterest. Affiliates benefit from low friction, instant delivery products.',
    vettingStatus: 'Verified',
    vettingNotes:
      'Digital-only products with great margins and instant delivery. Excellent fit for productivity influencers and students.',
    badges: ['Digital-Only', 'Impulse Buys'],
    affiliate: {
      programType: 'Direct',
      baseCommissionRate: 25,
      boostedCommissionRate: 35,
      cookieWindowDays: 60,
      notes:
        'Performs best in “study with me,” Notion/organization, and bullet journaling adjacent niches.',
      applicationUrl: 'https://www.etsy.com/affiliates'
    },
    social: {
      instagram: 'https://www.instagram.com/plannerpress',
      pinterest: 'https://www.pinterest.com/search/pins/?q=plannerpress',
      website: 'https://www.etsy.com/shop/PlannerPress'
    },
    topProducts: [
      {
        id: 'pp-ipad-planner',
        name: '2026 Digital Planner for iPad',
        description:
          'Hyperlinked digital planner built for GoodNotes and Notability, with yearly, monthly, and weekly layouts.',
        price: 29,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/c0a12398-904f-4953-8be7-3aca0ac43975.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/759481242/digital-planner-ipad?utm_source=affiliate_hub&amp;utm_medium=creator',
        isBestSeller: true
      },
      {
        id: 'pp-business-bundle',
        name: 'Small Business Planner Bundle',
        description:
          'A full toolkit of printable and digital planning templates for solo founders and Etsy sellers.',
        price: 35,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/1deed60d-a2c4-4aef-be09-bd84bf0d5d93.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/784503207/business-planner-bundle?utm_source=affiliate_hub&amp;utm_medium=creator'
      }
    ]
  },
  {
    id: 'happykawaiisupplies',
    shopName: 'HappyKawaiiSupplies',
    ownerName: 'Happy Kawaii',
    shopUrl: 'https://www.etsy.com/shop/HappyKawaiiSupplies',
    avatarUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/6f935f09-7ce1-4e8e-a53c-835fa6b3f5cc.jpg',
    headerImageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/53af8370-61e3-47b4-925d-66ca0cf58fee.jpg',
    primaryCategory: 'Craft Supplies',
    tags: ['Kawaii', 'Supplies', 'Resin', 'Charms'],
    location: 'Ontario, Canada',
    rating: 4.9,
    reviewCount: 220000,
    sales: 1100000,
    shortDescription:
      'Colorful, kawaii-style charms and cabochons for resin and jewelry artists.',
    bio: 'HappyKawaiiSupplies is a go-to for bright, playful craft supplies. Their catalog is beloved by slime creators, resin artists, and kawaii jewelry makers across TikTok and YouTube.',
    vettingStatus: 'Verified',
    vettingNotes:
      'Great for high-volume, low-ticket traffic. Perfect “supplies list” integration for tutorial content.',
    badges: ['Creator Favorite', 'Colorful Aesthetic'],
    affiliate: {
      programType: 'Etsy Affiliate',
      baseCommissionRate: 6,
      cookieWindowDays: 30,
      notes:
        'Works best as part of full materials lists and DIY kit recommendations for crafts and slime channels.',
      applicationUrl: 'https://www.etsy.com/affiliates'
    },
    social: {
      instagram: 'https://www.instagram.com/happykawaiisupplies'
    },
    topProducts: [
      {
        id: 'hks-sweets-charms',
        name: 'Kawaii Sweets Charms Mix',
        description: 'Assorted mini sweets and dessert charms for resin and keychain projects.',
        price: 14,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/52babdc4-e121-4602-a57c-569808d7dcb2.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/167924424/kawaii-sweets-charms?utm_source=affiliate_hub&amp;utm_medium=creator',
        isBestSeller: true
      },
      {
        id: 'hks-resin-kit',
        name: 'Beginner Resin Charm Kit',
        description:
          'Starter set of molds, charms, and glitter designed for first-time resin crafters.',
        price: 28,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/2c466ffb-6a4b-420b-8925-9c95d0f8e85e.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/279412587/resin-charm-kit?utm_source=affiliate_hub&amp;utm_medium=creator'
      }
    ]
  },
  {
    id: 'themotivatedtype',
    shopName: 'TheMotivatedType',
    ownerName: 'The Motivated Type',
    shopUrl: 'https://www.etsy.com/shop/TheMotivatedType',
    avatarUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/1d887ed4-b80e-4929-bec7-fd25e067890b.jpg',
    headerImageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/c366b5d7-e862-4de6-b97e-cf8c056c7951.jpg',
    primaryCategory: 'Home Decor',
    tags: ['Prints', 'Wall Art', 'Typography', 'Digital Download'],
    location: 'London, UK',
    rating: 4.9,
    reviewCount: 95000,
    sales: 620000,
    shortDescription: 'Bold, motivational wall art available as instant digital downloads.',
    bio: 'TheMotivatedType focuses on typography-heavy wall art that works for home offices, dorm rooms, and living spaces. Digital downloads convert extremely well with global audiences.',
    vettingStatus: 'Verified',
    vettingNotes:
      'High global appeal and easy upsell within bundles. Great for home decor bloggers and productivity/office makeovers.',
    badges: ['Instant Download', 'Global Appeal'],
    affiliate: {
      programType: 'Direct',
      baseCommissionRate: 20,
      boostedCommissionRate: 30,
      cookieWindowDays: 45,
      notes:
        'Bundle prints into room makeover concepts or “gallery wall bundles” to increase average order value.',
      applicationUrl: 'https://www.etsy.com/affiliates'
    },
    social: {
      instagram: 'https://www.instagram.com/themotivatedtype',
      pinterest: 'https://www.pinterest.com/search/pins/?q=themotivatedtype'
    },
    topProducts: [
      {
        id: 'tmt-office-bundle',
        name: 'Office Motivation Print Set',
        description: 'Set of bold motivational prints designed for modern workspaces.',
        price: 19,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/a76883c2-20e2-4389-b138-d53a60dc8f97.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/497740065/motivational-office-print-set?utm_source=affiliate_hub&amp;utm_medium=creator',
        isBestSeller: true
      },
      {
        id: 'tmt-kitchen-art',
        name: 'Kitchen Typography Prints',
        description: 'Minimalist kitchen art prints for cozy, modern homes.',
        price: 16,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/22efa08a-f67d-486d-8007-bbef3a46bdb9.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/514033770/kitchen-typography-prints?utm_source=affiliate_hub&amp;utm_medium=creator'
      }
    ]
  },
  {
    id: 'clumsykaleidoscope',
    shopName: 'ClumsyKaleidoscope',
    ownerName: 'Clumsy Kaleidoscope',
    shopUrl: 'https://www.etsy.com/shop/ClumsyKaleidoscope',
    avatarUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/0768d93c-4b1f-4e84-acbb-869d98dc29a9.jpg',
    headerImageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/2af66015-05f9-4e2e-a1d9-a5eabadb17b9.jpg',
    primaryCategory: 'Stationery',
    tags: ['Stickers', 'Stationery', 'Planner', 'Cute'],
    location: 'Portland, USA',
    rating: 4.9,
    reviewCount: 28000,
    sales: 180000,
    shortDescription:
      'Illustrated stickers and stationery with a bold, playful aesthetic for planners and laptops.',
    bio: 'ClumsyKaleidoscope is a sticker and stationery shop with a strong repeat-customer base. Their art style works beautifully in haul content and monthly planner spreads.',
    vettingStatus: 'Verified',
    vettingNotes:
      'Perfect for cozy desk, journaling, and back-to-school content. Low ticket but high repeat order potential.',
    badges: ['Repeat Buyers', 'Aesthetic Branding'],
    affiliate: {
      programType: 'Etsy Affiliate',
      baseCommissionRate: 6,
      cookieWindowDays: 30,
      notes:
        'Bundle into themed sticker hauls, journaling spreads, and “decorate with me” content for strong engagement.',
      applicationUrl: 'https://www.etsy.com/affiliates'
    },
    social: {
      instagram: 'https://www.instagram.com/clumsykaleidoscope'
    },
    topProducts: [
      {
        id: 'ck-sticker-pack',
        name: 'Monthly Sticker Subscription Pack',
        description: 'Curated monthly sticker pack with seasonal themes and exclusive designs.',
        price: 18,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/ff5fbfca-b509-4cbd-88eb-cdc0aafe6f10.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/810487003/monthly-sticker-pack?utm_source=affiliate_hub&amp;utm_medium=creator',
        isBestSeller: true
      },
      {
        id: 'ck-desk-bundle',
        name: 'Desk Makeover Stationery Bundle',
        description: 'Coordinated stationery bundle built to refresh any creative workspace.',
        price: 32,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/3d77105a-d268-47fa-8ee9-ed2bcbf03c3d.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/831640772/stationery-bundle?utm_source=affiliate_hub&amp;utm_medium=creator'
      }
    ]
  },
  {
    id: 'woodlandcraftsman',
    shopName: 'WoodlandCraftsman',
    ownerName: 'Woodland Craftsman',
    shopUrl: 'https://www.etsy.com/shop/WoodlandCraftsman',
    avatarUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/003b5670-d283-46e4-8bac-24ead1f689bd.jpg',
    headerImageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/12e5b5a4-1445-407b-97eb-99afc55cc03e.jpg',
    primaryCategory: 'Home Decor',
    tags: ['Woodworking', 'Home Decor', 'Rustic', 'Custom'],
    location: 'Vermont, USA',
    rating: 4.9,
    reviewCount: 18000,
    sales: 95000,
    shortDescription:
      'Handcrafted wooden home decor, including custom signs and functional design pieces.',
    bio: 'WoodlandCraftsman builds heirloom-quality wooden decor with a rustic, modern farmhouse aesthetic. The shop is ideal for home bloggers and “before &amp; after” renovation content.',
    vettingStatus: 'Verified',
    vettingNotes:
      'Higher production times but excellent reviews and unique pieces. Great for evergreen decor and gifting content.',
    badges: ['Handmade', 'Farmhouse Style'],
    affiliate: {
      programType: 'Hybrid',
      baseCommissionRate: 8,
      boostedCommissionRate: 11,
      cookieWindowDays: 30,
      notes:
        'Pair with seasonal content (fall decor, holiday gifting) and room makeover reveals to maximize AOV.',
      applicationUrl: 'https://www.etsy.com/affiliates'
    },
    social: {
      instagram: 'https://www.instagram.com/woodlandcraftsman'
    },
    topProducts: [
      {
        id: 'wc-family-sign',
        name: 'Custom Family Name Sign',
        description: 'Large wooden family name sign, perfect for entryways and living rooms.',
        price: 120,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/259a4d05-e5a1-4145-af84-8e05c7cf65d2.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/480225263/family-name-sign?utm_source=affiliate_hub&amp;utm_medium=creator',
        isBestSeller: true
      },
      {
        id: 'wc-floating-shelves',
        name: 'Rustic Floating Shelves',
        description: 'Set of handcrafted wooden floating shelves with hidden mounting hardware.',
        price: 95,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/b110bcef-bc12-460a-bf2a-48368212d684.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/512887402/floating-wood-shelves?utm_source=affiliate_hub&amp;utm_medium=creator'
      }
    ]
  },
  {
    id: 'minimalwallprints',
    shopName: 'MinimalWallPrints',
    ownerName: 'Minimal Wall Prints',
    shopUrl: 'https://www.etsy.com/shop/MinimalWallPrints',
    avatarUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/588f3d7e-9917-4fd3-85e2-1354c18add6d.jpg',
    headerImageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/05fc2a58-c1b6-4fcc-86a5-d491f7a0ceee.jpg',
    primaryCategory: 'Digital Products',
    tags: ['Prints', 'Scandinavian', 'Minimalist', 'Home Decor'],
    location: 'Stockholm, Sweden',
    rating: 4.9,
    reviewCount: 42000,
    sales: 230000,
    shortDescription:
      'Scandi-inspired digital wall art sets optimized for gallery walls and small spaces.',
    bio: 'MinimalWallPrints offers cohesive digital print sets that make it easy to transform a room on a budget. Excellent for renters, students, and small-space living content.',
    vettingStatus: 'Verified',
    vettingNotes:
      'Digital wall art is an evergreen, global category. Works incredibly well in room makeover shorts and Pinterest content.',
    badges: ['Scandi Style', 'Budget-Friendly'],
    affiliate: {
      programType: 'Direct',
      baseCommissionRate: 22,
      boostedCommissionRate: 30,
      cookieWindowDays: 45,
      notes:
        'Bundle prints into “room recipes” and provide full source lists for walls, furniture, and decor.',
      applicationUrl: 'https://www.etsy.com/affiliates'
    },
    social: {
      instagram: 'https://www.instagram.com/minimalwallprints'
    },
    topProducts: [
      {
        id: 'mwp-gallery-set',
        name: 'Neutral Gallery Wall Set',
        description:
          'Curated neutral-toned gallery wall set sized for standard frames, ideal for living rooms and bedrooms.',
        price: 21,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/9eed39f2-dbba-4b1a-90b1-d0ad42908860.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/724444776/neutral-gallery-wall-set?utm_source=affiliate_hub&amp;utm_medium=creator',
        isBestSeller: true
      },
      {
        id: 'mwp-kids-room',
        name: 'Kids Room Print Bundle',
        description: 'Soft, playful prints designed specifically for nurseries and kids’ rooms.',
        price: 18,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/a5295b85-0f12-4936-aa40-af22435cc934.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/748224013/kids-room-print-bundle?utm_source=affiliate_hub&amp;utm_medium=creator'
      }
    ]
  },
  {
    id: 'cozymapco',
    shopName: 'Cozymapco',
    ownerName: 'Cozy Map Co',
    shopUrl: 'https://www.etsy.com/shop/Cozymapco',
    avatarUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/eae7fad9-fdea-4ccd-a2ed-f70172a5b4c6.jpg',
    headerImageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/f4652685-0563-49aa-bdaa-5f73d03a94b6.jpg',
    primaryCategory: 'Home Decor',
    tags: ['Maps', 'Prints', 'Personalized', 'Travel'],
    location: 'Berlin, Germany',
    rating: 4.8,
    reviewCount: 22000,
    sales: 140000,
    shortDescription:
      'Custom city map prints and coordinates posters for travel lovers and gift-givers.',
    bio: 'Cozymapco designs modern map posters that celebrate travel memories and special locations. They perform especially well for anniversary, engagement, and graduation content.',
    vettingStatus: 'Verified',
    vettingNotes:
      'Highly giftable, story-driven products that work beautifully in narrative content and user-generated storytelling.',
    badges: ['Story-Driven', 'Gift Favorite'],
    affiliate: {
      programType: 'Hybrid',
      baseCommissionRate: 9,
      boostedCommissionRate: 12,
      cookieWindowDays: 30,
      notes:
        'Position as a “memory anchor” gift. Strong upsell opportunities with frames and gallery walls.',
      applicationUrl: 'https://www.etsy.com/affiliates'
    },
    social: {
      instagram: 'https://www.instagram.com/cozymapco'
    },
    topProducts: [
      {
        id: 'cmc-city-map',
        name: 'Custom City Map Poster',
        description:
          'Modern, customizable city map print available in multiple sizes and color palettes.',
        price: 45,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/57c1bb25-e630-41b0-86a4-8757469e2fd2.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/679825670/custom-city-map-poster?utm_source=affiliate_hub&amp;utm_medium=creator',
        isBestSeller: true
      },
      {
        id: 'cmc-coordinates',
        name: 'Coordinates Print',
        description:
          'Minimalist coordinates print to mark meaningful locations like proposals or first homes.',
        price: 32,
        currency: 'USD',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0KAHY9O4N/web-coder/6959daae6ef7c0cd1b0aa9d9/resource/1db81372-5c27-4d24-a5c5-4bc9f7c6804b.jpg',
        affiliateUrl:
          'https://www.etsy.com/listing/706892412/coordinates-print?utm_source=affiliate_hub&amp;utm_medium=creator'
      }
    ]
  }
]

/**
 * Returns a sorted copy of creators ordered by total sales (descending).
 */
export function getCreatorsBySales(): Creator[] {
  return [...creators].sort((a, b) => b.sales - a.sales)
}

/**
 * Returns a subset of top creators by sales.
 *
 * @param limit Maximum number of creators to return.
 */
export function getTopCreators(limit: number): Creator[] {
  return getCreatorsBySales().slice(0, limit)
}
