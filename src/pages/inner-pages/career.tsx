import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaHandshake, FaGlobe, FaAward, FaBriefcase, FaChevronRight } from "react-icons/fa";

// Images
import bg from "../../assets/img/contact-us-header.jpg";

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";
import SeoHead from "../../components/SeoHead";

import Aos from "aos";

const cultureBenefits = [
    {
        title: "Global Exposure",
        description: "Work with international suppliers and B2B buyers across active regions in Middle East, Asia, and Europe.",
        icon: <FaGlobe className="text-xl" />
    },
    {
        title: "Professional Growth",
        description: "Enhance your chemical sourcing, supply chain operations, and international trading skills in a supportive, growth-oriented team.",
        icon: <FaGraduationCap className="text-xl" />
    },
    {
        title: "Collaborative Culture",
        description: "Our business is built on trust and transparency. We extend these values internally to foster teamwork and direct collaboration.",
        icon: <FaHandshake className="text-xl" />
    },
    {
        title: "Performance Recognition",
        description: "We value dedication and impact. Outstanding contributions are recognized through competitive compensation and career progression.",
        icon: <FaAward className="text-xl" />
    }
] as const;

const openPositions = [
    {
        title: "Chemical Sourcing Manager",
        department: "Procurement & Sourcing",
        location: "Gujarat, India (Hybrid)",
        experience: "4-7 years",
        description: "Responsible for evaluating global chemical manufacturing partners, negotiating price contracts, and coordinating chemical specification approvals."
    },
    {
        title: "International Logistics & Export Coordinator",
        department: "Supply Chain Operations",
        location: "Gujarat, India (On-site)",
        experience: "3-5 years",
        description: "Coordinate end-to-end chemical shipping logistics, manage custom declarations, prepare compliant export-import documentation, and track shipments."
    },
    {
        title: "B2B Business Development Executive",
        department: "Sales & Marketing",
        location: "Gujarat, India (On-site)",
        experience: "2-4 years",
        description: "Identify and build relationships with industrial chemical consumers, manage bulk inquiries, and coordinate product grade proposals."
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
                <div className="pavanity-page-section s-py-100 dark:bg-dark-primary">
                    <div className="container-fluid">
                        <div className="max-w-[1720px] mx-auto">
                            <div className="pavanity-section-intro mb-10 md:mb-14 text-center max-w-3xl mx-auto" data-aos="fade-up">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Join Kater International</h2>
                                <p className="mt-4 text-base md:text-lg">
                                    Build a rewarding career in the global chemical sourcing and supply industry. We value transparency, collaboration, and high-performance standards.
                                </p>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up" data-aos-delay="100">
                                {cultureBenefits.map((benefit, index) => (
                                    <div
                                        key={benefit.title}
                                        className="pavanity-feature-card pavanity-about-feature-card h-full flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="pavanity-about-feature-card__header flex justify-between items-center mb-4">
                                                <div className="pavanity-icon-panel pavanity-about-feature-card__icon">
                                                    {benefit.icon}
                                                </div>
                                                <span className="pavanity-about-feature-card__index text-lg opacity-40 font-bold" aria-hidden="true">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>
                                            <div className="pavanity-about-feature-card__body">
                                                <h3 className="pavanity-about-feature-card__title text-lg font-semibold mb-3">
                                                    {benefit.title}
                                                </h3>
                                                <p className="pavanity-about-feature-card__copy text-base text-title/80 dark:text-white/80 leading-relaxed">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="pavanity-about-feature-card__footer mt-6" aria-hidden="true">
                                            <span className="pavanity-about-feature-card__footer-line" />
                                            <span className="pavanity-about-feature-card__footer-dot" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Job Positions Section */}
                <div className="pavanity-page-section s-py-100 dark:bg-dark-secondary">
                    <div className="container-fluid">
                        <div className="max-w-[1200px] mx-auto">
                            <div className="pavanity-section-intro mb-10 md:mb-14 text-center" data-aos="fade-up">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Open Positions</h2>
                                <p className="mt-4 text-base md:text-lg">
                                    Explore opportunities to make an impact in international procurement and supply logistics.
                                </p>
                            </div>

                            <div className="grid gap-8" data-aos="fade-up" data-aos-delay="200">
                                {openPositions.map((job) => (
                                    <div
                                        key={job.title}
                                        className="dark:bg-dark-primary p-6 md:p-8 rounded-[1.3rem] shadow-sm border border-[var(--pavanity-border)] flex flex-col md:flex-row md:items-center justify-between gap-6"
                                    >
                                        <div className="max-w-2xl">
                                            <span className="inline-block px-3 py-1 text-primary text-xs font-semibold rounded-[5px] uppercase tracking-[0.08em] mb-3">
                                                {job.department}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-semibold mb-2">{job.title}</h3>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-title/60 dark:text-white/60 mb-4">
                                                <span>Location: {job.location}</span>
                                                <span>•</span>
                                                <span>Experience: {job.experience}</span>
                                            </div>
                                            <p className="text-base text-title/80 dark:text-white/80 leading-relaxed">
                                                {job.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <a
                                                href="mailto:info@katerinternational.com?subject=Job Application - Sourcing Manager"
                                                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 text-base font-medium rounded-[5px] hover:bg-opacity-90 duration-300 w-full justify-center md:w-auto"
                                            >
                                                Apply Now <FaChevronRight className="text-xs" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submissions Section */}
                <div className="s-py-80 p-20 dark:bg-dark-primary">
                    <div className="container-fluid">
                        <div
                            className="pavanity-cta-panel pavanity-products-cta-panel max-w-3xl mx-auto text-center p-8 md:p-12 rounded-[10px]"
                            data-aos="fade-up"
                        >
                            <div className="pavanity-icon-panel mx-auto mb-4 flex justify-center items-center !bg-none ! !border-transparent !shadow-none">
                                <FaBriefcase className="text-3xl text-primary" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Spontaneous Application</h3>
                            <p className="text-base md:text-lg mb-6">
                                Don't see a role that fits your experience? Send your resume and cover letter spontaneously to our HR team at:
                            </p>
                            <a href="mailto:info@katerinternational.com" className="text-2xl font-bold hover:underline block mb-3">
                                info@katerinternational.com
                            </a>
                            <p className="text-sm mt-3">
                                Please specify your department of interest in the subject line (e.g. Sourcing, Logistics, Sales).
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <FooterPavanity />
            <ScrollToTop />
        </>
    );
}
