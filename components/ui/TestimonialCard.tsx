"use client";

import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  name,
  title,
  company,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-tt-dark rounded-2xl p-8 md:p-10 flex flex-col gap-6 h-full">
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} fill="#C89B3C" className="text-tt-gold" />
        ))}
      </div>
      <blockquote className="font-body text-lg text-white/85 leading-relaxed flex-1">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        <div className="w-11 h-11 rounded-full bg-tt-green flex items-center justify-center text-white font-display text-lg font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-body text-sm font-semibold text-white">{name}</p>
          <p className="font-body text-xs text-white/50">
            {title}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
