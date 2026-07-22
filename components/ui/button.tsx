"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-body font-semibold tracking-wide rounded-full cursor-pointer transition-all duration-200 select-none";

  const sizes = {
    sm: "text-sm px-5 py-2.5",
    md: "text-sm px-7 py-3.5",
    lg: "text-base px-9 py-4",
  };

  const variants = {
    primary:
      "bg-tt-green text-white hover:bg-tt-green-hover shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline:
      "border-2 border-tt-green text-tt-green bg-transparent hover:bg-tt-green hover:text-white",
    ghost:
      "border-2 border-white/40 text-white bg-transparent hover:bg-white/10 hover:border-white/70",
    gold: "bg-tt-gold text-tt-dark hover:bg-tt-gold-hover shadow-md hover:shadow-lg hover:-translate-y-0.5",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a href={href} className={cls} whileTap={{ scale: 0.97 }}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={cls}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
