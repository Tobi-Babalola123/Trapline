"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const provinces = [
  {
    name: "British Columbia",
    abbr: "BC",
    cities: "Vancouver, Prince George, Fort St. John",
    primary: true,
  },
  {
    name: "Alberta",
    abbr: "AB",
    cities: "Edmonton, Calgary, Fort McMurray, Lethbridge",
    primary: true,
  },
  {
    name: "Saskatchewan",
    abbr: "SK",
    cities: "Saskatoon, Regina, Estevan",
    primary: true,
  },
  {
    name: "Manitoba",
    abbr: "MB",
    cities: "Winnipeg, Brandon, Thompson",
    primary: true,
  },
  {
    name: "Ontario",
    abbr: "ON",
    cities: "Toronto, Thunder Bay, Sudbury",
    primary: false,
  },
  {
    name: "Yukon & NWT",
    abbr: "YT/NT",
    cities: "Whitehorse, Yellowknife, Hay River",
    primary: false,
  },
];

export default function Coverage() {
  return (
    <section
      id="coverage"
      className="py-24 lg:py-32 bg-tt-dark relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="Where We Operate"
              title="Coast to Coast Coverage"
              subtitle="Primary operations across Western Canada with full national reach. If your project needs it moved, we can get there."
              light
            />

            <div className="mt-10 flex flex-col gap-3">
              {provinces.map((p, i) => (
                <motion.div
                  key={p.abbr}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className={`flex items-start gap-4 p-4 rounded-xl border transition-colors ${
                    p.primary
                      ? "bg-white/8 border-tt-green/50 hover:bg-white/12"
                      : "bg-white/4 border-white/10 hover:bg-white/8"
                  }`}
                >
                  <div
                    className={`w-12 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      p.primary ? "bg-tt-green" : "bg-white/10"
                    }`}
                  >
                    <span className="font-display text-sm font-black text-white">
                      {p.abbr}
                    </span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-white mb-0.5">
                      {p.name}
                    </p>
                    <p className="font-body text-xs text-white/45">
                      {p.cities}
                    </p>
                  </div>
                  {p.primary && (
                    <span className="ml-auto font-body text-[10px] font-semibold text-tt-gold bg-tt-gold/15 border border-tt-gold/25 rounded-full px-2.5 py-1 uppercase tracking-widest whitespace-nowrap">
                      Primary
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stylized Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md">
              <svg
                viewBox="0 0 440 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                {/* Background */}
                <rect width="440" height="380" rx="20" fill="#1a1a1a" />

                {/* Province blocks — simplified Western Canada grid */}
                {/* YT */}
                <rect
                  x="30"
                  y="30"
                  width="80"
                  height="70"
                  rx="6"
                  fill="#2a2a2a"
                  stroke="#333"
                  strokeWidth="1"
                />
                <text
                  x="70"
                  y="70"
                  textAnchor="middle"
                  fill="#ffffff50"
                  fontSize="13"
                  fontWeight="700"
                >
                  YT/NT
                </text>

                {/* BC */}
                <rect
                  x="30"
                  y="115"
                  width="80"
                  height="130"
                  rx="6"
                  fill="#355E3B"
                  stroke="#4a7a52"
                  strokeWidth="1.5"
                />
                <text
                  x="70"
                  y="185"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="900"
                >
                  BC
                </text>

                {/* AB */}
                <rect
                  x="125"
                  y="115"
                  width="80"
                  height="130"
                  rx="6"
                  fill="#355E3B"
                  stroke="#4a7a52"
                  strokeWidth="1.5"
                />
                <text
                  x="165"
                  y="185"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="900"
                >
                  AB
                </text>

                {/* SK */}
                <rect
                  x="220"
                  y="115"
                  width="80"
                  height="130"
                  rx="6"
                  fill="#355E3B"
                  stroke="#4a7a52"
                  strokeWidth="1.5"
                />
                <text
                  x="260"
                  y="185"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="900"
                >
                  SK
                </text>

                {/* MB */}
                <rect
                  x="315"
                  y="115"
                  width="80"
                  height="130"
                  rx="6"
                  fill="#355E3B"
                  stroke="#4a7a52"
                  strokeWidth="1.5"
                />
                <text
                  x="355"
                  y="185"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="900"
                >
                  MB
                </text>

                {/* ON - secondary */}
                <rect
                  x="315"
                  y="260"
                  width="95"
                  height="80"
                  rx="6"
                  fill="#2a2a2a"
                  stroke="#333"
                  strokeWidth="1"
                />
                <text
                  x="362"
                  y="305"
                  textAnchor="middle"
                  fill="#ffffff40"
                  fontSize="14"
                  fontWeight="700"
                >
                  ON
                </text>

                {/* Gold dots on primary cities */}
                <circle cx="155" cy="230" r="5" fill="#C89B3C" />
                <circle cx="165" cy="160" r="4" fill="#C89B3C" opacity="0.7" />
                <circle cx="250" cy="200" r="4" fill="#C89B3C" opacity="0.7" />
                <circle cx="345" cy="220" r="4" fill="#C89B3C" opacity="0.7" />
                <circle cx="65" cy="220" r="4" fill="#C89B3C" opacity="0.7" />

                {/* Legend */}
                <rect
                  x="30"
                  y="320"
                  width="12"
                  height="12"
                  rx="2"
                  fill="#355E3B"
                />
                <text x="48" y="331" fill="#ffffff70" fontSize="11">
                  Primary Coverage
                </text>
                <circle cx="182" cy="326" r="5" fill="#C89B3C" />
                <text x="193" y="331" fill="#ffffff70" fontSize="11">
                  Major Terminals
                </text>

                {/* Title */}
                <text
                  x="30"
                  y="25"
                  fill="#C89B3C"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="3"
                >
                  COVERAGE MAP
                </text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
