"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Abbey C.",
    date: "Professional, Efficient, Hardworking",
    rating: 5,
    avatar: "SM",
    color: "#2563EB",
    text: "Had On Your Mark help myself move to my new house.These guys and their team are absolutely amazing and I would highly recommend them to anyone. They're very professional, efficient, hardworking and polite.Their office staff was also very accommodating with finding a date and time that worked for me.",
  },
  {
    name: "Laura C",
    date: "Amazing Job",
    rating: 5,
    avatar: "JR",
    color: "#059669",
    text: "OYM did an amazing job helping us move furniture into our new home! They coordinated furniture pick up from the Calgary based warehouse and delivered to our home in Fernie. They were efficient and friendly at a great price. I would hands down have them deliver my furniture again!",
  },
  {
    name: "Kathy M.",
    city: "Happy to Recommend Them",
    rating: 5,
    avatar: "LT",
    color: "#7C3AED",
    text: "Mark did an amazing job getting an extremely heavy and large piece of furniture from a store in Vancouver into my home in Edmonton. He, Aaron and Rueben took extra care on the load in and made a very difficult job look easy. I'm happy to recommend On Your Mark Delivery for all your moving needs!",
  },
  {
    name: "Korin P.",
    city: "Highly Recommended",
    rating: 5,
    avatar: "MB",
    color: "#DC2626",
    text: "On your Mark has done several deliveries for me they have always done an awesome job. Friendly courteous and on time. They have moved stuff for me from Edmonton and Vancouver never any problems. Highly recommend them",
  },
  {
    name: "Alisa R.",
    city: "Professional and Friendly",
    rating: 5,
    avatar: "PK",
    color: "#D97706",
    text: "I was really surprised to read the other reviews, as my experience with On Your Mark moving was the COMPLETE opposite!! They moved me from Victoria to Edmonton, and it was the least stressful move I have ever had (and I have moved a LOT!) They were professional and friendly from front end planning, the move itself, through follow up after delivery. I would use them again in a heartbeat, and would also happily recommend them.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#C8A24F">
          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.3l-3.7 1.9.7-4.1-3-2.9 4.2-.7L8 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const review = reviews[current];

  return (
    <section id="reviews" className="py-24 bg-[#111827] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#C8A24F]" />
            <span className="text-[#C8A24F] text-xs font-bold tracking-[0.12em] uppercase">
              Google Reviews
            </span>
            <div className="w-8 h-px bg-[#C8A24F]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            What Our Customers Say
          </h2>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-2xl px-6 py-3 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#C8A24F"
                >
                  <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.3l-3.7 1.9.7-4.1-3-2.9 4.2-.7L8 1z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-bold text-lg">4.9</span>
            <span className="text-white/50 text-sm">
              based on Google Reviews
            </span>
            <img
              src="/images/googlereviews.png"
              alt="Google"
              className="h-8 opacity-60"
            />
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-[28px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-white/[0.06] border border-white/10 rounded-[28px] p-8 md:p-12"
              >
                {/* Large quote mark */}
                <div className="text-[#C8A24F]/20 text-[120px] font-serif leading-none select-none -mt-4 -mb-8">
                  &ldquo;
                </div>

                <p className="text-white/85 text-xl md:text-2xl leading-relaxed font-medium mb-8 relative z-10">
                  {review.text}
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: review.color }}
                    >
                      {review.avatar}
                    </div>
                    <div>
                      <p className="text-white font-bold">{review.name}</p>
                      <p className="text-white/50 text-sm">
                        {review.city} · {review.date}
                      </p>
                    </div>
                  </div>
                  <Stars count={review.rating} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() =>
                go((current - 1 + reviews.length) % reviews.length)
              }
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 3L5 8l5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2 bg-[#C8A24F]"
                      : "w-2 h-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go((current + 1) % reviews.length)}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
