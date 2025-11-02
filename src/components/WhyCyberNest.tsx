import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import nestImage from "@/assets/nest-server.png";

export const WhyCyberNest = () => {
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

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
          <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <img 
              src={nestImage} 
              alt="Nido di sicurezza con server protetto" 
              className="w-full h-auto animate-pulse-subtle"
            />
          </div>

          {/* Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Ogni azienda oggi è digitale.{" "}
              <span className="text-accent">Ma non tutte sono protette.</span>
            </h2>

            <p className="text-lg md:text-xl text-secondary leading-relaxed">
              CyberNest aiuta le aziende a lavorare in modo sicuro.
              Si occupa dei loro sistemi, <span className="font-semibold text-foreground">li fa funzionare bene e li protegge da truffe e attacchi informatici.</span>
            </p>

            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
              className="mt-4 border-2 border-foreground hover:bg-foreground hover:text-background font-semibold text-base px-6 py-5 rounded-full transition-all duration-300 group"
            >
              Scopri come lavoriamo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
