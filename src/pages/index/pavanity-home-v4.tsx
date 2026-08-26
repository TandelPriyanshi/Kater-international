import { useEffect } from "react";
import { Link } from "react-router-dom";

import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";
import HeroSection from "../../components/sections/HeroSection";

import {
    businessContinuity,
    businessEnquiries
} from "../../data/pavanity-data";
import { productsData } from "../../data/products-data";

import Aos from "aos";

import gstCertificate from "../../assets/image/GST.png";
import msmeCertificate from "../../assets/image/MSME.png";
import chemexcilCertificate from "../../assets/image/chemexcil.png";

type BusinessContinuityItem = {
    id: number;
    title: string;
    description: string;
};


export default function PavanityHomeV4() {
    useEffect(() => {
        Aos.init();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavbarPavanity />
            <HeroSection />

            {/* ============================================ */}
            {/* HOME INTRO SECTION */}
            {/* ============================================ */}
            <section className="pavanity-home-section s-py-100">
                <div className="container-fluid">
                    <div className="max-w-[1200px] mx-auto text-center" data-aos="fade-up">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gradient-brand tracking-[-0.03em] mt-3">
                            Your Trusted Partner for Industrial & Specialty Chemicals
                        </h2>
                        <div className="w-16 h-1 bg-primary mx-auto my-6"></div>
                        <p className="text-base sm:text-lg md:text-xl text-[var(--pavanity-text)] leading-relaxed max-w-4xl mx-auto mb-6">
                            Kater International is a reliable supplier and global sourcing partner for industrial and specialty chemicals. We connect businesses with quality-assured products through a trusted network of approved manufacturing partners, ensuring consistent quality, competitive pricing, and dependable supply.
                        </p>
                        <p className="text-base sm:text-lg text-[var(--pavanity-text)] leading-relaxed max-w-4xl mx-auto">
                            Serving customers across domestic and international markets, we focus on delivering the right products with complete transparency, efficient logistics, and responsive customer support.
                        </p>
                        <div className="mt-8 font-bold text-primary tracking-wide text-lg">
                            Reliable Supply. Consistent Quality. Trusted Partnerships.
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* ABOUT US SECTION */}
            {/* ============================================ */}
            <section className="pavanity-home-section pavanity-about-gradient s-py-100">
                <div className="container-fluid">
                    <div className="max-w-[1720px] mx-auto pavanity-home-section-shell">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div data-aos="fade-right">
                                <span className="block text-primary font-bold uppercase tracking-[0.12em] text-sm">About Our Company</span>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-3 mb-6">
                                    Trusted Sourcing and Supply
                                </h2>
                                <p className="text-base sm:text-lg text-[var(--pavanity-text)] mb-4 leading-relaxed">
                                    Kater International is a chemical sourcing and supply company committed to providing dependable solutions for industries worldwide. With an extensive network of qualified manufacturing partners and suppliers, we deliver quality products that meet the technical and commercial requirements of our customers.
                                </p>
                                <p className="text-base sm:text-lg text-[var(--pavanity-text)] mb-4 leading-relaxed">
                                    We believe successful business is built on trust, transparency, and long-term relationships. From product selection and procurement to documentation and logistics, our team works closely with customers to ensure a smooth and reliable procurement experience.
                                </p>
                                <p className="text-base sm:text-lg text-[var(--pavanity-text)] leading-relaxed font-semibold">
                                    Our objective is simple — to become a trusted business partner by delivering quality products, responsive service, and consistent value.
                                </p>
                                <div className="mt-8">
                                    <Link to="/about-us" className="pavanity-card-link inline-flex items-center gap-3">
                                        <span className="text-underline-primary">Learn More About Us</span>
                                        <span aria-hidden="true">-&gt;</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="pavanity-home-continuity-grid grid grid-cols-2 gap-6" data-aos="fade-left">
                                {businessContinuity.map((item: BusinessContinuityItem, index) => {
                                    const variant = ["--red", "--green", "--blue"][index % 3];
                                    return (
                                        <div
                                            key={item.id}
                                            className={`pavanity-glass-card pavanity-glass-card${variant} ${index === 2 ? 'col-span-2' : ''}`}
                                        >
                                            <h3 className="pavanity-glass-card__title text-xl font-bold mb-3 tracking-tight">{item.title}</h3>
                                            <p className="pavanity-glass-card__copy text-base leading-relaxed">{item.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* PRODUCTS SECTOR */}
            {/* ============================================ */}
            <section className="pavanity-home-section pavanity-home-section--products s-py-100">
                <div className="container-fluid">
                    <div className="max-w-[1720px] mx-auto pavanity-home-section-shell">
                        <div className="mb-16 text-center" data-aos="fade-up">
                            <p
                                className="mx-auto max-w-5xl font-extrabold text-gradient-brand tracking-[-0.02em]"
                                style={{ fontSize: "3rem", lineHeight: "3.5rem" }}
                            >
                                We don't just supply chemicals.<br className="hidden sm:block" /> We help keep your operations moving.
                            </p>
                            <p
                                className="mx-auto mt-6 max-w-2xl text-[var(--pavanity-text)]"
                                style={{ fontSize: "1.50rem", lineHeight: "1.75rem" }}
                            >
                                From procurement to final delivery, we ensure every shipment arrives on time, every batch meets specification, and every partnership runs without interruption — so your production line never has to wait.
                            </p>
                            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
                                {[
                                    { label: "On-Time Deliveries", classes: "bg-blue-50 border-blue-200 text-blue-700" },
                                    { label: "Consistent Quality", classes: "bg-red-50 border-red-200 text-red-700" },
                                    { label: "Responsive Support", classes: "bg-yellow-50 border-yellow-200 text-yellow-700" },
                                    { label: "Reliable Sourcing", classes: "bg-green-50 border-green-200 text-green-700" },
                                ].map(({ label, classes }) => (
                                    <span
                                        key={label}
                                        className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold ${classes}`}
                                    >
                                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div
                            className="pavanity-home-heading-row mb-10 flex flex-wrap items-end justify-between gap-5 border-b border-[var(--pavanity-border)] pb-6"
                            data-aos="fade-up"
                        >
                            <div className="max-w-2xl">
                                <span className="block text-primary font-bold uppercase tracking-[0.12em] text-sm">Product Catalog</span>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gradient-brand tracking-[-0.03em] mt-3">
                                    Our Chemical Divisions
                                </h2>
                                <p className="mt-4 text-base md:text-lg text-[var(--pavanity-text)] leading-8">
                                    Comprehensive industrial & specialty chemicals across 6 core sectors, sourced through quality-assured manufacturing.
                                </p>
                            </div>
                            <Link to="/products" className="pavanity-card-link inline-flex items-center gap-3">
                                <span className="text-underline-primary">View All Products</span>
                                <span aria-hidden="true">-&gt;</span>
                            </Link>
                        </div>

                        <div
                            className="pavanity-card-grid pavanity-home-product-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                            data-aos="fade-up"
                            data-aos-delay="120"
                        >
                            {productsData.map((category) => (
                                <Link
                                    to={`/products/${category.slug}`}
                                    className="pavanity-product-card pavanity-home-product-card group overflow-hidden bg-white p-6 rounded-[1.3rem] shadow-sm border border-[var(--pavanity-border)] flex flex-col justify-between"
                                    key={category.id}
                                >
                                    <div className="pavanity-home-product-card__media overflow-hidden rounded-[1.3rem]">
                                        <img
                                            className="h-[18rem] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            src={category.image}
                                            alt={category.name}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="pavanity-home-product-card__content mt-6 flex flex-1 flex-col justify-between">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold">{category.name}</h3>
                                            <p className="mt-2 text-sm font-semibold text-[var(--pavanity-accent)]">
                                                {category.tagline}
                                            </p>
                                        </div>
                                        <div className="mt-5 mb-5 inline-flex items-center gap-3 pavanity-card-link text-primary font-semibold">
                                            <span className="text-underline-primary">Explore Chemicals</span>
                                            <span aria-hidden="true">-&gt;</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div
                            className="pavanity-home-certificates mt-16 rounded-[1.5rem] bg-[var(--pavanity-surface-soft)] px-6 py-12 md:px-12 md:py-14 text-center"
                            data-aos="fade-up"
                            data-aos-delay="160"
                        >
                            <span className="block text-primary font-bold uppercase tracking-[0.12em] text-sm">Certified & Compliant</span>
                            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gradient-brand tracking-[-0.03em]">
                                Our Certificates
                            </h2>
                            <div className="mt-10 flex flex-wrap items-center justify-center gap-10 sm:gap-16">
                                <img src={gstCertificate} alt="GST Certified" className="h-16 md:h-20 w-auto object-contain" loading="lazy" />
                                <img src={msmeCertificate} alt="MSME Certified" className="h-16 md:h-20 w-auto object-contain" loading="lazy" />
                                <img src={chemexcilCertificate} alt="Chemexcil Certified" className="h-16 md:h-20 w-auto object-contain" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* MARKETS SECTION */}
            {/* ============================================ */}
            {/* <section
                id="global-markets"
                className="pavanity-home-section pavanity-home-section--markets s-py-100"
            >
                <div className="container-fluid">
                    <div className="max-w-[1720px] mx-auto pavanity-home-section-shell">
                        <div className="pavanity-section-intro pavanity-home-section-intro mb-10 md:mb-14" data-aos="fade-up">
                            <span className="block text-primary font-bold uppercase tracking-[0.12em] text-sm">Global Distribution</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gradient-dark mt-3">Markets & Network</h2>
                            <p className="mt-4">
                                Supplying domestic and international markets with on-time logistics, export-import compliance, and support.
                            </p>
                        </div>

                        <div
                            className="pavanity-home-market-shell"
                            data-aos="fade-up"
                            data-aos-offset="40"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <div className="pavanity-home-market-top">
                                <div className="pavanity-home-market-board__header">
                                    <span className="pavanity-home-market-board__eyebrow">Trade Network</span>
                                    <h3 className="pavanity-home-market-board__title">
                                        Consistent supply across regional and international trade pathways
                                    </h3>
                                    <p className="pavanity-home-market-board__copy">
                                        Partner-focused logistics planning, compliant trade documentation, and recurring supply coordination designed to support B2B requirements.
                                    </p>
                                </div>

                                <div className="pavanity-home-market-board__stats">
                                    <div className="pavanity-home-market-board__stat">
                                        <div className="pavanity-home-market-board__stat-icon">
                                            <FaGlobeAmericas className="text-xl" />
                                        </div>
                                        <div>
                                            <h4>Global Exports</h4>
                                            <p>Serving buyers in Middle East, Europe, and Asia</p>
                                        </div>
                                    </div>
                                    <div className="pavanity-home-market-board__stat">
                                        <div className="pavanity-home-market-board__stat-icon">
                                            <FaCheckCircle className="text-xl" />
                                        </div>
                                        <div>
                                            <h4>Quality Audited</h4>
                                            <p>All manufacturing partners are verified for consistency</p>
                                        </div>
                                    </div>
                                    <div className="pavanity-home-market-board__stat">
                                        <div className="pavanity-home-market-board__stat-icon">
                                            <FaFileAlt className="text-xl" />
                                        </div>
                                        <div>
                                            <h4>Clear Logistics</h4>
                                            <p>End-to-end support for custom clearance and shipping</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pavanity-home-market-layout">
                                <div className="pavanity-home-market-board">
                                    <div className="pavanity-home-market-board__mapstage">
                                        <div className="pavanity-home-market-board__map-shell">
                                            <div className="pavanity-home-market-board__map-copy">
                                                <span className="pavanity-home-market-board__map-copy-eyebrow">
                                                    Coverage Map
                                                </span>
                                                <h4>Active Sourcing & Sells</h4>
                                                <p>
                                                    Visual layout of our sourcing connections and supply markets.
                                                </p>
                                            </div>

                                            <img
                                                src={worldMapSvg}
                                                alt="Map showing Kater International distribution network"
                                                className="pavanity-home-market-board__map-image"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="pavanity-home-market-panel">
                                    <div className="pavanity-home-market-panel__header">
                                        <p className="pavanity-home-market-panel__eyebrow">Active Markets</p>
                                        <h4>B2B Markets and supply regions in our current operations</h4>
                                        <span className="pavanity-home-market-panel__badge">
                                            {String(globalMarkets.length).padStart(2, "0")} Regions
                                        </span>
                                    </div>

                                    <div className="pavanity-home-market-panel__list">
                                        {globalMarkets.map((market: GlobalMarket, index) => (
                                            <div
                                                key={market.id}
                                                className="pavanity-home-market-panel__item"
                                            >
                                                <span className="pavanity-step-index">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                                <div className="pavanity-home-market-panel__copy">
                                                    <span className="pavanity-home-market-panel__item-eyebrow">
                                                        Market Region
                                                    </span>
                                                    <h5>{market.region}</h5>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* ============================================ */}
            {/* CTA SECTION */}
            {/* ============================================ */}
            <section className="pavanity-home-section pavanity-home-section--cta s-py-100">
                <div className="container-fluid">
                    <div className="max-w-[1720px] mx-auto pavanity-home-section-shell">
                        <div className="pavanity-cta-panel pavanity-home-cta-panel text-center p-12 rounded-[2rem]" data-aos="fade-up">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gradient-brand">
                                {businessEnquiries.heading}
                            </h2>

                            <div className="mt-8 md:mt-10">
                                <a
                                    href={`mailto:${businessEnquiries.email}`}
                                    className="text-2xl font-semibold md:text-4xl hover:underline"
                                >
                                    {businessEnquiries.email}
                                </a>
                            </div>

                            <p className="mt-5 text-lg md:text-xl">{businessEnquiries.response}</p>

                            <div className="mt-8 flex justify-center">
                                <Link
                                    to="/contact"
                                    className="pavanity-products-cta-panel__button inline-flex bg-white text-primary px-8 py-4 text-base md:text-lg font-medium rounded-[5px] hover:bg-opacity-90 duration-300 shadow-md"
                                >
                                    {businessEnquiries.ctaText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterPavanity />
            <ScrollToTop />
        </>
    );
}
