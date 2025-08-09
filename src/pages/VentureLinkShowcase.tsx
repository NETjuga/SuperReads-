import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const VentureLinkShowcase = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

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

  const roadmapPhases = [
    {
      phase: "PHASE 01",
      title: "FOUNDATION & RESEARCH",
      status: "COMPLETED",
      description: "Market research, competitor analysis, and initial concept validation.",
      items: [
        "Market analysis and opportunity assessment",
        "User persona development and validation",
        "Technical architecture planning",
        "Initial wireframes and user flows"
      ],
      completion: 100
    },
    {
      phase: "PHASE 02", 
      title: "MVP DEVELOPMENT",
      status: "IN PROGRESS",
      description: "Building the core platform features and user interface.",
      items: [
        "User authentication and onboarding",
        "Founder profile creation system",
        "Investor dashboard development",
        "Basic matching algorithm implementation"
      ],
      completion: 60
    },
    {
      phase: "PHASE 03",
      title: "BETA TESTING",
      status: "UPCOMING",
      description: "Limited release for user feedback and platform optimization.",
      items: [
        "Closed beta with select founders and investors",
        "User feedback collection and analysis",
        "Platform optimization and bug fixes",
        "Security testing and compliance"
      ],
      completion: 0
    },
    {
      phase: "PHASE 04",
      title: "FULL LAUNCH",
      status: "PLANNED",
      description: "Public launch with marketing campaign and scaling infrastructure.",
      items: [
        "Public platform launch",
        "Marketing and user acquisition",
        "Advanced features rollout",
        "Scaling and performance optimization"
      ],
      completion: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED': return 'text-success';
      case 'IN PROGRESS': return 'text-accent';
      case 'UPCOMING': return 'text-primary';
      case 'PLANNED': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'COMPLETED': return 'bg-success/10 border-success/20';
      case 'IN PROGRESS': return 'bg-accent/10 border-accent/20';
      case 'UPCOMING': return 'bg-primary/10 border-primary/20';
      case 'PLANNED': return 'bg-muted/10 border-muted/20';
      default: return 'bg-muted/10 border-muted/20';
    }
  };

  return (
    <main ref={sectionRef} className={cn(
      "min-h-screen bg-background text-foreground font-alliance",
      "transition-opacity duration-1000",
      visible ? "opacity-100" : "opacity-0"
    )}>
      {/* Background tactical elements */}
      <div className="fixed inset-0 intelligence-grid opacity-5" />
      
      <div className="relative z-10 px-4 py-8 max-w-6xl mx-auto">
        {/* Navigation */}
        <nav className="mb-12 fade-in-section">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="tactical-button-secondary text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              ← BACK TO PORTFOLIO
            </Link>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              PROJECT ROADMAP
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-center mb-20 fade-in-section">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <h1 className="text-5xl font-bold text-gradient-primary font-alliance">
                VENTURELINK
              </h1>
              <div className={cn(
                "px-3 py-1 rounded text-sm font-mono",
                "bg-accent/20 border border-accent/30",
                "text-accent animate-tactical-pulse"
              )}>
                BUILDING
              </div>
            </div>
            
            <div className="text-lg font-mono text-accent uppercase tracking-wider">
              STARTUP FUNDING PLATFORM
            </div>
            
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Revolutionizing how founders connect with investors through an innovative platform 
              that makes startup funding frictionless, accessible, and enjoyable. Building the future 
              of entrepreneurship, one connection at a time.
            </p>
            
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto" />
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-20 fade-in-section">
          <div className="tactical-card text-center space-y-6">
            <h2 className="text-3xl font-bold text-gradient-accent">PROJECT VISION</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
              VentureLink aims to democratize startup funding by creating a platform where innovation meets investment. 
              We're building a space that feels light-hearted and fun while maintaining the professionalism needed for 
              serious business connections. Our goal is to remove barriers and create opportunities for visionary founders 
              to connect with forward-thinking investors.

              Venture Capital firms like Y-Combinator have quartely windows in which you can apply which means youre limited to a deadline. Having an idea is great but most people are limited by a lack of technical, motivated and driven
              peers in their social circle, Venture Capital dishes out millions to select start ups but some people might not need to start slow. A rocket doesn't shoot up into orbit, a rocket starts slow, gains momentum, accelerates, and then 
              is in orbit. With VentureLink i hope to aim for a platform that elimates a persons limit of like minded people not being around, money being an issue and i most of all hope to elimiate the friction between starting something ant taking that risk. 
            </p>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-20">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-4xl font-bold text-gradient-primary mb-4">DEVELOPMENT ROADMAP</h2>
            <p className="text-muted-foreground">Current progress and upcoming milestones</p>
          </div>

          <div className="space-y-8">
            {roadmapPhases.map((phase, index) => (
              <div 
                key={phase.phase}
                className="tactical-card fade-in-section"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Phase Info */}
                  <div className="space-y-3">
                    <div className="text-sm font-mono text-accent uppercase tracking-wider">
                      {phase.phase}
                    </div>
                    <h3 className="text-xl font-bold text-gradient-primary">
                      {phase.title}
                    </h3>
                    <div className={cn(
                      "inline-flex px-2 py-1 rounded text-xs font-mono",
                      getStatusBg(phase.status),
                      getStatusColor(phase.status)
                    )}>
                      {phase.status}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-muted-foreground">
                      {phase.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0",
                            phase.completion > 0 ? "bg-accent" : "bg-muted-foreground/50"
                          )} />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Progress */}
                  <div className="space-y-3">
                    <div className="text-right">
                      <span className="text-2xl font-bold text-gradient-accent">
                        {phase.completion}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-accent to-primary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${phase.completion}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20 fade-in-section">
          <div className="tactical-card">
            <h2 className="text-3xl font-bold text-gradient-primary mb-8 text-center">TECHNOLOGY STACK</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: "Frontend", techs: ["React Native", "TypeScript", "Expo"] },
                { category: "Backend", techs: ["Node.js", "Express", "PostgreSQL"] },
                { category: "AI/ML", techs: ["TensorFlow", "Python", "OpenAI"] },
                { category: "Infrastructure", techs: ["AWS", "Docker", "Blockchain"] }
              ].map((stack) => (
                <div key={stack.category} className="space-y-3">
                  <h3 className="text-lg font-bold text-gradient-accent">{stack.category}</h3>
                  <div className="space-y-2">
                    {stack.techs.map((tech) => (
                      <div 
                        key={tech}
                        className="px-3 py-2 bg-secondary/30 rounded border border-border/30 text-sm"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Updates Section */}
        <section className="fade-in-section">
          <div className="tactical-card text-center">
            <h2 className="text-3xl font-bold text-gradient-accent mb-6">STAY UPDATED</h2>
            <p className="text-muted-foreground mb-8">
              Follow the development journey and be the first to know about major milestones.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="tactical-button">
                GET NOTIFIED
              </button>
              <Link to="/" className="tactical-button-secondary">
                BACK TO PORTFOLIO
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default VentureLinkShowcase;