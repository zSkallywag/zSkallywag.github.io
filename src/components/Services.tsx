import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, Lock, FileCheck, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Vulnerability Assessment & Pentest",
    description: "Scopriamo falle prima che le trovi qualcun altro.",
    details: "Test di penetrazione approfonditi, scansione delle vulnerabilità e analisi del codice per identificare i punti deboli della tua infrastruttura prima che possano essere sfruttati.",
  },
  {
    icon: Lock,
    title: "Hardening & Configuration Review",
    description: "Duro fuori, ordinato dentro.",
    details: "Configurazione sicura di server, reti e applicazioni. Implementiamo best practice di sicurezza e riduciamo la superficie di attacco della tua infrastruttura.",
  },
  {
    icon: FileCheck,
    title: "Compliance DORA/NIS2",
    description: "Sicurezza che passa l'audit, non solo il test.",
    details: "Ti guidiamo attraverso i requisiti normativi DORA e NIS2, con documentazione completa e implementazione delle misure di sicurezza richieste.",
  },
  {
    icon: GraduationCap,
    title: "Security Coaching",
    description: "Formiamo il team per ridurre errori umani e reattività lenta.",
    details: "Programmi di formazione personalizzati per il tuo team: awareness, best practices e gestione degli incidenti per creare una cultura della sicurezza.",
  },
];

export const Services = () => {
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
    <section id="services" ref={sectionRef} className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Cosa facciamo <span className="text-accent">per te.</span>
          </h2>
        </div>

        {/* Services Accordion */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-2 border-border rounded-2xl px-6 data-[state=open]:border-accent transition-all duration-300"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" strokeWidth={2.5} />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold">{service.title}</h3>
                        <p className="text-secondary text-sm md:text-base mt-1">{service.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-16 pb-6">
                    <p className="text-lg text-secondary leading-relaxed">{service.details}</p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
