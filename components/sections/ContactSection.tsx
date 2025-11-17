import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Github, Linkedin, Send, Loader, CheckCircle, XCircle } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '../../lib/utils';

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

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        
        emailjs.sendForm(
            'service_ch9ucbm',
            'template_v7tp3g7',
            e.currentTarget,
            'ssgZFWn5ZneEOU0TL'
        ).then(
            () => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); // Clear form on success
                setTimeout(() => setStatus('idle'), 4000); // Reset after 4 seconds
            },
            (error) => {
                console.error('FAILED...', error);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000); // Reset after 5 seconds
            }
        );
    };

    return (
         <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="peer block w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-transparent transition-colors focus:border-rose-400 focus:outline-none"
                    placeholder="Your Name"
                    required
                />
                <label
                    htmlFor="name"
                    className="absolute left-4 top-3 origin-[0] -translate-y-6 scale-75 transform text-white/50 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-rose-400"
                >
                    Your Name
                </label>
            </div>
            <div className="relative">
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer block w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-transparent transition-colors focus:border-rose-400 focus:outline-none"
                    placeholder="Your Email"
                    required
                />
                <label
                    htmlFor="email"
                    className="absolute left-4 top-3 origin-[0] -translate-y-6 scale-75 transform text-white/50 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-rose-400"
                >
                    Your Email
                </label>
            </div>
            <div className="relative">
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="peer block w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-transparent transition-colors focus:border-rose-400 focus:outline-none"
                    placeholder="Your Message"
                    required
                ></textarea>
                <label
                    htmlFor="message"
                    className="absolute left-4 top-3 origin-[0] -translate-y-6 scale-75 transform text-white/50 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-rose-400"
                >
                    Your Message
                </label>
            </div>
             <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-rose-500 px-8 py-3 font-semibold text-white transition-all hover:from-indigo-600 hover:to-rose-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center h-12"
            >
                {status === 'submitting' && <Loader className="h-6 w-6 animate-spin" />}
                {status === 'success' && <CheckCircle className="h-6 w-6" />}
                {status === 'error' && <XCircle className="h-6 w-6" />}
                {status === 'idle' && (
                    <span className="flex items-center justify-center gap-2">
                        Send Message <Send size={18} />
                    </span>
                )}
            </button>
        </form>
    );
}


const ContactSection: React.FC = () => {
  return (
    <motion.div 
      className="container mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <SectionTitle>Contact Me</SectionTitle>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className="text-center md:text-left">
            <p className="text-lg text-white/70 mb-8">
            I'm currently open to new opportunities. Feel free to reach out via email or connect with me on social media. I'd love to hear from you!
            </p>
            <div className="space-y-6">
                <a href="mailto:nandaboppudi@gmail.com" className="inline-flex items-center gap-4 group">
                    <Mail stroke="url(#icon-gradient)" />
                    <span className="text-xl text-white group-hover:underline">nandaboppudi@gmail.com</span>
                </a>
                <div className="inline-flex items-center gap-4">
                    <Phone stroke="url(#icon-gradient)" />
                    <span className="text-xl text-white">+1 (919) 801-3670</span>
                </div>
            </div>
            <div className="flex justify-center md:justify-start gap-6 mt-12">
                <a href="https://www.linkedin.com/in/vimal-boppudi-261905164/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                    <Linkedin size={24} stroke="url(#icon-gradient)" />
                </a>
                 <a href="https://github.com/bnevimal3" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                    <Github size={24} stroke="url(#icon-gradient)" />
                </a>
            </div>
        </div>
        <div className="bg-white/[0.05] border border-white/10 rounded-lg p-8">
            <ContactForm />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;