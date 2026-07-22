"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}
    >
      {eyebrow && (
        <p
          className={`font-body text-xs font-semibold tracking-[0.18em] uppercase mb-3 ${
            light ? "text-tt-gold" : "text-tt-green"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.92] tracking-tight mb-5 ${
          light ? "text-white" : "text-tt-dark"
        }`}
        style={{
          textTransform: "uppercase",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-base leading-relaxed ${
            light ? "text-white/65" : "text-tt-gray"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
