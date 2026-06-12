import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechStack } from "@/components/tech-stack"
import { ParallaxCTA } from "@/components/parallax-cta"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <TechStack />
        <ProjectsSection />
        <ParallaxCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
