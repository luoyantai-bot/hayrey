"use client";

import { motion } from "framer-motion";
import { Lightbulb, Car, Factory, Building2 } from "lucide-react";

const APPLICATIONS = [
  {
    icon: Lightbulb,
    title: "Entertainment & Stage Lighting",
    subtitle: "For WET-class clients",
    color: "#F59E0B",
    description:
      "From immersive water feature installations to high-power stage lighting systems, our copper-base MCPCBs deliver the thermal performance that entertainment applications demand. We specialize in round and custom-form-factor boards for LED arrays that must operate continuously under extreme conditions without thermal degradation.",
    features: [
      "Water feature & fountain lighting controllers",
      "High-power stage & concert lighting",
      "Custom round and irregular form factors",
      "Continuous-operation thermal reliability",
    ],
  },
  {
    icon: Car,
    title: "Automotive Electronics",
    subtitle: "IATF 16949 Certified",
    color: "#4ADE80",
    description:
      "Automotive applications require zero-compromise quality and full traceability. Our IATF 16949 certification backs every board we ship for vehicle lighting, on-board chargers, and new energy power modules. We understand the rigorous qualification process and provide complete documentation and PPAP support.",
    features: [
      "LED headlight & taillight drivers",
      "On-board charger (OBC) modules",
      "NEV power conversion boards",
      "Full PPAP & traceability support",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Power",
    subtitle: "Server & Drive Systems",
    color: "#60A5FA",
    description:
      "Industrial power electronics push thermal limits every day. Our MCPCBs serve in IDC server power supplies, variable frequency drives, and industrial lighting systems where failure is not an option. The superior thermal conductivity of our copper-base boards ensures long-term reliability under sustained high-load operation.",
    features: [
      "IDC server power supply boards",
      "Variable frequency drive modules",
      "Industrial LED lighting drivers",
      "High-reliability sustained operation",
    ],
  },
  {
    icon: Building2,
    title: "High-End Commercial Lighting",
    subtitle: "Architectural & Safety",
    color: "#A78BFA",
    description:
      "Architectural and commercial lighting demands both thermal performance and aesthetic precision. Our boards power landscape lighting, explosion-proof fixtures, and track lighting systems where compact design and efficient heat dissipation are equally critical. We support custom shapes and finishes for design-forward applications.",
    features: [
      "Architectural landscape lighting",
      "Explosion-proof lighting modules",
      "Track & spot lighting systems",
      "Custom shapes & surface finishes",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ApplicationsSection() {
  return (
    <section id="applications" className="relative py-20 md:py-28 bg-navy-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-copper text-xs tracking-[0.2em] uppercase mb-3 font-medium">
            Applications
          </div>
          <h2 className="font-['Syne'] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Industries We <span className="text-gradient-copper">Serve</span>
          </h2>
          <p className="text-text-muted max-w-2xl text-sm md:text-base leading-relaxed">
            Our MCPCBs power critical thermal management applications across four major industry verticals,
            each with unique requirements that our product matrix addresses.
          </p>
        </div>

        {/* Application Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {APPLICATIONS.map((app) => (
            <motion.div
              key={app.title}
              variants={item}
              className="group bg-navy-card border border-border-dark rounded-xl p-6 md:p-8 hover:border-opacity-60 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${app.color}15` }}
                >
                  <app.icon size={24} style={{ color: app.color }} />
                </div>
                <div>
                  <h3 className="font-['Syne'] text-lg font-bold text-text-primary">
                    {app.title}
                  </h3>
                  <div className="text-xs tracking-wider uppercase mt-0.5" style={{ color: app.color }}>
                    {app.subtitle}
                  </div>
                </div>
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-5">
                {app.description}
              </p>
              <ul className="space-y-2">
                {app.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                      style={{ backgroundColor: app.color }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
