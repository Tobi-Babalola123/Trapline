"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Syncrude Canada", abbr: "SYNC" },
  { name: "Cenovus Energy", abbr: "CVE" },
  { name: "EllisDon", abbr: "ED" },
  { name: "Graham Construction", abbr: "GC" },
  { name: "Imperial Oil", abbr: "IMO" },
  { name: "Fluor Canada", abbr: "FLR" },
  { name: "Stuart Olson", abbr: "STO" },
];

export default function TrustedPartners() {
  return (
    <section className="bg-white border-y border-tt-border py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-center text-xs font-semibold tracking-[0.18em] uppercase text-tt-gray mb-10"
        >
          Trusted by Contractors, Energy Companies and Industrial Clients
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-default"
            >
              <div className="w-20 h-12 bg-tt-surface rounded-xl flex items-center justify-center border border-tt-border">
                <span
                  className="font-display text-lg font-black text-tt-gray tracking-wider"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {partner.abbr}
                </span>
              </div>
              <span className="font-body text-[11px] text-tt-muted font-medium">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
