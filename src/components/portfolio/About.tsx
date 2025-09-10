import { Card } from "@/components/ui/card";
import { Code, Database, Server, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Développement Full Stack",
      description: "Expérience avec Java, Spring Boot, Angular, et JavaScript"
    },
    {
      icon: Database,
      title: "Bases de Données",
      description: "PostgreSQL, MySQL, SQLServer et gestion des données"
    },
    {
      icon: Server,
      title: "DevOps & Cloud",
      description: "AWS, Docker, et architectures modernes"
    },
    {
      icon: Users,
      title: "Méthodologies Agiles",
      description: "SCRUM, collaboration et amélioration continue"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hero-gradient">À Propos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Développeur polyvalent avec une expertise en méthodologie Agile SAFe et SCRUM, 
            collaborant étroitement avec des équipes pluridisciplinaires pour concevoir des 
            applications performantes et innovantes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="portfolio-card p-6 text-center hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;