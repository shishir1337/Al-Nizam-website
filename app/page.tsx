import type React from "react"
import HeroSection from "@/components/HeroSection"
import AboutUsSection from "@/components/AboutUsSection"
import ServicesSection from "@/components/ServicesSection"
import ProjectsGallery from "@/components/ProjectsGallery"
import WhyChooseUs from "@/components/WhyChooseUs"
import CTASection from "@/components/CTASection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <ProjectsGallery />
      <WhyChooseUs />
      <CTASection />
      <ContactSection />
    </>
  )
}
