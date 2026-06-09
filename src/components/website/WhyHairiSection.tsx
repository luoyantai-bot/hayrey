"use client";

import { motion } from "framer-motion";

const NUMBERS = [
  { value: "18+", label: "Product Types" },
  { value: "Direct", label: "Factory" },
  { value: "7 Days", label: "Sample Lead Time" },
  { value: "9 Years", label: "Experience" },
  { value: "100%", label: "IPC Compliant" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function WhyHairiSection() {
  return (
    <section className="relative section-spacing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="section-label">Why Hayrey</div>
          <h2 className="font-['Inter'] text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            Why Choose <span className="text-gradient-copper">Hayrey</span>
          </h2>
        </div>

        {/* 5 big numbers — unified layout ensures alignment */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6"
        >
          {NUMBERS.map((n) => (
            <motion.div
              key={n.label}
              variants={item}
              className="text-center flex flex-col items-center justify-start py-4"
            >
              {/* Fixed-height number row to ensure baseline alignment */}
              <div className="h-[56px] sm:h-[64px] md:h-[72px] lg:h-[84px] flex items-end justify-center">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-copper font-['Inter'] tracking-tight leading-none">
                  {n.value}
                </div>
              </div>
              {/* Label row — consistent top margin */}
              <div className="text-text-secondary text-xs md:text-sm font-medium mt-3 tracking-wider whitespace-nowrap">
                {n.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
