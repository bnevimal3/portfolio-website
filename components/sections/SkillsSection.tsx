import React from 'react';
import { type SkillCategory } from '../../types';
import { Code, Database, Cloud, Cog, Server, PenTool, GitMerge } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

// Fix: Inlined props type to avoid potential type conflicts.
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
      {children}
    </h2>
  );

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java 8/11", icon: Code },
      { name: "TypeScript", icon: Code },
      { name: "JavaScript", icon: Code },
      { name: "SQL", icon: Database },
      { name: "PL/SQL", icon: Database },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Spring Boot", icon: Server },
      { name: "Spring MVC", icon: Server },
      { name: "REST", icon: Cog },
      { name: "SOAP", icon: Cog },
      { name: "RxJS", icon: Cog },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Angular", icon: PenTool },
      { name: "React", icon: PenTool },
      { name: "HTML5", icon: Code },
      { name: "CSS3", icon: Code },
      { name: "Bootstrap", icon: PenTool },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "Docker", icon: Cloud },
      { name: "Kubernetes", icon: Cloud },
      { name: "OpenShift", icon: Cloud },
      { name: "Jenkins", icon: Cog },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "Oracle", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Cassandra", icon: Database },
      { name: "Elasticsearch", icon: Database },
    ],
  },
  {
    title: "Methods/Tools",
    skills: [
        { name: "Microservices", icon: GitMerge },
        { name: "DDD", icon: GitMerge },
        { name: "TDD", icon: GitMerge },
        { name: "Agile/Scrum", icon: Cog },
        { name: "IntelliJ IDEA", icon: PenTool },
        { name: "JIRA", icon: Cog },
    ]
  }
];

// Fix: Explicitly type variants with Variants from framer-motion to fix type errors.
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
}

const SkillsSection: React.FC = () => {
  return (
    <motion.div 
      className="container mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <SectionTitle>Skills & Expertise</SectionTitle>
      <div className="space-y-12">
        {skillCategories.map((category) => (
          <motion.div key={category.title} variants={sectionVariants}>
            <h3 className="text-2xl font-semibold text-center mb-8 text-white">{category.title}</h3>
            <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto" variants={sectionVariants}>
              {category.skills.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants} className="flex flex-col items-center justify-center p-4 bg-white/[0.05] rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="mb-2">
                    <skill.icon
                      size={32}
                      stroke="url(#icon-gradient)"
                    />
                  </div>
                  <span className="text-center text-sm text-white/80">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection;