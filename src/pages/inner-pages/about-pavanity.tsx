import { useEffect } from "react";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";

// Images - Envato stock images for About Us
import heroBg from '../../assets/image/business-professionals-discussing-data-on-tablet-i-2026-03-25-03-21-13-utc.jpg';
import aboutOverviewImg from '../../assets/image/fuel-truck-being-loaded-at-industrial-facility-2026-03-09-05-15-58-utc.jpg';

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";
import SeoHead from "../../components/SeoHead";

import Aos from "aos";

const aboutFeatureCards = [
    {
        title: "Quality & Compliance",
        description:
            "Chemical materials are sourced and manufactured under strict quality checks, with technical safety parameters reviewed prior to dispatch coordination.",
        accent: "#2FA84F",
        accentRgb: "47, 168, 79",
    },
    {
        title: "Supply Chain & Logistics",
        description:
            "End-to-end coordination of procurement, warehousing, transportation, export-import documentation, and customs support.",
        accent: "#0071B9",
        accentRgb: "0, 113, 185",
    },
    {
        title: "Global Sourcing Network",
        description:
            "Sourcing of industrial and specialty chemicals through our extensive network of qualified global manufacturing partners.",
        accent: "#E5342A",
        accentRgb: "229, 52, 42",
    },
    {
        title: "Customer Support",
        description:
            "Responsive communication, transparent status updates, and dedicated assistance from inquiry to final delivery.",
        accent: "#F7941D",
        accentRgb: "247, 148, 29",
    },
] as const;

const missionVisionCards = [
    {
        title: "Our Mission",
        description:
            "To be the most reliable global sourcing partner for industrial and specialty chemicals, delivering consistent quality, transparent pricing, and dependable supply to businesses worldwide.",
        accent: "#0071B9",
    },
    {
        title: "Our Vision",
        description:
            "To build a globally trusted chemical sourcing network recognized for quality assurance, ethical trade practices, and long-term partnerships that empower industries to grow sustainably.",
        accent: "#2FA84F",
    },
] as const;

const coreValues = [
    {
        title: "Knowledge",
        description:
            "Deep understanding of chemical markets, specifications, and regulatory requirements across the industries we serve.",
        accent: "#2FA84F",
    },
    {
        title: "Accuracy",
        description:
            "Precise documentation, batch specifications, and compliance parameters verified before every dispatch.",
        accent: "#0071B9",
    },
    {
        title: "Timeliness",
        description:
            "Efficient logistics and responsive coordination that keep shipments and deliveries on schedule.",
        accent: "#E5342A",
    },
    {
        title: "Efficiency",
        description:
            "Streamlined sourcing and procurement processes that deliver competitive pricing without compromising quality.",
        accent: "#F7941D",
    },
    {
        title: "Reliability",
        description:
            "Consistent product quality and dependable partnerships that our customers can count on, every time.",
        accent: "#8E44AD",
    },
] as const;

