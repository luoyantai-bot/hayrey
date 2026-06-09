"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "applications", label: "Applications" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "certifications", label: "Certifications" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md border-b border-border-dark shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 group"
          >
            <img
              src="/images/hayrey-logo.jpg"
              alt="Hayrey Integrated Technology Logo"
              className="w-8 h-8 md:w-10 md:h-10 rounded-md object-cover"
            />
            <div className="flex items-baseline gap-1">
              <span className="text-copper font-bold text-lg tracking-wider font-['Inter']">
                HAYREY
              </span>
              <span className="text-text-dim text-xs tracking-widest hidden sm:inline">
                INTEGRATED
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-2 text-xs tracking-wider uppercase transition-all duration-200 rounded-md ${
                  activeSection === item.id
                    ? "text-copper bg-copper/10"
                    : "text-text-muted hover:text-text-secondary hover:bg-navy-card-hover"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="bg-copper text-navy px-5 py-2 rounded-md text-xs font-bold tracking-wider uppercase hover:bg-copper-light transition-all duration-200 copper-glow-hover"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-secondary p-2"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-card border-t border-border-dark overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left px-4 py-3 text-sm tracking-wider uppercase rounded-md transition-colors ${
                    activeSection === item.id
                      ? "text-copper bg-copper/10"
                      : "text-text-muted hover:text-text-secondary hover:bg-navy-card-hover"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="block w-full mt-3 bg-copper text-navy px-4 py-3 rounded-md text-sm font-bold tracking-wider uppercase text-center"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
