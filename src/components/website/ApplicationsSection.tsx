"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const INDUSTRIES = [
  {
    title: "Commercial Lighting",
    hoverLine: "Architectural, track & explosion-proof LED fixtures",
    image: "/images/applications/commercial-lighting.jpg",
    photoLabel: "Commercial LED lighting fixtures",
  },
  {
    title: "Automotive Electronics",
    hoverLine: "IATF 16949 certified — OBC & EV power modules",
    image: "/images/applications/automotive-electronics.jpg",
    photoLabel: "Automotive LED headlight / OBC board",
  },
  {
    title: "Industrial Control",
    hoverLine: "VFD, PLC & servo drive thermal management",
    image: "/images/applications/industrial-control.jpg",
    photoLabel: "Industrial control & VFD modules",
  },
  {
    title: "Semiconductor Packaging",
    hoverLine: "COB / CSP substrate & thermal interface",
    image: "/images/applications/semiconductor-packaging.jpg",
    photoLabel: "Semiconductor chip packaging substrate",
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
    <section id="applications" className="relative section-spacing bg-navy-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="section-label">Industries</div>
          <h2 className="font-['Inter'] text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            Industries We <span className="text-gradient-copper">Serve</span>
          </h2>
        </div>

        {/* Full-bleed image cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {INDUSTRIES.map((app) => (
            <motion.div
              key={app.title}
              variants={item}
              className="group relative h-64 md:h-80 rounded-xl cursor-pointer overflow-hidden bg-navy-light"
            >
              <Image
                src={app.image}
                alt={app.photoLabel}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-icon')) {
                    parent.innerHTML += `
                      <div class="fallback-icon absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:rgba(100,116,139,0.3)"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                        <span style="color:rgba(100,116,139,0.3);font-size:10px;letter-spacing:0.1em;text-transform:uppercase">${app.image.split('/').pop()}</span>
                      </div>`;
                  }
                }}
              />

              {/* Industry name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent z-10">
                <h3 className="font-['Inter'] text-xl md:text-2xl font-bold text-white">
                  {app.title}
                </h3>
                <div className="text-white/0 group-hover:text-white/70 text-xs mt-1 tracking-wider transition-all duration-300 max-h-0 group-hover:max-h-6 overflow-hidden">
                  {app.hoverLine}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
