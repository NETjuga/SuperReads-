import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Code, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';
import codesumVid from '../ProjectAssets/CodesumVid.mov';

const CodesumShowcase = () => {
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

  return (
    <div className={cn(
      "min-h-screen bg-background text-foreground font-alliance transition-opacity duration-1000",
      visible ? "opacity-100" : "opacity-0"
    )}>
      {/* Background tactical grid */}
      <div className="fixed inset-0 intelligence-grid opacity-5 pointer-events-none" />
      
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="tactical-nav-bar">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 tactical-button-secondary text-sm group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              RETURN TO MAIN
            </Link>
          </div>
        </nav>

        <main ref={sectionRef} className="max-w-6xl mx-auto px-4 space-y-20 pb-20">
          {/* Hero Section */}
          <section className="pt-20 text-center fade-in-section">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse" />
                <span className="text-xs font-mono text-primary-glow uppercase tracking-wider">
                  PROJECT LIVE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold font-alliance text-gradient-primary">
                CODESUM
              </h1>
              
              <div className="text-lg font-mono text-accent uppercase tracking-wider">
                CODE GENERATOR • WEB APPLICATION
              </div>
              
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto" />
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
               

                Codesum is an AI powered Prompt Code Generation web application for beginner programmers and for CS students who can utilise the documentation alongside the code for practice.
              </p>

              <a
  href="https://codesum.onrender.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 text-white font-bold relative 
             after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white
             after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300
             hover:after:scale-x-100"
>
  Codesum.online
</a>

            </div>
          </section>

          {/* Media Showcase - Website Layout */}
          <section className="fade-in-section" style={{ animationDelay: '200ms' }}>
            <div className="tactical-card p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-alliance text-gradient-primary mb-4">
                  PLATFORM INTERFACE
                </h2>
                <div className="w-16 h-1 bg-accent mx-auto" />
              </div>

              {/* Desktop Screenshots */}
              <div className="space-y-8 mb-12">
                <div className="aspect-[16/10] bg-card rounded-lg border border-border/30 flex items-center justify-center">
                  <div className="text-center space-y-3">
                  <img
                     src="/src/ProjectAssets/CodesumSS1.png"
                     alt="Code Generation Interface"
                     className="w-full h-full object-cover"
                   />
                    <p className="text-lg text-muted-foreground">Code Generation Interface</p>
                    <p className="text-sm font-mono text-accent">Prompt Editor</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-[16/10] bg-card rounded-lg border border-border/30 flex items-center justify-center">
                    <div className="text-center space-y-2">
                    <img
                     src="/src/ProjectAssets/CodesumSS2.png"
                     alt="Code Generation Interface"
                     className="w-full h-full object-cover"
                   />
                      <p className="text-sm text-muted-foreground">Output Dashboard</p>
                      <p className="text-xs font-mono text-accent">Raw code, Key Functions & Explanation</p>
                    </div>
                  </div>
                  
                  <div className="aspect-[16/10] bg-card rounded-lg border border-border/30 flex items-center justify-center">
                    <div className="text-center space-y-2">
                    <img
                     src="/src/ProjectAssets/CodesumSS3.png"
                     alt="Code Generation Interface"
                     className="w-full h-full object-cover"
                   />
                      <p className="text-sm text-muted-foreground">Documentation View</p>
                      <p className="text-xs font-mono text-accent">Codesum Help Guide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Demo */}
              <div className="text-center">
  <div className="max-w-4xl mx-auto">
    <div className="aspect-[16/10] bg-card rounded-lg border border-border/30 overflow-hidden">
      <video
        src={codesumVid}
        controls
        className="w-full h-full object-cover"
      />
    </div>
    <p className="text-lg text-muted-foreground mt-4">Platform Demo</p>
    <p className="text-sm font-mono text-accent">Code Generation Flow & User Implementation</p>
  </div>
</div>

            </div>
          </section>

          {/* Technical Overview */}
          <section className="fade-in-section" style={{ animationDelay: '400ms' }}>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Project Details */}
              <div className="tactical-card space-y-8">
                <div>
                  <h3 className="text-2xl font-bold font-alliance text-gradient-primary mb-6">
                    PROJECT SPECIFICATIONS
                  </h3>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="text-sm font-mono text-foreground uppercase tracking-wide">
                        PLATFORM
                      </div>
                      <div className="flex items-center gap-2">
                        <Monitor className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">AI-Powered Web Application</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-sm font-mono text-foreground uppercase tracking-wide">
                        DEVELOPMENT STACK
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 text-secondary-foreground border border-border/30">
                          OpenAI API
                        </span>
                        <span className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 text-secondary-foreground border border-border/30">
                          JavaScript
                        </span>
                        <span className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 text-secondary-foreground border border-border/30">
                          TailwindCSS
                        </span>
                        <span className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 text-secondary-foreground border border-border/30">
                          NodeJS
                        </span>
                        <span className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 text-secondary-foreground border border-border/30">
                          AI fine-tuning
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-sm font-mono text-foreground uppercase tracking-wide">
                        STATUS
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary-glow/10 border border-primary-glow/20">
                        <div className="w-2 h-2 bg-primary-glow rounded-full" />
                        <span className="text-xs font-mono text-primary-glow">LIVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="tactical-card space-y-8">
                <div>
                  <h3 className="text-2xl font-bold font-alliance text-gradient-primary mb-6">
                    CORE FEATURES
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Natural Language Code Generation',
                      'Multi-Language Support', 
                      'Real-time Code Analysis',
                      'Automated Documentation',
                      'Syntax Error Detection',
                      'Detailed Code Explanation'
                    ].map((feature, index) => (
                      <div key={feature} className="flex items-center gap-3 p-3 rounded border border-border/30">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI & Machine Learning */}
          <section className="fade-in-section" style={{ animationDelay: '600ms' }}>
            <div className="tactical-card text-center space-y-8">
              <div>
                <h3 className="text-3xl font-bold font-alliance text-gradient-primary mb-4">
                  AI ARCHITECTURE
                </h3>
                <div className="w-16 h-1 bg-accent mx-auto mb-6" />
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Leveraging advanced machine learning models and natural language processing to transform 
                  requirements into production-ready code with comprehensive documentation.

                  Codesum is a project i made to tryout a new style of UI, to get experience with AI and to create something that can actully provide utility to people.
                  I leveraged advanced machine learning models and lanuage processing to turn a prompt into production-ready code that comes with useful documentation aiding people in learning code or 
                  students who want to use code for their academic projects, i also created a help guide to help people start coding and creating software. 
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-mono text-sm uppercase tracking-wide">Machine Learning</h4>
                  <p className="text-xs text-muted-foreground">Advanced AI models</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto">
                    <Code className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-mono text-sm uppercase tracking-wide">Code Intelligence</h4>
                  <p className="text-xs text-muted-foreground">Smart code generation</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center mx-auto">
                    <Monitor className="w-6 h-6 text-success" />
                  </div>
                  <h4 className="font-mono text-sm uppercase tracking-wide">Real-time Processing</h4>
                  <p className="text-xs text-muted-foreground">Instant code analysis</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CodesumShowcase;
  