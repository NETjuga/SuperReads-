import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const VLvisualise = () => {
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

  // Development timeline data - easy to update
  const timelineData = [
    {
      id: 1,
      date: "January 2025",
      title: "Initial UI Mockup",
      description: "First conceptual design and user interface wireframes for the VentureLink platform.",
      type: "image",
      src: "/placeholder-mockup.jpg", // Replace with actual image path
      alt: "VentureLink UI Mockup"
    },
    {
      id: 2,
      date: "February 2025",
      title: "First App Screenshot",
      description: "Early development screenshots showing core functionality and initial user interface implementation.",
      type: "image",
      src: "/placeholder-screenshot.jpg", // Replace with actual image path
      alt: "VentureLink First Screenshot"
    },
    {
      id: 3,
      date: "March 2025",
      title: "MVP Demo Video",
      description: "First working prototype demonstration showcasing user onboarding and basic matching features.",
      type: "video",
      src: "/placeholder-video.mp4", // Replace with actual video path
      alt: "VentureLink MVP Demo"
    },
    {
      id: 4,
      date: "Coming Soon",
      title: "UPDATE COMING",
      description: "Next development milestone will be added here as progress continues.",
      type: "placeholder",
      src: "",
      alt: ""
    }
  ];

  return (
    <main ref={sectionRef} className={cn(
      "min-h-screen bg-background text-foreground font-alliance",
      "transition-opacity duration-1000",
      visible ? "opacity-100" : "opacity-0"
    )}>
      {/* Background tactical elements */}
      <div className="fixed inset-0 intelligence-grid opacity-5" />
      
      <div className="relative z-10 px-4 py-8 max-w-7xl mx-auto">
        {/* Navigation */}
        <nav className="mb-12 fade-in-section">
          <div className="flex items-center justify-between">
            <Link 
              to="/VentureLinkShowcase" 
              className="tactical-button-secondary text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              ← BACK TO ROADMAP
            </Link>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              DEVELOPMENT VISUALISATION
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-center mb-20 fade-in-section">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gradient-primary font-alliance">
              VENTURELINK JOURNEY
            </h1>
            <div className="text-lg font-mono text-accent uppercase tracking-wider">
              FROM CONCEPT TO REALITY
            </div>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Visual timeline showcasing the evolution of VentureLink from initial mockups to working prototype.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto" />
          </div>
        </section>

        {/* Visual Timeline */}
        <section className="mb-20">
          <div className="relative">
            {/* Timeline Container - arranged bottom to top, left to right */}
            <div className="space-y-24">
              {timelineData.map((item, index) => (
                <div key={item.id} className="fade-in-section" style={{ animationDelay: `${index * 300}ms` }}>
                  {/* Timeline Item */}
                  <div className={cn(
                    "grid lg:grid-cols-2 gap-12 items-center",
                    index % 2 === 0 ? "lg:grid-cols-[1fr,auto,1fr]" : "lg:grid-cols-[1fr,auto,1fr] lg:direction-rtl"
                  )}>
                    {/* Content Side */}
                    <div className={cn(
                      "tactical-card space-y-4",
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    )}>
                      <div className="text-sm font-mono text-accent uppercase tracking-wider">
                        {item.date}
                      </div>
                      <h3 className="text-2xl font-bold text-gradient-primary">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Connector Path */}
                    {index < timelineData.length - 1 && (
                      <div className="hidden lg:flex justify-center">
                        <svg 
                          width="100" 
                          height="80" 
                          className="text-accent/30"
                          viewBox="0 0 100 80"
                        >
                          <path
                            d="M10 40 Q30 10, 50 40 T90 40"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            fill="none"
                            className="animate-tactical-pulse"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Media Side */}
                    <div className="tactical-card">
                      {item.type === "placeholder" ? (
                        <div className="aspect-video bg-secondary/30 border-2 border-dashed border-accent/30 rounded-lg flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <div className="text-4xl text-accent/50">⏳</div>
                            <div className="text-accent font-mono text-sm">NEXT UPDATE</div>
                          </div>
                        </div>
                      ) : item.type === "video" ? (
                        <div className="aspect-video bg-secondary/30 rounded-lg overflow-hidden border border-border/30">
                          <video 
                            controls 
                            className="w-full h-full object-cover"
                            poster="/placeholder-video-poster.jpg"
                          >
                            <source src={item.src} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ) : (
                        <div className="aspect-video bg-secondary/30 rounded-lg overflow-hidden border border-border/30">
                          <img 
                            src={item.src} 
                            alt={item.alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Vertical Connector to Next Item */}
                  {index < timelineData.length - 1 && (
                    <div className="flex justify-center mt-12 lg:hidden">
                      <svg 
                        width="2" 
                        height="60" 
                        className="text-accent/30"
                      >
                        <line
                          x1="1" y1="0" x2="1" y2="60"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          className="animate-tactical-pulse"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instructions for Updates */}
        <section className="fade-in-section">
          <div className="tactical-card text-center">
            <h2 className="text-3xl font-bold text-gradient-accent mb-6">EASY UPDATES</h2>
            <p className="text-muted-foreground mb-8">
              To add new milestones, simply update the timelineData array with new entries including date, title, description, and media.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/VentureLinkShowcase" className="tactical-button-secondary">
                BACK TO ROADMAP
              </Link>
              <Link to="/" className="tactical-button">
                PORTFOLIO HOME
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default VLvisualise;