import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState<'initial' | 'revealing' | 'complete'>('initial');

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('revealing'), 500);
    const timer2 = setTimeout(() => setStage('complete'), 2000);
    const timer3 = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (stage === 'complete') return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-background">
      {/* Sliding panels */}
      <div className={cn(
        "absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-background via-card to-background",
        "transition-transform duration-1000 ease-in-out",
        stage === 'revealing' ? "-translate-x-full" : "translate-x-0"
      )} />
      
      <div className={cn(
        "absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-background via-card to-background",
        "transition-transform duration-1000 ease-in-out",
        stage === 'revealing' ? "translate-x-full" : "translate-x-0"
      )} />

      {/* Name reveal */}
      <div className={cn(
        "relative z-10 text-center transition-all duration-1000",
        stage === 'initial' ? "opacity-0" : "opacity-100"
      )}>
        <h1 className="text-5xl lg:text-6xl font-bold font-alliance tracking-wider">
          <span className="text-gradient-primary">ARSLAAN</span>{' '}
          <span className="text-gradient-accent">JUGA</span>
        </h1>
        <div className="mt-4 text-lg text-muted-foreground font-mono tracking-widest">
          <span className="animate-tactical-pulse">SOFTWARE ENGINEER</span>
        </div>
        
        {/* Tactical elements */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-intelligence-glow" />
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-intelligence-glow" />
      </div>

      {/* Background tactical grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="intelligence-grid h-full" />
      </div>
    </div>
  );
};

export default IntroAnimation;