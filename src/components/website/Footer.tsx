"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const FOOTER_LINKS = {
  Products: [
    "Aluminum Base MCPCB",
    "Copper Base MCPCB",
    "Special Structures",
    "Parameter Comparison",
    "Sampling Process",
  ],
  Applications: [
    "Entertainment Lighting",
    "Automotive Electronics",
    "Industrial Power",
    "Commercial Lighting",
  ],
  Company: [
    "About Hairi",
    "Manufacturing",
    "Certifications",
    "Quality Control",
    "Contact Us",
  ],
  Resources: [
    "Capability Deck (PDF)",
    "Gerber File Guide",
    "Material Datasheets",
    "IPC Standards Reference",
  ],
};

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-navy-card border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-copper flex items-center justify-center">
                <span className="text-navy font-bold text-sm font-['Syne']">H</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-copper font-bold text-lg tracking-wider font-['Syne']">
                  HAIRI
                </span>
                <span className="text-text-dim text-xs tracking-widest">INTEGRATION</span>
              </div>
            </div>
            <p className="text-text-muted text-xs leading-relaxed mb-6 max-w-xs">
              Specialized metal-core PCB manufacturer for demanding thermal applications. 
              Copper-base, aluminum-base, and custom form factors. Direct factory, no middleman.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-text-dim text-xs">
                <Mail size={12} className="text-copper" />
                sales@hairi-pcb.com
              </div>
              <div className="flex items-center gap-2 text-text-dim text-xs">
                <Phone size={12} className="text-copper" />
                +86 138 2925 8XXX
              </div>
              <div className="flex items-center gap-2 text-text-dim text-xs">
                <MapPin size={12} className="text-copper" />
                Dongguan, Guangdong, China
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-text-secondary text-xs font-bold tracking-wider uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const sectionMap: Record<string, string> = {
                          "Aluminum Base MCPCB": "products",
                          "Copper Base MCPCB": "products",
                          "Special Structures": "products",
                          "Parameter Comparison": "products",
                          "Sampling Process": "products",
                          "Entertainment Lighting": "applications",
                          "Automotive Electronics": "applications",
                          "Industrial Power": "applications",
                          "Commercial Lighting": "applications",
                          "About Hairi": "about",
                          Manufacturing: "manufacturing",
                          Certifications: "certifications",
                          "Quality Control": "manufacturing",
                          "Contact Us": "contact",
                          "Capability Deck (PDF)": "contact",
                        };
                        scrollTo(sectionMap[link] || "home");
                      }}
                      className="text-text-dim text-xs hover:text-copper transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-text-dim text-xs">
            &copy; {new Date().getFullYear()} Hairi Integration Co., Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-text-dim text-xs">
            <button className="hover:text-copper transition-colors">Privacy Policy</button>
            <span className="text-border-dark">|</span>
            <button className="hover:text-copper transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
