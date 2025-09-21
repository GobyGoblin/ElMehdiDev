import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Languages from "@/components/portfolio/Languages";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Certificates from "@/components/portfolio/Certificates";
import Events from "@/components/portfolio/Events";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Languages />
      <Experience />
      <Projects />
      <Certificates />
      <Events />
      <Contact />
    </div>
  );
};

export default Index;
