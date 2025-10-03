import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Master en Informatique",
      institution: "Ecole Marocaine Des Sciences De L'Ingenieur (EMSI)",
      location: "Casablanca, Maroc", 
      period: "2022 - 2025",
      description: "Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE)",
      grade: "Mention Bien"
    },
    {
      degree: "Diplôme Technicien Spécialisé en Développement Informatique",
      institution: "Institut specialisé de gestion et d'informatique (ISGI)",
      location: "Casablanca, Maroc",
      period: "2020 - 2022", 
      description: "Formation générale en informatique, programmation et systèmes",
      grade: "Mention Très Bien"
    },
    {
      degree: "Baccalauréat Scientifique",
      institution: "Lycée International",
      location: "Casablanca, Maroc",
      period: "2020",
      description: "Option Sciences Physiques",
      grade: "Mention Bien"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hero-gradient">Parcours Scolaire</h2>
          <p className="text-xl text-muted-foreground">
            Mon parcours académique et formation
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20"></div>
            
            <div className="space-y-8">
              {educationData.map((education, index) => (
                <div 
                  key={index}
                  className="relative flex items-start gap-8 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-effect">
                      <GraduationCap className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <Card className="portfolio-card p-6 flex-1 hover-lift">
                    <div className="space-y-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                        <h3 className="text-xl font-bold text-primary">{education.degree}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{education.period}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold">{education.institution}</h4>
                        <p className="text-muted-foreground">{education.location}</p>
                      </div>
                      
                      <p className="text-muted-foreground">{education.description}</p>
                      
                      <div className="inline-block">
                        <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                          {education.grade}
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;