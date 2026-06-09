"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FACTORY_PHOTOS = [
  { label: "Workshop", desc: "Production Floor", image: "/images/factory/workshop.jpg" },
  { label: "Equipment", desc: "Core Machinery", image: "/images/factory/equipment.jpg" },
  { label: "QC Lab", desc: "Quality Control", image: "/images/factory/qc-lab.jpg" },
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
    <section id="manufacturing" className="relative section-spacing bg-navy-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="section-label">Factory</div>
          <h2 className="font-['Inter'] text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            Dongguan <span className="text-gradient-copper">Factory</span>
          </h2>
        </div>

        {/* 3-column image grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {FACTORY_PHOTOS.map((photo) => (
            <motion.div
              key={photo.label}
              variants={item}
              className="relative h-64 md:h-80 rounded-xl overflow-hidden group bg-navy-light"
            >
              <Image
                src={photo.image}
                alt={`${photo.label} - ${photo.desc}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-icon')) {
                    parent.innerHTML += `
                      <div class="fallback-icon absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:rgba(100,116,139,0.3)"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                        <span style="color:rgba(100,116,139,0.3);font-size:10px;letter-spacing:0.1em;text-transform:uppercase">${photo.image.split('/').pop()}</span>
                      </div>`;
                  }
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/60 to-transparent z-10">
                <div className="text-text-primary text-sm font-bold">{photo.label}</div>
                <div className="text-text-dim text-[10px] tracking-wider uppercase">{photo.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
