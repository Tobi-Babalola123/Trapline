"use client";

import { motion } from "framer-motion";
import {
  Flame,
  Mountain,
  Trees,
  HardHat,
  Building2,
  Wheat,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const industries = [
  {
    icon: <Flame size={28} />,
    name: "Oil & Gas",
    description:
      "Oilsands, SAGD, pipeline and midstream infrastructure freight.",
  },
  {
    icon: <Mountain size={28} />,
    name: "Mining",
    description:
      "Equipment moves, mill components and ore processing machinery.",
  },
  {
    icon: <Trees size={28} />,
    name: "Forestry",
    description:
      "Logging equipment, sawmill components and harvesting machinery.",
  },
  {
    icon: <HardHat size={28} />,
    name: "Construction",
    description:
      "Civil, industrial and commercial project logistics and heavy lifts.",
  },
  {
    icon: <Building2 size={28} />,
    name: "Infrastructure",
    description:
      "Bridge beams, utility transformers, modular buildings and precast.",
  },
  {
    icon: <Wheat size={28} />,
    name: "Agriculture",
    description:
      "Grain handling equipment, combines and large farm machinery moves.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-tt-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 text-center">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for Heavy Industry"
            subtitle="We specialize in the sectors where standard freight solutions fail — complex loads, remote sites, tight deadlines."
            centered
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-8 border border-tt-border shadow-sm hover:shadow-lg transition-all duration-300 flex gap-5 items-start cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-tt-green flex items-center justify-center text-white shrink-0">
                {industry.icon}
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-tt-dark uppercase tracking-tight mb-1.5">
                  {industry.name}
                </h3>
                <p className="font-body text-sm text-tt-gray leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
