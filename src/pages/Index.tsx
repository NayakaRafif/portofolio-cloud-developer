import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Certifications />
      <Skills />
      <Contact />
      
      <footer className="py-8 px-4 bg-secondary/30 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Portfolio - Fresh Graduate Informatika UPN Veteran Yogyakarta
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
