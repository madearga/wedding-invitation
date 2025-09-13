"use client";

import { WeddingHero } from "./ui/hero-with-video";

interface LandingPageProps {
  onOpenInvitation: () => void;
}

export default function LandingPage({ onOpenInvitation }: LandingPageProps) {
  return (
    <WeddingHero 
      onOpenInvitation={onOpenInvitation}
      brandName="Our Wedding"
      heroTitle="Arga & Agni"
      heroSubtitle="WEDDING INVITATION"
      heroDescription=""
      backgroundImage="https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwS35RaQ9KszXGCKoardWxuyJFchTp9RtekPAB"
      videoUrl="https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwjrOczM5uO6qjlMnepHs2rXoJPgubf9tCyZSh"
      weddingDate="17 Oktober 2025"
      weddingVenue="Katedral Surabaya"
      coupleNames="Arga & Agni"
    />
  );
}