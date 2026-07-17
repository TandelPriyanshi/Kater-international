// Product Categories and Items for Kater International
import chemImg1 from "../assets/image/1.jpg";
import chemImg2 from "../assets/image/1.jpg";
import chemImg3 from "../assets/image/1.jpg";
import chemImg4 from "../assets/image/1.jpg";
import chemImg5 from "../assets/image/1.jpg";
import chemImg6 from "../assets/image/1.jpg";

export interface ProductSpecifications {
    size?: string;
    origin?: string;
    color?: string;
    aroma?: string;
    packing?: string;
    qualities?: string;
    standard?: string;
    moq?: string;
    ingredients?: string;
    packingType?: string;
    fatLevel?: string;
    shelfLife?: string;
    mixingRatio?: string;
    coverage?: string;
    application?: string;
    advantages?: string;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    category: string;
    image?: string;
    description?: string;
    specifications?: ProductSpecifications;
}

export interface ProductCategory {
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: string;
    tagline: string;
    description: string;
    products: Product[];
    specifications?: ProductSpecifications;
}

const DEFAULT_SHELF_LIFE = "24 months from the date of manufacturing in standard packaging";
const DEFAULT_ORIGIN = "India (Global sourcing options available)";
const DEFAULT_MOQ = "1 Metric Ton (FCL/LCL support available)";

