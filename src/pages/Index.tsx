import { useState } from 'react';
import IntroAnimation from '@/components/IntroAnimation';
import TacticalNavbar from '@/components/TacticalNavbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import TacticalFooter from '@/components/TacticalFooter';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <TacticalNavbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        
        <TacticalFooter />
      </div>
    </div>
  );
};

export default Index;
