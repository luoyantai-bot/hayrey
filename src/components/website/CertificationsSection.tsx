"use client";

import { motion } from "framer-motion";
import { Award, FileCheck, TestTube2, Leaf, Shield } from "lucide-react";

const CERTIFICATIONS = [
  {
    icon: Award,
    name: "UL",
    fullName: "Underwriters Laboratories",
    desc: "Safety certification for printed circuit boards, ensuring compliance with North American electrical safety standards. All our MCPCB products carry valid UL recognition.",
  },
  {
    icon: FileCheck,
    name: "IPC-6012",
    fullName: "IPC Class 2/3",
    desc: "Qualification and performance specification for rigid PCBs. We meet Class 2 (dedicated service) and Class 3 (high-reliability) requirements for demanding applications.",
  },
  {
    icon: Leaf,
    name: "RoHS",
    fullName: "Restriction of Hazardous Substances",
    desc: "Full compliance with EU RoHS directives, ensuring our products are free from lead, mercury, cadmium, and other restricted substances.",
  },
  {
    icon: Shield,
    name: "ISO 9001",
    fullName: "Quality Management System",
    desc: "Certified quality management system covering all aspects of our operations, from incoming material control to final product delivery and customer feedback.",
  },
  {
    icon: Award,
    name: "IATF 16949",
    fullName: "Automotive Quality Management",
    desc: "Automotive industry-specific quality management certification. Required for supplying MCPCBs to automotive lighting, OBC, and power module applications.",
  },
];

const COMPLIANCE = [
  { label: "Halogen-Free", desc: "All products available in halogen-free variants for environmentally sensitive applications" },
  { label: "Lead-Free", desc: "Fully compatible with lead-free soldering processes per RoHS requirements" },
  { label: "REACH Compliant", desc: "Compliant with EU REACH regulation for chemical substance management" },
];

const TEST_CAPABILITIES = [
  { name: "Thermal Resistance Testing", desc: "Measuring thermal impedance from junction to case for accurate thermal design" },
  { name: "Insulation Testing", desc: "Dielectric strength and insulation resistance verification at operating voltage" },
  { name: "Peel Strength Testing", desc: "Copper foil adhesion measurement per IPC-TM-650 test methods" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-20 md:py-28 bg-navy-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-copper text-xs tracking-[0.2em] uppercase mb-3 font-medium">
            Certifications
          </div>
          <h2 className="font-['Syne'] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Certified <span className="text-gradient-copper">Quality</span>
          </h2>
          <p className="text-text-muted max-w-2xl text-sm md:text-base leading-relaxed">
            Our certifications are not just plaques on the wall — they represent the rigorous processes
            and documentation that ensure every board we ship meets the highest standards.
          </p>
        </div>

        {/* Cert Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.name}
              variants={item}
              className="bg-navy-card border border-border-dark rounded-xl p-6 hover:border-copper/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center flex-shrink-0">
                  <cert.icon size={20} className="text-copper" />
                </div>
                <div>
                  <div className="text-copper font-bold text-lg font-['Syne']">{cert.name}</div>
                  <div className="text-text-dim text-[10px] tracking-wider uppercase">{cert.fullName}</div>
                </div>
              </div>
              <p className="text-text-muted text-xs leading-relaxed">{cert.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Material Compliance */}
        <div className="mb-16">
          <h3 className="font-['Syne'] text-xl md:text-2xl font-bold text-text-primary mb-6">
            Material Compliance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {COMPLIANCE.map((comp) => (
              <div
                key={comp.label}
                className="bg-navy-card border border-border-dark rounded-lg p-5 flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-green mt-1.5 flex-shrink-0" />
                <div>
                  <div className="text-text-primary text-sm font-bold">{comp.label}</div>
                  <div className="text-text-muted text-xs mt-1 leading-relaxed">{comp.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Test Capabilities */}
        <div>
          <h3 className="font-['Syne'] text-xl md:text-2xl font-bold text-text-primary mb-6">
            Test Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TEST_CAPABILITIES.map((test) => (
              <div
                key={test.name}
                className="bg-navy-card border border-border-dark rounded-lg p-5 flex items-start gap-3"
              >
                <TestTube2 size={18} className="text-ice-blue flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-text-primary text-sm font-bold">{test.name}</div>
                  <div className="text-text-muted text-xs mt-1 leading-relaxed">{test.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
