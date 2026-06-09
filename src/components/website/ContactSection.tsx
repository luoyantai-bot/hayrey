"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  FileDown,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "sales@hairi-pcb.com",
    desc: "Response within 24 hours",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+86 138 2925 8XXX",
    desc: "Direct line to sales engineer",
  },
  {
    icon: MapPin,
    label: "Factory Address",
    value: "Dongguan, Guangdong, China",
    desc: "Visits welcome by appointment",
  },
];

const PRODUCT_TYPES = [
  "Aluminum Base - Single-sided",
  "Aluminum Base - Double-layer",
  "Aluminum Base - 4-layer",
  "Copper Base - Single-sided",
  "Copper Base - Thermal-electric Separation",
  "Copper Base - Double-layer",
  "Copper Base - Multi-layer",
  "Copper Base - True double-sided",
  "Special Structure - Copper-aluminum composite",
  "Special Structure - Embedded copper block",
  "Special Structure - Heavy copper board",
  "Other / Custom",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    productType: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [deckEmail, setDeckEmail] = useState("");
  const [deckSubmitted, setDeckSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleDeckSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDeckSubmitted(true);
    setTimeout(() => setDeckSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-navy-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-copper text-xs tracking-[0.2em] uppercase mb-3 font-medium">
            Contact
          </div>
          <h2 className="font-['Syne'] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Get In <span className="text-gradient-copper">Touch</span>
          </h2>
          <p className="text-text-muted max-w-2xl text-sm md:text-base leading-relaxed">
            Ready to discuss your thermal management challenge? Our engineering team responds within 
            24 hours with detailed quotations and technical recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <div className="bg-navy-card border border-border-dark rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center">
                  <MessageSquare size={20} className="text-copper" />
                </div>
                <div>
                  <h3 className="font-['Syne'] text-lg font-bold text-text-primary">
                    Request a Quote
                  </h3>
                  <div className="text-text-dim text-xs">
                    Fill in your requirements and we&apos;ll respond within 24 hours
                  </div>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 size={48} className="text-green mb-4" />
                  <h4 className="font-['Syne'] text-xl font-bold text-text-primary mb-2">
                    Inquiry Submitted
                  </h4>
                  <p className="text-text-muted text-sm max-w-sm">
                    Thank you for your inquiry. Our engineering team will review your requirements 
                    and respond within 24 hours with a detailed quotation.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label className="text-text-secondary text-xs tracking-wider uppercase">
                        Full Name *
                      </Label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-navy border-border-dark text-text-primary placeholder:text-text-dim focus:border-copper focus:ring-copper/20"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-text-secondary text-xs tracking-wider uppercase">
                        Email *
                      </Label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-navy border-border-dark text-text-primary placeholder:text-text-dim focus:border-copper focus:ring-copper/20"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-text-secondary text-xs tracking-wider uppercase">
                      Company
                    </Label>
                    <Input
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="bg-navy border-border-dark text-text-primary placeholder:text-text-dim focus:border-copper focus:ring-copper/20"
                      placeholder="Company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label className="text-text-secondary text-xs tracking-wider uppercase">
                        Product Type *
                      </Label>
                      <select
                        required
                        value={formData.productType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            productType: e.target.value,
                          })
                        }
                        className="w-full bg-navy border border-border-dark text-text-primary text-sm rounded-md px-3 py-2 focus:border-copper focus:ring-copper/20 focus:outline-none"
                      >
                        <option value="">Select product type</option>
                        {PRODUCT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-text-secondary text-xs tracking-wider uppercase">
                        Quantity
                      </Label>
                      <Input
                        value={formData.quantity}
                        onChange={(e) =>
                          setFormData({ ...formData, quantity: e.target.value })
                        }
                        className="bg-navy border-border-dark text-text-primary placeholder:text-text-dim focus:border-copper focus:ring-copper/20"
                        placeholder="e.g., 100pcs sample / 10K batch"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-text-secondary text-xs tracking-wider uppercase">
                      Project Details
                    </Label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-navy border-border-dark text-text-primary placeholder:text-text-dim focus:border-copper focus:ring-copper/20 min-h-[120px]"
                      placeholder="Describe your thermal requirements, board specifications, or any questions..."
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <Button
                      type="submit"
                      className="bg-copper hover:bg-copper-light text-navy font-bold tracking-wider uppercase text-sm px-8 py-3 rounded-lg"
                    >
                      <Send size={16} className="mr-2" />
                      Submit Inquiry
                    </Button>
                    <span className="text-text-dim text-xs">
                      Or email us directly at sales@hairi-pcb.com
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Capability Deck Download */}
            <div className="bg-navy-card border border-border-dark rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center">
                  <FileDown size={20} className="text-copper" />
                </div>
                <div>
                  <h4 className="font-['Syne'] text-base font-bold text-text-primary">
                    Capability Deck
                  </h4>
                  <div className="text-text-dim text-xs">
                    Download our product catalog
                  </div>
                </div>
              </div>

              {deckSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <CheckCircle2 size={32} className="text-green mx-auto mb-3" />
                  <p className="text-text-secondary text-sm">
                    Download link sent to your email!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleDeckSubmit} className="space-y-3">
                  <Input
                    required
                    type="email"
                    value={deckEmail}
                    onChange={(e) => setDeckEmail(e.target.value)}
                    className="bg-navy border-border-dark text-text-primary placeholder:text-text-dim focus:border-copper focus:ring-copper/20 text-sm"
                    placeholder="Enter your email"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-copper/15 border border-copper/30 text-copper hover:bg-copper/25 font-bold tracking-wider uppercase text-xs py-2.5 rounded-md"
                    variant="outline"
                  >
                    <FileDown size={14} className="mr-2" />
                    Download PDF
                  </Button>
                  <p className="text-text-dim text-[10px] text-center leading-relaxed">
                    By downloading, you agree to receive occasional product updates. 
                    Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {CONTACT_INFO.map((info) => (
                <motion.div
                  key={info.label}
                  variants={item}
                  className="bg-navy-card border border-border-dark rounded-xl p-5 hover-card"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-copper/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <info.icon size={16} className="text-copper" />
                    </div>
                    <div>
                      <div className="text-text-dim text-[10px] tracking-wider uppercase mb-1">
                        {info.label}
                      </div>
                      <div className="text-text-primary text-sm font-bold">
                        {info.value}
                      </div>
                      <div className="text-text-dim text-xs mt-0.5">
                        {info.desc}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Response Promise */}
            <div className="bg-copper/5 border border-copper/20 rounded-xl p-5 text-center">
              <div className="text-copper font-bold font-['Syne'] text-2xl mb-1">24h</div>
              <div className="text-text-secondary text-xs">
                Maximum response time for all inquiries
              </div>
              <div className="text-text-dim text-[10px] mt-1">
                Most quotes delivered within 4 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
