"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Zap } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Layers,
    title: "Aluminum Base",
    count: "5 types",
    color: "#60A5FA",
    description: "Single-sided · True double-layer · 4-layer · Plated-through hole variants",
    items: ["Single-sided aluminum", "True double-layer aluminum", "4-layer aluminum", "Plated-through hole aluminum", "Thermal via aluminum"],
  },
  {
    icon: Cpu,
    title: "Copper Base",
    count: "9 types",
    color: "#B87333",
    description: "The most comprehensive copper-base MCPCB product matrix in the industry",
    items: ["Single-sided copper", "Thermal-electric separation", "Double-layer copper", "Multi-layer copper", "True double-sided copper", "Copper+FR4 hybrid", "Heavy copper base", "Embedded copper coin", "Copper-aluminum composite"],
  },
  {
    icon: Zap,
    title: "Special Structures",
    count: "4 types",
    color: "#A78BFA",
    description: "Custom solutions for extreme thermal and structural requirements",
    items: ["Copper-aluminum composite", "Embedded copper block", "Heavy copper board", "Custom form factors"],
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

export default function ProductsSection() {
  return (
    <section id="products" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-copper text-xs tracking-[0.2em] uppercase mb-3 font-medium">
            Products & Capabilities
          </div>
          <h2 className="font-['Syne'] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Complete MCPCB <span className="text-gradient-copper">Product Matrix</span>
          </h2>
          <p className="text-text-muted max-w-2xl text-sm md:text-base leading-relaxed">
            From standard aluminum substrates to the most advanced copper-base thermal isolation designs,
            Hairi offers the industry&apos;s most comprehensive metal-core PCB product range.
          </p>
        </div>

        {/* Product Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {CAPABILITIES.map((cap) => (
            <motion.div
              key={cap.title}
              variants={item}
              className="group bg-navy-card border border-border-dark rounded-xl p-6 md:p-8 hover:border-opacity-60 transition-all duration-300"
              style={{ "--cap-color": cap.color } as React.CSSProperties}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: `${cap.color}15` }}
              >
                <cap.icon size={24} style={{ color: cap.color }} />
              </div>
              <h3
                className="font-['Syne'] text-xl font-bold mb-1"
                style={{ color: cap.color }}
              >
                {cap.title}
              </h3>
              <div className="text-text-dim text-xs tracking-wider uppercase mb-3">
                {cap.count}
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-5">
                {cap.description}
              </p>
              <ul className="space-y-2">
                {cap.items.map((cItem) => (
                  <li key={cItem} className="flex items-center gap-2 text-sm text-text-secondary">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: cap.color }}
                    />
                    {cItem}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <div className="mt-16">
          <h3 className="font-['Syne'] text-xl md:text-2xl font-bold text-text-primary mb-6">
            Parameter Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-border-dark">
                  <th className="text-left py-3 px-4 text-text-dim text-xs tracking-wider uppercase font-medium">
                    Parameter
                  </th>
                  <th className="text-center py-3 px-4 text-xs tracking-wider uppercase font-medium" style={{ color: "#60A5FA" }}>
                    Aluminum Base
                  </th>
                  <th className="text-center py-3 px-4 text-xs tracking-wider uppercase font-medium" style={{ color: "#B87333" }}>
                    Copper Base
                  </th>
                  <th className="text-center py-3 px-4 text-xs tracking-wider uppercase font-medium" style={{ color: "#A78BFA" }}>
                    Special Structure
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { param: "Thermal Conductivity", aluminum: "1.0–2.0 W/mK", copper: "2.0–8.0 W/mK", special: "4.0–12.0 W/mK" },
                  { param: "Max Board Size", aluminum: "600 × 500mm", copper: "500 × 400mm", special: "Custom" },
                  { param: "Min Line Width", aluminum: "0.1mm", copper: "0.1mm", special: "0.1mm" },
                  { param: "Copper Thickness", aluminum: "1–6 oz", copper: "1–10 oz", special: "Up to 15 oz" },
                  { param: "Layers", aluminum: "1–4", copper: "1–6+", special: "Custom" },
                  { param: "Thermal Resistance", aluminum: "0.5–1.5 °C/W", copper: "0.2–0.8 °C/W", special: "<0.3 °C/W" },
                ].map((row, i) => (
                  <tr key={row.param} className={i % 2 === 0 ? "bg-navy-card/50" : ""}>
                    <td className="py-3 px-4 text-sm text-text-secondary font-medium">
                      {row.param}
                    </td>
                    <td className="py-3 px-4 text-sm text-text-muted text-center">
                      {row.aluminum}
                    </td>
                    <td className="py-3 px-4 text-sm text-text-muted text-center">
                      {row.copper}
                    </td>
                    <td className="py-3 px-4 text-sm text-text-muted text-center">
                      {row.special}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sampling Process */}
        <div className="mt-16">
          <h3 className="font-['Syne'] text-xl md:text-2xl font-bold text-text-primary mb-8">
            Sampling Process
          </h3>
          <div className="flex flex-col md:flex-row items-stretch gap-0">
            {[
              { step: 1, title: "NDA", desc: "Sign non-disclosure agreement to protect your IP" },
              { step: 2, title: "Gerber Submit", desc: "Upload your Gerber files and specifications" },
              { step: 3, title: "Quotation", desc: "Receive detailed quotation within 24 hours" },
              { step: 4, title: "Confirmation", desc: "Review and confirm order details" },
              { step: 5, title: "Delivery", desc: "Fast sample delivery in 5–7 working days" },
            ].map((s, i) => (
              <div key={s.step} className="flex-1 relative">
                <div className="flex md:flex-col items-center gap-3 p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-copper/15 border border-copper/30 flex items-center justify-center text-copper font-bold text-sm font-['Syne'] flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <div className="text-text-primary text-sm font-bold">{s.title}</div>
                    <div className="text-text-dim text-xs mt-1 leading-relaxed">{s.desc}</div>
                  </div>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+30px)] w-[calc(100%-60px)] h-px bg-border-dark" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
