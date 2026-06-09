"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-copper/10 via-copper/5 to-transparent" />
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-copper/5 blur-[100px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-copper rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid-pattern w-full h-full" style={{ backgroundSize: "20px 20px" }} />
          </div>
          
          <div className="relative">
            <h3 className="font-['Syne'] text-2xl md:text-3xl font-bold text-navy mb-2">
              Ready to discuss your thermal management challenge?
            </h3>
            <p className="text-navy/70 text-sm md:text-base max-w-lg">
              Download our Capability Deck or get in touch with our engineering team for a 
              detailed quotation within 24 hours.
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-navy text-copper px-6 py-3 rounded-lg text-sm font-bold tracking-wider uppercase hover:bg-navy-light transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
            >
              <Download size={16} />
              Get Capability Deck
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-transparent border-2 border-navy text-navy px-6 py-3 rounded-lg text-sm font-bold tracking-wider uppercase hover:bg-navy/10 transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
            >
              Request Quote
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
