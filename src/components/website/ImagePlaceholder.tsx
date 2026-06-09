"use client";

import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  label: string;
  aspectRatio?: string;
  className?: string;
}

/**
 * Photo placeholder component for the Hayrey website.
 * Replace these with real product/factory photos when available.
 * Each placeholder shows the recommended image description and aspect ratio.
 */
export default function ImagePlaceholder({
  height = "h-48",
  label,
  aspectRatio,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative bg-navy-card border border-dashed border-border-dark rounded-xl overflow-hidden flex flex-col items-center justify-center gap-2 group ${height} ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-copper/5 to-transparent opacity-60" />
      <ImageIcon
        size={28}
        className="text-text-dim group-hover:text-copper/50 transition-colors duration-300"
      />
      <div className="text-text-dim text-[10px] tracking-wider uppercase text-center px-4 leading-relaxed group-hover:text-copper/60 transition-colors duration-300">
        {label}
      </div>
    </div>
  );
}
