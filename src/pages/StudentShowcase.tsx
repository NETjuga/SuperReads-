import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Users, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';




import SWSS1 from '../ProjectAssets/SWSS1.png';
import SWSS2 from '../ProjectAssets/SWSS2.png';
import SWSS3 from '../ProjectAssets/SWSS3.png';
import SWSS4 from '../ProjectAssets/SWSS4.png';
import SWSS5 from '../ProjectAssets/SWSS5.png';
import SWSS6 from '../ProjectAssets/SWSS6.png';
import SWSS7 from '../ProjectAssets/SWSS7.png';
import SWSS8 from '../ProjectAssets/SWSS8.png';
import SSDEMO from '../ProjectAssets/SSDEMO.mov';

const images = [
  { src: SWSS1, alt: 'Image 1', label: 'Landing Page' },
  { src: SWSS2, alt: 'Image 2', label: 'Personality Assessment' },
  { src: SWSS3, alt: 'Image 3', label: 'Personality Assessment Results' },
  { src: SWSS4, alt: 'Image 4', label: 'IQ Test Page' },
  { src: SWSS5, alt: 'Image 5', label: 'IQ Test Question' },
  { src: SWSS6, alt: 'Image 6', label: 'IQ Test Results' },
  { src: SWSS7, alt: 'Image 7', label: 'Career Suggestion' },
  { src: SWSS8, alt: 'Image 8', label: 'Continue Page' },
];


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((idx) => (idx === 0 ? images.length - 1 : idx - 1));
  };

  const nextImage = () => {
    setCurrentIndex((idx) => (idx === images.length - 1 ? 0 : idx + 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="aspect-[16/10] bg-card rounded-lg border border-border/30 flex flex-col items-center justify-center px-4">
  <img
    src={images[currentIndex].src}
    alt={images[currentIndex].alt}
    className="max-h-[600px] object-contain rounded"
  />
  <p className="mt-3 text-lg text-muted-foreground">{images[currentIndex].label}</p>
  <p className="text-sm font-mono text-accent">WEB INTERFACE</p>
</div>


      {/* Controls */}
      <div className="flex flex-col items-center mt-6 space-y-4">
        <div className="flex space-x-3">
          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="tactical-button-secondary text-sm group inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform duration-300" />
            PREV
          </button>

          <button
            onClick={nextImage}
            aria-label="Next image"
            className="tactical-button-secondary text-sm group inline-flex items-center gap-2"
          >
            NEXT
            <ArrowLeft className="w-3 h-3 rotate-180 group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>
        </div>

        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const StudentShowcase = () => {
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
    <div
      className={cn(
        'min-h-screen bg-background text-foreground font-alliance transition-opacity duration-1000',
        visible ? 'opacity-100' : 'opacity-0'
      )}
    >
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
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-xs font-mono text-accent uppercase tracking-wider">
                  PROJECT BETA
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold font-alliance text-gradient-primary">
                STUDENTWIRE
              </h1>

              <div className="text-lg font-mono text-accent uppercase tracking-wider">
                COMMUNICATION PLATFORM • WEB APPLICATION
              </div>

              <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto" />

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This platform was developed independently as a comprehensive solution to help students and graduates make well-informed decisions about their future careers. In the UK, 82% of young people aged 16–24 remain uncertain about their career paths. While career advisory platforms exist, few are tailored specifically to the unique needs and preferences of high school and university students.
              Traditional school counselling services often lack personalisation, with advice based on limited understanding of the individual. This platform was created to address that gap. Offering younger people accessible, relevant, and genuinely helpful guidance so they can make confident, informed choices about their professional futures. StudentWires also connects people to Apprenticeships, internships, courses and jobs based on the data we have of the user and what the user wants.
              </p>
            </div>
          </section>

          {/* Media Showcase - Website Layout */}
          <section className="fade-in-section" style={{ animationDelay: '200ms' }}>
            <div className="tactical-card p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-alliance text-gradient-primary mb-4">
                  WEB INTERFACE
                </h2>
                <div className="w-16 h-1 bg-accent mx-auto" />
              </div>

              {/* Carousel replacing Desktop Screenshots */}
              <Carousel />

              {/* Video Demo */}
              <div className="text-center mt-12">
                <div className="max-w-4xl mx-auto">
                  <div className="aspect-[16/10] bg-card rounded-lg border border-border/30 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                        <div className="w-0 h-0 border-l-[12px] border-l-foreground border-y-[8px] border-y-transparent ml-1" />
                      </div>
                      <video src={SSDEMO} controls className="w-full h-full object-cover" />
                      <p className="text-sm font-mono text-accent">FULL WALKTHROUGH</p>
                    </div>
                  </div>
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
                        <span className="text-muted-foreground">Full-Stack Web Application</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-sm font-mono text-foreground uppercase tracking-wide">
                        DEVELOPMENT STACK
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 text-secondary-foreground border border-border/30">
                          Javascript
                        </span>
                        <span className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 text-secondary-foreground border border-border/30">
                          Node.js
                        </span>
                        <span className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 text-secondary-foreground border border-border/30">
                          Express
                        </span>
                        <span className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 text-secondary-foreground border border-border/30">
                          MongoDB
                        </span>
                        <span className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 text-secondary-foreground border border-border/30">
                          HTML & CSS
                        </span>
                        <span className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 text-secondary-foreground border border-border/30">
                         AI & ML
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-sm font-mono text-foreground uppercase tracking-wide">
                        STATUS
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent/10 border border-accent/20">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-xs font-mono text-accent">BETA</span>
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
                      'Personality & IQ Assessment',
                      'Algorithmic Career Suggestions',
                      'Industry Insights Utilising APIs for the latest news',
                      'Salary Calculator',
                      'Updated Opportunity Portal',
                      'SW GPT',
                    ].map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 p-3 rounded border border-border/30"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Architecture & Security */}
          <section className="fade-in-section" style={{ animationDelay: '600ms' }}>
            <div className="tactical-card text-center space-y-8">
              <div>
                <h3 className="text-3xl font-bold font-alliance text-gradient-primary mb-4">
                  SYSTEM ARCHITECTURE
                </h3>
                <div className="w-16 h-1 bg-accent mx-auto mb-6" />
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Built with scalable microservices architecture, implementing real-time communication protocols
                  and enterprise-grade security measures for an informational environment.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-mono text-sm uppercase tracking-wide">Real-time AI Communication</h4>
                  <p className="text-xs text-muted-foreground">AI-Integrated Chat Fine-Tuned for academic & career advice</p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-mono text-sm uppercase tracking-wide">User Management</h4>
                  <p className="text-xs text-muted-foreground">Role-based access control</p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-mono text-sm uppercase tracking-wide">Responsive Design</h4>
                  <p className="text-xs text-muted-foreground">Cross-platform compatibility</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default StudentShowcase;

