"use client";

import {
  Truck,
  Package,
  Fuel,
  HardHat,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    icon: <Truck size={22} />,
    title: "Heavy Haul",
    description:
      "Permitted oversized loads with full route survey, pilot escort coordination and certified operators for the most demanding hauls.",
  },
  {
    icon: <AlertTriangle size={22} />,
    title: "Oversized Loads",
    description:
      "Wide and over-height freight requiring special permitting, route planning and traffic control coordination across provincial borders.",
  },
  {
    icon: <Package size={22} />,
    title: "General Freight",
    description:
      "Time-sensitive LTL and FTL freight moved reliably on a network of flatbeds, vans and step-decks across all of Canada.",
  },
  {
    icon: <Fuel size={22} />,
    title: "Oilfield Transportation",
    description:
      "Purpose-built equipment for oilsands, SAGD and pipeline sectors. Remote access, sour-gas qualified drivers, 24/7 dispatch.",
  },
  {
    icon: <HardHat size={22} />,
    title: "Construction Logistics",
    description:
      "Project freight management for civil and industrial construction sites — modular buildings, steel, precast and heavy equipment.",
  },
  {
    icon: <Wrench size={22} />,
    title: "Equipment Moving",
    description:
      "Heavy machinery, mining equipment, cranes and industrial assets moved safely with proper rigging, blocking and bracing.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="What We Do"
            title="Specialized Services for Every Load"
            subtitle="From single oversized moves to ongoing project logistics — we have the equipment, permits and expertise."
          />
          <p className="font-body text-sm text-tt-gray max-w-xs lg:text-right leading-relaxed shrink-0">
            Every project is handled by experienced specialists who understand
            the complexity of industrial freight.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
