"use client";
import HeroSection from "@/components/HeroSection";
import ClassesSection from "@/components/ClassesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarqueeStrip from "@/components/MarqueeStrip";

export default function Home() {
  return (
    <main className="bg-[#050508] min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeStrip variant="purple" />
      <ClassesSection />
      <AboutSection />
      <MarqueeStrip variant="gold" />
      <GallerySection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
    </main>
  );
}