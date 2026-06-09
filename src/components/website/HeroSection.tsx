"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, MessageSquare } from "lucide-react";

const STATS = [
  { value: "18+", label: "Product Types" },
  { value: "Direct", label: "Factory" },
  { value: "5-7", label: "Days Sample" },
  { value: "100%", label: "IPC Compliant" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-copper/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-ice-blue/5 blur-[100px]" />
      
      {/* Copper circuit lines decoration */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#B87333" strokeWidth="0.5" />
        <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#B87333" strokeWidth="0.5" />
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#B87333" strokeWidth="0.5" />
        <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#B87333" strokeWidth="0.5" />
        <circle cx="20%" cy="30%" r="4" fill="#B87333" />
        <circle cx="80%" cy="70%" r="4" fill="#B87333" />
        <circle cx="20%" cy="70%" r="4" fill="#B87333" />
        <circle cx="80%" cy="30%" r="4" fill="#B87333" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-copper text-xs sm:text-sm tracking-[0.2em] uppercase mb-6 font-medium"
          >
            Copper-Base MCPCB · Direct Factory · Dongguan, China
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-['Syne'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] mb-6"
          >
            Where Heat Meets{" "}
            <span className="text-gradient-copper">Precision.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            Specialized metal-core PCB manufacturer for demanding thermal applications. 
            Copper-base · Aluminum-base · Custom form factors. 
            No middleman — you deal directly with the factory.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-copper text-navy px-8 py-4 rounded-lg text-sm font-bold tracking-wider uppercase hover:bg-copper-light transition-all duration-200 copper-glow-hover flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Download Capability Deck
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-copper text-copper px-8 py-4 rounded-lg text-sm font-bold tracking-wider uppercase hover:bg-copper/10 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} />
              Contact Engineer
            </button>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 border-t border-border-dark pt-8"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-4 ${
                i < STATS.length - 1 ? "md:border-r border-border-dark" : ""
              }`}
            >
              <div className="text-2xl md:text-3xl font-bold text-copper font-['Syne']">
                {stat.value}
              </div>
              <div className="text-text-dim text-xs tracking-wider uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-text-dim text-[10px] tracking-widest uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} className="text-copper" />
        </motion.div>
      </motion.div>
    </section>
  );
}
