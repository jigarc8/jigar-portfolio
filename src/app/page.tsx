import React from 'react'
import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import ToolkitCarousel from '@/components/toolkit-carousel'
import ProjectLifecycle from '@/components/project-lifecycle'
import ProjectsSection from '@/components/projects-section'

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center px-5 md:px-10">
      <HeroSection />
      <ToolkitCarousel />
      <ProjectLifecycle />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
