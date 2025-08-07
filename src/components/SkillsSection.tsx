import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const SkillsSection = () => {
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

  const technicalSkills = [
    { name: 'Python', level: 90, category: 'Backend Development' },
    { name: 'JavaScript', level: 85, category: 'Frontend Development' },
    { name: 'C++', level: 80, category: 'System Programming' },
    { name: 'React/Node.js', level: 88, category: 'Full-Stack' },
    { name: 'Unreal Engine', level: 75, category: 'Game Development' },
    { name: 'Database Systems', level: 82, category: 'Data Management' },
  ];

  const softSkills = [
    { name: 'Team Leadership', icon: '⚡', description: 'Team coordination and project planning' },
    { name: 'Communication', icon: '🔒', description: 'Clear technical communication' },
    { name: 'Project Management', icon: '🎯', description: 'Project scope and timeline management' },
    { name: 'Problem Solving', icon: '🛡️', description: 'Critical thinking under pressure' },
    { name: 'Code Analysis', icon: '📊', description: 'Code review and optimization' },
    { name: 'Innovation', icon: '💡', description: 'Creative solution development' },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section header */}
        <div className="text-center space-y-6 fade-in-section">
          <h2 className="text-4xl font-bold font-alliance text-gradient-primary">
            SKILLS & EXPERTISE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technical skills and professional capabilities for modern software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8 slide-in-left">
            <div className="tactical-card">
              <h3 className="text-2xl font-bold font-alliance text-gradient-accent mb-6">
                TECHNICAL SKILLS
              </h3>
              
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="space-y-3"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-foreground">{skill.name}</div>
                        <div className="text-xs text-muted-foreground font-mono uppercase">
                          {skill.category}
                        </div>
                      </div>
                      <div className="text-sm font-mono text-primary-glow">
                        {skill.level}%
                      </div>
                    </div>
                    
                    <div className="relative h-2 bg-secondary/30 rounded-full overflow-hidden">
                      <div 
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-gradient-shift" />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Tactical corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary/50" />
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-8 slide-in-right">
            <div className="tactical-card">
              <h3 className="text-2xl font-bold font-alliance text-gradient-accent mb-6">
                PROFESSIONAL SKILLS
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className={cn(
                      "p-4 rounded-tactical border border-border/20",
                      "bg-secondary/20 hover:bg-secondary/40",
                      "transition-all duration-300 group"
                    )}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="font-semibold text-foreground group-hover:text-primary-glow transition-colors duration-300">
                          {skill.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {skill.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Tactical corner accents */}
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-accent/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-accent/50" />
            </div>
          </div>
        </div>

        {/* Additional certifications/achievements */}
        <div className="text-center fade-in-section" style={{ animationDelay: '800ms' }}>
          <div className="tactical-card inline-block">
            <div className="flex items-center justify-center gap-8 text-sm font-mono">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-tactical-pulse" />
                <span className="text-muted-foreground">FULL-STACK CERTIFIED</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-intelligence-glow" />
                <span className="text-muted-foreground">AGILE METHODOLOGY</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-tactical-pulse" />
                <span className="text-muted-foreground">ENTREPRENEURIAL EXPERIENCE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;