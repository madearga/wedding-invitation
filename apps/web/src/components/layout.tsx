"use client";

import { WeddingDockDemo } from "@/components/ui/wedding-dock-demo";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
      
      {/* Wedding Navigation Dock */}
      <WeddingDockDemo />
    </>
  );
}