import homeImg from "../../assets/image/oil-refinery-gas-chemical-equipment-prodiction-imp-2026-03-16-22-42-49-utc.jpg"


export default function HeroSection() {
    return (
        <section className="pavanity-home-hero relative flex items-center justify-center w-full min-h-screen overflow-hidden">
            {/* Background image container */}
            <div className="absolute inset-0 z-0">
                <div className="pavanity-home-hero__slide pavanity-home-hero__slide--active w-full h-full">
                    <img
                        src={homeImg}
                        alt="Global Export"
                        className="w-full h-full object-cover object-center scale-100 brightness-[0.4]"
                    />
                </div>
            </div>

            {/* Dark overlay gradients */}
            <div className="absolute inset-0 z-10 bg-black/40" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

            {/* Centered Content */}
            <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center text-center max-w-4xl pt-20">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-light leading-tight tracking-tight drop-shadow-md">
                    Industrial & Specialty Chemicals
                </h1>
                
                <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-sm font-medium">
                    Global Sourcing & Supply Partner
                </p>
            </div>
        </section>
    );
}
