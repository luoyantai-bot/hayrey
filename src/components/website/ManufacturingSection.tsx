"use client";

import { motion } from "framer-motion";
import { Building2, Settings, ShieldCheck, Clock } from "lucide-react";

const PROCESS_STEPS = [
  { step: "Raw Material Inspection", desc: "Incoming copper, aluminum, and dielectric layer quality verification" },
  { step: "Drilling", desc: "Precision CNC drilling for vias and mounting holes" },
  { step: "Lamination", desc: "Multi-layer pressing with controlled temperature and pressure" },
  { step: "Etching", desc: "Fine-line copper patterning with tight tolerance control" },
  { step: "Surface Finish", desc: "HASL, ENIG, OSP, or custom surface treatment application" },
  { step: "Testing & QC", desc: "AOI, electrical testing, thermal shock, and peel strength verification" },
];

const QC_ITEMS = [
  { title: "AOI Inspection", desc: "Automated optical inspection on every panel for defect detection" },
  { title: "Thermal Shock Testing", desc: "Cycling between extreme temperatures to verify board reliability" },
  { title: "Peel Strength Testing", desc: "Measuring copper-to-substrate adhesion to ensure long-term durability" },
  { title: "Electrical Testing", desc: "Full continuity and isolation testing per IPC-6012 standards" },
];

const LEAD_TIMES = [
  { type: "Quick Turn", time: "5–7 days", desc: "For urgent prototyping needs", color: "#4ADE80" },
  { type: "Standard", time: "10–15 days", desc: "Balanced speed and cost", color: "#60A5FA" },
  { type: "Volume Production", time: "As quoted", desc: "Optimized for mass production", color: "#B87333" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ManufacturingSection() {
  return (
    <section id="manufacturing" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-copper text-xs tracking-[0.2em] uppercase mb-3 font-medium">
            Manufacturing
          </div>
          <h2 className="font-['Syne'] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Dongguan <span className="text-gradient-copper">Factory</span>
          </h2>
          <p className="text-text-muted max-w-2xl text-sm md:text-base leading-relaxed">
            Our manufacturing facility in Dongguan, China combines advanced equipment with
            rigorous quality control to deliver consistent, high-performance MCPCBs.
          </p>
        </div>

        {/* Factory Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Building2, label: "Facility", value: "5,000+ m² production floor" },
            { icon: Settings, label: "Equipment", value: "Full MCPCB production line" },
            { icon: ShieldCheck, label: "Quality", value: "IPC & IATF certified processes" },
          ].map((stat) => (
            <div key={stat.label} className="bg-navy-card border border-border-dark rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center flex-shrink-0">
                <stat.icon size={22} className="text-copper" />
              </div>
              <div>
                <div className="text-text-dim text-xs tracking-wider uppercase">{stat.label}</div>
                <div className="text-text-primary text-sm font-bold mt-0.5">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Production Flow */}
        <div className="mb-16">
          <h3 className="font-['Syne'] text-xl md:text-2xl font-bold text-text-primary mb-8">
            Production Flow
          </h3>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border-dark hidden md:block" />
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4"
            >
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.step}
                  variants={item}
                  className="flex items-start gap-4"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-navy-card border border-border-dark flex items-center justify-center text-copper font-bold text-sm font-['Syne']">
                      {i + 1}
                    </div>
                  </div>
                  <div className="bg-navy-card border border-border-dark rounded-lg p-4 flex-1">
                    <div className="text-text-primary text-sm font-bold">{step.step}</div>
                    <div className="text-text-muted text-xs mt-1 leading-relaxed">{step.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Quality Control */}
        <div className="mb-16">
          <h3 className="font-['Syne'] text-xl md:text-2xl font-bold text-text-primary mb-8">
            Quality Control
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {QC_ITEMS.map((qc) => (
              <motion.div
                key={qc.title}
                variants={item}
                className="bg-navy-card border border-border-dark rounded-lg p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-copper" />
                  <h4 className="text-text-primary text-sm font-bold">{qc.title}</h4>
                </div>
                <p className="text-text-muted text-xs leading-relaxed pl-5">{qc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Lead Times */}
        <div>
          <h3 className="font-['Syne'] text-xl md:text-2xl font-bold text-text-primary mb-8">
            Lead Time Commitment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEAD_TIMES.map((lt) => (
              <div
                key={lt.type}
                className="bg-navy-card border border-border-dark rounded-xl p-6 text-center"
              >
                <Clock size={24} className="mx-auto mb-3" style={{ color: lt.color }} />
                <div className="text-xs tracking-wider uppercase mb-1" style={{ color: lt.color }}>
                  {lt.type}
                </div>
                <div className="font-['Syne'] text-2xl font-bold text-text-primary mb-1">
                  {lt.time}
                </div>
                <div className="text-text-dim text-xs">{lt.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
