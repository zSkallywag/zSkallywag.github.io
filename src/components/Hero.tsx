import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ceo-hacker.png";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-background px-4 sm:px-6 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background elements confined */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-6 text-6xl font-bold opacity-5 animate-float">0</div>
        <div
          className="absolute top-40 right-6 text-6xl font-bold opacity-5 animate-float"
          style={{ animationDelay: "1s" }}
        >
          1
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center z-10">
        {/* Text Content */}
        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <h1
              className={`text-4xl sm:text-5xl md:text-7xl font-black leading-tight transition-all duration-800 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              Un CEO dovrebbe{" "}
              <span className="block text-foreground">dormire tranquillo.</span>
            </h1>
            <h1
              className={`text-4xl sm:text-5xl md:text-7xl font-black leading-tight transition-all duration-800 ${
                isVisible ? "animate-slide-up-delay" : "opacity-0"
              }`}
            >
              <span className="text-accent">Sei sicuro di poterlo fare?</span>
            </h1>
          </div>

          <p
            className={`text-lg sm:text-xl md:text-2xl text-secondary leading-relaxed transition-all duration-800 ${
              isVisible ? "animate-slide-up-delay-2" : "opacity-0"
            }`}
          >
            Ti senti al sicuro? Perfetto.
            <br />
            <span className="font-semibold">Io inizio sempre da chi lo pensa.</span>
          </p>

          <div
            className={`transition-all duration-800 ${
              isVisible ? "animate-slide-up-delay-2" : "opacity-0"
            }`}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
            >
              Richiedi un assessment gratuito
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Illustration */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="CEO preoccupato con hacker alle spalle"
            className="max-w-[90%] md:max-w-[100%] h-auto object-contain animate-float"
            style={{ animationDuration: "8s" }}
          />
        </div>
      </div>
    </section>
  );
};
