import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import DualPathCTA from "@/components/home/DualPathCTA";
import WhyChooseGIC from "@/components/home/WhyChooseGIC";
import Methodology from "@/components/home/Methodology";
import AssetClasses from "@/components/home/AssetClasses";
import BlindCards from "@/components/home/BlindCards";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: "Global Investor Circle | Private Investment Platform",
  description:
    "Confidential introductions between qualified investors and institutional developers. Off-market real estate and infrastructure opportunities — by invitation only.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <DualPathCTA />
      <WhyChooseGIC />
      <Methodology />
      <AssetClasses />
      <BlindCards />
      <Testimonials />
    </>
  );
}
