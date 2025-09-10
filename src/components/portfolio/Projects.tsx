import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Site web E-Commerce (NuXJa)",
      description: "Création d'un site web e-Commerce en utilisant Django et Angular. Intégration complète avec système de paiement et gestion des commandes.",
      technologies: ["Django", "Angular", "API", "E-Commerce"],
      category: "Full Stack",
      image: "🛒"
    },
    {
      title: "Site web Pare-Brise Express",
      description: "Création d'un site web pour Pare-brise-express.ma utilisant Voyager. Interface moderne et responsive pour la gestion des services automobiles.",
      technologies: ["Voyager", "PHP", "MySQL", "Responsive Design"],
      category: "Web Development",
      image: "🚗"
    },
    {
      title: "Site web Galerie (gvcc.art)",
      description: "Création d'un site web pour Galerie Venise Cadre en utilisant PHP Voyager. Plateforme d'exposition d'œuvres artistiques avec interface élégante.",
      technologies: ["PHP", "Voyager", "MySQL", "Gallery Management"],
      category: "Art & Culture",
      image: "🎨"
    },
    {
      title: "Application Micro-Services",
      description: "Création d'une Application Micro-Services utilisant Spring Boot, Spring Cloud et Thymeleaf. Architecture distribuée et scalable.",
      technologies: ["Spring Boot", "Spring Cloud", "Thymeleaf", "Microservices"],
      category: "Architecture",
      image: "⚙️"
    },
    {
      title: "Algorithmes Dijkstra",
      description: "Création de l'algorithme Dijkstra en utilisant Java. Implémentation optimisée pour la recherche de plus courts chemins.",
      technologies: ["Java", "Algorithmes", "Graphes", "Optimisation"],
      category: "Algorithms",
      image: "📊"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hero-gradient">Projets</h2>
          <p className="text-xl text-muted-foreground">
            Découvrez mes réalisations et projets techniques
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="portfolio-card p-6 hover-lift animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 text-center">{project.image}</div>
              
              <div className="mb-3">
                <Badge variant="outline" className="mb-2">
                  {project.category}
                </Badge>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex}
                    variant="secondary"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Voir
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;