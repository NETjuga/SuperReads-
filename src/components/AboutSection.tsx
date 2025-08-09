import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { value: '3+', label: 'Years of Coding', description: 'Full-stack development' },
    { value: '5+', label: 'Projects Deployed', description: 'Production systems' },
    { value: '1', label: 'Startup Venture', description: 'Entrepreneurial experience' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 slide-in-left">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold font-alliance text-gradient-primary">
                ABOUT ME
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent" />
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm <span className="text-primary-glow font-semibold">Arslaan Ahmed</span>, 
                an aspiring professional software engineer, i have 3 years of experience in full-stack development, 
                entrepreneurship, and modern web technologies.
              </p>
              
              <p>
                My experience spans 2 successful e-commerce ventures, 
                up to date software solutions, and i have contributed to game development for fun and for experience. 
                I've built and deployed systems that solve real-world challenges 
                with clean, efficient code and user-focused design. 
              </p>

              <p>
                Beyond coding, I stay active by going for runs, i also like reading classic literature, Business & Economics,  
                and enjoy strategic games like chess and Tekken 8.
              </p>
            </div>

            {/* Button */}
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="tactical-button group"
            >
              <span className="relative z-10">VIEW PROJECTS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Right content - Achievement grid */}
          <div className="slide-in-right">
            <div className="tactical-card relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-tactical" />
              
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold font-alliance text-center text-gradient-accent">
                  CAREER HIGHLIGHTS
                </h3>
                
                <div className="grid grid-cols-1 gap-6">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={achievement.label}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-tactical",
                        "bg-secondary/30 border border-border/20",
                        "hover:bg-secondary/50 transition-colors duration-300"
                      )}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="space-y-1">
                        <div className="text-2xl font-bold text-primary-glow">
                          {achievement.value}
                        </div>
                        <div className="text-sm font-medium text-foreground">
                          {achievement.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {achievement.description}
                        </div>
                      </div>
                      
                      <div className="w-12 h-12 rounded-tactical bg-primary/20 flex items-center justify-center">
                        <div className="w-6 h-6 bg-primary/60 rounded-full animate-tactical-pulse" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tactical corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary/50" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-accent/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-accent/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;