// Kater International - Industrial & Specialty Chemicals Sourcing

// ============================================
// PRODUCT DIVISIONS (aligned with product catalog)
// ============================================

export interface Division {
    id: number;
    name: string;
    slug: string;
    tagline: string;
    description: string;
    image: string;
}

export const divisions: Division[] = [
    {
        id: 1,
        name: "Agrochemicals",
        slug: "agrochemicals",
        tagline: "High-Yield Crop Protection & Nutrition",
        description: "Fertilizers, soil conditioners, and crop protection micronutrients sourced from approved global manufacturing partners.",
        image: "/images/products/tile-adhesives.png", // reusing layout classes
    },
    {
        id: 2,
        name: "Water Treatment Chemicals",
        slug: "water-treatment-chemicals",
        tagline: "Purification & Scale Inhibition",
        description: "Coagulants, disinfectants, biocides, and RO membrane antiscalants for municipal and industrial water treatment.",
        image: "/images/products/grouts.png",
    },
    {
        id: 3,
        name: "Acid & Solvents",
        slug: "acid-solvents",
        tagline: "Industrial Grade Acids & Solvents",
        description: "High-purity acids and organic solvents for pharmaceutical extraction, synthesis, and industrial processing.",
        image: "/images/products/construction-chemicals.png",
    },
    {
        id: 4,
        name: "Other Chemicals",
        slug: "other-chemicals",
        tagline: "Essential Raw Materials & Alkalis",
        description: "General purpose industrial chemicals, alkalis, salts, and carrier agents for soap, paper, and glass manufacturing.",
        image: "/images/products/tile-care-products.png",
    },
    {
        id: 5,
        name: "Surfactants",
        slug: "surfactants",
        tagline: "Wetting & Emulsifying Intermediates",
        description: "Anionic, cationic, and non-ionic surfactants for personal care, detergents, and industrial formulations.",
        image: "/images/products/block-jointing-mortar.png",
    },
    {
        id: 6,
        name: "Castor Oil & its derivatives",
        slug: "castor-oil-derivatives",
        tagline: "Natural Bio-lubricants & Derivatives",
        description: "Bio-based castor oil grades, hydrogenated castor wax, and functional acids for coatings, greases, and cosmetics.",
        image: "/images/products/tile-adhesives.png",
    }
];

// ============================================
// BUSINESS CONTINUITY (3 Cards)
// ============================================

export interface BusinessContinuity {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export const businessContinuity: BusinessContinuity[] = [
    {
        id: 1,
        title: "Reliable Supply",
        description: "Structured supply chains to ensure consistent material availability for manufacturers and B2B buyers.",
        icon: "supply",
    },
    {
        id: 2,
        title: "Consistent Quality",
        description: "Strict evaluation of batch purity, compliance parameters, and technical documentation before dispatch.",
        icon: "commercial",
    },
    {
        id: 3,
        title: "Trusted Partnerships",
        description: "Building long-term cooperation through transparency, commercial alignment, and responsive local/global support.",
        icon: "trade",
    },
];

// ============================================
// COMMERCIAL SCOPE (4 Cards)
// ============================================

export interface CommercialScope {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export const commercialScope: CommercialScope[] = [
    {
        id: 1,
        title: "Chemical Sourcing",
        description: "Sourcing industrial and specialty chemicals from a reliable network of approved manufacturers.",
        icon: "export",
    },
    {
        id: 2,
        title: "Domestic Supply",
        description: "Reliable distribution channels and supply solutions for industrial consumers across India.",
        icon: "custom-development",
    },
    {
        id: 3,
        title: "Global Exports",
        description: "Coordination of documentation, packaging, and logistics for on-time international deliveries.",
        icon: "markets",
    },
    {
        id: 4,
        title: "Contract Manufacturing",
        description: "Facilitating product formulation, packaging, and scale coordination under strict confidentiality.",
        icon: "compliance",
    },
];

// ============================================
// GLOBAL MARKETS (Regions)
// ============================================

export interface GlobalMarket {
    id: number;
    region: string;
    countries?: string[];
}

export const globalMarkets: GlobalMarket[] = [
    { id: 1, region: "Domestic Market (India)" },
    { id: 2, region: "Middle East" },
    { id: 3, region: "Southeast Asia" },
    { id: 4, region: "Europe & Americas" },
    { id: 5, region: "Global Sourcing Network" },
];

// ============================================
// HERO SECTION CONTENT
// ============================================

export const heroContent = {
    h1: ["Industrial", "&", "Specialty Chemicals"],
    h2: "Your Trusted Partner for Industrial & Specialty Chemicals",
    description:
        "Connecting businesses with quality-assured chemical products through a trusted network of approved manufacturing partners. Consistent quality, competitive pricing, and dependable supply.",
    primaryCTA: "Contact Us",
    secondaryCTA: "View Products",
    trustIndicators: [
        "Reliable Supply",
        "Consistent Quality",
        "Trusted Partnerships",
    ],
};

// ============================================
// BUSINESS ENQUIRIES SECTION
// ============================================

export const businessEnquiries = {
    heading: "For product enquiries, bulk sourcing, and contract manufacturing solutions.",
    email: "info@katerinternational.com",
    response: "Response within 24–48 working hours.",
    ctaText: "Contact Us",
};

// ============================================
// NAVIGATION LINKS
// ============================================

export const navLinks = [
    {
        name: "Home",
        path: "/",
        hasDropdown: false,
    },
    {
        name: "About Us",
        path: "/about-us",
        hasDropdown: false,
    },
    {
        name: "Products",
        path: "/products",
        hasDropdown: true,
        dropdownItems: [],
    },
    {
        name: "Services",
        path: "/services",
        hasDropdown: false,
    },
    {
        name: "Career",
        path: "/career",
        hasDropdown: false,
    },
    {
        name: "Contact Us",
        path: "/contact",
        hasDropdown: false,
    },
];

// ============================================
// FOOTER LINKS
// ============================================

export const footerQuickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Career", path: "/career" },
    { name: "Contact Us", path: "/contact" },
];

export const footerProductCategories = [
    { name: "Agrochemicals", path: "/products/agrochemicals" },
    { name: "Water Treatment Chemicals", path: "/products/water-treatment-chemicals" },
    { name: "Acid & Solvents", path: "/products/acid-solvents" },
    { name: "Other Chemicals", path: "/products/other-chemicals" },
    { name: "Surfactants", path: "/products/surfactants" },
    { name: "Castor Oil & Derivatives", path: "/products/castor-oil-derivatives" },
];

export const footerLegalLinks: Array<{ name: string; path: string }> = [];

export const footerContent = {
    brandName: "KATER INTERNATIONAL",
    tagline: "Industrial & Specialty Chemicals",
    motto: "Reliable Supply. Consistent Quality. Trusted Partnerships.",
    copyright: "© 2026 Kater International. All rights reserved.",
    description:
        "Kater International is a chemical sourcing and supply company committed to providing dependable solutions for industries worldwide. We bridge the gap between quality manufacturers and buyers.",
};

export const socialMedia = [
    { name: "WhatsApp", url: "#", icon: "whatsapp" },
    { name: "LinkedIn", url: "#", icon: "linkedin" },
];

// ============================================
// CONTACT INFORMATION
// ============================================

export const contactInfo = {
    email: "info@katerinternational.com",
    phone: "+91 00000 00000",
    address: "India",
    responseTime: "24-48 working hours",
};

// ============================================
// OFFICE LOCATIONS
// ============================================

export const officeLocations = [
    {
        id: 1,
        country: "India",
        address: "Gujarat, India",
    },
];
