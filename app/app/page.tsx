"use client";
import HeroSection from "@/components/HeroSection";
import ClassesSection from "@/components/ClassesSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <HeroSection />
      <ClassesSection />
      <AboutSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
    </main>
  );
}