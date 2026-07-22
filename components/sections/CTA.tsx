"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Button from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-tt-dark relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=600&fit=crop&auto=format)",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-tt-green/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-body text-xs font-semibold text-tt-gold tracking-[0.2em] uppercase mb-5"
        >
          Ready to Move?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.9] text-white mb-8 tracking-tight"
        >
          Let's Move Your
          <br />
          <span className="text-tt-gold">Next Project</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-base text-white/60 leading-relaxed mb-12 max-w-xl mx-auto"
        >
          Get a quote within 2 business hours. Our dispatch team is standing by
          24/7 for time-sensitive requests.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="gold" size="lg" href="#contact">
            Request a Quote <ArrowRight size={16} />
          </Button>
          <a
            href="tel:+17805550100"
            className="inline-flex items-center justify-center gap-2.5 font-body text-base font-semibold text-white/70 hover:text-white transition-colors py-4 px-9"
          >
            <Phone size={17} />
            250-517-8714
          </a>
        </motion.div>
      </div>
    </section>
  );
}
