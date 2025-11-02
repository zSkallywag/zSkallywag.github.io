import { useEffect, useRef, useState } from "react";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="py-12 px-6 bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className={`flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Logo */}
          <div className="text-2xl font-black">
            cyber<span className="text-accent">nest</span>
          </div>

          {/* Tagline */}
          <div className="text-center md:text-right">
            <p className="text-lg font-semibold text-secondary">
              © CyberNest — Real security, not buzzwords.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
