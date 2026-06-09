import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Dongguan Hayrey Integrated Technology | Copper-Base MCPCB Manufacturer",
  description: "Specialized metal-core PCB manufacturer for demanding thermal applications. Copper-base, Aluminum-base, Custom form factors. Direct factory, no middleman.",
  keywords: ["copper base MCPCB manufacturer", "metal core PCB China", "MCPCB factory direct", "thermal management PCB", "copper base PCB types"],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Dongguan Hayrey Integrated Technology | Where Heat Meets Precision",
    description: "Specialized metal-core PCB manufacturer for demanding thermal applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased bg-navy text-foreground min-h-screen flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
