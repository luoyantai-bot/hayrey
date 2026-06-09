"use client";

import Navbar from "@/components/website/Navbar";
import HeroSection from "@/components/website/HeroSection";
import ProductsSection from "@/components/website/ProductsSection";
import ApplicationsSection from "@/components/website/ApplicationsSection";
import WhyHairiSection from "@/components/website/WhyHairiSection";
import ManufacturingSection from "@/components/website/ManufacturingSection";
import CertificationsSection from "@/components/website/CertificationsSection";
import AboutSection from "@/components/website/AboutSection";
import CTABanner from "@/components/website/CTABanner";
import ContactSection from "@/components/website/ContactSection";
import Footer from "@/components/website/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ApplicationsSection />
      <WhyHairiSection />
      <ManufacturingSection />
      <CertificationsSection />
      <AboutSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  );
}
