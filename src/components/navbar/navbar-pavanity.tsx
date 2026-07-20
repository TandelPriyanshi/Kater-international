import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiArrowUpRight, FiX } from "react-icons/fi";

import ThemeSwitcher from "../theme-switcher";

import { productsData } from "../../data/products-data";

type NavItem = {
    label: string;
    href: string;
};

const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact" },
];

function isActiveRoute(pathname: string, href: string): boolean {
    if (href === "/") {
        return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavbarPavanity() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const isHomePage = location.pathname === "/";

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 40);
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Lock body scroll when mobile menu is open to prevent page scrolling underneath
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    // Close menu on Escape key press
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape" && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isMobileMenuOpen]);

    return (
        <nav
            aria-label="Main navigation"
            className={[
                "pavanity-site-header",
                isScrolled ? "is-sticky" : "",
            ].join(" ")}
        >
            <div className="pavanity-site-header__shell">
                <div
                    className={[
                        "pavanity-site-header__panel",
                        isHomePage && !isScrolled
                            ? "pavanity-site-header__panel--home"
                            : "pavanity-site-header__panel--inner",
                    ].join(" ")}
                >
                    <Link to="/" className="pavanity-site-brand flex items-center no-underline" aria-label="Kater International">
                        <span className="text-xl sm:text-2xl font-bold tracking-wider uppercase text-current">
                            Kater International
                        </span>
                    </Link>

                    <div className="pavanity-site-header__menu">
                        {NAV_ITEMS.map((item) => {
                            if (item.href === "/products") {
                                const isActive = isActiveRoute(
                                    location.pathname,
                                    item.href,
                                );

                                return (
                                    <div
                                        key={item.href}
                                        className="group relative"
                                    >
                                        <NavLink
                                            to={item.href}
                                            className={[
                                                "pavanity-nav-link inline-flex items-center gap-2",
                                                isActive ? "active" : "",
                                            ].join(" ")}
                                            title={item.label}
                                            aria-label={item.label}
                                        >
                                            <span>{item.label}</span>
                                            <span className="text-[10px]">+</span>
                                        </NavLink>

                                        <div className="pavanity-nav-dropdown invisible absolute left-1/2 top-full z-50 mt-4 w-[20rem] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                            <div className="pavanity-nav-dropdown__list grid gap-1">
                                                {productsData.map((category) => (
                                                    <NavLink
                                                        key={category.id}
                                                        to={`/products/${category.slug}`}
                                                        className={({ isActive }) =>
                                                            [
                                                                "pavanity-nav-dropdown__item",
                                                                isActive
                                                                    ? "active"
                                                                    : "",
                                                            ].join(" ")
                                                        }
                                                    >
                                                        <span className="block">
                                                            {category.name}
                                                        </span>
                                                        <span className="pavanity-nav-dropdown__tagline mt-1 block text-xs">
                                                            {category.tagline}
                                                        </span>
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <NavLink
                                    key={item.href}
                                    to={item.href}
                                    className={({ isActive }) =>
                                        [
                                            "pavanity-nav-link",
                                            isActive ? "active" : "",
                                        ].join(" ")
                                    }
                                    title={item.label}
                                    aria-label={item.label}
                                >
                                    {item.label}
                                </NavLink>
                            );
                        })}
                    </div>

                    <div className="pavanity-site-header__actions">
                        <ThemeSwitcher />

                        <Link to="/contact" className="pavanity-header-rfq rfq-button">
                            <span className="pavanity-header-rfq__label">
                                <span className="pavanity-rfq-label pavanity-rfq-label--full">Request RFQ</span>
                                <span className="pavanity-rfq-label pavanity-rfq-label--short">RFQ</span>
                            </span>
                            <span className="pavanity-header-rfq__icon" aria-hidden="true">
                                <FiArrowUpRight />
                            </span>
                        </Link>

                        <button
                            type="button"
                            className="pavanity-nav-toggle lg:hidden"
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="pavanity-mobile-nav"
                            onClick={() =>
                                setIsMobileMenuOpen((open) => !open)
                            }
                        >
                            {isMobileMenuOpen ? (
                                <FiX className="text-xl" />
                            ) : (
                                <span className="pavanity-nav-toggle__bars">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen ? (
                    <div
                        id="pavanity-mobile-nav"
                        className="fixed inset-0 z-[9999] bg-black text-white flex flex-col w-screen h-screen h-[100dvh] overflow-hidden lg:hidden"
                    >
                        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black shrink-0">
                            <Link
                                to="/"
                                className="pavanity-site-brand flex items-center no-underline"
                                aria-label="Kater International"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="text-xl sm:text-2xl font-bold tracking-wider uppercase text-white">
                                    Kater International
                                </span>
                            </Link>

                            <div className="flex items-center gap-3">
                                <ThemeSwitcher />
                                <button
                                    type="button"
                                    className="pavanity-nav-toggle text-white border-white/40 hover:border-white focus:outline-none"
                                    aria-label="Close menu"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <FiX className="text-xl" />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col justify-between gap-6 bg-black">
                            <div className="grid gap-2">
                                {NAV_ITEMS.map((item) => {
                                    const isActive = isActiveRoute(
                                        location.pathname,
                                        item.href,
                                    );

                                    return (
                                        <div key={item.href}>
                                            <NavLink
                                                to={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={[
                                                    "flex items-center justify-between p-4 rounded-xl text-base font-semibold tracking-wider uppercase transition-colors",
                                                    isActive
                                                        ? "bg-white/10 text-[var(--pavanity-accent)]"
                                                        : "text-white/90 hover:bg-white/5 hover:text-white",
                                                ].join(" ")}
                                            >
                                                <span>{item.label}</span>
                                                <span className="text-xs font-mono opacity-60">
                                                    {isActive ? "01" : "->"}
                                                </span>
                                            </NavLink>

                                            {item.href === "/products" ? (
                                                <div className="mt-2 grid gap-1.5 pl-4 border-l border-white/15 ml-3">
                                                    {productsData.map((category) => (
                                                        <NavLink
                                                            key={category.id}
                                                            to={`/products/${category.slug}`}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className={({ isActive: isSubActive }) =>
                                                                [
                                                                    "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                                                                    isSubActive
                                                                        ? "text-[var(--pavanity-accent)] font-semibold bg-white/10"
                                                                        : "text-white/75 hover:bg-white/5 hover:text-white",
                                                                ].join(" ")
                                                            }
                                                        >
                                                            {category.name}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            ) : null}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="pt-4 border-t border-white/10 shrink-0">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="pavanity-header-rfq pavanity-header-rfq--mobile rfq-button w-full"
                                >
                                    <span className="pavanity-header-rfq__label">
                                        <span className="pavanity-rfq-label pavanity-rfq-label--full">Request RFQ</span>
                                        <span className="pavanity-rfq-label pavanity-rfq-label--short">RFQ</span>
                                    </span>
                                    <span className="pavanity-header-rfq__icon" aria-hidden="true">
                                        <FiArrowUpRight />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </nav>
    );
}

