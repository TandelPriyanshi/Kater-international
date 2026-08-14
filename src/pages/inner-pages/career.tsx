import { useEffect } from "react";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaHandshake, FaGlobe, FaAward } from "react-icons/fa";

// Images
import bg from "../../assets/img/contact-us-header.jpg";

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";
import SeoHead from "../../components/SeoHead";
import CareerForm from "../../components/CareerForm";

import Aos from "aos";

const cultureBenefits = [
    {
        title: "Global Exposure",
        description: "Work with international suppliers and B2B buyers across active regions in Middle East, Asia, and Europe.",
        icon: <FaGlobe className="text-xl" />,
        accent: "#2FA84F",
    },
    {
        title: "Professional Growth",
        description: "Enhance your chemical sourcing, supply chain operations, and international trading skills in a supportive, growth-oriented team.",
        icon: <FaGraduationCap className="text-xl" />,
        accent: "#0071B9",
    },
    {
        title: "Collaborative Culture",
        description: "Our business is built on trust and transparency. We extend these values internally to foster teamwork and direct collaboration.",
        icon: <FaHandshake className="text-xl" />,
        accent: "#E5342A",
    },
    {
        title: "Performance Recognition",
        description: "We value dedication and impact. Outstanding contributions are recognized through competitive compensation and career progression.",
        icon: <FaAward className="text-xl" />,
        accent: "#F7941D",
    }
] as const;

export default function CareerPage() {
    useEffect(() => {
        Aos.init();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SeoHead path="/career" />
            <NavbarPavanity />

            <main className="pavanity-career-page">
                {/* Hero Header */}
                <div className="pavanity-page-hero pavanity-career-hero bg-overlay" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="pavanity-page-hero__content">
                        <h1 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Careers</h1>
                        <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li className="text-primary">Careers</li>
                        </ul>
                    </div>
                </div>

                {/* Culture Section */}
                <div className="pavanity-page-section s-py-100">
                    <div className="container-fluid">
                        <div className="max-w-[1720px] mx-auto">
                            <div className="pavanity-section-intro mb-10 md:mb-14 text-center max-w-3xl mx-auto" data-aos="fade-up">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gradient-brand">Join Kater International</h2>
                                <p className="mt-4 text-base md:text-lg">
                                    Build a rewarding career in the global chemical sourcing and supply industry. We value transparency, collaboration, and high-performance standards.
                                </p>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up" data-aos-delay="100">
                                {cultureBenefits.map((benefit) => (
                                    <div
                                        key={benefit.title}
                                        className="pavanity-feature-card pavanity-about-feature-card h-full flex flex-col justify-between"
                                        style={{ "--card-accent": benefit.accent } as CSSProperties}
                                    >
                                        <div>
                                            <div className="pavanity-about-feature-card__header flex justify-between items-center mb-4">
                                                <div
                                                    className="pavanity-icon-panel pavanity-about-feature-card__icon"
                                                    style={{
                                                        background: benefit.accent,
                                                        boxShadow: `0 18px 34px ${benefit.accent}2e`,
                                                    }}
                                                >
                                                    {benefit.icon}
                                                </div>
                                            </div>
                                            <div className="pavanity-about-feature-card__body">
                                                <h3 className="pavanity-about-feature-card__title text-lg font-semibold mb-3">
                                                    {benefit.title}
                                                </h3>
                                                <p className="pavanity-about-feature-card__copy text-base text-title/80 leading-relaxed">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Application Form Section */}
                <div className="pavanity-page-section s-pb-100 bg-[#F8F8F9]">
                    <div className="container-fluid">
                        <div className="max-w-[920px] mx-auto">
                            <div className="pavanity-section-intro mb-8 md:mb-10 text-center" data-aos="fade-up">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gradient-brand">
                                    Apply Now
                                </h2>
                                <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto">
                                    Share your details and resume with us. We review every application and reach out to candidates whose profiles match our current requirements.
                                </p>
                            </div>

                            <div
                                className="pavanity-contact-card pavanity-career-form-card"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="pavanity-contact-card__body">
                                    <CareerForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <FooterPavanity />
            <ScrollToTop />
        </>
    );
}
