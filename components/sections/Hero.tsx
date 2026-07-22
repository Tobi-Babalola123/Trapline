"use client";

import { motion } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import Button from "@/components/ui/button";

const trustItems = [
  "Family Owned",
  "Nationwide Coverage",
  "20+ Years Experience",
  "Fully Insured",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background image */}
      <div
        className="absolute inset-0 brightness-125"
        style={{
          backgroundImage: "url(/images/heroimage.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-tt-dark/80 via-tt-dark/55 to-tt-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-tt-dark/50 via-transparent to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-xs font-semibold tracking-[0.22em] uppercase text-tt-gold mb-5"
            >
              Canadian Heavy Haul Specialists
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase leading-[0.88] tracking-tight text-white mb-8"
            >
              Reliable
              <br />
              <span className="text-tt-gold">Transportation</span>
              <br />
              Across Canada
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-body text-base sm:text-lg text-white/70 leading-relaxed mb-10 max-w-xl"
            >
              Heavy haul, oversized freight and specialized transportation
              solutions delivered safely, efficiently and on schedule across
              every province.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="gold" size="lg" href="#contact">
                Request a Quote
              </Button>
              <Button variant="ghost" size="lg" href="#fleet">
                View Fleet
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="relative z-10 bg-tt-dark/80 backdrop-blur-sm border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/8">
            {trustItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.08 }}
                className="flex items-center gap-3 py-5 px-6 first:pl-0"
              >
                <div className="w-5 h-5 rounded-full bg-tt-green/20 flex items-center justify-center shrink-0">
                  <Check size={11} className="text-tt-gold" />
                </div>
                <span className="font-body text-sm font-medium text-white/75">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-24 right-10 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs text-white/30 tracking-widest uppercase rotate-90 origin-center">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ChevronDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
