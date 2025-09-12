"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LandingPage from "@/components/landing-page";
import Layout from "@/components/layout";
import MainContent from "@/components/main-content";

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!isInvitationOpen ? (
        <LandingPage onOpenInvitation={() => setIsInvitationOpen(true)} />
      ) : (
        <Layout>
          <MainContent />
        </Layout>
      )}
    </AnimatePresence>
  );
}
