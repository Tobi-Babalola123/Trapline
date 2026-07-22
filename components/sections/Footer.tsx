"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const footerLinks = {
  Services: [
    "Heavy Haul",
    "Oversized Loads",
    "General Freight",
    "Oilfield Transportation",
    "Construction Logistics",
    "Equipment Moving",
  ],
  Coverage: [
    "British Columbia",
    "Alberta",
    "Saskatchewan",
    "Manitoba",
    "Ontario",
    "Northern Territories",
  ],
  Company: [
    "About Us",
    "Safety Program",
    "Fleet",
    "Careers",
    "News",
    "Contact",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-tt-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 lg:grid-cols-5 gap-10 border-b border-white/8">
          {/* Brand */}
          <div className="mb-5">
            <Image
              src="/images/traap.png"
              alt="Trapline Transport"
              width={220}
              height={70}
              className="h-14 w-auto object-contain"
              priority
            />
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-widest mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-white/45 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30">
            © {new Date().getFullYear()} Trapline Transport Inc. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: <FaFacebookF size={16} />, label: "Facebook" },
              { icon: <FaLinkedin size={16} />, label: "LinkedIn" },
              { icon: <FaInstagram size={16} />, label: "Instagram" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="flex gap-5">
            <a
              href="#"
              className="font-body text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
