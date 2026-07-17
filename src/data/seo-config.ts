/**
 * SEO config for per-page meta tags. Used by SeoHead component.
 * SITE_URL is injected at runtime from window.location.origin for canonical/og:url.
 */
export const SITE_NAME = 'Kater International';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
}

export const seoConfig: Record<string, SeoConfig> = {
  '/': {
    title: 'Industrial & Specialty Chemicals Supplier',
    description:
      'Kater International is a reliable supplier and global sourcing partner for industrial and specialty chemicals. We connect businesses with quality-assured products through approved manufacturers.',
    keywords:
      'Kater International, chemical supplier, industrial chemicals, specialty chemicals, chemical sourcing, global export, chemical distributor',
  },
  '/about-us': {
    title: 'About Kater International',
    description:
      'Learn about Kater International — a chemical sourcing and supply company committed to providing dependable solutions, quality products, and transparent logistics globally.',
    keywords:
      'Kater International, about, chemical sourcing, quality chemicals, B2B chemical partner, chemical logistics',
  },
  '/products': {
    title: 'Industrial & Specialty Chemical Catalog',
    description:
      'Explore Kater International chemical product catalog including Agrochemicals, Water Treatment Chemicals, Acids & Solvents, Surfactants, and Castor Oil Derivatives.',
    keywords:
      'chemical catalog, agrochemicals, water treatment chemicals, industrial solvents, surfactants, castor oil derivatives, Kater International products',
  },
  '/products/agrochemicals': {
    title: 'Agrochemicals & Crop Nutrients | Kater International',
    description:
      'Explore our range of quality-assured agrochemicals, fertilizer inputs, and crop nutrients including Ammonium Sulphate, Boric Acid, and Zinc Sulphates.',
    keywords:
      'agrochemicals, fertilizer inputs, zinc sulphate, copper sulphate, ammonium sulphate, crop protection, Kater International',
  },
  '/products/water-treatment-chemicals': {
    title: 'Water Treatment Chemicals | Coagulants & Disinfectants',
    description:
      'We supply water treatment agents, RO membrane antiscalants, flocculants, and biocides including Polyaluminium Chloride, Activated Carbon, and TCCA.',
    keywords:
      'water treatment chemicals, coagulants, antiscalants, activated carbon, polyaluminium chloride, TCCA, Kater International',
  },
  '/products/acid-solvents': {
    title: 'Industrial Acids & Extraction Solvents | Kater International',
    description:
      'High-purity industrial acids and solvents including Hydrochloric Acid, Sulphuric Acid, Phosphoric Acid, Ethyl Acetate, and Isopropyl Alcohol.',
    keywords:
      'industrial solvents, mineral acids, sulphuric acid, hydrochloric acid, isopropyl alcohol, ethyl acetate, Kater International',
  },
  '/products/other-chemicals': {
    title: 'Essential Raw Materials & Alkalis | Kater International',
    description:
      'Essential industrial raw materials, including Caustic Soda, Soda Ash, Chlorinated Paraffin, Sodium Sulphate, and Petroleum Jelly.',
    keywords:
      'caustic soda, soda ash, chlorinated paraffin, industrial alkalis, chemical raw materials, Kater International',
  },
  '/products/surfactants': {
    title: 'Anionic & Non-ionic Surfactants | Kater International',
    description:
      'Quality foaming, wetting, and emulsifying surfactants including SLES, SLS, ALES, LABSA, CAPB, Cocodiethanolamide, and Ethoxylates.',
    keywords:
      'surfactants, SLES, SLS, LABSA, foam boosters, emulsifiers, personal care surfactants, Kater International',
  },
  '/products/castor-oil-derivatives': {
    title: 'Castor Oil & Bio-Based Derivatives | Kater International',
    description:
      'First Special Grade Castor Oil, Hydrogenated Castor Oil (HCO), 12-HSA, Ricinoleic Acid, and Turkey Red Oil for lubricants, paints, and cosmetics.',
    keywords:
      'castor oil derivatives, castor wax, 12-HSA, dehydrated castor oil, Turkey Red Oil, bio-lubricants, Kater International',
  },
  '/services': {
    title: 'Chemical Sourcing & Supply Chain Services | Kater International',
    description:
      'Discover our services including global exports/imports, domestic supply, contract manufacturing coordination, product procurement, and end-to-end logistics.',
    keywords:
      'chemical sourcing, contract manufacturing, export imports, chemical logistics, supply chain management, B2B chemical services',
  },
  '/career': {
    title: 'Careers at Kater International | Join Our Team',
    description:
      'Explore career opportunities, company culture, and job listings at Kater International. Build a future in global chemical sourcing and supply.',
    keywords:
      'chemical careers, jobs, chemical sourcing executive, international trade jobs, B2B sales jobs, Kater International careers',
  },
  '/contact': {
    title: 'Contact Kater International',
    description:
      'Get in touch with Kater International for bulk sourcing enquiries, product specifications, and custom contract manufacturing solutions.',
    keywords:
      'contact chemical supplier, chemical enquiry, bulk chemical order, Kater International email',
  },
};

/** Default SEO for unmatched routes (e.g. product detail fallback) */
export const defaultSeo: SeoConfig = {
  title: 'Products',
  description:
    'Kater International is a reliable partner and global sourcing companion for high-quality industrial and specialty chemicals.',
  keywords:
    'Kater International, chemical sourcing, industrial chemicals, specialty chemicals',
};
