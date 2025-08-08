import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

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

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'CHAPTERLY',
      classification: 'LIBRARY PLATFORM',
      description:
        'Advanced library platform promoting cognitive enhancement through strategic reading protocols and genre discovery algorithms.',
      technologies: ['React', 'Node.js', 'APIs'],
      status: 'COMPLETED',
      delay: '0ms',
      route: '/ProjectShowcase',
      isExternal: false,
    },
    {
      title: 'CODESUM',
      classification: 'CODE GENERATOR',
      description:
        'Automated code generation and analysis system with real-time documentation and implementation guidance.',
      technologies: ['Python', 'AI/ML', 'Code Analysis'],
      status: 'LIVE',
      delay: '200ms',
      route: '/CodesumShowcase',
      isExternal: false,
    },
    {
      title: 'STUDENTWIRE',
      classification: 'COMMUNICATION PLATFORM',
      description:
        'Educational communication platform designed for clarity and strategic knowledge dissemination.',
      technologies: ['Full-Stack', 'Real-time', 'Security'],
      status: 'BETA',
      delay: '400ms',
      route: '/StudentShowcase',
      isExternal: false,
    },
    {
      title: 'FOOTPRINT.ONLINE',
      classification: 'CYBERSECURITY PLATFORM',
      description:
        'Comprehensive cybersecurity platform providing advanced threat detection and digital footprint analysis.',
      technologies: ['Security', 'Analytics', 'Monitoring'],
      status: 'ACTIVE',
      delay: '600ms',
      route: '',
      isExternal: true,
    },
    {
      title: 'PWROUT',
      classification: 'E-COMMERCE STORE',
      description:
        'Shopify-powered store specializing in anime and pop culture themed athletic wear and gym apparel.',
      technologies: ['Shopify', 'E-commerce', 'Design'],
      status: 'LIVE',
      delay: '800ms',
      route: 'https://pwrout.online',
      isExternal: true,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE':
        return 'text-success';
      case 'ACTIVE':
        return 'text-primary-glow';
      case 'BETA':
        return 'text-accent';
      case 'COMPLETED':
        return 'text-success';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 relative">
      {/* Background tactical elements */}
      <div className="absolute inset-0 intelligence-grid opacity-10" />

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section header */}
        <div className="text-center space-y-6 fade-in-section">
          <h2 className="text-4xl font-bold font-alliance text-gradient-primary">
            FEATURED PROJECTS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Selected projects showcasing modern development practices and innovative solutions
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="tactical-card group cursor-pointer fade-in-section relative"
              style={{ animationDelay: project.delay }}
            >
              {/* Project header */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold font-alliance text-gradient-primary">
                    {project.title}
                  </h3>
                  <div
                    className={cn(
                      'px-2 py-1 rounded text-xs font-mono',
                      'bg-primary/10 border border-primary/20',
                      getStatusColor(project.status)
                    )}
                  >
                    {project.status}
                  </div>
                </div>

                <div className="text-sm font-mono text-accent uppercase tracking-wider">
                  {project.classification}
                </div>
              </div>

              {/* Project description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

              {/* Technologies */}
              <div className="space-y-3 mb-6">
                <div className="text-sm font-mono text-foreground uppercase tracking-wide">
                  TECH STACK
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={cn(
                        'px-2 py-1 text-xs font-mono rounded',
                        'bg-secondary/50 text-secondary-foreground',
                        'border border-border/30'
                      )}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action button */}
              <button
                onClick={() => {
                  if (project.isExternal) {
                    window.open(project.route, '_blank');
                  } else {
                    navigate(project.route);
                  }
                }}
                className={cn(
                  'w-full tactical-button-secondary text-sm',
                  'group-hover:bg-primary group-hover:text-primary-foreground',
                  'transition-all duration-300'
                )}
              >
                {project.isExternal ? 'VISIT SITE' : 'VIEW PROJECT'}
              </button>

              {/* Tactical corner indicators */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
              <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-accent/30 group-hover:border-accent transition-colors duration-300" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-accent/30 group-hover:border-accent transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* More projects button */}
        <div className="text-center fade-in-section" style={{ animationDelay: '600ms' }}>
          <button className="tactical-button group">
            <span className="relative z-10">VIEW ALL PROJECTS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Current Project Section */}
        <div className="fade-in-section" style={{ animationDelay: '1000ms' }}>
          <div className="text-center space-y-6 mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
            <h3 className="text-2xl font-bold font-alliance text-gradient-accent">
              MY CURRENT PROJECT
            </h3>
          </div>
          
          {/* VentureLink Card - Horizontal */}
          <div
            className="tactical-card group cursor-pointer max-w-4xl mx-auto"
            onClick={() => navigate('/VentureLinkShowcase')}
          >
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Left: Project Info */}
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold font-alliance text-gradient-primary">
                    VENTURELINK
                  </h3>
                  <div className={cn(
                    "px-3 py-1 rounded text-xs font-mono",
                    "bg-accent/20 border border-accent/30",
                    "text-accent"
                  )}>
                    BUILDING
                  </div>
                </div>
                
                <div className="text-sm font-mono text-accent uppercase tracking-wider">
                  STARTUP PLATFORM
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Building an innovative platform that connects founders and teams to investors in a frictionless, 
                  light-hearted way. Making startup funding accessible and fun while opening doors to countless opportunities.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'Node.js', 'AI/ML', 'Blockchain'].map((tech) => (
                    <span
                      key={tech}
                      className={cn(
                        'px-2 py-1 text-xs font-mono rounded',
                        'bg-secondary/50 text-secondary-foreground',
                        'border border-border/30'
                      )}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Right: Action */}
              <div className="text-center md:text-right">
                <button className={cn(
                  'tactical-button-secondary',
                  'group-hover:bg-accent group-hover:text-accent-foreground',
                  'transition-all duration-300'
                )}>
                  VIEW ROADMAP
                </button>
              </div>
            </div>
            
            {/* Tactical corner indicators */}
            <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-accent/30 group-hover:border-accent transition-colors duration-300" />
            <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-accent/30 group-hover:border-accent transition-colors duration-300" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
