import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutSection from "@/components/sections/about";
import CertificatesSection from "@/components/sections/certificates";
import ContactSection from "@/components/sections/contact";
import HomeSection from "@/components/sections/home";
import ProjectsSection from "@/components/sections/projects";
import ServicesSection from "@/components/sections/services";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
