// Product Categories and Items for Kater International
import chemImg from "../assets/image/1.jpg";

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

export const productsData: ProductCategory[] = [
    {
        "id": 1,
        "name": "Agrochemicals",
        "slug": "agrochemicals",
        "icon": "agro",
        "image": chemImg,
        "tagline": "High-Yield Crop Protection & Nutrition",
        "description": "Premium-quality fertilizers, micronutrients, and agricultural chemicals designed to enhance crop productivity, improve soil fertility, and support sustainable farming practices.",
        "products": [
            {
                "id": 101,
                "name": "Ammonium Sulphate",
                "slug": "ammonium-sulphate",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "Nitrogen and sulphur fertilizer widely used to improve soil fertility, promote healthy plant growth, and enhance crop yield in alkaline and sulphur-deficient soils.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg / 50 kg HDPE bags or Jumbo bags",
                    "application": "Fertilizer blending, direct soil application, and crop nutrition."
                }
            },
            {
                "id": 102,
                "name": "Aluminium Chloride",
                "slug": "aluminium-chloride",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "Highly reactive inorganic compound commonly used as a catalyst in pesticide, herbicide, and specialty agrochemical manufacturing processes.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg HDPE bags or drums",
                    "application": "Agrochemical intermediates, catalyst, and specialty chemical production."
                }
            },
            {
                "id": 103,
                "name": "Boric Acid",
                "slug": "boric-acid",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "Water-soluble boron source used as a micronutrient fertilizer to correct boron deficiencies and improve flowering, fruit setting, and crop quality.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg HDPE bags",
                    "application": "Foliar spray, fertilizer blending, and micronutrient formulations."
                }
            },
            {
                "id": 104,
                "name": "Borax Pentahydrate",
                "slug": "borax-pentahydrate",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "Concentrated boron compound used in fertilizers to support root development, flowering, and overall crop productivity.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg HDPE bags",
                    "application": "Micronutrient fertilizers and agricultural formulations."
                }
            },
            {
                "id": 105,
                "name": "Borax Decahydrate",
                "slug": "borax-decahydrate",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "Naturally occurring borate compound used to supply boron for improved seed formation, fruit development, and healthy crop growth.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg HDPE bags",
                    "application": "Agricultural micronutrient blends and soil conditioning."
                }
            },
            {
                "id": 106,
                "name": "Calcium Chloride",
                "slug": "calcium-chloride",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "Highly soluble calcium source used to prevent calcium deficiency, strengthen plant cell walls, and improve fruit firmness and shelf life.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg HDPE bags",
                    "application": "Foliar sprays, fertigation, and crop nutrition."
                }
            },
            {
                "id": 107,
                "name": "Copper Sulphate",
                "slug": "copper-sulphate",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "Essential copper micronutrient widely used in fungicides, algaecides, and fertilizers for effective disease control and plant nutrition.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg HDPE bags",
                    "application": "Fungicides, micronutrient fertilizers, and crop protection."
                }
            },
            {
                "id": 108,
                "name": "Chelated EDTA",
                "slug": "chelated-edta",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "Chelating agent that enhances the availability and absorption of essential micronutrients such as iron, zinc, manganese, and copper in plants.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg bags",
                    "application": "Micronutrient fertilizers and hydroponic nutrient solutions."
                }
            },
            {
                "id": 109,
                "name": "Ferrous Sulphate",
                "slug": "ferrous-sulphate",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "Iron-rich fertilizer used to correct iron chlorosis, improve chlorophyll production, and promote vigorous plant growth in deficient soils.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg HDPE bags",
                    "application": "Iron supplementation and fertilizer manufacturing."
                }
            },
            {
                "id": 110,
                "name": "Magnesium Sulphate",
                "slug": "magnesium-sulphate",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "Water-soluble magnesium fertilizer providing essential magnesium and sulphur for chlorophyll formation, photosynthesis, and crop development.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg bags",
                    "application": "Foliar nutrition, fertigation, and fertilizer blends."
                }
            },
            {
                "id": 111,
                "name": "Magnesium Chloride",
                "slug": "magnesium-chloride",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "Fast-acting magnesium source used in liquid fertilizers to improve photosynthesis and maintain healthy crop growth.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg bags",
                    "application": "Liquid fertilizers and agricultural formulations."
                }
            },
            {
                "id": 112,
                "name": "Magnesium Oxide",
                "slug": "magnesium-oxide",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "High-purity magnesium compound used to replenish magnesium in soils, improve nutrient balance, and support healthy crop production.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg bags",
                    "application": "Soil conditioning and magnesium supplementation."
                }
            },
            {
                "id": 113,
                "name": "Manganese Sulphate",
                "slug": "manganese-sulphate",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "Essential manganese fertilizer used to correct nutrient deficiencies, support enzyme activity, and improve photosynthesis in crops.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg bags",
                    "application": "Micronutrient fertilizers and foliar nutrition."
                }
            },
            {
                "id": 114,
                "name": "Potassium Chloride",
                "slug": "potassium-chloride",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "High-potash fertilizer supplying essential potassium for improved root development, water regulation, and enhanced crop quality.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg / 50 kg bags",
                    "application": "Potash fertilizers and fertilizer blending."
                }
            },
            {
                "id": 115,
                "name": "Sulphur",
                "slug": "sulphur",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "Elemental sulphur used for soil acidification, crop nutrition, and formulation of fungicides for effective disease management.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg / 50 kg bags",
                    "application": "Soil conditioning, fungicides, and fertilizer production."
                }
            },
            {
                "id": 116,
                "name": "Urea",
                "slug": "urea",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "High-analysis nitrogen fertilizer containing 46% nitrogen, widely used to maximize vegetative growth and increase agricultural productivity.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "45 kg / 50 kg bags",
                    "application": "Direct fertilizer application and NPK fertilizer manufacturing."
                }
            },
            {
                "id": 117,
                "name": "Zinc Sulphate Monohydrate",
                "slug": "zinc-sulphate-monohydrate",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "Highly concentrated zinc fertilizer used to correct zinc deficiencies, improve enzyme activity, and promote healthy plant development.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg bags",
                    "application": "Micronutrient fertilizers, foliar sprays, and fertigation."
                }
            },
            {
                "id": 118,
                "name": "Zinc Sulphate Heptahydrate",
                "slug": "zinc-sulphate-heptahydrate",
                "category": "agrochemicals",
                "image": chemImg,
                "description": "Water-soluble zinc source ideal for foliar application and fertilizer formulations to improve crop yield and nutrient efficiency.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg bags",
                    "application": "Foliar sprays, fertilizer blending, and micronutrient supplementation."
                }
            }
        ]
    },
    {
        "id": 2,
        "name": "Water Treatment Chemicals",
        "slug": "water-treatment-chemicals",
        "icon": "water",
        "image": chemImg,
        "tagline": "Advanced Water Purification & Process Solutions",
        "description": "Comprehensive range of water treatment chemicals designed for purification, disinfection, coagulation, scale prevention, and wastewater treatment across municipal and industrial applications.",
        "products": [
            {
                "id": 201,
                "name": "Aluminium Chlorohydrate",
                "slug": "aluminium-chlorohydrate",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "High-performance coagulant used in water and wastewater treatment to improve suspended solids removal, reduce turbidity, and enhance clarification efficiency.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg HDPE drums, 250 kg drums, IBC tanks or bulk tankers",
                    "application": "Potable water treatment, wastewater treatment, and industrial effluent clarification."
                }
            },
            {
                "id": 202,
                "name": "Activated Carbon",
                "slug": "activated-carbon",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "Highly porous adsorbent used to remove organic contaminants, chlorine, odors, colors, and dissolved impurities from water and wastewater systems.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg PP bags or Jumbo bags",
                    "application": "Water filtration, wastewater treatment, air purification, and industrial adsorption."
                }
            },
            {
                "id": 203,
                "name": "Antiscalants",
                "slug": "antiscalants",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "Specialty formulations that prevent scale formation and mineral deposits in reverse osmosis systems, boilers, cooling towers, and industrial pipelines.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg cans, 250 kg drums or IBC tanks",
                    "application": "RO plants, boilers, cooling towers, heat exchangers, and industrial water systems."
                }
            },
            {
                "id": 204,
                "name": "Aluminium Sulphate",
                "slug": "aluminium-sulphate",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "Widely used inorganic coagulant that effectively removes suspended solids, phosphorus, and turbidity from drinking water and wastewater.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg / 50 kg bags",
                    "application": "Water clarification, paper manufacturing, and wastewater treatment."
                }
            },
            {
                "id": 205,
                "name": "Biocides",
                "slug": "biocides",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "Broad-spectrum antimicrobial chemicals used to control bacteria, algae, fungi, and biofilm formation in industrial water treatment systems.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg cans, 250 kg drums or IBC tanks",
                    "application": "Cooling towers, RO plants, industrial water systems, and wastewater treatment."
                }
            },
            {
                "id": 206,
                "name": "Calcium Hypochlorite",
                "slug": "calcium-hypochlorite",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "Powerful oxidizing disinfectant widely used for drinking water purification, swimming pool sanitation, and wastewater disinfection.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg HDPE drums",
                    "application": "Water disinfection, sanitation, swimming pools, and industrial water treatment."
                }
            },
            {
                "id": 207,
                "name": "Choline Chloride",
                "slug": "choline-chloride",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "Versatile quaternary ammonium compound primarily used in specialty formulations and selected industrial process chemicals, including certain water treatment applications.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg drums or IBC tanks",
                    "application": "Industrial formulations, specialty chemicals, and process applications."
                }
            },
            {
                "id": 208,
                "name": "Ferric Chloride",
                "slug": "ferric-chloride",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "Highly effective coagulant used for phosphorus removal, suspended solids reduction, and sludge conditioning in municipal and industrial wastewater treatment.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "35 kg drums, IBC tanks or bulk tankers",
                    "application": "Wastewater treatment, drinking water clarification, and effluent treatment plants."
                }
            },
            {
                "id": 209,
                "name": "Hydrogen Peroxide",
                "slug": "hydrogen-peroxide",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "Environmentally friendly oxidizing agent used for disinfection, odor control, organic contaminant removal, and advanced oxidation processes in water treatment.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "35 kg drums, IBC tanks or bulk tankers",
                    "application": "Water disinfection, wastewater treatment, oxidation, and industrial cleaning."
                }
            },
            {
                "id": 210,
                "name": "Polyaluminium Chloride",
                "slug": "polyaluminium-chloride",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "High-efficiency coagulant offering rapid floc formation and superior turbidity removal in drinking water, wastewater, and industrial treatment plants.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg bags, drums, IBC tanks or bulk tankers",
                    "application": "Water clarification, wastewater treatment, and industrial process water."
                }
            },
            {
                "id": 211,
                "name": "Polyacrylamide",
                "slug": "polyacrylamide",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "High molecular weight polymer used as a flocculant to improve solid-liquid separation, sludge dewatering, and filtration efficiency.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg bags",
                    "application": "Wastewater treatment, sludge dewatering, mining, and industrial water treatment."
                }
            },
            {
                "id": 212,
                "name": "Sulphamic Acid",
                "slug": "sulphamic-acid",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "Strong acidic descaling agent used for removing mineral deposits, rust, and limescale from industrial water systems and process equipment.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg bags",
                    "application": "Descaling, industrial cleaning, and water system maintenance."
                }
            },
            {
                "id": 213,
                "name": "Sodium Sulphite",
                "slug": "sodium-sulphite",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "Effective oxygen scavenger used to remove dissolved oxygen from boiler feed water, minimizing corrosion in steam generation systems.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg bags",
                    "application": "Boiler water treatment and oxygen scavenging."
                }
            },
            {
                "id": 214,
                "name": "Sodium Bisulphite",
                "slug": "sodium-bisulphite",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "Reducing agent commonly used for dechlorination, oxygen scavenging, and neutralization of excess oxidants in water treatment processes.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg bags or drums",
                    "application": "RO systems, wastewater treatment, and dechlorination."
                }
            },
            {
                "id": 215,
                "name": "Sodium Metabisulphite",
                "slug": "sodium-metabisulphite",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "Powerful reducing agent used for dechlorination, preservation, and oxygen removal in reverse osmosis and industrial water treatment systems.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg bags",
                    "application": "RO plants, wastewater treatment, and dechlorination."
                }
            },
            {
                "id": 216,
                "name": "Sodium Hypochlorite",
                "slug": "sodium-hypochlorite",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "Liquid chlorine-based disinfectant used for microbial control, water purification, sanitation, and industrial wastewater treatment.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "35 kg drums, IBC tanks or bulk tankers",
                    "application": "Water disinfection, bleaching, sanitation, and wastewater treatment."
                }
            },
            {
                "id": 217,
                "name": "TCCA",
                "slug": "tcca",
                "category": "water-treatment-chemicals",
                "image": chemImg,
                "description": "Trichloroisocyanuric Acid is a stabilized chlorine disinfectant widely used for swimming pools, industrial water treatment, and sanitation applications.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg HDPE drums",
                    "application": "Swimming pools, water disinfection, sanitation, and industrial water treatment."
                }
            }
        ]
    },
    {
        "id": 3,
        "name": "Acid & Solvents",
        "slug": "acid-solvents",
        "icon": "acid",
        "image": chemImg,
        "tagline": "Industrial Acids & High-Purity Solvents",
        "description": "Comprehensive range of industrial acids and organic solvents for chemical processing, manufacturing, cleaning, pharmaceuticals, coatings, agrochemicals, and water treatment applications.",
        "products": [
            {
                "id": 301,
                "name": "Hydrochloric Acid",
                "slug": "hydrochloric-acid",
                "category": "acid-solvents",
                "image": chemImg,
                "description": "Strong inorganic acid widely used for pH adjustment, metal pickling, industrial cleaning, chemical synthesis, and water treatment across diverse manufacturing industries.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "35 kg HDPE drums, IBC tanks, or bulk tankers",
                    "application": "Water treatment, metal processing, chemical manufacturing, and industrial cleaning."
                }
            },
            {
                "id": 302,
                "name": "Sulphuric Acid",
                "slug": "sulphuric-acid",
                "category": "acid-solvents",
                "image": chemImg,
                "description": "Highly concentrated mineral acid extensively used in fertilizer production, chemical processing, petroleum refining, battery manufacturing, and industrial applications.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "35 kg HDPE drums, IBC tanks, or bulk tankers",
                    "application": "Fertilizer manufacturing, chemical processing, battery production, and industrial synthesis."
                }
            },
            {
                "id": 303,
                "name": "Nitric Acid",
                "slug": "nitric-acid",
                "category": "acid-solvents",
                "image": chemImg,
                "description": "Powerful oxidizing acid used in fertilizer manufacturing, metal finishing, specialty chemical production, and laboratory reagent formulations.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "35 kg HDPE drums, IBC tanks, or bulk tankers",
                    "application": "Chemical manufacturing, fertilizer production, metal treatment, and laboratory use."
                }
            },
            {
                "id": 304,
                "name": "Phosphoric Acid",
                "slug": "phosphoric-acid",
                "category": "acid-solvents",
                "image": chemImg,
                "description": "Versatile phosphorous-based acid widely used in fertilizer production, food processing, water treatment, rust removal, and industrial chemical manufacturing.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "35 kg HDPE drums, IBC tanks, or bulk tankers",
                    "application": "Fertilizers, food processing, water treatment, and metal surface treatment."
                }
            },
            {
                "id": 305,
                "name": "Ethyl Acetate",
                "slug": "ethyl-acetate",
                "category": "acid-solvents",
                "image": chemImg,
                "description": "Fast-evaporating organic solvent commonly used in paints, coatings, adhesives, inks, pharmaceuticals, and chemical extraction processes.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "180 kg MS drums or IBC tanks",
                    "application": "Paints, coatings, adhesives, printing inks, and pharmaceutical manufacturing."
                }
            },
            {
                "id": 306,
                "name": "Benzyl Alcohol",
                "slug": "benzyl-alcohol",
                "category": "acid-solvents",
                "image": chemImg,
                "description": "Aromatic alcohol used as a solvent, preservative, viscosity reducer, and intermediate in pharmaceutical, cosmetic, coating, and specialty chemical formulations.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "200 kg HDPE/MS drums",
                    "application": "Pharmaceuticals, cosmetics, paints, coatings, and specialty chemicals."
                }
            },
            {
                "id": 307,
                "name": "Benzyl Chloride",
                "slug": "benzyl-chloride",
                "category": "acid-solvents",
                "image": chemImg,
                "description": "Important chemical intermediate used in the production of pharmaceuticals, dyes, agrochemicals, quaternary ammonium compounds, and specialty organic chemicals.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "250 kg HDPE drums or bulk containers",
                    "application": "Chemical intermediates, pharmaceuticals, agrochemicals, dyes, and specialty synthesis."
                }
            },
            {
                "id": 308,
                "name": "Benzaldehyde",
                "slug": "benzaldehyde",
                "category": "acid-solvents",
                "image": chemImg,
                "description": "Aromatic aldehyde widely used as a chemical intermediate in the manufacture of fragrances, flavoring agents, pharmaceuticals, dyes, and specialty chemicals.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "200 kg HDPE/MS drums",
                    "application": "Fragrances, flavors, pharmaceuticals, dyes, agrochemicals, and chemical synthesis."
                }
            },
            {
                "id": 309,
                "name": "Isopropyl Alcohol",
                "slug": "isopropyl-alcohol",
                "category": "acid-solvents",
                "image": chemImg,
                "description": "High-purity solvent and disinfectant extensively used for surface cleaning, pharmaceutical manufacturing, electronics, cosmetics, and industrial processing.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "160 kg / 200 L drums, IBC tanks or bulk tankers",
                    "application": "Cleaning, pharmaceuticals, cosmetics, electronics, inks, coatings, and sanitizers."
                }
            },
            {
                "id": 310,
                "name": "Methylene Dichloride",
                "slug": "methylene-dichloride",
                "category": "acid-solvents",
                "image": chemImg,
                "description": "Volatile chlorinated solvent, also known as dichloromethane (DCM), used in paint stripping, extraction processes, pharmaceutical manufacturing, and industrial cleaning.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "270 kg MS drums or ISO tanks",
                    "application": "Paint removers, pharmaceuticals, chemical processing, metal cleaning, and extraction."
                }
            },
            {
                "id": 311,
                "name": "Methyl Isobutyl Ketone",
                "slug": "methyl-isobutyl-ketone",
                "category": "acid-solvents",
                "image": chemImg,
                "description": "Medium-evaporating ketone solvent widely used in paints, coatings, adhesives, printing inks, rubber processing, and chemical manufacturing industries.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "165 kg / 200 L MS drums or IBC tanks",
                    "application": "Paints, coatings, adhesives, rubber chemicals, printing inks, and industrial solvents."
                }
            }
        ]
    },
    {
        "id": 4,
        "name": "Other Chemicals",
        "slug": "other-chemicals",
        "icon": "chemical",
        "image": chemImg,
        "tagline": "Essential Industrial & Specialty Chemicals",
        "description": "Comprehensive portfolio of industrial and specialty chemicals serving manufacturing, water treatment, textiles, construction, pharmaceuticals, and chemical processing industries.",
        "products": [
            {
                "id": 401,
                "name": "Caustic Soda",
                "slug": "caustic-soda",
                "category": "other-chemicals",
                "image": chemImg,
                "description": "Highly alkaline sodium hydroxide widely used in chemical manufacturing, pulp and paper processing, textiles, water treatment, and industrial cleaning applications.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg HDPE bags, flakes or pearls, IBC tanks for liquid",
                    "application": "Chemical manufacturing, soap production, textiles, water treatment, and industrial cleaning."
                }
            },
            {
                "id": 402,
                "name": "Chlorinated Paraffin",
                "slug": "chlorinated-paraffin",
                "category": "other-chemicals",
                "image": chemImg,
                "description": "Versatile chlorinated plasticizer and flame retardant used in PVC compounds, rubber products, paints, sealants, and metalworking fluids.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "250 kg HDPE drums or IBC tanks",
                    "application": "PVC manufacturing, rubber processing, paints, coatings, and lubricants."
                }
            },
            {
                "id": 403,
                "name": "Epichlorohydrin",
                "slug": "epichlorohydrin",
                "category": "other-chemicals",
                "image": chemImg,
                "description": "Reactive chemical intermediate primarily used in the production of epoxy resins, synthetic glycerin, specialty polymers, and water treatment resins.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "240 kg MS drums or ISO tanks",
                    "application": "Epoxy resin production, coatings, adhesives, composites, and specialty chemicals."
                }
            },
            {
                "id": 404,
                "name": "Petroleum Jelly",
                "slug": "petroleum-jelly",
                "category": "other-chemicals",
                "image": chemImg,
                "description": "Highly refined semi-solid hydrocarbon widely used as a lubricant, protective coating, moisture barrier, and base ingredient in pharmaceutical and cosmetic products.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg, 50 kg, 165 kg drums",
                    "application": "Cosmetics, pharmaceuticals, personal care products, industrial lubrication, and rust protection."
                }
            },
            {
                "id": 405,
                "name": "Potassium Permanganate",
                "slug": "potassium-permanganate",
                "category": "other-chemicals",
                "image": chemImg,
                "description": "Powerful oxidizing agent used for water purification, wastewater treatment, chemical synthesis, metal surface treatment, and laboratory applications.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg HDPE drums",
                    "application": "Water treatment, chemical oxidation, wastewater treatment, and laboratory use."
                }
            },
            {
                "id": 406,
                "name": "Sodium Nitrate",
                "slug": "sodium-nitrate",
                "category": "other-chemicals",
                "image": chemImg,
                "description": "High-purity inorganic salt used in fertilizer production, glass manufacturing, heat transfer salts, explosives, and specialty chemical synthesis.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg / 50 kg HDPE bags",
                    "application": "Fertilizers, glass manufacturing, heat treatment, and industrial chemicals."
                }
            },
            {
                "id": 407,
                "name": "Sodium Nitrite",
                "slug": "sodium-nitrite",
                "category": "other-chemicals",
                "image": chemImg,
                "description": "Versatile inorganic compound used as a corrosion inhibitor, chemical intermediate, heat treatment salt, and specialty industrial reagent.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg HDPE bags",
                    "application": "Corrosion inhibition, metal treatment, chemical manufacturing, and industrial processing."
                }
            },
            {
                "id": 408,
                "name": "Sodium Sulphate",
                "slug": "sodium-sulphate",
                "category": "other-chemicals",
                "image": chemImg,
                "description": "Industrial-grade sodium sulphate extensively used in detergent manufacturing, glass production, textile dyeing, kraft pulping, and chemical processing.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg / 50 kg PP or HDPE bags",
                    "application": "Detergents, glass manufacturing, textiles, pulp and paper, and chemical industries."
                }
            },
            {
                "id": 409,
                "name": "Soda Ash",
                "slug": "soda-ash",
                "category": "other-chemicals",
                "image": chemImg,
                "description": "High-purity sodium carbonate widely used in glass manufacturing, detergents, chemical processing, water softening, and pH adjustment applications.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg / 50 kg PP or HDPE bags",
                    "application": "Glass manufacturing, detergents, water treatment, textiles, and chemical production."
                }
            }
        ]
    },
    {
        "id": 5,
        "name": "Surfactants",
        "slug": "surfactants",
        "icon": "surfactant",
        "image": chemImg,
        "tagline": "High-Performance Surface Active Agents",
        "description": "Comprehensive range of anionic, amphoteric, nonionic, and cationic surfactants for personal care, home care, industrial cleaning, textile processing, agrochemicals, and specialty chemical formulations.",
        "products": [
            {
                "id": 501,
                "name": "Ammonium Lauryl Ether Sulphate",
                "slug": "ammonium-lauryl-ether-sulphate",
                "category": "surfactants",
                "image": chemImg,
                "description": "Mild anionic surfactant offering excellent foaming, cleansing, and emulsifying properties for shampoos, liquid soaps, and personal care formulations.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "50 kg / 200 kg HDPE drums or IBC tanks",
                    "application": "Shampoos, liquid soaps, hand washes, body washes, and detergents."
                }
            },
            {
                "id": 502,
                "name": "Ammonium Lauryl Sulphate",
                "slug": "ammonium-lauryl-sulphate",
                "category": "surfactants",
                "image": chemImg,
                "description": "High-foaming anionic surfactant widely used as a primary cleansing agent in personal care and household cleaning products.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "50 kg / 200 kg HDPE drums",
                    "application": "Personal care products, liquid detergents, and industrial cleaners."
                }
            },
            {
                "id": 503,
                "name": "Alpha Olefin Sulphonate",
                "slug": "alpha-olefin-sulphonate",
                "category": "surfactants",
                "image": chemImg,
                "description": "Biodegradable anionic surfactant with excellent foaming, detergency, and hard-water stability for home care and personal care formulations.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "35 kg / 200 kg drums",
                    "application": "Liquid detergents, shampoos, dishwashing liquids, and industrial cleaners."
                }
            },
            {
                "id": 504,
                "name": "Benzalkonium Chloride",
                "slug": "benzalkonium-chloride",
                "category": "surfactants",
                "image": chemImg,
                "description": "Cationic surfactant and broad-spectrum antimicrobial agent widely used in disinfectants, sanitizers, water treatment, and pharmaceutical formulations.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "50 kg / 200 kg HDPE drums",
                    "application": "Disinfectants, sanitizers, water treatment, pharmaceuticals, and personal care."
                }
            },
            {
                "id": 505,
                "name": "Cocamidopropyl Betaine",
                "slug": "cocamidopropyl-betaine",
                "category": "surfactants",
                "image": chemImg,
                "description": "Amphoteric surfactant that enhances foam, improves viscosity, and reduces irritation in shampoos, facial cleansers, and liquid soaps.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "50 kg / 200 kg HDPE drums",
                    "application": "Personal care, shampoos, facial cleansers, baby care products, and liquid soaps."
                }
            },
            {
                "id": 506,
                "name": "Cocomonoethanolamide",
                "slug": "cocomonoethanolamide",
                "category": "surfactants",
                "image": chemImg,
                "description": "Nonionic foam booster and viscosity modifier used in shampoos, liquid detergents, textile auxiliaries, and industrial cleaning products.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "50 kg / 200 kg drums",
                    "application": "Liquid detergents, shampoos, textile chemicals, and cleaning formulations."
                }
            },
            {
                "id": 507,
                "name": "Cocodiethanolamide",
                "slug": "cocodiethanolamide",
                "category": "surfactants",
                "image": chemImg,
                "description": "Nonionic surfactant providing foam stabilization, emulsification, and thickening properties in detergents, shampoos, and industrial cleaners.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "50 kg / 200 kg drums",
                    "application": "Detergents, shampoos, liquid soaps, and industrial cleaning products."
                }
            },
            {
                "id": 508,
                "name": "Linear Alkyl Benzene Sulphonic Acid",
                "slug": "linear-alkyl-benzene-sulphonic-acid",
                "category": "surfactants",
                "image": chemImg,
                "description": "Highly active anionic surfactant extensively used in the manufacture of household detergents, industrial cleaners, and degreasing formulations.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "220 kg HDPE drums or bulk tankers",
                    "application": "Laundry detergents, dishwashing liquids, industrial cleaners, and degreasers."
                }
            },
            {
                "id": 509,
                "name": "Sodium Lauryl Sulphate",
                "slug": "sodium-lauryl-sulphate",
                "category": "surfactants",
                "image": chemImg,
                "description": "High-performance anionic surfactant offering superior cleansing and foaming characteristics for personal care and household cleaning products.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg bags or 200 kg drums",
                    "application": "Toothpaste, shampoos, soaps, detergents, and cleaning formulations."
                }
            },
            {
                "id": 510,
                "name": "Sodium Lauryl Ether Sulphate",
                "slug": "sodium-lauryl-ether-sulphate",
                "category": "surfactants",
                "image": chemImg,
                "description": "One of the most widely used anionic surfactants, delivering excellent cleansing, foaming, and emulsification in personal care and home care products.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "50 kg / 200 kg HDPE drums",
                    "application": "Shampoos, body washes, hand washes, liquid detergents, and cosmetics."
                }
            },
            {
                "id": 511,
                "name": "All Ethoxylates",
                "slug": "all-ethoxylates",
                "category": "surfactants",
                "image": chemImg,
                "description": "Wide range of nonionic ethoxylated surfactants providing outstanding wetting, emulsifying, dispersing, and detergency properties for industrial and specialty formulations.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "50 kg / 200 kg drums or IBC tanks",
                    "application": "Textiles, agrochemicals, paints, coatings, detergents, emulsifiers, and industrial cleaning."
                }
            }
        ]
    },
    {
        "id": 6,
        "name": "Castor Oil & Derivatives",
        "slug": "castor-oil-derivatives",
        "icon": "castor",
        "image": chemImg,
        "tagline": "Premium Castor Oil & Specialty Oleochemicals",
        "description": "High-quality castor oil and its value-added derivatives for pharmaceuticals, cosmetics, lubricants, coatings, plastics, textiles, rubber, and industrial manufacturing applications.",
        "products": [
            {
                "id": 601,
                "name": "Castor Oil FSG/PP",
                "slug": "castor-oil-fsg-pp",
                "category": "castor-oil-derivatives",
                "image": chemImg,
                "description": "Premium-grade castor oil available in First Special Grade (FSG) and Pale Pressed (PP) quality, widely used in pharmaceuticals, cosmetics, lubricants, and specialty chemical manufacturing.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "210 kg MS drums, HDPE drums, IBC tanks, or flexi tanks",
                    "application": "Pharmaceuticals, cosmetics, lubricants, personal care products, and industrial formulations."
                }
            },
            {
                "id": 602,
                "name": "Hydrogenated Castor Oil",
                "slug": "hydrogenated-castor-oil",
                "category": "castor-oil-derivatives",
                "image": chemImg,
                "description": "High-melting castor wax produced by hydrogenation, offering excellent hardness, lubrication, and water resistance for coatings, cosmetics, plastics, and lubricants.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg HDPE bags",
                    "application": "Cosmetics, coatings, lubricants, PVC processing, inks, and candles."
                }
            },
            {
                "id": 603,
                "name": "12-Hydroxy Stearic Acid",
                "slug": "12-hydroxy-stearic-acid",
                "category": "castor-oil-derivatives",
                "image": chemImg,
                "description": "Specialty fatty acid derived from castor oil, extensively used in lithium grease production, coatings, cosmetics, rubber processing, and lubricant formulations.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "25 kg HDPE bags",
                    "application": "Greases, lubricants, coatings, rubber, cosmetics, and specialty chemicals."
                }
            },
            {
                "id": 604,
                "name": "Dehydrated Castor Oil",
                "slug": "dehydrated-castor-oil",
                "category": "castor-oil-derivatives",
                "image": chemImg,
                "description": "Modified drying oil widely used in alkyd resins, protective coatings, printing inks, varnishes, adhesives, and high-performance paint formulations.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "200 kg MS drums, IBC tanks, or flexi tanks",
                    "application": "Paints, coatings, varnishes, inks, alkyd resins, and adhesives."
                }
            },
            {
                "id": 605,
                "name": "Ricinoleic Acid",
                "slug": "ricinoleic-acid",
                "category": "castor-oil-derivatives",
                "image": chemImg,
                "description": "Naturally occurring hydroxy fatty acid obtained from castor oil, used as a key intermediate in cosmetics, lubricants, plasticizers, surfactants, and specialty chemicals.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "200 kg HDPE/MS drums or IBC tanks",
                    "application": "Cosmetics, lubricants, surfactants, plasticizers, pharmaceuticals, and chemical intermediates."
                }
            },
            {
                "id": 606,
                "name": "Turkey Red Oil",
                "slug": "turkey-red-oil",
                "category": "castor-oil-derivatives",
                "image": chemImg,
                "description": "Sulphonated castor oil functioning as an effective wetting agent, emulsifier, and dispersant for textile processing, leather treatment, metalworking, and personal care products.",
                "specifications": {
                    "origin": "DEFAULT_ORIGIN",
                    "moq": "DEFAULT_MOQ",
                    "shelfLife": "DEFAULT_SHELF_LIFE",
                    "packing": "50 kg / 200 kg HDPE drums or IBC tanks",
                    "application": "Textiles, leather processing, metalworking fluids, cosmetics, emulsifiers, and industrial formulations."
                }
            }
        ]
    }
]

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
