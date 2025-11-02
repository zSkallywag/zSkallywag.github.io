import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <Button 
        size="lg"
        onClick={scrollToContact}
        className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-2xl hover:shadow-accent/50 rounded-full px-6 py-6 group animate-pulse-subtle"
      >
        <Calendar className="mr-2 group-hover:rotate-12 transition-transform" />
        Prenota ora
      </Button>
    </div>
  );
};
