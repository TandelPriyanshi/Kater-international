import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
    FaTruck,
    FaShieldAlt,
    FaSearch,
    FaUser
} from "react-icons/fa";

// Images
import bg from "../../assets/img/about-us-top-header.jpeg";

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";
import SeoHead from "../../components/SeoHead";

import Aos from "aos";

const servicesData = [
    {
        title: "Chemical Sourcing",
        description: "Reliable sourcing of industrial and specialty chemicals through our network of qualified manufacturing partners."
    },
    {
        title: "Domestic Supply",
        description: "Consistent supply solutions for manufacturers, distributors, and industrial consumers across India."
    },
    {
        title: "Contract Manufacturing Solutions",
        description: "We assist customers in developing and manufacturing products through our trusted network of qualified manufacturing partners. From sourcing the right facility to coordinating production, quality requirements, packaging, and delivery, we provide complete project support while maintaining strict confidentiality.",
    },
    {
        title: "Product Procurement",
        description: "Helping customers identify the right products, grades, specifications, and cost-effective sourcing solutions based on their application."
    },
    {
        title: "Supply Chain & Logistics",
        description: "End-to-end coordination of procurement, warehousing, transportation, export-import documentation, customs support, and shipment tracking."
    },
    {
        title: "Customer Support",
        description: "Responsive communication, transparent updates, and dedicated assistance from inquiry to final delivery."
    }
] as const;

const whatWeProvideData = [
    {
        title: "Quality-Assured Chemicals",
        description: "Sourcing chemicals from ISO-certified and audited manufacturers, supported by rigorous specification checks."
    },
    {
        title: "Custom Packing Options",
        description: "Flexible bagging, drum containers, and customized labeling to fit your destination markets."
    },
    {
        title: "Complete Documentation",
        description: "Proactive provision of TDS, COA, SDS, and phytosanitary certificates for export clearance."
    },
    {
        title: "Integrated Supply Chain",
        description: "End-to-end management of warehousing, transport booking, and customs clearance logistics."
    }
] as const;

const HexagonIcon = ({ color, icon }: { color: string; icon: React.ReactNode }) => {
    return (
        <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mx-auto mb-6">
            <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full drop-shadow-md"
                style={{ fill: color }}
            >
                <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" />
            </svg>
            <div className="relative z-10 text-white flex items-center justify-center">
                {icon}
            </div>
        </div>
    );
};

const howWeWorkData = [
    {
        title: "Requirement & Specification",
        description: "We align closely on product grades, specifications, volume needs, and commercial delivery terms.",
        icon: <FaUser className="text-xl md:text-2xl" />,
        color: "#0071B9"
    },
    {
        title: "Sourcing & Auditing",
        description: "We evaluate certified manufacturers from our approved supplier database to find matching chemistry solutions.",
        icon: <FaSearch className="text-xl md:text-2xl" />,
        color: "#E5A93B"
    },
    {
        title: "Verification & Checks",
        description: "Samples are validated, and batch safety parameters are checked before export/dispatch approval.",
        icon: <FaShieldAlt className="text-xl md:text-2xl" />,
        color: "#10B981"
    },
    {
        title: "Dispatch & Logistics",
        description: "We coordinate warehousing, customs clearance, and global tracking until the cargo arrives at your destination.",
        icon: <FaTruck className="text-xl md:text-2xl" />,
        color: "#EF4444"
    }
] as const;

