
import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-black/50 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
            Nanda B
          </a>
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
