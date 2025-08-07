import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const TacticalNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-b border-border/30" 
        : "bg-transparent"
    )}>
      <div className="flex justify-center py-4">
        <div className={cn(
          "flex items-center gap-1 px-4 py-2 rounded-tactical transition-all duration-500",
          "border border-border/20 backdrop-blur-sm",
          isScrolled 
            ? "bg-card/40" 
            : "bg-card/20"
        )}>
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-all duration-300",
                "text-muted-foreground hover:text-primary-glow",
                "hover:bg-primary/10 rounded-tactical",
                "relative overflow-hidden group"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10">{item.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TacticalNavbar;