import HeroSection from "../components/InitialPage/hero/HeroSection";
import TechSection from "../components/InitialPage/tech/TechSection";
import ProjectsSection from "../components/InitialPage/projects/ProjectsSection";
import AboutSection from "../components/InitialPage/about/AboutSection";
import ContactSection from "../components/InitialPage/contact/ContactSection";
import Footer from "../components/InitialPage/footer/Footer";

export default function InitialPage() {
  return (
    <>
      <HeroSection />
      <TechSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
