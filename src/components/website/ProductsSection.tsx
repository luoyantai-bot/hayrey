"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Zap, ArrowRight, Camera, FileCheck, FileText, Coins, CheckCircle, Truck } from "lucide-react";
import Image from "next/image";

const CAPABILITIES = [
  {
    icon: Layers,
    title: "Aluminum Base",
    coreParam: "1.0–2.0 W/mK",
    color: "#60A5FA",
    image: "/images/products/aluminum-base.jpg",
    photoLabel: "Aluminum base MCPCB product photo",
  },
  {
    icon: Cpu,
    title: "Copper Base",
    coreParam: "2.0–8.0 W/mK",
    color: "#D97706",
    image: "/images/products/copper-base.jpg",
    photoLabel: "Copper base MCPCB product photo",
  },
  {
    icon: Zap,
    title: "Special Structures",
    coreParam: "Up to 12.0 W/mK",
    color: "#A78BFA",
    image: "/images/products/special-structures.jpg",
    photoLabel: "Special structure MCPCB product photo",
  },
];

const STEPS = [
  { icon: FileCheck, label: "NDA" },
  { icon: FileText, label: "Submit" },
  { icon: Coins, label: "Quote" },
  { icon: CheckCircle, label: "Confirm" },
  { icon: Truck, label: "Deliver" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProductsSection() {
  return (
    <section id="products" className="relative section-spacing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="section-label">Products</div>
          <h2 className="font-['Inter'] text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            MCPCB <span className="text-gradient-copper">Product Matrix</span>
          </h2>
        </div>

        {/* Product Cards — image + name + 1 number only */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {CAPABILITIES.map((cap) => (
            <motion.div
              key={cap.title}
              variants={item}
              className="group bg-navy-card border border-border-dark rounded-xl overflow-hidden hover:border-copper/20 transition-all duration-300"
            >
              {/* Product image */}
              <div className="relative h-56 md:h-72 overflow-hidden bg-navy-light">
                <Image
                  src={cap.image}
                  alt={cap.photoLabel}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-icon')) {
                      parent.innerHTML = `
                        <div class="fallback-icon flex flex-col items-center justify-center h-full gap-2">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:rgba(100,116,139,0.4)"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                          <span style="color:rgba(100,116,139,0.4);font-size:10px;letter-spacing:0.1em;text-transform:uppercase">${cap.image.split('/').pop()}</span>
                        </div>`;
                    }
                  }}
                />
              </div>

              {/* Card content — name + 1 number */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${cap.color}15` }}
                  >
                    <cap.icon size={20} style={{ color: cap.color }} />
                  </div>
                  <h3
                    className="font-['Inter'] text-xl font-bold"
                    style={{ color: cap.color }}
                  >
                    {cap.title}
                  </h3>
                </div>
                <div className="font-['JetBrains_Mono'] text-2xl font-bold text-text-primary tracking-tight">
                  {cap.coreParam}
                </div>
                <div className="text-text-dim text-[10px] tracking-wider uppercase mt-1">
                  Thermal Conductivity
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Link to full specs */}
        <div className="mt-12 md:mt-16 text-center">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-copper text-sm font-bold tracking-wider uppercase hover:text-copper-light transition-colors inline-flex items-center gap-2"
          >
            View Full Specifications
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Sampling Process — large, clear horizontal timeline */}
        <div className="mt-24 md:mt-32">
          <div className="section-label">Process</div>
          <h3 className="font-['Inter'] text-2xl md:text-3xl font-bold text-text-primary mb-12 md:mb-16">
            Sampling Flow
          </h3>
          <div className="flex items-start justify-between gap-2 md:gap-0">
            {STEPS.map((s, i) => (
              <div key={s.label} className="flex items-center flex-1">
                <div className="flex flex-col items-center gap-3 min-w-[64px] md:min-w-[80px]">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-copper/10 border border-copper/25 flex items-center justify-center">
                    <s.icon size={24} className="text-copper" />
                  </div>
                  <span className="text-text-secondary text-xs md:text-sm font-bold tracking-wider">
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="flex-1 h-px bg-border-dark mx-2 md:mx-4 mt-[-20px]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
