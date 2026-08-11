"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, MessageSquare, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

const STATS = [
  { value: "18+", label: "Product Types" },
  { value: "Direct", label: "Factory" },
  { value: "7 Days", label: "Sample Lead Time" },
  { value: "100%", label: "IPC Compliant" },
];

const VIDEO_SRC = "https://pub-162cd5f973914fdc88457a3ff54fbb92.r2.dev/hayrey/company-reel.mp4";
const VIDEO_POSTER = "/images/video-poster.jpg";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Split layout: Left text + Right video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-copper text-xs sm:text-sm tracking-[0.2em] uppercase mb-6 font-medium"
            >
              Semiconductor-Grade MCPCB Manufacturer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-['Inter'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] mb-8"
            >
              Where Heat Meets{" "}
              <span className="text-gradient-copper">Precision.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-text-muted text-sm md:text-base leading-relaxed max-w-lg mb-10"
            >
              Specializing in high-performance metal-core PCBs for demanding thermal applications — from automotive LED to power modules.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-copper text-navy px-8 py-4 rounded-lg text-sm font-bold tracking-wider uppercase hover:bg-copper-light transition-all duration-200 copper-glow-hover flex items-center justify-center gap-2"
              >
                <Download size={16} />
                Download Deck
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-copper text-copper px-8 py-4 rounded-lg text-sm font-bold tracking-wider uppercase hover:bg-copper/10 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} />
                Contact Engineer
              </button>
            </motion.div>
          </motion.div>

          {/* Right: 16:9 Video Player */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div
              className="relative w-full rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-border-dark/50 group cursor-pointer"
              style={{ aspectRatio: "16 / 9" }}
              onClick={togglePlay}
            >
              {/* HTML5 Video */}
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                poster={VIDEO_POSTER}
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Play/Pause overlay — visible when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-navy/50 flex flex-col items-center justify-center gap-3 transition-opacity duration-300">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-copper/20 flex items-center justify-center group-hover:bg-copper/30 transition-all duration-300 group-hover:scale-110">
                    <Play size={28} className="text-copper ml-1" />
                  </div>
                  <div className="text-text-dim text-xs tracking-wider uppercase text-center">
                    3-min Corporate Reel
                  </div>
                </div>
              )}

              {/* Pause indicator — brief flash on pause */}
              {isPlaying && (
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-navy/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Pause size={16} className="text-white" />
                </div>
              )}

              {/* Decorative corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-copper/40 rounded-tl-sm pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-copper/40 rounded-br-sm pointer-events-none" />
            </div>

            {/* Video caption */}
            <div className="mt-3 text-center">
              <span className="text-text-dim text-[10px] tracking-widest uppercase">
                Watch Our Story
              </span>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 border-t border-border-dark pt-8"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-4 ${
                i < STATS.length - 1 ? "md:border-r border-border-dark" : ""
              }`}
            >
              <div className="text-2xl md:text-4xl font-black text-copper font-['Inter'] tracking-tight">
                {stat.value}
              </div>
              <div className="text-text-dim text-[10px] tracking-wider uppercase mt-2">
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
