import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import eventDevfest from "@/assets/Gitex.jpg";
import eventMeetup from "@/assets/gvcc.jpg";
import formationArabExcellence from "@/assets/formation-arab-excellence.jpg";
import rentreScolaire from "@/assets/rentre-scolaire.jpg";

const Events = () => {
  const events = [
    {
      title: "GITEX Africa 2025 : Marrakech at the heart of digital innovation",
      type: "Conférence",
      date: "16 Avril 2025",
      location: "Casablanca, Marrakech",
      description: "GITEX Africa 2025 est organisé par KAOUN International, en partenariat avec le ministère de la Transition Numérique et l’Agence du Développement du Digital (ADD).",
      role: "Participant",
      attendees: "40 000+",
      topics: ["Web", "Cloud", "AI", "DevOps"],
      image: eventDevfest,
      status: "completed"
    },
    {
      title: "Invitation à la Galerie GVCC",
      type: "Événement",
      date: "2025",
      location: "Casablanca",
      description: "Invitation officielle à la Galerie GVCC suite à la réalisation et mise en ligne de leur site web.",
      role: "Invité & Développeur Web",
      attendees: "Clients & partenaires GVCC",
      topics: ["Web Development", "PHP", "Conception Web","Voyager"],
      image: eventMeetup,
      status: "completed"
    },
    {
      title: "Formation Arab Excellence - Capgemini",
      type: "Formation",
      date: "Juin 2024 - Juin 2025",
      location: "Maroc",
      description: "Programme de développement des compétences techniques et soft skills pour les jeunes talents marocains, en partenariat avec Capgemini.",
      role: "Participant",
      attendees: "50+",
      topics: ["Leadership", "Communication", "Développement", "Networking", "Gestion de projet"],
      image: formationArabExcellence,
      status: "completed"
    },
    {
      title: "Rentrée Scolaire - Groupe de Promotion",
      type: "Événement éducatif",
      date: "Septembre 2024",
      location: "Établissement d'enseignement",
      description: "Événement de rentrée scolaire rassemblant la nouvelle promotion d'étudiants pour une session d'accueil et d'intégration.",
      role: "Participant",
      attendees: "80+",
      topics: ["Éducation", "Intégration", "Networking", "Orientation"],
      image: rentreScolaire,
      status: "completed"
    }
  ];

  return (
    <section id="events" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-background"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-2xl animate-glow" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Calendar className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">Événements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-gradient">Événements & Conférences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Participation active dans la communauté tech à travers des conférences, meetups et hackathons.
          </p>
        </div>

        {/* Events Timeline */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <Card 
              key={event.title}
              className="portfolio-card overflow-hidden animate-slide-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="md:flex">
                {/* Event Image */}
                <div className="md:w-1/3 relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/20">
                      {event.type}
                    </Badge>
                  </div>
                </div>

                {/* Event Content */}
                <CardContent className="md:w-2/3 p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {event.attendees} participants
                        </div>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <Badge variant="outline" className="mb-3 text-primary border-primary/30">
                      {event.role}
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {event.topics.map((topic) => (
                      <Badge 
                        key={topic} 
                        variant="secondary" 
                        className="hover:bg-accent/20 transition-colors duration-200"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  {/* Event Status */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-sm text-success font-medium">Événement terminé</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-3">Intéressé par mes interventions ?</h3>
            <p className="text-muted-foreground mb-6">
              Je suis disponible pour des conférences, formations et ateliers techniques.
            </p>
            <Button className="gradient-btn hover-lift">
              Me contacter pour un événement
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;