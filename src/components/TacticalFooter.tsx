import { cn } from '@/lib/utils';

const TacticalFooter = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/30">
      {/* Background tactical elements */}
      <div className="absolute inset-0 intelligence-grid opacity-5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-alliance text-gradient-primary">
              ARSLAAN JUGA
            </h3>
            <p className="text-muted-foreground text-sm">
              Software Engineer specializing in modern web development 
              ,innovative digital solutions and creating things.
            </p>
            <div className="flex items-center gap-2 text-sm font-mono">
              <div className="w-2 h-2 bg-success rounded-full animate-tactical-pulse" />
              <span className="text-muted-foreground">Available for Projects and Work</span>
            </div>
          </div>

          {/* Quick navigation */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground font-alliance">NAVIGATION</h4>
            <div className="space-y-2 text-sm">
              {['Home', 'Intel', 'Operations', 'Arsenal', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase().replace('about', 'about').replace('projects', 'projects').replace('skills', 'skills'));
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary-glow transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* System status */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground font-alliance">SYSTEM STATUS</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Uptime</span>
                <span className="text-success font-mono">99.9%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Security Level</span>
                <span className="text-primary-glow font-mono">MAXIMUM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Response Time</span>
                <span className="text-accent font-mono">&lt;24h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className={cn(
          "pt-8 border-t border-border/20",
          "flex flex-col md:flex-row justify-between items-center gap-4"
        )}>
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm font-mono">
              © 2024 Arslaan Juga.
            </p>
            <p className="text-muted-foreground/60 text-xs mt-1">
              Thanks for visiting
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-mono">
              <div className="w-2 h-2 bg-primary rounded-full animate-intelligence-glow" />
              <span className="text-muted-foreground">SECURE CONNECTION</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tactical corner accents */}
      <div className="absolute top-0 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute top-0 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/20" />
    </footer>
  );
};

export default TacticalFooter;