import React from 'react';
import { HeroGeometric } from '../ui/shape-landing-hero';

const HeroSection: React.FC = () => {
  return (
    <HeroGeometric
      badge="~4.7 Years of Experience"
      title1="Nanda Eswar Vimal Boppudi"
      title2="Java Full Stack Developer"
      subtitle="Building scalable, cloud-ready enterprise applications across banking, e-commerce, healthcare, and finance."
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-12">
        <img
          src="https://i.postimg.cc/HkpkLF2D/v2.jpg"
          alt="Nanda Eswar Vimal Boppudi"
          className="w-32 h-32 rounded-full border-4 border-white/20 object-cover shadow-lg"
        />
      </div>
      <div className="flex justify-center gap-4">
        <a href="#portfolio" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
          View My Work
        </a>
        <a href="#contact" className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">
          Get In Touch
        </a>
      </div>
    </HeroGeometric>
  );
};

export default HeroSection;