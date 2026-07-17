import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaTruck, FaShip, FaCloudDownloadAlt, FaIndustry, FaDolly, FaWarehouse, FaHeadset } from "react-icons/fa";

// Images
import bg from "../../assets/img/about_us.jpg";

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";
import SeoHead from "../../components/SeoHead";

import Aos from "aos";

const servicesData = [
    {
        title: "Chemical Sourcing",
        description: "Reliable sourcing of industrial and specialty chemicals through our network of qualified manufacturing partners.",
        icon: <FaGlobe className="text-2xl" />
    },
    {
        title: "Domestic Supply",
        description: "Consistent supply solutions for manufacturers, distributors, and industrial consumers across India.",
        icon: <FaTruck className="text-2xl" />
    },
    {
        title: "Global Exports",
        description: "Seamless export solutions with compliant documentation, quality packaging, logistics coordination, and on-time international deliveries.",
        icon: <FaShip className="text-2xl" />
    },
    {
        title: "Global Imports",
        description: "Strategic sourcing and import of specialty chemicals, raw materials, and intermediates from trusted international suppliers to meet customer requirements.",
        icon: <FaCloudDownloadAlt className="text-2xl" />
    },
    {
        title: "Contract Manufacturing Solutions",
        description: "We assist customers in developing and manufacturing products through our trusted network of qualified manufacturing partners. From sourcing the right facility to coordinating production, quality requirements, packaging, and delivery, we provide complete project support while maintaining strict confidentiality.",
        icon: <FaIndustry className="text-2xl" />
    },
    {
        title: "Product Procurement",
        description: "Helping customers identify the right products, grades, specifications, and cost-effective sourcing solutions based on their application.",
        icon: <FaDolly className="text-2xl" />
    },
    {
        title: "Supply Chain & Logistics",
        description: "End-to-end coordination of procurement, warehousing, transportation, export-import documentation, customs support, and shipment tracking.",
        icon: <FaWarehouse className="text-2xl" />
    },
    {
        title: "Customer Support",
        description: "Responsive communication, transparent updates, and dedicated assistance from inquiry to final delivery.",
        icon: <FaHeadset className="text-2xl" />
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
                <div className="pavanity-page-section s-py-100 dark:bg-dark-secondary">
                    <div className="container-fluid">
                        <div className="max-w-[1720px] mx-auto">
                            <div className="pavanity-section-intro mb-10 md:mb-14 text-center max-w-3xl mx-auto" data-aos="fade-up">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Sourcing & Supply Solutions</h2>
                                <p className="mt-4 text-base md:text-lg">
                                    We deliver value at every step of the chemical supply chain, from strategic sourcing to global exports, quality assurance, and dedicated support.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-aos="fade-up" data-aos-delay="100">
                                {servicesData.map((service, index) => (
                                    <div
                                        key={service.title}
                                        className="pavanity-feature-card pavanity-home-feature-card pavanity-home-feature-card--continuity h-full flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="pavanity-home-feature-card__header flex justify-between items-center mb-4">
                                                <div className="pavanity-icon-panel pavanity-home-feature-card__icon">
                                                    {service.icon}
                                                </div>
                                                <span className="pavanity-home-feature-card__index text-lg opacity-40 font-bold" aria-hidden="true">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>
                                            <div className="pavanity-home-feature-card__body">
                                                <h3 className="pavanity-card-title text-xl font-semibold mb-3">
                                                    {service.title}
                                                </h3>
                                                <p className="pavanity-card-copy text-base text-title/80 dark:text-white/80 leading-relaxed">
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

                {/* Bottom CTA */}
                <div className="s-py-80 dark:bg-dark-primary p-20">
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
