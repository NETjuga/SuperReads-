import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Mission briefing submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      title: 'CONTACT METHODS',
      items: [
        { label: 'Email', value: 'arslaanjuga00@gmail.com', icon: '📧' },
        { label: 'Number', value: '07828900832', icon: '📱' },
        { label: 'GitHub', value: '@NETjuga', icon: '🔧' }
      ]
    },
    {
      title: 'AVAILABILITY',
      items: [
        { label: 'Response Time', value: '< 24 hours', icon: '⚡' },
        { label: 'Status', value: 'Probably working', icon: '🟢' },
        { label: 'Work Style', value: 'Remote Friendly', icon: '🌐' }
      ]
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 relative">
      {/* Background tactical grid */}
      <div className="absolute inset-0 intelligence-grid opacity-5" />
      
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section header */}
        <div className="text-center space-y-6 fade-in-section">
          <h2 className="text-4xl font-bold font-alliance text-gradient-primary">
            GET IN TOUCH
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Let's discuss something!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="slide-in-left">
            <div className="tactical-card">
              <h3 className="text-2xl font-bold font-alliance text-gradient-accent mb-6">
                SEND MESSAGE
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-foreground uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="tactical-input"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono text-foreground uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@domain.com"
                    className="tactical-input"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono text-foreground uppercase tracking-wide">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project ideas and requirements..."
                    rows={6}
                    className="tactical-input resize-none"
                    required
                  />
                </div>

                <button type="submit" className="w-full tactical-button group">
                  <span className="relative z-10">SEND MESSAGE</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>

              {/* Tactical corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary/50" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-accent/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-accent/50" />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 slide-in-right">
            {contactMethods.map((section, sectionIndex) => (
              <div key={section.title} className="tactical-card">
                <h3 className="text-xl font-bold font-alliance text-gradient-accent mb-6">
                  {section.title}
                </h3>

                <div className="space-y-4">
                  {section.items.map((item, index) => (
                    <div 
                      key={item.label}
                      className={cn(
                        "flex items-center gap-4 p-3 rounded-tactical",
                        "bg-secondary/20 hover:bg-secondary/40",
                        "border border-border/20 transition-all duration-300"
                      )}
                      style={{ animationDelay: `${(sectionIndex * 3 + index) * 100}ms` }}
                    >
                      <div className="text-xl">{item.icon}</div>
                      <div className="space-y-1 flex-1">
                        <div className="text-sm font-mono text-muted-foreground uppercase">
                          {item.label}
                        </div>
                        <div className="text-foreground font-medium">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tactical corner indicators */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-primary/30" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-accent/30" />
              </div>
            ))}

            {/* Security notice */}
            <div className="tactical-card bg-accent/5 border-accent/20">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🛡️</div>
                <div className="space-y-2">
                  <h4 className="font-bold text-accent">SECURITY PROTOCOL</h4>
                  <p className="text-sm text-muted-foreground">
                    All communications are encrypted and processed through secure channels. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;