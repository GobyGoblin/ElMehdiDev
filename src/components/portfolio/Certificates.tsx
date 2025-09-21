import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";
import certAws from "@/assets/cert-aws.jpg";
import certOracle from "@/assets/cert-oracle.jpg";
import certGoogle from "@/assets/cert-google.jpg";
import certArabExcellence from "@/assets/cert-arab-excellence.png";

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Certification validant les connaissances fondamentales du cloud AWS, incluant les services principaux, la sécurité et l'architecture.",
      skills: ["Cloud Computing", "AWS Services", "Architecture", "Sécurité"],
      image: certAws,
      credentialId: "AWS-CPF-2024-001"
    },
    {
      title: "Oracle Database Fundamentals",
      issuer: "Oracle Corporation",
      date: "2023",
      description: "Certification Oracle Database démontrant la maîtrise des concepts fondamentaux des bases de données relationnelles.",
      skills: ["SQL", "Database Design", "Performance", "Administration"],
      image: certOracle,
      credentialId: "ORA-DB-2023-045"
    },
    {
      title: "Google Cloud Associate",
      issuer: "Google Cloud",
      date: "2023",
      description: "Certification Google Cloud Platform couvrant les services essentiels et les meilleures pratiques du cloud.",
      skills: ["GCP", "Container", "DevOps", "Machine Learning"],
      image: certGoogle,
      credentialId: "GCP-ACE-2023-789"
    },
    {
      title: "Moroccan Youth Match Excellence",
      issuer: "Capgemini & Arab Excellence",
      date: "2024-2025",
      description: "Programme complet de développement des compétences techniques et soft skills pour les jeunes talents marocains.",
      skills: ["Leadership", "Communication", "Développement", "Gestion de projet", "Networking"],
      image: certArabExcellence,
      credentialId: "MYME-2024-2025"
    }
  ];

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-glow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Certifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-gradient">Mes Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certifications professionnelles validant mon expertise technique dans diverses technologies cloud et bases de données.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={cert.title}
              className="portfolio-card hover-lift animate-slide-up group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>
                </div>
                
                <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs hover:bg-accent/20 transition-colors duration-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="text-xs text-muted-foreground font-mono pt-2 border-t border-border/50">
                  ID: {cert.credentialId}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground">
            En constante formation pour rester à jour avec les dernières technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;