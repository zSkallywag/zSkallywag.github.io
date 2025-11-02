import { useEffect, useRef, useState } from "react";
import gaetanoImage from "@/assets/gaetano-cartoon.png";

export const Founder = () => {
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
    <section ref={sectionRef} onClick={() => window.open("https://www.linkedin.com/in/gaetano-cesano-976420200", "_blank")} className="py-32 px-6 bg-muted/30 cursor-pointer">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            CyberNest nasce da chi{" "}
            <span className="text-accent">vive la sicurezza ogni giorno.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <img 
              src={gaetanoImage} 
              alt="Gaetano Cesano al lavoro" 
              className="w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-black">Gaetano Cesano</h3>
              <p className="text-lg text-accent font-semibold">
                IT Network & Cybersecurity Engineer | Vulnerability Researcher | Discovered CVE-2025-49618
              </p>
            </div>

            <div className="space-y-4 text-lg text-secondary leading-relaxed">
              <p>Fondatore di CyberNest.</p>
              <p>
                Si muove tra infrastrutture, reti e cloud con un obiettivo preciso: sicurezza solida e misurabile. <br></br>
                Analizza vulnerabilità, rafforza sistemi e sviluppa strategie di resilienza.
                Collabora con aziende per eliminare rischi concreti e assicurare che la tecnologia resti sempre sotto controllo.
              </p>
            </div>

            <div className="pt-4 border-t-2 border-accent/20">
              <blockquote className="text-2xl md:text-3xl font-bold italic">
                "Se non testiamo noi la tua sicurezza, <span className="text-accent">lo farà qualcun altro.</span>"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
