"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl p-7 border border-tt-border shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col gap-5 cursor-pointer"
    >
      <div className="w-12 h-12 rounded-xl bg-tt-green/10 flex items-center justify-center text-tt-green group-hover:bg-tt-green group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-display text-2xl font-bold text-tt-dark mb-2 uppercase tracking-tight">
          {title}
        </h3>
        <p className="font-body text-sm text-tt-gray leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-2 text-tt-green text-sm font-semibold">
        <span className="font-body tracking-wide">Learn More</span>
        <motion.span
          className="inline-flex"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
        >
          <ArrowRight size={16} />
        </motion.span>
      </div>
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-tt-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
    </motion.div>
  );
}
