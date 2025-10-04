import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

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
      grade: "Mention Très Bien",
      isMajor: true
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
                  className="relative flex items-start gap-8 animate-slide-up group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      education.isMajor 
                        ? 'bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 shadow-[0_0_30px_rgba(251,191,36,0.5)] group-hover:shadow-[0_0_50px_rgba(251,191,36,0.8)] transition-all duration-500'
                        : 'bg-gradient-to-br from-primary to-accent glow-effect'
                    }`}>
                      {education.isMajor ? (
                        <Award className="h-8 w-8 text-white" />
                      ) : (
                        <GraduationCap className="h-8 w-8 text-primary-foreground" />
                      )}
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <Card className={`p-6 flex-1 relative overflow-hidden ${
                    education.isMajor 
                      ? 'border-2 border-yellow-500/50 bg-gradient-to-br from-yellow-500/5 via-amber-500/5 to-background hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] transition-all duration-500 hover:scale-[1.02]'
                      : 'portfolio-card hover-lift'
                  }`}>
                    {education.isMajor && (
                      <>
                        {/* Gold accent corner */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-bl-full"></div>
                        
                        {/* Major badge - visible on hover */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Badge className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-white border-none shadow-lg">
                            <Award className="h-3 w-3 mr-1" />
                            Major de Promotion
                          </Badge>
                        </div>
                      </>
                    )}
                    
                    <div className="space-y-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                        <h3 className={`text-xl font-bold ${
                          education.isMajor 
                            ? 'bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent'
                            : 'text-primary'
                        }`}>
                          {education.degree}
                        </h3>
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
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          education.isMajor
                            ? 'bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-yellow-600/20 text-yellow-700 dark:text-yellow-400 border border-yellow-500/30'
                            : 'bg-accent/20 text-accent'
                        }`}>
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