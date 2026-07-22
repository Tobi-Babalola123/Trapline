"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "What provinces does Trapline Transport operate in?",
    a: "Our primary operating area is Western Canada — British Columbia, Alberta, Saskatchewan and Manitoba. We also run loads into Ontario and the northern territories (Yukon, NWT) on a regular basis. For cross-country moves, contact our dispatch and we will coordinate a solution.",
  },
  {
    q: "What types of freight do you handle?",
    a: "We specialize in heavy haul, oversized and over-dimensional loads, oilfield equipment, construction machinery, industrial modules, transformers, vessels and general freight. If you are not sure whether we are the right fit, call us — we will tell you honestly.",
  },
  {
    q: "Are you fully insured for high-value cargo?",
    a: "Yes. We carry commercial general liability, motor truck cargo insurance, and additional umbrella coverage. Certificates of insurance are provided on request with every job. We can also accommodate project-specific insurance requirements for large construction contracts.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "For standard heavy haul moves, 3–5 business days is ideal. For oversized loads requiring provincial permits, routing surveys and pilot car coordination, 1–2 weeks is recommended. For emergency or time-critical moves, contact our dispatch line directly — we accommodate last-minute requests when equipment is available.",
  },
  {
    q: "Do you handle oversize permits and routing?",
    a: "Yes, completely. Our compliance team handles all provincial permits, oversized route surveys, highway authority notifications and pilot car arrangements. We have standing permit relationships across all western provinces which reduces lead time significantly.",
  },
  {
    q: "What qualifications do your heavy haul drivers hold?",
    a: "All Trapline drivers hold Class 1/A commercial licenses, undergo mandatory drug and alcohol testing, and complete annual defensive driving certification. Drivers operating in oilsands areas hold H2S Alive and CSTS certifications. We maintain thorough driver qualification files for all auditing requirements.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Common Questions"
              title="Straight Answers, No Runaround"
              subtitle="Everything you need to know before your first load. Still have questions? Call us directly."
            />
            <div className="mt-8 p-6 bg-tt-bg rounded-2xl border border-tt-border">
              <p className="font-body text-sm text-tt-gray leading-relaxed mb-4">
                Don't see your question? Our team is available around the clock.
              </p>
              <a
                href="tel:+17805550100"
                className="font-display text-2xl font-black text-tt-dark hover:text-tt-green transition-colors"
              >
                250-517-8714
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`rounded-xl border transition-colors overflow-hidden ${
                  open === i
                    ? "border-tt-green bg-tt-bg"
                    : "border-tt-border bg-white hover:border-tt-gray/40"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 p-6 text-left"
                >
                  <span className="font-body text-sm font-semibold text-tt-dark leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      open === i
                        ? "bg-tt-green text-white"
                        : "bg-tt-surface text-tt-gray"
                    }`}
                  >
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="font-body text-sm text-tt-gray leading-relaxed px-6 pb-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
