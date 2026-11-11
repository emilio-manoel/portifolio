import AboutSection from "../components/InitialPage/AboutSection" 
import ContactSection from "../components/InitialPage/ContactSection"
import Footer from "../components/InitialPage/Footer"
import Main from "../components/InitialPage/Main"
import ProjectsSection from "../components/InitialPage/ProjectsSection"
import TecnologiesSection from "../components/InitialPage/TecnologiesSection"

export default function(){

    return (
        <>
        <Main></Main>
        <ProjectsSection></ProjectsSection>
        <TecnologiesSection></TecnologiesSection>
        <AboutSection></AboutSection>
        <ContactSection></ContactSection>
        <Footer></Footer>
        </>
    )
}