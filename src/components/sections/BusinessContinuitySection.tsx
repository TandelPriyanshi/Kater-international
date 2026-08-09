import { businessContinuity } from '../../data/pavanity-data'

export default function BusinessContinuitySection() {
  return (
    <div className="s-py-100 bg-white">
      <div className="container-fluid">
        <div className="max-w-[1720px] mx-auto">

          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
            <h3 className="leading-none text-2xl md:text-3xl text-title font-semibold">
              Why Clients Choose Us
            </h3>
            <p className="mt-3 text-title max-w-2xl mx-auto">
              Product supply structured for reliability, technical clarity, and performance
            </p>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12" data-aos="fade-up" data-aos-delay="100">
            {businessContinuity.map((item) => (
              <div key={item.id} className="pavanity-glass-card text-left">
                {/* Title */}
                <h4 className="text-xl md:text-2xl font-bold text-[var(--pavanity-ink)] tracking-tight mb-3">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-base text-[var(--pavanity-text)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