export default function AboutPavanity() {

    useEffect(()=>{
        Aos.init()
        window.scrollTo(0,0)
    },[])

  return (
    <>
        <SeoHead path="/about-us" />
        {/* Navbar */}
        <NavbarPavanity/>

        <main className="pavanity-about-page">

        {/* ============================================ */}
        {/* BREADCRUMB SECTION */}
        {/* ============================================ */}
        <div className="pavanity-page-hero pavanity-about-hero bg-overlay" style={{backgroundImage:`url(${heroBg})`}}>
            <div className="pavanity-page-hero__content pavanity-about-hero__content">
                <h1 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">About Us</h1>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">About Us</li>
                </ul>
            </div>
        </div>

        {/* ============================================ */}
        {/* COMPANY OVERVIEW SECTION */}
        {/* ============================================ */}
        <div className="pavanity-page-section pavanity-about-overview">
            <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                <div className="pavanity-split-panel pavanity-about-overview__panel max-w-[1720px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 rounded-2xl overflow-hidden shadow-lg border border-[var(--pavanity-border)]">
                    {/* Image Column */}
                    <div className="pavanity-split-panel__media pavanity-about-overview__media relative min-h-[350px]">
                        <img className="object-cover w-full h-full" src={aboutOverviewImg} alt="Kater International - Industrial & Specialty Chemicals Sourcing"/>
                    </div>

                    {/* Content Column */}
                    <div className="pavanity-split-panel__content pavanity-about-overview__content pavanity-logo-watermark-surface flex items-center py-8 sm:py-12 px-5 sm:px-8 md:px-10 lg:px-12">
                        <div>
                            <h2 className="pavanity-about-overview__title font-bold leading-none mt-4 md:mt-6 text-2xl md:text-3xl text-gradient-brand">
                                Who We Are ?
                            </h2>
                            <p className="pavanity-about-overview__copy mt-3 text-base sm:text-lg">
                                Kater International is a chemical sourcing and supply company committed to providing dependable solutions for industries worldwide. With an extensive network of qualified manufacturing partners and suppliers, we deliver quality products that meet the technical and commercial requirements of our customers.
                            </p>
                            <p className="pavanity-about-overview__copy mt-3 text-base sm:text-lg">
                                We believe successful business is built on trust, transparency, and long-term relationships. From product selection and procurement to documentation and logistics, our team works closely with customers to ensure a smooth and reliable procurement experience.
                            </p>
                            <p className="pavanity-about-overview__copy mt-3 text-base sm:text-lg font-semibold">
                                Our objective is simple — to become a trusted business partner by delivering quality products, responsive service, and consistent value.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* WHY KATER INTERNATIONAL - FEATURES SECTION */}
        {/* ============================================ */}
        <div className="pavanity-about-features s-pb-100">
            <div className="container-fluid">
                <div className="pavanity-about-features__shell max-w-[1720px] mx-auto">
                    <div
                        className="pavanity-about-features__intro-panel pavanity-logo-watermark-surface pavanity-logo-watermark-surface--dark"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h3 className="pavanity-about-features__title font-bold leading-none text-2xl md:text-3xl text-gradient-brand">
                            Why Kater International
                        </h3>
                        <p className="pavanity-about-features__copy mt-3">
                            Consistent chemical supply backed by quality compliance, supply chain continuity, and transparent trading logistics.
                        </p>
                    </div>

                    <div
                        className="pavanity-card-grid pavanity-about-features__grid grid gap-7 md:grid-cols-2"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {aboutFeatureCards.map((feature) => {
                            return (
                                <div
                                    key={feature.title}
                                    className="pavanity-feature-card pavanity-about-feature-card"
                                    style={{
                                        "--card-accent": feature.accent,
                                        "--card-accent-rgb": feature.accentRgb,
                                    } as CSSProperties}
                                >
                                    <div className="pavanity-about-feature-card__body">
                                        <h5 className="pavanity-about-feature-card__title font-semibold text-xl md:text-2xl">
                                            {feature.title}
                                        </h5>
                                        <p className="pavanity-about-feature-card__copy">
                                            {feature.description}
                                        </p>
                                    </div>
                                    {/* <div className="pavanity-about-feature-card__footer" aria-hidden="true">
                                        <span className="pavanity-about-feature-card__footer-line" />
                                        <span className="pavanity-about-feature-card__footer-dot" />
                                    </div> */}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* MISSION & VISION SECTION */}
        {/* ============================================ */}
        <div className="pavanity-page-section pavanity-about-mission-vision">
            <div className="container-fluid">
                <div
                    className="pavanity-mv-grid grid gap-7 md:grid-cols-2 max-w-[1720px] mx-auto"
                    data-aos="fade-up"
                >
                    {missionVisionCards.map((item) => (
                        <div
                            key={item.title}
                            className="pavanity-mv-card"
                            style={{ "--mv-accent": item.accent } as CSSProperties}
                        >
                            <span className="pavanity-mv-card__watermark" aria-hidden="true">
                                {item.title === "Our Mission" ? "M" : "V"}
                            </span>
                            <h3 className="pavanity-mv-card__title">
                                {item.title}
                            </h3>
                            <span className="pavanity-mv-card__rule" aria-hidden="true" />
                            <p className="pavanity-mv-card__copy">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* CORE VALUES SECTION */}
        {/* ============================================ */}
        <div className="pavanity-about-features s-pb-100">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto">
                    <div
                        className="pavanity-core-values"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="pavanity-core-values__header">
                            <h3 className="pavanity-brand-font pavanity-core-values__title">
                                Core Values
                            </h3>
                        </div>

                        <div className="pavanity-core-values__timeline">
                            {coreValues.map((value, index) => {
                                const isLeft = index % 2 === 0;
                                return (
                                    <div
                                        key={value.title}
                                        className="pavanity-core-values__row"
                                        data-aos={isLeft ? "fade-right" : "fade-left"}
                                        data-aos-delay={100 + index * 100}
                                    >
                                        <span
                                            className="pavanity-core-values__dot"
                                            style={{ "--value-accent": value.accent } as CSSProperties}
                                        />
                                        <div
                                            className={[
                                                "pavanity-core-values__content",
                                                isLeft
                                                    ? "pavanity-core-values__content--left"
                                                    : "pavanity-core-values__content--right",
                                            ].join(" ")}
                                        >
                                            <h5 className="pavanity-brand-font pavanity-core-values__name">
                                                {value.title}
                                            </h5>
                                            <p className="pavanity-core-values__copy">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </main>

        {/* Footer */}
        <FooterPavanity/>

        {/* Scroll to Top */}
        <ScrollToTop/>
    </>
  )
}
