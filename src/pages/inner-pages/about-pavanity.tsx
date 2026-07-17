import { useEffect } from "react";
import { Link } from "react-router-dom";

// Images - Using template images as placeholders
import bg from '../../assets/img/about_us.jpg'
import aboutImage from '../../assets/img/aboutus-full.png'

// Icons 
import { FaIndustry, FaShieldAlt, FaCheckCircle, FaGlobe, FaTruck, FaHeadset } from 'react-icons/fa'

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
        icon: <FaShieldAlt className="text-2xl" />,
    },
    {
        title: "Supply Chain & Logistics",
        description:
            "End-to-end coordination of procurement, warehousing, transportation, export-import documentation, and customs support.",
        icon: <FaTruck className="text-2xl" />,
    },
    {
        title: "Global Sourcing Network",
        description:
            "Sourcing of industrial and specialty chemicals through our extensive network of qualified global manufacturing partners.",
        icon: <FaGlobe className="text-2xl" />,
    },
    {
        title: "Customer Support",
        description:
            "Responsive communication, transparent status updates, and dedicated assistance from inquiry to final delivery.",
        icon: <FaHeadset className="text-2xl" />,
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
        <div className="pavanity-page-hero pavanity-about-hero bg-overlay" style={{backgroundImage:`url(${bg})`}}>
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
                <div className="pavanity-split-panel pavanity-about-overview__panel max-w-[1720px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2">
                    {/* Image Column */}
                    <div className="pavanity-split-panel__media pavanity-about-overview__media lg:pr-10 2xl:pr-0 relative">
                        <div>
                            <img className="object-cover w-full" src={aboutImage} alt="Kater International - Industrial & Specialty Chemicals Sourcing"/>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="pavanity-split-panel__content pavanity-about-overview__content pavanity-logo-watermark-surface flex items-center py-8 sm:py-12 px-5 sm:px-12 md:px-8 lg:pr-12 lg:pl-16 2xl:pl-[160px]">
                        <div className="lg:max-w-[600px]">
                            <p className="pavanity-about-section-label">About Kater International</p>
                            <div className="pavanity-icon-panel pavanity-about-overview__icon">
                                <FaIndustry className="size-16 text-white" />
                            </div>
                            <h2 className="pavanity-about-overview__title font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                                About Kater International
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
                        <div className="pavanity-icon-panel pavanity-about-features__icon">
                            <FaCheckCircle className="text-2xl" />
                        </div>
                        <p className="pavanity-about-section-label">Why Kater International</p>
                        <h3 className="pavanity-about-features__title font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
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
                        {aboutFeatureCards.map((feature, index) => (
                            <div
                                key={feature.title}
                                className="pavanity-feature-card pavanity-about-feature-card"
                            >
                                <div className="pavanity-about-feature-card__header">
                                    <div className="pavanity-icon-panel pavanity-about-feature-card__icon">
                                        {feature.icon}
                                    </div>
                                    <span className="pavanity-about-feature-card__index" aria-hidden="true">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <div className="pavanity-about-feature-card__body">
                                    <h5 className="pavanity-about-feature-card__title font-semibold text-xl md:text-2xl">
                                        {feature.title}
                                    </h5>
                                    <p className="pavanity-about-feature-card__copy mt-4">
                                        {feature.description}
                                    </p>
                                </div>
                                <div className="pavanity-about-feature-card__footer" aria-hidden="true">
                                    <span className="pavanity-about-feature-card__footer-line" />
                                    <span className="pavanity-about-feature-card__footer-dot" />
                                </div>
                            </div>
                        ))}
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
