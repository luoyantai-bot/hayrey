"use client";

import { motion } from "framer-motion";
import { Building2, Target, Users, MapPin, Calendar, TrendingUp } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const MILESTONES = [
  { year: "2010", event: "Founded in Dongguan, specializing in MCPCB manufacturing" },
  { year: "2014", event: "Achieved ISO 9001 certification, expanded copper-base product line" },
  { year: "2017", event: "IATF 16949 automotive certification obtained" },
  { year: "2020", event: "Expanded factory to 5,000+ m², added advanced production lines" },
  { year: "2023", event: "Launched thermal-electric separation copper MCPCB series" },
  { year: "Present", event: "Serving 200+ clients across 30+ countries worldwide" },
];

const CORE_VALUES = [
  {
    icon: Target,
    title: "Precision Focus",
    desc: "We focus exclusively on metal-core PCBs. This specialization means our engineers, equipment, and processes are optimized for thermal management applications — not divided across unrelated product lines.",
  },
  {
    icon: Users,
    title: "Engineer-to-Engineer",
    desc: "Our clients work directly with our technical team, not sales intermediaries. This means faster response times, more accurate technical discussions, and better design outcomes for your products.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    desc: "We invest in new product development every year. Our thermal-electric separation technology and embedded copper block capabilities represent the latest advances in MCPCB manufacturing.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-copper text-xs tracking-[0.2em] uppercase mb-3 font-medium">
            About Us
          </div>
          <h2 className="font-['Syne'] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Hairi <span className="text-gradient-copper">Integration</span>
          </h2>
          <p className="text-text-muted max-w-2xl text-sm md:text-base leading-relaxed">
            A specialized metal-core PCB manufacturer based in Dongguan, China — dedicated to solving 
            the world&apos;s most demanding thermal management challenges with precision-engineered MCPCBs.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="font-['Syne'] text-xl md:text-2xl font-bold text-text-primary mb-6">
              Who We Are
            </h3>
            <div className="space-y-4 text-text-muted text-sm leading-relaxed">
              <p>
                Hairi Integration is a Dongguan-based manufacturer specializing exclusively in metal-core 
                printed circuit boards (MCPCBs). Unlike general PCB factories that treat MCPCBs as a side 
                product, every aspect of our facility — from equipment selection to process engineering — is 
                purpose-built for thermal management applications.
              </p>
              <p>
                Our product range spans the full MCPCB spectrum: aluminum-base boards for standard thermal 
                requirements, copper-base boards for high-power applications, and specialized structures 
                like thermal-electric separation designs and embedded copper block configurations for extreme 
                thermal challenges.
              </p>
              <p>
                We serve an international client base of hardware engineers and procurement professionals 
                across the entertainment lighting, automotive, industrial power, and commercial lighting 
                sectors. Our factory-direct model eliminates trading company markups and communication delays, 
                giving our clients both cost advantages and technical accessibility.
              </p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: MapPin, label: "Location", value: "Dongguan, Guangdong, China" },
              { icon: Building2, label: "Facility", value: "5,000+ m² production space" },
              { icon: Calendar, label: "Since", value: "2010 — 15+ years" },
              { icon: Target, label: "Focus", value: "100% MCPCB specialist" },
            ].map((fact) => (
              <div
                key={fact.label}
                className="bg-navy-card border border-border-dark rounded-xl p-5 hover-card"
              >
                <fact.icon size={20} className="text-copper mb-3" />
                <div className="text-text-dim text-[10px] tracking-wider uppercase mb-1">
                  {fact.label}
                </div>
                <div className="text-text-primary text-sm font-bold">{fact.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="font-['Syne'] text-xl md:text-2xl font-bold text-text-primary mb-8">
            Core Values
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {CORE_VALUES.map((val) => (
              <motion.div
                key={val.title}
                variants={item}
                className="bg-navy-card border border-border-dark rounded-xl p-6 hover-card"
              >
                <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center mb-4">
                  <val.icon size={22} className="text-copper" />
                </div>
                <h4 className="font-['Syne'] text-base font-bold text-text-primary mb-2">
                  {val.title}
                </h4>
                <p className="text-text-muted text-xs leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="font-['Syne'] text-xl md:text-2xl font-bold text-text-primary mb-8">
            Our Journey
          </h3>
          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border-dark" />
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6"
            >
              {MILESTONES.map((milestone) => (
                <motion.div
                  key={milestone.year}
                  variants={item}
                  className="flex items-start gap-4 md:gap-6"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-navy-card border border-copper/40 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-copper" />
                    </div>
                  </div>
                  <div className="pt-1 md:pt-2">
                    <div className="text-copper text-sm font-bold font-['Syne']">
                      {milestone.year}
                    </div>
                    <div className="text-text-secondary text-sm mt-1 leading-relaxed">
                      {milestone.event}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
