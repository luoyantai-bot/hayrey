"use client";

import { motion } from "framer-motion";
import { Factory, Wrench, Headphones, Zap, ShieldCheck, Globe } from "lucide-react";

const ADVANTAGES = [
  {
    icon: Factory,
    title: "Direct Factory — No Middleman",
    desc: "Deal directly with the manufacturer. No trading company markup, no communication lag through intermediaries. Your engineers talk to our engineers, and your procurement team gets factory-direct pricing with full cost transparency.",
  },
  {
    icon: Zap,
    title: "Fast Sampling",
    desc: "5–7 working days for quick-turn prototypes. We understand that time-to-market is critical, so we maintain dedicated quick-turn production lines that can be activated immediately upon order confirmation.",
  },
  {
    icon: Headphones,
    title: "Engineering Support",
    desc: "Our technical team provides DFM review, thermal simulation advice, and material selection guidance. We don't just manufacture — we help you optimize your design for performance and cost-efficiency before production begins.",
  },
  {
    icon: Wrench,
    title: "Complete Product Matrix",
    desc: "From standard aluminum substrates to copper-base thermal isolation designs and custom embedded copper block structures — one supplier for your entire MCPCB need. No more managing multiple vendors for different board types.",
  },
  {
    icon: ShieldCheck,
    title: "Full Traceability",
    desc: "Every board can be traced back to raw material lot, production parameters, and test results. Essential for automotive and industrial applications where quality documentation is not optional.",
  },
  {
    icon: Globe,
    title: "Global Shipping",
    desc: "DHL, FedEx, and UPS express shipping worldwide. We handle export documentation, customs declarations, and packaging to international standards so your boards arrive safely and on time.",
  },
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
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-copper text-xs tracking-[0.2em] uppercase mb-3 font-medium">
            Why Hairi
          </div>
          <h2 className="font-['Syne'] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Why Choose <span className="text-gradient-copper">Hairi</span>
          </h2>
          <p className="text-text-muted max-w-2xl text-sm md:text-base leading-relaxed">
            We combine factory-direct access, comprehensive product range, and hands-on engineering
            support to deliver a partnership experience that trading companies simply cannot match.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ADVANTAGES.map((adv) => (
            <motion.div
              key={adv.title}
              variants={item}
              className="bg-navy-card border border-border-dark rounded-xl p-6 hover:border-copper/20 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center mb-4">
                <adv.icon size={22} className="text-copper" />
              </div>
              <h3 className="font-['Syne'] text-base font-bold text-text-primary mb-2">
                {adv.title}
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
