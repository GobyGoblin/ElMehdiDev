import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "elmehdielelhammouti@gmail.com",
      link: "mailto:elmehdielelhammouti@gmail.com"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Casablanca, Maroc",
      link: null
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+212 6 XX XX XX XX",
      link: "tel:+212600000000"
    }
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", link: "#" },
    { icon: Linkedin, name: "LinkedIn", link: "#" },
    { icon: Mail, name: "Email", link: "mailto:elmehdielelhammouti@gmail.com" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hero-gradient">Contact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prêt à collaborer sur votre prochain projet ? Contactez-moi pour discuter de vos besoins techniques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6">Restons en Contact</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Je suis toujours ouvert aux opportunités de collaboration et aux projets intéressants. 
                N'hésitez pas à me contacter pour discuter de vos besoins en développement.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="portfolio-card p-4 hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h4 className="font-medium mb-4">Suivez-moi</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className="hover-glow"
                    asChild
                  >
                    <a href={social.link}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="portfolio-card p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6">Envoyez un Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nom</label>
                  <Input placeholder="Votre nom" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="votre@email.com" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Sujet</label>
                <Input placeholder="Sujet de votre message" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Votre message..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full glow-effect hover:scale-[1.02] transition-all duration-300">
                <Mail className="mr-2 h-4 w-4" />
                Envoyer le Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;