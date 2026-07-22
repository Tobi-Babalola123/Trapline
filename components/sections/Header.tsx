"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, Menu, ChevronRight } from "lucide-react";
import Button from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Coverage", href: "#coverage" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-tt-dark/95 backdrop-blur-md shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <Image
              src="/images/traap.png"
              alt="Trapline Transport"
              width={220}
              height={60}
              priority
              className="h-12 w-auto lg:h-14"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm font-medium text-white/75 hover:text-white transition-colors duration-150 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+17805550100"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium font-body transition-colors"
            >
              <Phone size={15} />
              250-517-8714
            </a>
            <Button variant="gold" size="sm" href="#contact">
              Request Quote
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile slide-out */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[60]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-tt-dark z-[70] flex flex-col p-8"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-white text-xl font-black tracking-widest uppercase">
                  Trapline Transport
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white/60 hover:text-white"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between text-white/75 hover:text-white font-body text-base font-medium py-3.5 border-b border-white/8 transition-colors"
                  >
                    {link.label}
                    <ChevronRight size={16} className="text-tt-gold" />
                  </a>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="tel:+17805550100"
                  className="flex items-center justify-center gap-2 text-white/80 text-sm font-body py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                >
                  <Phone size={15} />
                  250-517-8714
                </a>
                <Button
                  variant="gold"
                  href="#contact"
                  className="w-full justify-center"
                >
                  Request a Quote
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
