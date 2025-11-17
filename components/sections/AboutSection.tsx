import React from 'react';
import { motion, type Variants } from 'framer-motion';

// Fix: Inlined props type to avoid potential type conflicts.
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
    {children}
  </h2>
);

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

const AboutSection: React.FC = () => {
  return (
    <motion.div 
      className="container mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <SectionTitle>About Me</SectionTitle>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-lg text-white/70 space-y-4">
          <p>
            I am a passionate Java Full Stack Developer with a strong focus on backend development, complemented by hands-on experience in frontend technologies. My expertise lies in designing and implementing microservices, deploying applications to cloud platforms, and practicing modern DevOps methodologies.
          </p>
          <p>
            I thrive in collaborative, fast-paced environments and am dedicated to writing clean, efficient, and maintainable code to solve complex business problems.
          </p>
        </div>
        <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white/90 mb-4">Education</h3>
            <div className="relative border-l-2 border-white/20 pl-6">
                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-rose-500 rounded-full border-4 border-[#030303]"></div>
                <h4 className="font-semibold text-lg text-white">M.S. Software Engineering</h4>
                <p className="text-white/60">Stevens Institute of Technology, Hoboken, NJ</p>
                <p className="text-sm text-white/40">May 2025</p>
            </div>
            <div className="relative border-l-2 border-white/20 pl-6">
                 <div className="absolute -left-[11px] top-1 w-5 h-5 bg-indigo-500 rounded-full border-4 border-[#030303]"></div>
                <h4 className="font-semibold text-lg text-white">B.Tech. Computer Science</h4>
                <p className="text-white/60">Amrita University, India</p>
                <p className="text-sm text-white/40">Apr 2021</p>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;