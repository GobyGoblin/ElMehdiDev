import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Ingénierie Informatique Fullstack Java/Angular",
      company: "CAPGEMINI",
      location: "Casablanca",
      period: "Aôut 2025 - Présent",
      type: "CDI",
      description: "Participation à un projet de refonte et évolution des systèmes applicatifs de gestion des garanties, entre systèmes bancaires, ATRIUM côté Apt et Extranet côté banque de centre SAFe.",
      technologies: ["Java 21", "Spring Boot", "Angular 19", "AWS", "SAFe", "DDD","Jenkins", "Git", "Maven", "PostgreSQL", "MySQL"]
    },
    {
      title: "Développeur Fullstack",
      company: "Missions Diverses",
      location: "Casablanca", 
      period: "2024 - Présent",
      type: "Freelance",
      description: "Développement d'applications web et mobiles utilisant diverses technologies. Création d'interfaces utilisateur et d'architectures backend performantes.",
      technologies: ["Java 8", "Spring Boot", "Angular", "JavaScript", "Laravel", "Django", ".NET", "PostgreSQL", "MySQL", "SQLServer"]
    },
    {
      title: "Stagiaire en Ingénierie Informatique",
      company: "UBERMENSCH",
      location: "Casablanca",
      period: "Juin 2024 - Sept 2024",
      type: "Stage",
      description: "Développer et déployer une application informatique extensible et modulaire à une Bona Facturation. Inspection des modèles de conception pour garantir le bon fonctionnement de l'application.",
      technologies: ["PHP","Laravel","Voyager","Design Patterns", "Architecture Modulaire", "Développement Extensible"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hero-gradient">Expériences</h2>
          <p className="text-xl text-muted-foreground">
            Mon parcours professionnel et mes projets récents
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative mb-12 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full ring-4 ring-primary/20 animate-glow"></div>
                
                <Card className="portfolio-card ml-20 p-6 hover-lift">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                      <p className="text-lg font-semibold">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="w-fit mt-2 lg:mt-0">
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;