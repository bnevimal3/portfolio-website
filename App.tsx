
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ContactSection from './components/sections/ContactSection';
import { Github, Linkedin } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="bg-[#030303] text-white/80 font-light antialiased">
      <Header />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <div id="about" className="py-20 md:py-32">
          <AboutSection />
        </div>
        <div id="experience" className="py-20 md:py-32 bg-white/[0.02]">
          <ExperienceSection />
        </div>
        <div id="skills" className="py-20 md:py-32">
          <SkillsSection />
        </div>
        <div id="services" className="py-20 md:py-32 bg-white/[0.02]">
          <ServicesSection />
        </div>
        <div id="portfolio" className="py-20 md:py-32">
          <PortfolioSection />
        </div>
        <div id="contact" className="py-20 md:py-32 bg-white/[0.02]">
          <ContactSection />
        </div>
      </main>
      <footer className="py-12 text-center text-white/40">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6 mb-4">
              <a href="https://www.linkedin.com/in/vimal-boppudi-261905164/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href="https://github.com/bnevimal3" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} Nanda Eswar Vimal Boppudi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;