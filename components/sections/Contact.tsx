"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/button";

const contactInfo = [
  {
    icon: <MapPin size={18} />,
    label: "Head Office",
    value: "391 Glenmary Rd, Enderby, BC V4Y 4H5, Canada",
  },
  {
    icon: <Phone size={18} />,
    label: "Dispatch (24/7)",
    value: "250-517-8714",
    href: "tel:+1250-517-8714",
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "scott@traplinetransport.ca",
    href: "mailto:scott@traplinetransport.ca",
  },
  {
    icon: <Clock size={18} />,
    label: "Office Hours",
    value: "Mon–Fri 7:00am–6:00pm MT\nDispatch available 24/7",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full font-body text-sm bg-tt-bg border border-tt-border rounded-xl px-4 py-3.5 text-tt-dark placeholder-tt-muted focus:outline-none focus:border-tt-green transition-colors";

  return (
    <section id="contact" className="py-24 lg:py-32 bg-tt-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact info */}
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Request a Quote or Just Talk to Us"
              subtitle="Our team responds to quote requests within 2 business hours. For urgent loads, call dispatch directly."
            />

            <div className="mt-10 flex flex-col gap-4">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="flex gap-4 p-5 bg-white rounded-xl border border-tt-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-tt-green/10 flex items-center justify-center text-tt-green shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold text-tt-muted uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-sm font-medium text-tt-dark hover:text-tt-green transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-sm font-medium text-tt-dark whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl border border-tt-border shadow-sm p-8 lg:p-10"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-tt-green/10 flex items-center justify-center text-tt-green mb-5">
                  <Send size={28} />
                </div>
                <h3 className="font-display text-4xl font-black text-tt-dark uppercase mb-3">
                  Message Sent
                </h3>
                <p className="font-body text-sm text-tt-gray leading-relaxed">
                  We'll be in touch within 2 business hours. For urgent matters,
                  call (780) 555-0100.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-3xl font-black text-tt-dark uppercase tracking-tight mb-6">
                  Request a Quote
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      className={inputClass}
                      placeholder="Full Name *"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                    <input
                      className={inputClass}
                      placeholder="Company"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      className={inputClass}
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                    <input
                      className={inputClass}
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>
                  <select
                    className={`${inputClass} cursor-pointer`}
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  >
                    <option value="" disabled>
                      Select Service Type
                    </option>
                    <option>Heavy Haul</option>
                    <option>Oversized Load</option>
                    <option>General Freight</option>
                    <option>Oilfield Transportation</option>
                    <option>Construction Logistics</option>
                    <option>Equipment Moving</option>
                  </select>
                  <textarea
                    className={`${inputClass} resize-none`}
                    rows={4}
                    placeholder="Describe your load — dimensions, weight, origin, destination, timeline..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center mt-2"
                  >
                    Submit Quote Request
                  </Button>
                  <p className="font-body text-xs text-tt-muted text-center leading-relaxed">
                    We respond within 2 business hours. All enquiries are
                    confidential.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