export default function ServicesPage() {
    useEffect(() => {
        Aos.init();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SeoHead path="/services" />
            <NavbarPavanity />

            <main className="pavanity-services-page">
                {/* Hero Header */}
                <div className="pavanity-page-hero pavanity-about-hero bg-overlay" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="pavanity-page-hero__content">
                        <h1 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Our Services</h1>
                        <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li className="text-primary">Services</li>
                        </ul>
                    </div>
                </div>

                {/* Services Section */}
                <div className="pavanity-page-section s-py-100">
                    <div className="container-fluid">
                        <div className="max-w-[1720px] mx-auto">
                            <div className="pavanity-section-intro mb-10 md:mb-14 text-center max-w-3xl mx-auto" data-aos="fade-up">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Sourcing & Supply Solutions</h2>
                                <p className="mt-4 text-base md:text-lg">
                                    We deliver value at every step of the chemical supply chain, from strategic sourcing to global exports, quality assurance, and dedicated support.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" data-aos="fade-up" data-aos-delay="100">
                                {servicesData.map((service, index) => (
                                    <div
                                        key={service.title}
                                        className="pavanity-feature-card pavanity-home-feature-card pavanity-home-feature-card--continuity h-full flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="pavanity-home-feature-card__body">
                                                <h3 className="pavanity-card-title text-xl font-semibold mb-3">
                                                    {service.title}
                                                </h3>
                                                <p className="pavanity-card-copy text-base text-title/80 leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="pavanity-home-feature-card__footer mt-6" aria-hidden="true">
                                            <span className="pavanity-home-feature-card__footer-line" />
                                            <span className="pavanity-home-feature-card__footer-dot" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* What We Provide Section */}
                <div className="pavanity-page-section s-py-100 bg-[#F8F8F9]">
                    <div className="container-fluid">
                        <div className="max-w-[1720px] mx-auto">
                            <div className="pavanity-section-intro mb-10 md:mb-14 text-center max-w-3xl mx-auto" data-aos="fade-up">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">What We Provide</h2>
                                <p className="mt-4 text-base md:text-lg">
                                    Dependable products and values that support your operational continuity and commercial objectives.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-aos="fade-up" data-aos-delay="100">
                                {whatWeProvideData.map((item) => (
                                    <div
                                        key={item.title}
                                        className="pavanity-feature-card pavanity-home-feature-card pavanity-home-feature-card--continuity h-full flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="pavanity-home-feature-card__body">
                                                <h3 className="pavanity-card-title text-xl font-semibold mb-3">
                                                    {item.title}
                                                </h3>
                                                <p className="pavanity-card-copy text-base text-title/80 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="pavanity-home-feature-card__footer mt-6" aria-hidden="true">
                                            <span className="pavanity-home-feature-card__footer-line" />
                                            <span className="pavanity-home-feature-card__footer-dot" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* How We Work Section */}
                <div className="pavanity-page-section s-py-100">
                    <div className="container-fluid">
                        <div className="max-w-[1720px] mx-auto">
                            <div className="pavanity-section-intro mb-16 md:mb-20 text-center max-w-3xl mx-auto" data-aos="fade-up">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">How We Work</h2>
                                <p className="mt-4 text-base md:text-lg">
                                    A structured, transparent sourcing process designed for consistent quality and seamless global logistics.
                                </p>
                            </div>

                            <div className="grid gap-12 lg:gap-4 md:grid-cols-2 lg:grid-cols-4" data-aos="fade-up" data-aos-delay="100">
                                {howWeWorkData.map((step, index) => (
                                    <div key={step.title} className="relative flex flex-col items-center text-center px-4">
                                        <HexagonIcon color={step.color} icon={step.icon} />
                                        <h4 className="text-xl font-semibold mb-3 text-stone-900">
                                            {step.title}
                                        </h4>
                                        <p className="text-base text-[var(--pavanity-text)] leading-relaxed max-w-[280px]">
                                            {step.description}
                                        </p>
                                        {index < howWeWorkData.length - 1 && (
                                            <div 
                                                className="hidden lg:flex items-center absolute top-10 md:top-12 z-0"
                                                style={{ left: "calc(50% + 3.5rem)", width: "calc(100% - 7rem)" }}
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full border border-stone-400 bg-white flex-shrink-0" />
                                                <span className="flex-1 border-t border-dashed border-stone-300" />
                                                <span className="w-1.5 h-1.5 rounded-full border border-stone-400 bg-white flex-shrink-0" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="s-py-80 p-20">
                    <div className="container-fluid">
                        <div
                            className="pavanity-cta-panel pavanity-products-cta-panel max-w-3xl mx-auto text-center p-8 md:p-12 rounded-[10px]"
                            data-aos="fade-up"
                        >
                            <h3 className="text-2xl md:text-3xl font-semibold">Looking for a Sourcing Partner?</h3>
                            <p className="text-base md:text-lg mt-4 mb-6">
                                Contact Kater International today to discuss your industrial raw material requirements and chemical supply needs.
                            </p>
                            <Link
                                to="/contact"
                                className="pavanity-products-cta-panel__button pavanity-products-cta-panel__button--light inline-block bg-white text-primary px-8 py-4 text-base md:text-lg font-semibold rounded-[5px] hover:bg-opacity-90 duration-300"
                            >
                                Contact Our Team
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <FooterPavanity />
            <ScrollToTop />
        </>
    );
}