export const productsData: ProductCategory[] = [
    {
        id: 1,
        name: "Agrochemicals",
        slug: "agrochemicals",
        icon: "agro",
        image: chemImg1,
        tagline: "High-Yield Crop Protection & Nutrition",
        description: "Quality-assured agrochemical inputs, fertilizers, and micronutrients sourced from approved partners for optimal soil health and agricultural yields.",
        products: [
            { id: 101, name: "Ammonium Sulphate", slug: "ammonium-sulphate", category: "agrochemicals", image: chemImg1, description: "Crystalline or granular nitrogenous fertilizer that provides sulphur and nitrogen for crops." },
            { id: 102, name: "Aluminium Chloride", slug: "aluminium-chloride", category: "agrochemicals", image: chemImg1, description: "Highly reactive chemical compound used in agricultural catalyst formulations and pesticide synthesis." },
            { id: 103, name: "Boric Acid", slug: "boric-acid", category: "agrochemicals", image: chemImg1, description: "Water-soluble boron compound used as a micronutrient fertilizer and insecticide." },
            { id: 104, name: "Borax Pentahydrate", slug: "borax-pentahydrate", category: "agrochemicals", image: chemImg1, description: "Concentrated boron source widely utilized in agricultural sprays and soil additives." },
            { id: 105, name: "Borax Decahydrate", slug: "borax-decahydrate", category: "agrochemicals", image: chemImg1, description: "Standard boron compound for correcting boron deficiencies in soils and improving crop yields." },
            { id: 106, name: "Calcium Chloride", slug: "calcium-chloride", category: "agrochemicals", image: chemImg1, description: "Soluble calcium source used to prevent cork spot, bitter pit, and other physiological plant disorders." },
            { id: 107, name: "Copper Sulphate", slug: "copper-sulphate", category: "agrochemicals", image: chemImg1, description: "Versatile fungicide, algaecide, and nutritional additive used in agriculture and crop protection." },
            { id: 108, name: "Chelated EDTA", slug: "chelated-edta", category: "agrochemicals", image: chemImg1, description: "High-efficiency metal chelator used in micronutrient fertilizers to enhance metal absorption by plants." },
            { id: 109, name: "Ferrous Sulphate", slug: "ferrous-sulphate", category: "agrochemicals", image: chemImg1, description: "Iron supplement used to cure chlorosis (yellowing of leaves) and condition alkaline soils." },
            { id: 110, name: "Magnesium Sulphate", slug: "magnesium-sulphate", category: "agrochemicals", image: chemImg1, description: "Highly soluble source of magnesium and sulphur, crucial for chlorophyll synthesis and seed production." },
            { id: 111, name: "Magnesium Chloride", slug: "magnesium-chloride", category: "agrochemicals", image: chemImg1, description: "Source of magnesium used in liquid fertilizers, soil stabilizer, and dust control formulations." },
            { id: 112, name: "Magnesium Oxide", slug: "magnesium-oxide", category: "agrochemicals", image: chemImg1, description: "High-magnesium mineral compound used in soil conditioning and crop nutrition." },
            { id: 113, name: "Manganese Sulphate", slug: "manganese-sulphate", category: "agrochemicals", image: chemImg1, description: "Soluble manganese nutrient used to treat manganese deficiencies in citrus crops and soils." },
            { id: 114, name: "Potassium Chloride", slug: "potassium-chloride", category: "agrochemicals", image: chemImg1, description: "High-grade potash fertilizer supplying essential potassium for plant water regulation and enzyme activation." },
            { id: 115, name: "Sulphur", slug: "sulphur", category: "agrochemicals", image: chemImg1, description: "Elemental sulphur used for soil pH reduction, fungicide preparation, and nutritional supply." },
            { id: 116, name: "Urea", slug: "urea", category: "agrochemicals", image: chemImg1, description: "Highly concentrated nitrogenous fertilizer essential for vegetative growth and global crop systems." },
            { id: 117, name: "Zinc Sulphate Monohydrate", slug: "zinc-sulphate-monohydrate", category: "agrochemicals", image: chemImg1, description: "Powdered zinc micronutrient formulation for enhancing hormone development and enzyme activity in crops." },
            { id: 118, name: "Zinc Sulphate Heptahydrate", slug: "zinc-sulphate-heptahydrate", category: "agrochemicals", image: chemImg1, description: "Crystalline zinc micronutrient offering easy water solubility for foliar spray and drip irrigation systems." }
        ].map(p => ({
            ...p,
            specifications: {
                origin: DEFAULT_ORIGIN,
                moq: DEFAULT_MOQ,
                shelfLife: DEFAULT_SHELF_LIFE,
                packing: "25 kg / 50 kg HDPE bags with inner liner, or Jumbo bags",
                application: "Agricultural crop nutrition, fertilizer blending, soil conditioning, and foliar sprays."
            }
        }))
    },
    {
        id: 2,
        name: "Water Treatment Chemicals",
        slug: "water-treatment-chemicals",
        icon: "water",
        image: chemImg2,
        tagline: "High-Performance Purification & Scale Control",
        description: "Comprehensive range of water treatment chemicals including coagulants, disinfectants, biocides, and antiscalants for municipal and industrial water processing.",
        products: [
            { id: 201, name: "Aluminium Chlorohydrate", slug: "aluminium-chlorohydrate", category: "water-treatment-chemicals", image: chemImg2, description: "Highly concentrated inorganic coagulant that excels in drinking water and industrial wastewater purification." },
            { id: 202, name: "Activated Carbon", slug: "activated-carbon", category: "water-treatment-chemicals", image: chemImg2, description: "High-surface-area adsorbent for removing organic impurities, chlorine, odors, and colors from liquids." },
            { id: 203, name: "Antiscalants", slug: "antiscalants", category: "water-treatment-chemicals", image: chemImg2, description: "Specialized polymers designed to prevent scale formation and membrane fouling in RO desalination systems." },
            { id: 204, name: "Aluminium Sulphate", slug: "aluminium-sulphate", category: "water-treatment-chemicals", image: chemImg2, description: "Standard industrial coagulant widely used for water clarification and phosphorus removal." },
            { id: 205, name: "Biocides", slug: "biocides", category: "water-treatment-chemicals", image: chemImg2, description: "Sanitizing chemicals used to control microbiological growth, bio-films, and algae in cooling towers and reverse osmosis units." },
            { id: 206, name: "Calcium Hypochlorite", slug: "calcium-hypochlorite", category: "water-treatment-chemicals", image: chemImg2, description: "Granular sanitizing chlorine compound used for disinfecting swimming pools and industrial water lines." },
            { id: 207, name: "Choline Chloride", slug: "choline-chloride", category: "water-treatment-chemicals", image: chemImg2, description: "Clay stabilizer and hydration additive used in drilling water systems and chemical processing." },
            { id: 208, name: "Ferric Chloride", slug: "ferric-chloride", category: "water-treatment-chemicals", image: chemImg2, description: "Heavy-metal coagulant and flocculant effective in broad pH ranges for sewage and sludge conditioning." },
            { id: 209, name: "Hydrogen Peroxide", slug: "hydrogen-peroxide", category: "water-treatment-chemicals", image: chemImg2, description: "Eco-friendly strong oxidizing agent that breaks down into water and oxygen, used for biological oxidation and bleaching." },
            { id: 210, name: "Polyaluminium Chloride", slug: "polyaluminium-chloride", category: "water-treatment-chemicals", image: chemImg2, description: "High-performance coagulant that generates rapid flocculation in municipal water purification plants." },
            { id: 211, name: "Polyacrylamide", slug: "polyacrylamide", category: "water-treatment-chemicals", image: chemImg2, description: "Flocculating polymer (cationic/anionic) used in sludge dewatering and industrial wastewater clarification." },
            { id: 212, name: "Sulphamic Acid", slug: "sulphamic-acid", category: "water-treatment-chemicals", image: chemImg2, description: "Effective descaling agent used to clean heat exchangers, cooling towers, and boilers." },
            { id: 213, name: "Sodium Sulphite", slug: "sodium-sulphite", category: "water-treatment-chemicals", image: chemImg2, description: "Oxygen scavenger used in industrial boiler water treatment to prevent corrosion of equipment." },
            { id: 214, name: "Sodium Bisulphite", slug: "sodium-bisulphite", category: "water-treatment-chemicals", image: chemImg2, description: "Reducing agent used to dechlorinate water before RO membrane filtration and wastewater release." },
            { id: 215, name: "Sodium Metabisulphite", slug: "sodium-metabisulphite", category: "water-treatment-chemicals", image: chemImg2, description: "Preservative and dechlorinating chemical used in RO membrane preservation and industrial effluent neutralization." },
            { id: 216, name: "Sodium Hypochlorite", slug: "sodium-hypochlorite", category: "water-treatment-chemicals", image: chemImg2, description: "Broad-spectrum liquid disinfectant widely used for water chlorination and system cleaning." },
            { id: 217, name: "TCCA", slug: "tcca", category: "water-treatment-chemicals", image: chemImg2, description: "Trichloroisocyanuric Acid, a concentrated source of chlorine used as an algaecide and disinfectant in pools and sewage systems." }
        ].map(p => ({
            ...p,
            specifications: {
                origin: DEFAULT_ORIGIN,
                moq: DEFAULT_MOQ,
                shelfLife: DEFAULT_SHELF_LIFE,
                packing: "Liquid drums, IBC totes, or 25 kg woven sacks",
                application: "Municipal water treatment, boiler feed systems, cooling towers, RO plants, and effluent treatment systems."
            }
        }))
    },
    {
        id: 3,
        name: "Acid & Solvents",
        slug: "acid-solvents",
        icon: "acid",
        image: chemImg3,
        tagline: "Industrial Grade Acids & Extraction Solvents",
        description: "High-purity industrial acids, extraction solvents, and organic intermediates for chemical synthesis, metal processing, and manufacturing operations.",
        products: [
            { id: 301, name: "Hydrochloric Acid", slug: "hydrochloric-acid", category: "acid-solvents", image: chemImg3, description: "Strong mineral acid used in steel pickling, chemical synthesis, and pH control applications." },
            { id: 302, name: "Sulphuric Acid", slug: "sulphuric-acid", category: "acid-solvents", image: chemImg3, description: "Industrial chemical key to fertilizer production, battery manufacturing, and chemical synthesis." },
            { id: 303, name: "Nitric Acid", slug: "nitric-acid", category: "acid-solvents", image: chemImg3, description: "Corrosive mineral acid used in fertilizer synthesis, explosives manufacturing, and metal etching." },
            { id: 304, name: "Phosphoric Acid", slug: "phosphoric-acid", category: "acid-solvents", image: chemImg3, description: "Food and industrial-grade acid used in rust removal, food additives, and phosphate fertilizer production." },
            { id: 305, name: "Ethyl Acetate", slug: "ethyl-acetate", category: "acid-solvents", image: chemImg3, description: "Fast-evaporating solvent used in coatings, adhesives, printing inks, and organic extraction." },
            { id: 306, name: "Benzyl Alcohol", slug: "benzyl-alcohol", category: "acid-solvents", image: chemImg3, description: "Solvent with low volatility used in paints, inks, epoxy coatings, and cosmetic formulations." },
            { id: 307, name: "Benzyl Chloride", slug: "benzyl-chloride", category: "acid-solvents", image: chemImg3, description: "Highly reactive chemical intermediate used for manufacturing plasticizers, pharmaceuticals, and perfumes." },
            { id: 308, name: "Benzaldehyde", slug: "benzaldehyde", category: "acid-solvents", image: chemImg3, description: "Industrial intermediate used as a precursor for agricultural chemicals, dyestuffs, and flavorings." },
            { id: 309, name: "Isopropyl Alcohol", slug: "isopropyl-alcohol", category: "acid-solvents", image: chemImg3, description: "IPA solvent widely used in sanitizers, cosmetics, electronics cleaning, and chemical extraction." },
            { id: 310, name: "Methylene Dichloride", slug: "methylene-dichloride", category: "acid-solvents", image: chemImg3, description: "MDC solvent, powerful paint stripper, metal degreasing agent, and pharmaceutical extraction medium." },
            { id: 311, name: "Methyl Isobutyl Ketone", slug: "methyl-isobutyl-ketone", category: "acid-solvents", image: chemImg3, description: "MIBK, high-boiling solvent used in surface coatings, paints, and extraction processes." }
        ].map(p => ({
            ...p,
            specifications: {
                origin: DEFAULT_ORIGIN,
                moq: DEFAULT_MOQ,
                shelfLife: DEFAULT_SHELF_LIFE,
                packing: "ISO tanks, tankers, 200L metal/plastic drums",
                application: "Organic synthesis, coating solvent, metal cleaning, pH regulation, and chemical processing."
            }
        }))
    },
    {
        id: 4,
        name: "Other Chemicals",
        slug: "other-chemicals",
        icon: "other",
        image: chemImg4,
        tagline: "Essential Raw Materials & Alkalis",
        description: "General purpose industrial chemicals, alkalis, salts, and carrier agents for soap, glass, petroleum, and chemical manufacturing industries.",
        products: [
            { id: 401, name: "Caustic Soda", slug: "caustic-soda", category: "other-chemicals", image: chemImg4, description: "Sodium Hydroxide (flakes/lye) used in soap making, paper manufacturing, textile treatment, and water purification." },
            { id: 402, name: "Chlorinated Paraffin", slug: "chlorinated-paraffin", category: "other-chemicals", image: chemImg4, description: "Plasticizer and flame retardant additive used in PVC compounding, paints, sealants, and metalworking lubricants." },
            { id: 403, name: "Epichlorohydrin", slug: "epichlorohydrin", category: "other-chemicals", image: chemImg4, description: "Reactive organochlorine intermediate used for producing epoxy resins, synthetic glycerin, and elastomers." },
            { id: 404, name: "Petroleum Jelly", slug: "petroleum-jelly", category: "other-chemicals", image: chemImg4, description: "High-purity mineral wax compound used in lubricants, ointments, and cosmetic formulation." },
            { id: 405, name: "Potassium Permanganate", slug: "potassium-permanganate", category: "other-chemicals", image: chemImg4, description: "Strong oxidizing agent used for water filtration, disinfection, and chemical synthesis." },
            { id: 406, name: "Sodium Nitrate", slug: "sodium-nitrate", category: "other-chemicals", image: chemImg4, description: "Inorganic salt used in fertilizers, food preservatives, glass manufacturing, and solid rocket propellants." },
            { id: 407, name: "Sodium Nitrite", slug: "sodium-nitrite", category: "other-chemicals", image: chemImg4, description: "Rust inhibitor and chemical intermediate widely used in dyeing, metallurgy, and food preservation." },
            { id: 408, name: "Sodium Sulphate", slug: "sodium-sulphate", category: "other-chemicals", image: chemImg4, description: "Glauber's salt used as a filler in detergent powders and in Kraft pulp processing." },
            { id: 409, name: "Soda Ash", slug: "soda-ash", category: "other-chemicals", image: chemImg4, description: "Sodium Carbonate, critical raw material for glass manufacturing, soap powders, and water softening." }
        ].map(p => ({
            ...p,
            specifications: {
                origin: DEFAULT_ORIGIN,
                moq: DEFAULT_MOQ,
                shelfLife: DEFAULT_SHELF_LIFE,
                packing: "25 kg bags, 50 kg bags, or Bulk bags",
                application: "Glass manufacturing, soaps & detergents, industrial chemical synthesis, and oil drilling."
            }
        }))
    },
    {
        id: 5,
        name: "Surfactants",
        slug: "surfactants",
        icon: "surfactant",
        image: chemImg5,
        tagline: "Foaming, Wetting & Emulsifying Intermediates",
        description: "Anionic, cationic, and non-ionic surfactants for personal care, detergents, home care formulations, and industrial emulsifiers.",
        products: [
            { id: 501, name: "Ammonium Lauryl Ether Sulphate", slug: "ammonium-lauryl-ether-sulphate", category: "surfactants", image: chemImg5, description: "ALES, high-foaming anionic surfactant used in low-pH shampoos and body washes." },
            { id: 502, name: "Ammonium Lauryl Sulphate", slug: "ammonium-lauryl-sulphate", category: "surfactants", image: chemImg5, description: "ALS, strong anionic surfactant used in personal care formulations for its excellent foaming." },
            { id: 503, name: "Alpha Olefin Sulphonate", slug: "alpha-olefin-sulphonate", category: "surfactants", image: chemImg5, description: "AOS, versatile surfactant providing high foam, excellent biodegradability, and resistance to hard water." },
            { id: 504, name: "Benzalkonium Chloride", slug: "benzalkonium-chloride", category: "surfactants", image: chemImg5, description: "BKC, cationic surfactant and biocide used in sanitizers, disinfectants, and preservation agents." },
            { id: 505, name: "Cocoamidopropyl Betaine", slug: "cocoamidopropyl-betaine", category: "surfactants", image: chemImg5, description: "CAPB, mild amphoteric surfactant used in personal care products to enhance foaming and reduce skin irritation." },
            { id: 506, name: "Cocomonoethanolamide", slug: "cocomonoethanolamide", category: "surfactants", image: chemImg5, description: "CMEA, foam booster and viscosity builder for shampoos, hand washes, and soaps." },
            { id: 507, name: "Cocodiethanolamide", slug: "cocodiethanolamide", category: "surfactants", image: chemImg5, description: "CDEA, non-ionic surfactant used for thickening, emulsification, and stabilizing foams in detergent systems." },
            { id: 508, name: "Linear Alkyl Benzene Sulphonic Acid", slug: "linear-alkyl-benzene-sulphonic-acid", category: "surfactants", image: chemImg5, description: "LABSA, key anionic surfactant raw material used to produce laundry powders and household detergents." },
            { id: 509, name: "Sodium Lauryl Sulphate", slug: "sodium-lauryl-sulphate", category: "surfactants", image: chemImg5, description: "SLS, powerful cleaning agent used in industrial degreasers, toothpastes, and heavy detergent mixes." },
            { id: 510, name: "Sodium Lauryl Ether Sulphate", slug: "sodium-lauryl-ether-sulphate", category: "surfactants", image: chemImg5, description: "SLES, standard high-foaming cleaning chemical widely used in cosmetic formulations and soaps." },
            { id: 511, name: "All Ethoxylates*", slug: "all-ethoxylates", category: "surfactants", image: chemImg5, description: "Range of non-ionic surfactants including fatty alcohol ethoxylates, nonylphenol ethoxylates, and castor oil ethoxylates." }
        ].map(p => ({
            ...p,
            specifications: {
                origin: DEFAULT_ORIGIN,
                moq: DEFAULT_MOQ,
                shelfLife: DEFAULT_SHELF_LIFE,
                packing: "50 kg plastic carboys, 200 kg HDPE drums, or IBC tanks",
                application: "Cosmetics, shampoos, liquid soaps, household detergents, textile scouring, and agricultural emulsifiers."
            }
        }))
    },
    {
        id: 6,
        name: "Castor Oil & its derivatives",
        slug: "castor-oil-derivatives",
        icon: "oil",
        image: chemImg6,
        tagline: "Natural Bio-lubricants & Performance Derivatives",
        description: "Natural castor oil and highly functional derivatives like hydrogenated castor oil, stearic acids, and sulfated esters for industrial lubricants, paints, and cosmetics.",
        products: [
            { id: 601, name: "Castor Oil FSG/PP", slug: "castor-oil-fsg-pp", category: "castor-oil-derivatives", image: chemImg6, description: "First Special Grade and Pale Pressed castor oil, high-purity natural oils for industrial and cosmetic applications." },
            { id: 602, name: "Hydrogenated Castor Oil", slug: "hydrogenated-castor-oil", category: "castor-oil-derivatives", image: chemImg6, description: "HCO (Castor Wax), insoluble wax used in cosmetic sticks, coatings, grease, and plastics lubrication." },
            { id: 603, name: "12-Hydroxy Stearic Acid", slug: "12-hydroxy-stearic-acid", category: "castor-oil-derivatives", image: chemImg6, description: "12-HSA, fatty acid derivative used in manufacturing premium multi-purpose lithium greases and plastics." },
            { id: 604, name: "Dehydrated Castor Oil", slug: "dehydrated-castor-oil", category: "castor-oil-derivatives", image: chemImg6, description: "DCO, fast-drying oil utilized in formulating high-performance paints, varnishes, and printing inks." },
            { id: 605, name: "Ricinoleic Acid", slug: "ricinoleic-acid", category: "castor-oil-derivatives", image: chemImg6, description: "Monounsaturated fatty acid derived from castor oil, used in printing inks, soaps, and textile finishing." },
            { id: 606, name: "Turkey Red Oil", slug: "turkey-red-oil", category: "castor-oil-derivatives", image: chemImg6, description: "Sulfated castor oil, an emulsifier and wetting agent used in textile dyeing, agriculture, and paper making." }
        ].map(p => ({
            ...p,
            specifications: {
                origin: DEFAULT_ORIGIN,
                moq: DEFAULT_MOQ,
                shelfLife: DEFAULT_SHELF_LIFE,
                packing: "200 kg steel/plastic drums, or flexitanks",
                application: "Lubricating greases, paints and coatings, cosmetic creams, polyurethane formulations, and chemical intermediates."
            }
        }))
    }
];

export const getAllProducts = (): Product[] => {
    return productsData.flatMap((category) => category.products);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
    const category = productsData.find((cat) => cat.slug === categorySlug);
    return category ? category.products : [];
};

export const getProductBySlug = (productSlug: string): Product | undefined => {
    return getAllProducts().find((product) => product.slug === productSlug);
};

export const getCategoryBySlug = (
    categorySlug: string
): ProductCategory | undefined => {
    return productsData.find((cat) => cat.slug === categorySlug);
};

export const getTotalProductsCount = (): number => {
    return getAllProducts().length;
};

export const getCategoriesCount = (): number => {
    return productsData.length;
};
