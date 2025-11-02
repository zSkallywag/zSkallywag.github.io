import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaImage from "@/assets/ceo-sleeping-safe.png";

export const FinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => observer.disconnect();
  }, []);

  const handleBooking = () => {
    window.open("https://cal.com/cybernest/30min", "_blank");
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-x-clip overflow-y-visible bg-muted/30 px-4 sm:px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl flex flex-col md:grid md:grid-cols-2 gap-16 items-center">
        {/* Illustration */}
        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <img
            src={ctaImage}
            alt="CEO che dorme tranquillo protetto da scudo digitale"
            className="max-w-[90%] md:max-w-full h-auto mx-auto object-contain"
          />
        </div>

        {/* Content */}
        <div
          className={`space-y-8 text-center md:text-left transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Ehi, sei arrivato in fondo alla nostra pagina.
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl text-secondary leading-relaxed">
            <span className="text-accent font-bold block mt-2">Tanto vale concludere, no?</span>
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              onClick={handleBooking}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
            >
              Prenota una call di 30 minuti
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
