import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Smartphone, Code, Database } from 'lucide-react';
import { cn } from '@/lib/utils';
import chapDemoVideo from '../ProjectAssets/ChapDemoVideo.mov';

import chapSS1 from '../ProjectAssets/ChapSS1.jpg';
import chapSS2 from '../ProjectAssets/ChapSS2.jpg';
import chapSS3 from '../ProjectAssets/ChapSS3.jpg';
import chapSS4 from '../ProjectAssets/ChapSS4.jpg';
import chapSS5 from '../ProjectAssets/ChapSS5.jpg';
import chapSS6 from '../ProjectAssets/ChapSS6.jpg';

const ProjectShowcase = () => {
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
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-xs font-mono text-success uppercase tracking-wider">
                  PROJECT ACTIVE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold font-alliance text-gradient-primary">
                CHAPTERLY
              </h1>
              
              <div className="text-lg font-mono text-accent uppercase tracking-wider">
                LIBRARY PLATFORM • IOS APPLICATION
              </div>
              
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto" />
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Chapterly is a Library and reading tracking app which makes keeping track of reading habits and discovering new books frictionless, this app has everything a user would need
                for their reading needs and has a simple user-frendly UI unlike other apps on the market which either aren't up to par (they suck) or have most features behind a paywall.
              </p>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I made Chapterly because i realised i had a problem, i realised that i wanted to keep track of what i was reading, how often i was reading and i wanted to have something that would keep me consistently reading the way Duolingo keeps me consistently learning a language.
                When i searched for good apps i couldn't find any that were simple, free and had all the features i needed, which is why i created Chapterly.
              </p>
            </div>
          </section>

          {/* Media Showcase - Mobile App Layout */}
          // Replace the old "Media Showcase" section with this:
<section className="fade-in-section" style={{ animationDelay: '200ms' }}>
  <div className="tactical-card p-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold font-alliance text-gradient-primary mb-4">
        APPLICATION INTERFACE
      </h2>
      <div className="w-16 h-1 bg-accent mx-auto" />
    </div>

    {/* Mobile Screenshots Grid */}
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {[
        { img: chapSS1, label: 'Screenshot 1', desc: 'Library View' },
        { img: chapSS2, label: 'Screenshot 2', desc: 'Book Recommendation Algorithm' },
        { img: chapSS3, label: 'Screenshot 3', desc: 'Reading Statistics' },
        { img: chapSS4, label: 'Screenshot 4', desc: 'Notes View' },
        { img: chapSS5, label: 'Screenshot 5', desc: 'Book Log' },
        { img: chapSS6, label: 'Screenshot 6', desc: 'App Widgets' },
      ].map((item, idx) => (
        <div key={idx} className="space-y-4">
          <div className="aspect-[9/16] bg-card rounded-lg border border-border/30 flex items-center justify-center">
            <div className="text-center space-y-2">
              <img 
                src={item.img} 
                alt={item.desc} 
                className="w-full h-full object-cover rounded-lg" 
              />
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="text-xs font-mono text-accent">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Video Demo */}
    <div className="text-center">
      <div className="max-w-sm mx-auto">
        <div className="aspect-[9/18] bg-card rounded-lg border border-border/30 overflow-hidden">
          <video 
            src={chapDemoVideo} 
            controls 
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-3">Demo Video</p>
        <p className="text-xs font-mono text-accent">APP WALKTHROUGH</p>
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
                        <Smartphone className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">iOS Native Application</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-sm font-mono text-foreground uppercase tracking-wide">
                        DEVELOPMENT STACK
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 text-secondary-foreground border border-border/30">
                          Swift
                        </span>
                        <span className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 text-secondary-foreground border border-border/30">
                          SwiftUI
                        </span>
                        <span className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 text-secondary-foreground border border-border/30">
                          UIkit
                        </span>
                        <span className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 text-secondary-foreground border border-border/30">
                          Core Data
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-sm font-mono text-foreground uppercase tracking-wide">
                        STATUS
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-success/10 border border-success/20">
                        <div className="w-2 h-2 bg-success rounded-full" />
                        <span className="text-xs font-mono text-success">COMPLETED</span>
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
                      'Personal Library Management',
                      'Reading Progress Tracking', 
                      'Book Notes & Insights',
                      'Reading Statistics Dashboard',
                      'Intelligent Recommendations',
                      'Goal Setting & Achievements'
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

          {/* Future Development */}
          <section className="fade-in-section" style={{ animationDelay: '600ms' }}>
            <div className="tactical-card text-center space-y-8">
              <div>
                <h3 className="text-3xl font-bold font-alliance text-gradient-primary mb-4">
                  FUTURE DEVELOPMENT
                </h3>
                <div className="w-16 h-1 bg-accent mx-auto mb-6" />
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Upcoming enhancements include social reading features and communities so that people could have leaderboards and compete with friends on who has more reading time encouraging more reading, integration with e-reader platforms like goodreads, 
                  advanced analytics, and cross-platform synchronization capabilities like Audible.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-mono text-sm uppercase tracking-wide">Social Features</h4>
                  <p className="text-xs text-muted-foreground">Reading communities and sharing</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto">
                    <Database className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-mono text-sm uppercase tracking-wide">Cloud Sync</h4>
                  <p className="text-xs text-muted-foreground">Cross-device synchronization</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center mx-auto">
                    <Smartphone className="w-6 h-6 text-success" />
                  </div>
                  <h4 className="font-mono text-sm uppercase tracking-wide">Platform Expansion</h4>
                  <p className="text-xs text-muted-foreground">Android and web versions</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProjectShowcase;

