"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const fleet = [
  {
    title: "Heavy Haul Trucks",
    description:
      "Kenworth T880 and Peterbilt 389 units rated to 120+ tonnes. Fully permitted for oversize and overweight loads.",
    img: "/images/truck.webp",
    tag: "Up to 120T",
  },
  {
    title: "Flatbed Trailers",
    description:
      "48-ft and 53-ft flatbeds, extendable up to 80 ft for long steel, pipe and structural beams.",
    img: "/images/flatbed.webp",
    tag: "Up to 80ft",
  },
  {
    title: "Step Deck Trailers",
    description:
      "Single and double-drop step decks for over-height machinery that cannot be loaded on standard flatbeds.",
    img: "/images/stepdeck.webp",
    tag: "Over-Height",
  },
  {
    title: "RGN Trailers",
    description:
      "Removable gooseneck trailers for excavators, bulldozers and tracked equipment with ground-level loading.",
    img: "/images/rgn.webp",
    tag: "Ground Load",
  },
  {
    title: "Pilot Vehicles",
    description:
      "Certified pilot car escorts for wide loads, providing route advance, traffic control and compliance support.",
    img: "/images/pilotcar.webp",
    tag: "Certified",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 lg:py-32 bg-tt-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <SectionHeading
            eyebrow="Our Fleet"
            title="Purpose-Built for Every Haul"
            subtitle="Modern, well-maintained equipment matched precisely to the load — never a workaround."
          />
        </div>

        {/* Featured large card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden mb-5 group cursor-pointer"
        >
          <div className="aspect-[21/7] bg-tt-surface">
            <img
              src={fleet[0].img}
              alt={fleet[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-tt-dark/80 via-tt-dark/30 to-transparent flex items-end p-10">
            <div>
              <span className="inline-block font-body text-xs font-semibold text-tt-gold bg-tt-gold/15 border border-tt-gold/30 rounded-full px-3 py-1 mb-3 tracking-widest uppercase">
                {fleet[0].tag}
              </span>
              <h3 className="font-display text-4xl lg:text-5xl font-black text-white uppercase mb-2">
                {fleet[0].title}
              </h3>
              <p className="font-body text-sm text-white/65 max-w-md">
                {fleet[0].description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {fleet.slice(1).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-tt-surface">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-tt-dark/85 via-tt-dark/20 to-transparent flex flex-col justify-end p-6">
                <span className="inline-block font-body text-[10px] font-semibold text-tt-gold bg-tt-gold/15 border border-tt-gold/30 rounded-full px-2.5 py-0.5 mb-2 tracking-widest uppercase w-fit">
                  {item.tag}
                </span>
                <h3 className="font-display text-2xl font-black text-white uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="font-body text-xs text-white/55 mt-1.5 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
