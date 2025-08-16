import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const CyberShowcase = () => {
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

    const sections = sectionRef.current?.querySelectorAll('.fade-in-section');
    sections?.forEach((section) => observer.observe(section));

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

        <main ref={sectionRef} className="pt-8">
          {/* Hero Section */}
          <section className="container mx-auto px-6 py-20">
            <div className={cn(
              "text-center space-y-8 transition-all duration-1000",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold text-gradient-primary">
                  CYBERSKOPE
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  AI-POWERED CYBERSECURITY PLATFORM
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  CyberSkope represents the next generation of cybersecurity platforms, 
                  leveraging advanced artificial intelligence to provide comprehensive 
                  threat detection and digital footprint analysis. Built with cutting-edge 
                  technology to protect organizations from evolving cyber threats.
                </p>
                
                <a 
                  href="https://cyberskope.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="tactical-button inline-flex items-center space-x-2"
                >
                  <span>VISIT CYBERSKOPE</span>
                  <div className="w-4 h-4 border border-current rounded-sm flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="container mx-auto px-6 py-20">
            <div className="text-center mb-12 fade-in-section">
              <h2 className="text-4xl font-bold text-gradient-primary mb-4">KEY FEATURES</h2>
              <p className="text-muted-foreground">Advanced AI-driven security capabilities</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="tactical-card p-8 fade-in-section">
                <h3 className="text-xl font-bold text-gradient-primary mb-4">AI THREAT DETECTION</h3>
                <p className="text-muted-foreground">
                  Advanced machine learning algorithms continuously monitor and analyze 
                  network traffic to identify potential threats in real-time.
                </p>
              </div>

              <div className="tactical-card p-8 fade-in-section">
                <h3 className="text-xl font-bold text-gradient-primary mb-4">DIGITAL FOOTPRINT ANALYSIS</h3>
                <p className="text-muted-foreground">
                  Comprehensive scanning and analysis of your organization's digital 
                  presence to identify vulnerabilities and exposure risks.
                </p>
              </div>

              <div className="tactical-card p-8 fade-in-section">
                <h3 className="text-xl font-bold text-gradient-primary mb-4">SECURITY MONITORING</h3>
                <p className="text-muted-foreground">
                  24/7 automated monitoring with intelligent alerting systems to ensure 
                  immediate response to security incidents.
                </p>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="container mx-auto px-6 py-20">
            <div className="text-center mb-12 fade-in-section">
              <h2 className="text-4xl font-bold text-gradient-primary mb-4">TECHNOLOGY STACK</h2>
              <p className="text-muted-foreground">Built with cutting-edge technologies</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Artificial Intelligence', 'Machine Learning', 'Cybersecurity', 'Real-time Analytics', 'Cloud Computing', 'Data Visualization'].map((tech, index) => (
                <div key={tech} className="tactical-card p-6 text-center fade-in-section">
                  <h3 className="font-bold text-gradient-primary">{tech}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Project Status */}
          <section className="container mx-auto px-6 py-20">
            <div className="text-center mb-12 fade-in-section">
              <h2 className="text-4xl font-bold text-gradient-primary mb-4">PROJECT STATUS</h2>
              <p className="text-muted-foreground">Current deployment and operational status</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="tactical-card p-8 text-center fade-in-section">
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-500 font-bold">ACTIVE</span>
                </div>
                <h3 className="text-2xl font-bold text-gradient-primary mb-4">LIVE DEPLOYMENT</h3>
                <p className="text-muted-foreground mb-6">
                  CyberSkope is currently deployed and operational, providing 
                  cybersecurity services to organizations worldwide.
                </p>
                <a 
                  href="https://cyberskope.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="tactical-button inline-flex items-center space-x-2"
                >
                  <span>ACCESS PLATFORM</span>
                  <div className="w-4 h-4 border border-current rounded-sm flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CyberShowcase;