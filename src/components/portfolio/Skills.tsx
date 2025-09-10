import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Langages de Programmation",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Python", level: 75 },
        { name: "C#", level: 70 }
      ]
    },
    {
      title: "Frameworks & Librairies",
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Angular", level: 85 },
        { name: "React", level: 80 },
        { name: ".NET", level: 75 },
        { name: "Laravel", level: 70 }
      ]
    },
    {
      title: "Bases de Données",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "SQLServer", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Git", level: 90 },
        { name: "Jenkins", level: 75 }
      ]
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

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hero-gradient">Compétences</h2>
          <p className="text-xl text-muted-foreground">
            Technologies et outils que je maîtrise
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="portfolio-card p-8 animate-slide-up hover-lift"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-2">
                      <div 
                        className="skill-progress h-full"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;