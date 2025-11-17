import React from 'react';
import { type Project } from '../../types';
import { motion, type Variants } from 'framer-motion';

// Fix: Inlined props type to avoid potential type conflicts.
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
      {children}
    </h2>
  );

const projects: Project[] = [
  {
    title: "Emotion Recognition from Speech",
    description: "An undergraduate machine learning project to classify speech into 8 emotions. It uses MFCC and energy features with SVM, Random Forest, and Decision Tree classifiers, achieving 88.54% accuracy with Random Forest.",
    imageUrl: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?q=80&w=1200&h=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Fix: Explicitly type variants with Variants from framer-motion to fix type errors.
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

const PortfolioSection: React.FC = () => {
  return (
    <motion.div 
      className="container mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <SectionTitle>Portfolio / Projects</SectionTitle>
      <div className="max-w-4xl mx-auto">
        {projects.map((project) => (
          <div key={project.title} className="bg-white/[0.05] border border-white/10 rounded-lg overflow-hidden md:flex group">
            <div className="md:w-1/2">
                <img src={project.imageUrl} alt={project.title} className="w-full h-64 md:h-full object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
              <p className="text-white/70">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PortfolioSection;