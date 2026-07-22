"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: string;
  suffix?: string;
  label: string;
  index?: number;
  light?: boolean;
}

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = 16;
          const steps = duration / step;
          const increment = target / steps;
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setDisplay(target);
              clearInterval(timer);
            } else {
              setDisplay(Math.floor(start));
            }
          }, step);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatCard({
  value,
  suffix = "",
  label,
  index = 0,
  light = false,
}: StatCardProps) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const isNonNumeric = isNaN(numericValue);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`flex flex-col items-center text-center p-8 rounded-2xl ${
        light
          ? "bg-white/10 backdrop-blur-sm"
          : "bg-white border border-tt-border shadow-sm"
      }`}
    >
      <div
        className={`font-display ${
          value.length > 4
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-5xl sm:text-6xl lg:text-7xl"
        } font-black leading-none tracking-tight mb-2 whitespace-nowrap ${
          light ? "text-white" : "text-tt-green"
        }`}
      >
        {isNonNumeric ? (
          value
        ) : (
          <CountUp target={numericValue} suffix={suffix} />
        )}
      </div>
      <p
        className={`font-body text-sm font-medium tracking-wide uppercase ${light ? "text-white/60" : "text-tt-gray"}`}
      >
        {label}
      </p>
    </motion.div>
  );
}
