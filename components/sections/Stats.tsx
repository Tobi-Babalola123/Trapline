"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";

const stats = [
  { value: "20", suffix: "+", label: "Years Experience" },
  { value: "500000", suffix: "+", label: "Loads Delivered" },
  { value: "99", suffix: "%", label: "On-Time Delivery" },
  { value: "24/7", suffix: "", label: "Dispatch Support" },
];

export default function Stats() {
  return (
    <section className="py-24 lg:py-32 bg-tt-dark relative overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1492551557933-34265f7af79e?w=1920&h=600&fit=crop&auto=format)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-tt-dark/60 via-transparent to-tt-dark/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="By the Numbers"
            title="Performance You Can Measure"
            subtitle="Our track record speaks louder than promises. Every load, every mile, every delivery."
            centered
            light
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} light />
          ))}
        </div>
      </div>
    </section>
  );
}
