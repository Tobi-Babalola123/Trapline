"use client";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-px bg-[#8B0000]" />
      <span className="text-[#8B0000] text-xs font-bold tracking-[0.2em] uppercase">
        {children}
      </span>
    </div>
  );
}

function ProcessCard({
  step,
  title,
  description,
  last = false,
}: {
  step: string;
  title: string;
  description: string;
  last?: boolean;
}) {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-0 relative">
      <div className="flex flex-col items-center lg:items-start flex-shrink-0">
        <div className="w-14 h-14 rounded-xl bg-[#8B0000] flex items-center justify-center shadow-lg">
          <span className="text-white text-xl font-extrabold">{step}</span>
        </div>
        {!last && (
          <div className="hidden lg:block w-px flex-1 bg-gradient-to-b from-[#8B0000]/40 to-transparent mt-4 min-h-[60px]" />
        )}
      </div>
      <div className="lg:ml-8 pb-12 lg:pb-16">
        <h3 className="text-2xl font-bold text-[#111111] mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Contact & Consultation",
      description:
        "Call or submit an online quote request. Our team reviews your project scope, site location, mix requirements, and preferred delivery window within hours.",
    },
    {
      step: "02",
      title: "Mix Design & Pricing",
      description:
        "We recommend the right concrete mix for your application — structural requirements, climate, finish type — and provide a clear, itemized quote with no hidden charges.",
    },
    {
      step: "03",
      title: "Scheduling & Dispatch",
      description:
        "Once approved, your pour date is locked in. Our dispatch team coordinates truck rotation, timing intervals, and driver briefing for your specific site.",
    },
    {
      step: "04",
      title: "Delivery & Follow-Up",
      description:
        "Concrete arrives on schedule. Each load is slump-tested on delivery. After the pour, your account rep follows up to confirm everything met spec.",
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-[#111111] leading-tight uppercase mb-6">
              From Quote to
              <br />
              <span className="text-[#8B0000]">Pour</span> in Four
              <br />
              Simple Steps
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We've refined our order process so contractors spend less time on
              logistics and more time building. Most quotes are returned
              same-day.
            </p>

            <div className="mt-10 p-6 bg-[#F8F8F8] rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2C5.6 2 2 5.6 2 10C2 14.4 5.6 18 10 18C14.4 18 18 14.4 18 10C18 5.6 14.4 2 10 2ZM9 14V8H11V14H9ZM9 7V5H11V7H9Z"
                    fill="#8B0000"
                  />
                </svg>
                <span className="text-[#8B0000] text-xs font-bold tracking-widest uppercase">
                  Typical Lead Time
                </span>
              </div>
              <p className="text-gray-700 text-sm">
                Standard orders confirmed within 24 hours. Rush orders available
                with 4-hour notice subject to fleet availability.
              </p>
            </div>
          </div>

          <div className="relative">
            {steps.map((s, i) => (
              <ProcessCard key={s.step} {...s} last={i === steps.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
