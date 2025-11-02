import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-12 left-0 right-0 z-40 w-full overflow-x-clip transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl md:text-3xl font-black hover:text-accent transition-colors whitespace-nowrap"
          >
            cyber<span className="text-accent">nest</span>
          </a>

          {/* CTA Button */}
          <Button
            variant={isScrolled ? "default" : "outline"}
            size="lg"
            onClick={scrollToContact}
            className={`font-semibold rounded-full ${
              isScrolled
                ? "bg-accent hover:bg-accent/90"
                : "border-2 border-foreground hover:bg-foreground hover:text-background"
            }`}
          >
            Contattaci
          </Button>
        </div>
      </div>
    </nav>
  );
};
