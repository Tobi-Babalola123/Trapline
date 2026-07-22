"use client";

import { motion } from "framer-motion";
import { Shield, MapPin, Users, Wrench, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: <Shield size={24} />,
    title: "Safety First, Always",
    description:
      "COR certified with a rigorous safety management system. Every driver is WHMIS trained, defensive-driving certified, and subject to ongoing performance audits. Our safety record is our greatest asset.",
    img: "/images/inspection.webp",
  },
  {
    icon: <MapPin size={24} />,
    title: "Live GPS Tracking",
    description:
      "Every unit in our fleet is equipped with real-time GPS and telematics. You receive load status updates at every stage — dispatch, loading, en route, and delivered — with no surprises.",
    img: "/images/fleetmanasger.webp",
  },
  {
    icon: <Users size={24} />,
    title: "Experienced Drivers",
    description:
      "Our drivers average 12 years of heavy haul experience. They know remote roads, northern winters, and how to handle cargo that other carriers refuse. Background checks, drug testing, and annual recertifications are mandatory.",
    img: "/images/driver.webp",
  },
  {
    icon: <Wrench size={24} />,
    title: "Modern Equipment",
    description:
      "Our fleet is maintained to CSA and provincial standards. Preventive maintenance schedules, in-house mechanics, and a policy of retiring units before they become a liability means your freight is always on modern, reliable iron.",
    img: "/images/tools.webp",
  },
  {
    icon: <Zap size={24} />,
    title: "Fast Response",
    description:
      "We answer. 24 hours a day, 7 days a week, our dispatch team is available. Emergency moves, last-minute loads, and time-critical project freight receive the same attention as any planned shipment.",
    img: "/images/dispatch.webp",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 lg:mb-20">
          <SectionHeading
            eyebrow="Why Trapline"
            title="The Difference is in the Details"
            subtitle="Other carriers move freight. We manage logistics — with accountability at every stage of the haul."
          />
        </div>

        <div className="flex flex-col gap-10">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={`grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-tt-border shadow-sm ${
                i % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
              }`}
            >
              {/* Image */}
              <div className="aspect-[16/9] lg:aspect-auto bg-tt-surface overflow-hidden">
                <img
                  src={reason.img}
                  alt={reason.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="bg-tt-bg p-10 lg:p-14 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl bg-tt-green/10 flex items-center justify-center text-tt-green mb-6">
                  {reason.icon}
                </div>
                <h3 className="font-display text-4xl font-bold text-tt-dark uppercase leading-tight tracking-tight mb-4">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-tt-gray leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
