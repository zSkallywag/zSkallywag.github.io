import { useEffect, useRef, useState } from "react";
import { Shield, Zap, FileCheck } from "lucide-react";
import repairImage from "@/assets/repair-team.png";

const workBlocks = [
  {
    icon: Shield,
    title: "Sai dove ti bucano?",
    description: "Noi sì. E ci arriviamo prima di chiunque altro.",
  },
  {
    icon: Zap,
    title: "Niente pezze. Solo controllo totale.",
    description: "Ti diamo una mappa chiara di ciò che funziona e di ciò che può cedere sotto pressione.",
  },
  {
    icon: FileCheck,
    title: "Non ti lasciamo con grafici e slide.",
    description: "Ti mostriamo dove intervenire, come farlo e lo facciamo insieme a te.",
  },
];

export const HowWeWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            Meno panico. <span className="text-accent">Più controllo.</span>
          </h2>
        </div>

        {/* Work Blocks */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {workBlocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <div
                key={index}
                className={`p-8 bg-card border-2 border-border rounded-3xl hover:border-accent transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Icon className="w-12 h-12 mb-6 text-accent" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold mb-3">{block.title}</h3>
                <p className="text-secondary text-lg">{block.description}</p>
              </div>
            );
          })}
        </div>

        {/* Illustration */}
        <div className={`mt-20 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <img 
            src={repairImage} 
            alt="Team che risolve problemi IT" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
