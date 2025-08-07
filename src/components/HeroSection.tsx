import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 fade-in-section"
    >
      {/* Background tactical grid */}
      <div className="absolute inset-0 intelligence-grid opacity-20" />
      
      {/* Tactical accent lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        {/* Main title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold font-alliance tracking-wider">
            <span className="block text-gradient-primary">ARSLAAN JUGA</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground font-mono tracking-widest space-y-2">
            <div className="animate-tactical-slide-right" style={{ animationDelay: '0.2s' }}>
              SOFTWARE ENGINEER
            </div>
            <div className="animate-tactical-slide-right" style={{ animationDelay: '0.4s' }}>
              ENTREPRENEUR
            </div>
            <div className="animate-tactical-slide-right" style={{ animationDelay: '0.6s' }}>
              <span className="text-gradient-accent">INNOVATOR</span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="tactical-button group"
          >
            <span className="relative z-10">VIEW PROJECTS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="tactical-button-secondary group"
          >
            <span className="relative z-10">GET IN TOUCH</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Status indicators */}
        <div className="flex justify-center items-center gap-8 pt-12 text-sm font-mono">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-tactical-pulse" />
            <span className="text-muted-foreground">SYSTEMS ONLINE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-intelligence-glow" />
            <span className="text-muted-foreground">SECURE CONNECTION</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-tactical-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;