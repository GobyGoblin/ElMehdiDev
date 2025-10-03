import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";
import certOracle from "@/assets/cert-oracle.png";
import certArabExcellence from "@/assets/cert-capgemini.png";
import certEtl from "@/assets/etl_certif-1.png";
import certDocker from "@/assets/docker_certif-1.png";
import certData from "@/assets/intro_data-1.png";
import certPy from "@/assets/Python_Projects-1.png";
import pythonEverybodyCert from "@/assets/Python for Everybody-1.png";

const Certificates = () => {
  const certificates = [
    {
      title: "Introduction to Data Engineering",
      issuer: "IBM (via Coursera)",
      date: "2025-06-10",
      description: "Foundations of data engineering: ETL concepts, data pipelines and relational databases.",
      skills: ["Data Engineering", "ETL Concepts", "Data Pipelines", "Relational Databases"],
      image: certData,
      credentialId: "GCYPIC7YIFLN",
      url: "https://www.coursera.org/account/accomplishments/verify/GCYPIC7YIFLN"
    },
    {
      title: "Python for Everybody (Specialization)",
      issuer: "University of Michigan (via Coursera)",
      date: "2023-03-28",
      description: "Python specialization covering programming, data structures, web APIs, databases and visualization.",
      skills: ["Python", "Data Structures", "Databases (SQL)", "APIs", "Data Retrieval", "Visualization"],
      image: pythonEverybodyCert,
      credentialId: "C24JNUGA5DBG",
      url: "https://www.coursera.org/account/accomplishments/specialization/C24JNUGA5DBG"
    },
    {
      title: "Python Project for Data Engineering",
      issuer: "IBM (via Coursera)",
      date: "2025-06-23",
      description: "Practical project implementing Python for data transformation and ETL workflows.",
      skills: ["Python", "Data Transformation", "ETL Automation", "File Handling", "APIs"],
      image: certPy,
      credentialId: "V4L2ALCUI41H",
      url: "https://www.coursera.org/account/accomplishments/verify/V4L2ALCUI41H"
    },
    {
      title: "Moroccan Youth Match Excellence (MYME)",
      issuer: "Capgemini & Arab Excellence",
      date: "2024-2025",
      description: "Program covering soft skills, communication, teamwork, coding, and IT project-based solutions.",
      skills: ["Communication", "Networking", "Public Speaking", "Time Management", "Teamwork", "Coding", "Digital Skills"],
      image: certArabExcellence,
      credentialId: "MYME-2024-2025",
      url: ""
    },
    {
      title: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
      issuer: "Oracle",
      date: "2024-10-21",
      description: "Certification covering foundational cloud concepts, OCI services and cloud security basics.",
      skills: ["Cloud Infrastructure", "Oracle Cloud (OCI)", "Cloud Security", "Cloud Procurement"],
      image: certOracle,
      credentialId: "OCI-2024-FOUNDATIONS",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=68D6516453B3547FFC72470D925F86220E564471E7293245541B2E45FE41356E"
    },
    {
      title: "Introduction to Containers with Docker, Kubernetes & OpenShift",
      issuer: "IBM (via Coursera)",
      date: "2024-05-21",
      description: "Introduction to containerization with Docker, Kubernetes orchestration and OpenShift platform.",
      skills: ["Docker", "Kubernetes", "OpenShift", "Containerization"],
      image: certDocker,
      credentialId: "R8JFLLNUBMXD",
      url: "https://www.coursera.org/account/accomplishments/verify/R8JFLLNUBMXD"
    },
    {
      title: "ETL and Data Pipelines with Shell, Airflow and Kafka",
      issuer: "IBM (via Coursera)",
      date: "2025-09-07",
      description: "Hands-on course building ETL pipelines with Shell scripting, Apache Airflow and Apache Kafka.",
      skills: ["ETL", "Shell Scripting", "Airflow", "Kafka", "Data Pipelines"],
      image: certEtl,
      credentialId: "N6HA39MKXJV",
      url: "https://www.coursera.org/account/accomplishments/verify/N6HA3S9MKXJV"
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
            <a 
              key={cert.title}
              href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card 
                className="portfolio-card hover-lift animate-slide-up group overflow-hidden relative h-full"
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
            </a>
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