"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const KEY_NUMBERS = [
  { value: "2012", label: "Founded" },
  { value: "5,000+", label: "m² Factory" },
  { value: "18+", label: "Product Types" },
];

const MILESTONES = [
  { year: "2012", event: "Company founder became domestic distributor of mirror aluminum materials", height: "h-16" },
  { year: "2017", event: "Dongguan Haiwo Electronics established and commenced production", height: "h-24" },
  { year: "2018 Q2", event: "Haiwo COB packaging products reached 90% domestic market share", height: "h-28" },
  { year: "2021 Q4", event: "Hayrey Integrated Technology founded", height: "h-32" },
  { year: "2024 Q2", event: "Hayrey Integrated Technology commenced production", height: "h-40" },
  { year: "2024 Q3", event: "Achieved ISO 9001 and ISO 14001 certification", height: "h-44" },
  { year: "2024 Q4", event: "Achieved IATF 16949 automotive quality certification", height: "h-48" },
  { year: "2025 Q3", event: "Completed IATF 16949 system certification upgrade", height: "h-56" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative section-spacing bg-navy-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="section-label">About</div>
          <h2 className="font-['Inter'] text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            Hayrey <span className="text-gradient-copper">Integrated</span>
          </h2>
        </div>

        {/* Text + Workshop Image side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24 md:mb-32">
          {/* Left: text + key numbers */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4 text-text-secondary text-sm md:text-base leading-relaxed mb-10">
              <p>
                Dongguan Hayrey Integrated Technology is a manufacturer specializing exclusively in metal-core printed circuit boards (MCPCBs), purpose-built for thermal management applications.
              </p>
              <p>
                Our product range spans aluminum-base, copper-base, and specialized thermal structures — one supplier for your entire MCPCB need.
              </p>
              <p>
                Factory-direct model eliminates trading company markups, giving clients both cost advantages and direct engineering access.
              </p>
            </div>

            {/* 3 key numbers */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8">
              {KEY_NUMBERS.map((n) => (
                <div key={n.label} className="text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black text-copper font-['Inter'] tracking-tight leading-none">
                    {n.value}
                  </div>
                  <div className="text-text-dim text-[10px] md:text-xs tracking-wider uppercase mt-2">
                    {n.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: workshop image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden min-h-[320px] lg:min-h-[420px] group"
          >
            <Image
              src="/images/workshop.jpg"
              alt="Hayrey Manufacturing Workshop"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-navy/70 to-transparent">
              <div className="text-text-primary text-sm md:text-base font-bold">Dongguan Factory</div>
              <div className="text-text-dim text-[10px] md:text-xs tracking-wider uppercase mt-1">5,000+ m² Production Facility</div>
            </div>
          </motion.div>
        </div>

        {/* Timeline — ascending bar chart style (rising trend) */}
        <div>
          <h3 className="font-['Inter'] text-lg md:text-xl font-bold text-text-primary mb-10 md:mb-14">
            Our Journey
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex items-end gap-2 md:gap-3 overflow-x-auto pb-4"
          >
            {MILESTONES.map((milestone) => (
              <motion.div
                key={milestone.year}
                variants={item}
                className="flex flex-col items-center flex-shrink-0 min-w-[80px] md:min-w-[100px] group"
              >
                {/* Year label on top */}
                <div className="text-copper text-[10px] md:text-xs font-bold font-['Inter'] tracking-wider mb-2 whitespace-nowrap">
                  {milestone.year}
                </div>
                {/* Rising bar */}
                <div
                  className={`w-12 md:w-16 ${milestone.height} bg-gradient-to-t from-copper/20 to-copper/60 rounded-t-md group-hover:from-copper/30 group-hover:to-copper transition-all duration-300`}
                />
                {/* Event text below */}
                <div className="text-text-muted text-[10px] md:text-xs leading-snug mt-3 text-center max-w-[90px] md:max-w-[120px]">
                  {milestone.event}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
