import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Images
import bg from "../../assets/img/about-us-top-header.jpeg";
import placeholderImage from "../../assets/img/about-us.jpeg"; 

// Data
import { getCategoryBySlug, getProductBySlug } from "../../data/products-data";

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";
import SeoHead from "../../components/SeoHead";

import Aos from "aos";

export default function SingleProductDetail() {
    const { categorySlug, productSlug } = useParams<{
        categorySlug: string;
        productSlug: string;
    }>();

    const category = getCategoryBySlug(categorySlug || "");
    const product = getProductBySlug(productSlug || "");

    useEffect(() => {
        Aos.init();
        window.scrollTo(0, 0);
    }, []);

    if (!category || !product) {
        return (
            <>
                <NavbarPavanity />
                <div className="s-py-100 text-center">
                    <h2 className="text-3xl font-semibold">Product Not Found</h2>
                    <Link to="/products" className="btn btn-solid mt-6">
                        <span>View All Products</span>
                    </Link>
                </div>
                <FooterPavanity />
            </>
        );
    }

    const productDesc = (product.description ?? '').slice(0, 155) + (product.description && product.description.length > 155 ? '...' : '');

    return (
        <>
            <SeoHead
                title={product.name}
                description={productDesc || `${product.name} – Sourced from Kater International. ${category.tagline}.`}
                path={`/products/${categorySlug}/${productSlug}`}
            />
            {/* Navbar */}
            <NavbarPavanity />

            <main className="pavanity-products-page pavanity-products-single-page">

            {/* ============================================ */}
            {/* BREADCRUMB SECTION */}
            {/* ============================================ */}
            <div
                className="pavanity-page-hero pavanity-products-hero bg-overlay"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="pavanity-page-hero__content pavanity-products-hero__content">
                    {/* SEO: Changed h2 to h1 — product name is the primary heading for this page */}
                    <h1 className="text-white text-8 md:text-[40px] font-normal leading-none text-center text-gradient-light">
                        {product.name}
                    </h1>
                    <p className="text-white text-lg md:text-xl mt-3">
                        {category.tagline}
                    </p>
                    <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-4 flex-wrap">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link to={`/products/${categorySlug}`}>
                                {category.name}
                            </Link>
                        </li>
                        <li>/</li>
                        <li className="text-primary">{product.name}</li>
                    </ul>
                </div>
            </div>

            {/* ============================================ */}
            {/* PRODUCT OVERVIEW SECTION */}
            {/* ============================================ */}
            <div className="pavanity-page-section pavanity-products-overview ">
                <div
                    className="container-fluid"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="pavanity-split-panel pavanity-products-overview__panel max-w-[1720px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2">
                        {/* Image Column */}
                        <div className="pavanity-split-panel__media pavanity-products-overview__media lg:pr-10 2xl:pr-0 relative">
                            <div>
                                <img
                                    className="object-contain w-full h-full p-4 md:p-8"
                                    src={product.image || placeholderImage}
                                    alt={product.name}
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="pavanity-split-panel__content pavanity-products-overview__content pavanity-logo-watermark-surface flex items-center py-8 sm:py-12 px-5 sm:px-12 md:px-8 lg:pr-12 lg:pl-16 2xl:pl-[160px]">
                            <div className="lg:max-w-[600px]">
                                <p className="pavanity-products-section-label">{category.name}</p>
                                <h3 className="pavanity-products-overview__title font-medium mt-4 md:mt-6">
                                    {product.name}
                                </h3>
                                <p className="pavanity-products-overview__copy mt-4 text-base sm:text-lg">
                                    {product.description || `Premium quality ${product.name.toLowerCase()} from ${category.name}. Manufactured to meet high industry standards and buyer specifications.`}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================ */}
            {/* RELATED PRODUCTS FROM SAME CATEGORY */}
            {/* ============================================ */}
            {category.products.length > 1 && (
                <div className="pavanity-products-section pavanity-products-section--related s-py-100">
                    <div className="container-fluid">
                        <div
                            className="pavanity-section-intro pavanity-products-section-intro mb-8 md:mb-12"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h3 className="font-medium leading-none text-2xl md:text-3xl">
                                Related Products
                            </h3>
                            <p className="mt-3">
                                Other products from {category.name}
                            </p>
                        </div>

                        <div
                            className="max-w-[1720px] mx-auto pavanity-products-grid-shell"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="pavanity-card-grid pavanity-products-grid grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                                {category.products
                                    .filter((p) => p.slug !== productSlug)
                                    .map((relatedProduct) => {
                                        const relatedProductSummary =
                                            relatedProduct.description ??
                                            `Export-ready ${relatedProduct.name.toLowerCase()} supplied with structured documentation and buyer-aligned specifications.`;

                                        return (
                                        <div
                                            key={relatedProduct.id}
                                            className="pavanity-product-card pavanity-products-card pavanity-products-card--compact group overflow-hidden"
                                        >
                                            {/* Product Image */}
                                            {relatedProduct.image && (
                                                <div className="pavanity-products-card__media aspect-square overflow-hidden">
                                                    <img
                                                        src={relatedProduct.image}
                                                        alt={relatedProduct.name}
                                                        loading="lazy"
                                                        className="w-full h-full object-contain p-3 sm:p-4 group-hover:scale-110 duration-500"
                                                    />
                                                </div>
                                            )}
                                            <div className="pavanity-products-card__content pavanity-products-card__content--compact p-4">Other Chemicals
                                                <h5 className="pavanity-products-card__title font-semibold text-base md:text-lg group-hover:text-primary duration-300">
                                                    {relatedProduct.name}
                                                </h5>
                                                <p className="pavanity-products-card__copy pavanity-products-card__copy--compact text-sm md:text-base">
                                                    {relatedProductSummary.length > 145
                                                        ? `${relatedProductSummary.slice(0, 145)}...`
                                                        : relatedProductSummary}
                                                </p>
                                                <div className="pavanity-products-card__footer pavanity-products-card__footer--stacked">
                                                    <span className="pavanity-products-card__footer-line" aria-hidden="true" />
                                                    <Link
                                                        to={`/products/${categorySlug}/${relatedProduct.slug}`}
                                                        className="pavanity-products-card__button inline-block w-full bg-primary text-white px-4 py-2 text-sm font-medium text-center"
                                                    >
                                                        View Product
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ============================================ */}
            {/* BUSINESS ENQUIRY CTA */}
            {/* ============================================ */}
            <div className="pavanity-products-section s-pb-100 pt-12">
                <div className="container-fluid">
                    <div
                        className="pavanity-cta-panel pavanity-products-cta-panel max-w-3xl mx-auto text-center p-8 md:p-12 rounded-[10px]"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h3 className="text-2xl md:text-3xl font-semibold">
                            Interested in {product.name}?
                        </h3>
                        <p className="text-base md:text-lg mt-4">
                            Contact our export team to discuss specifications,
                            pricing, MOQ requirements, and delivery timelines for
                            international supply.
                        </p>
                        <Link
                            to="/contact"
                            className="pavanity-products-cta-panel__button pavanity-products-cta-panel__button--light inline-block mt-6 bg-white text-primary px-8 py-4 text-base md:text-lg font-semibold rounded-[5px] hover:bg-opacity-90 duration-300"
                        >
                            Request Business Enquiry
                        </Link>
                    </div>
                </div>
            </div>

            </main>

            {/* Footer */}
            <FooterPavanity />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    );
}
