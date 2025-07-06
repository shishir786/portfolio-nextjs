import Header from "@/components/header";
import HomeSection from "@/components/sections/home";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import ProjectsSection from "@/components/sections/projects";
import CertificatesSection from "@/components/sections/certificates";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/footer";

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
