"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CERTIFICATIONS = [
  {
    name: "UL",
    fullName: "Underwriters Laboratories",
    image: "/images/certs/ul-1.png",
  },
  {
    name: "ISO 9001",
    fullName: "Quality Management System",
    image: "/images/certs/iso9001-1.png",
  },
  {
    name: "ISO 14001",
    fullName: "Environmental Management",
    image: "/images/certs/iso14001-1.png",
  },
  {
    name: "IATF 16949",
    fullName: "Automotive Quality Management",
    image: "/images/certs/iatf16949-1.png",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative section-spacing bg-navy-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="section-label">Certifications</div>
          <h2 className="font-['Inter'] text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            Certified <span className="text-gradient-copper">Quality</span>
          </h2>
        </div>

        {/* Certificate Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group bg-navy-card border border-border-dark rounded-xl overflow-hidden hover:border-copper/30 transition-all duration-300"
            >
              <div className="relative aspect-[3/4] bg-white">
                <Image
                  src={cert.image}
                  alt={`${cert.name} Certificate`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-3 text-center">
                <div className="text-copper font-bold text-sm font-['Inter']">{cert.name}</div>
                <div className="text-text-dim text-[10px] tracking-wider uppercase mt-0.5">{cert.fullName}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
