import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="hero-gradient">EL MEHDI</span>
            <br />
            <span className="text-foreground">EL HAMMOUTI</span>
          </h1>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Développeur Full Stack
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Spécialisé en ingénierie informatique avec une expertise en Java, Spring Boot, Angular, et DevOps
          </p>
        </div>
        
        <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="glow-effect hover:scale-105 transition-all duration-300">
            <Mail className="mr-2 h-5 w-5" />
            Contact
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" size="lg" className="hover-glow">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="hover-glow">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;