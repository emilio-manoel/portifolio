import Main from "../components/InitialPage/Main";
import TecnologiesSection from "../components/InitialPage/TecnologiesSection";
import ProjectsSection from "../components/InitialPage/ProjectsSection";
import AboutSection from "../components/InitialPage/AboutSection";
import ContactSection from "../components/InitialPage/ContactSection";
import Footer from "../components/InitialPage/Footer";

export default function InitialPage() {
  return (
    <>
      <Main />
      <TecnologiesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
