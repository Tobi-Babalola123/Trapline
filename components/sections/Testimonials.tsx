"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    quote:
      "Trapline handled a 180-tonne reactor vessel move through the Rockies for us. Zero incidents, delivered two days ahead of schedule. They are the only carrier we trust for critical path lifts.",
    name: "Darren MacLeod",
    title: "Project Manager",
    company: "Syncrude Canada",
    rating: 5,
  },
  {
    quote:
      "We've used them for three consecutive mine expansions. Their drivers know the northern routes better than anyone, and their dispatch team actually answers the phone at 3am when you need them.",
    name: "Sarah Tran",
    title: "Site Logistics Lead",
    company: "Teck Resources",
    rating: 5,
  },
  {
    quote:
      "Competitive pricing, modern equipment and absolutely no surprises on permits. They handled all the routing coordination with highway authorities so we didn't have to. Outstanding service.",
    name: "Mike Kowalski",
    title: "VP Operations",
    company: "Graham Construction",
    rating: 5,
  },
  {
    quote:
      "We had a generator set arrive damaged from a previous carrier. Switched to Trapline the next day. They've been hauling our transformer assets across Western Canada for six years without a single claim.",
    name: "Priya Anand",
    title: "Procurement Director",
    company: "Enmax Energy",
    rating: 5,
  },
  {
    quote:
      "Their pilot car team is exceptional. Coordinated a 26-metre overwidth load through three provinces seamlessly. The whole crew was professional, safety-conscious and genuinely good to work with.",
    name: "Brad Svensson",
    title: "Field Superintendent",
    company: "EllisDon",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const getVisible = () => {
    const prev1 = (current - 1 + testimonials.length) % testimonials.length;
    const next1 = (current + 1) % testimonials.length;
    return [prev1, current, next1];
  };

  return (
    <section className="py-24 lg:py-32 bg-tt-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Client Stories"
            title="Trusted by Industry Leaders"
            subtitle="The projects that matter most demand carriers who deliver. Here's what our clients say."
          />
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-tt-border flex items-center justify-center text-tt-gray hover:border-tt-green hover:text-tt-green transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-tt-border flex items-center justify-center text-tt-gray hover:border-tt-green hover:text-tt-green transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden lg:grid grid-cols-3 gap-5 mb-10">
          <AnimatePresence mode="popLayout">
            {getVisible().map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: idx === current ? 1 : 0.55,
                  scale: idx === current ? 1 : 0.97,
                }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <TestimonialCard {...testimonials[idx]} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile: single card */}
        <div className="lg:hidden mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
            >
              <TestimonialCard {...testimonials[current]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-2 bg-tt-green"
                  : "w-2 h-2 bg-tt-border hover:bg-tt-gray"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
