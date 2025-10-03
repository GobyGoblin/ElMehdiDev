import { Card } from "@/components/ui/card";
import { Languages as LanguagesIcon, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Languages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const languagesData = [
    {
      language: "Arabe",
      level: "Langue Maternelle",
      proficiency: 100,
      flag: "🇲🇦",
      description: "Maîtrise parfaite - Langue native"
    },
    {
      language: "Français", 
      level: "TCF C1",
      proficiency: 85,
      flag: "🇫🇷",
      description: "Niveau avancé - Usage professionnel courant"
    },
    {
      language: "Allemand",
      level: "A2",
      proficiency: 30,
      flag: "🇩🇪", 
      description: "Niveau élémentaire - Conversations simples"
    },
    {
      language: "Anglais",
      level: "C1",
      proficiency: 85,
      flag: "🇬🇧",
      description: "Niveau avancé - Usage professionnel courant"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getLevelColor = (proficiency: number) => {
    if (proficiency >= 90) return "from-success to-success/70";
    if (proficiency >= 70) return "from-primary to-primary/70";
    if (proficiency >= 50) return "from-accent to-accent/70";
    return "from-warning to-warning/70";
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hero-gradient">Langues</h2>
          <p className="text-xl text-muted-foreground">
            Compétences linguistiques et certifications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {languagesData.map((lang, index) => (
            <Card 
              key={index}
              className="portfolio-card p-6 text-center hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="space-y-4">
                {/* Flag and Language */}
                <div className="space-y-2">
                  <div className="text-4xl mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-muted/50">
                    {lang.flag}
                  </div>
                  <h3 className="text-xl font-bold text-primary">{lang.language}</h3>
                </div>
                
                {/* Level Badge */}
                <div className="inline-block">
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                    {lang.level}
                  </span>
                </div>
                
                {/* Progress Circle */}
                <div className="relative w-20 h-20 mx-auto">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="hsl(var(--muted))"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient-lang-${index})"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={isVisible ? `${2 * Math.PI * 40 * (1 - lang.proficiency / 100)}` : `${2 * Math.PI * 40}`}
                      style={{
                        transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        transitionDelay: `${index * 0.2}s`
                      }}
                    />
                    <defs>
                      <linearGradient id={`gradient-lang-${index}`} gradientUnits="userSpaceOnUse">
                        <stop offset="0%" className={`stop-color-primary`} />
                        <stop offset="100%" className={`stop-color-accent`} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{lang.proficiency}%</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground">{lang.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;