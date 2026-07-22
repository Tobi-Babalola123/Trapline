"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/button";

const milestones = [
  {
    year: "2003",
    label: "Founded",
    text: "Trapline Transport established in Fort McMurray, AB, serving the oilsands construction boom.",
  },
  {
    year: "2008",
    label: "Expanded",
    text: "Fleet grew to 40+ units covering all of Western Canada with dedicated heavy haul divisions.",
  },
  {
    year: "2015",
    label: "Safety First",
    text: "Achieved COR certification and implemented GPS fleet monitoring across all assets.",
  },
  {
    year: "2023",
    label: "National",
    text: "500,000+ loads delivered. Operations now span coast-to-coast with 24/7 dispatch support.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-tt-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-tt-surface aspect-[4/5]">
              <img
                src="/images/ourstory.webp"
                alt="Trapline Transport heavy haul truck on a Canadian highway"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tt-dark/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-tt-green text-white rounded-2xl p-6 shadow-2xl"
            >
              <p className="font-display text-5xl font-black leading-none text-white">
                20+
              </p>
              <p className="font-body text-xs font-semibold text-white/70 uppercase tracking-wider mt-1">
                Years Moving
                <br />
                Canada
              </p>
            </motion.div>
          </motion.div>

          {/* Content column */}
          <div className="pt-4">
            <SectionHeading
              eyebrow="Our Story"
              title="Built on the Job Site, Not in a Boardroom"
              subtitle="We started with a single truck and a handshake. Twenty years later, Trapline Transport is one of Western Canada's most trusted names in heavy haul and specialized freight."
            />

            <div className="mt-12 flex flex-col gap-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 pb-8 relative"
                >
                  {/* Timeline spine */}
                  {i < milestones.length - 1 && (
                    <div className="absolute left-[19px] top-8 bottom-0 w-px bg-tt-border" />
                  )}
                  {/* Dot */}
                  <div className="w-10 h-10 rounded-full border-2 border-tt-green bg-white flex items-center justify-center shrink-0 z-10">
                    <div className="w-3 h-3 rounded-full bg-tt-green" />
                  </div>
                  <div className="pt-1.5">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="font-display text-xl font-black text-tt-dark uppercase tracking-wide">
                        {m.year}
                      </span>
                      <span className="font-body text-xs font-semibold text-tt-gold uppercase tracking-widest bg-tt-gold/10 px-2.5 py-0.5 rounded-full">
                        {m.label}
                      </span>
                    </div>
                    <p className="font-body text-sm text-tt-gray leading-relaxed">
                      {m.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4"
            >
              <Button variant="primary" size="md" href="#contact">
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
