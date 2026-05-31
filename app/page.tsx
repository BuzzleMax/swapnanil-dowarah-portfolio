'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code, Play, ExternalLink, Plus, Terminal, Database, Dumbbell, Send, ArrowRight, Camera } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  tech: string[];
  links: {
    github: string;
    demo: string;
  };
  category: 'app' | 'media';
}

const defaultProjects: Project[] = [
  {
    id: 1,
    title: 'Aura Tech / Foctibe',
    subtitle: 'Premium Gamified Fitness Application',
    description: [
      'Built with React Native and Supabase for biometric data tracking',
      'Features "koctux" token reward system for user engagement',
      'Real-time workout analytics and performance metrics',
      'Gamified progression system for fitness goals',
    ],
    tech: ['React Native', 'Supabase', 'TypeScript'],
    links: {
      github: 'https://github.com/buzzlemax',
      demo: 'https://youtube.com/@Swapnanildev_official',
    },
    category: 'app',
  },
  {
    id: 2,
    title: 'Automated Form Tracker',
    subtitle: 'Isometric Hold Analysis Engine',
    description: [
      'Custom engine utilizing JavaScript layout models',
      'Tracks isometric hold durations for tuck planches and elbow levers',
      'Real-time calculation with precision timing',
      'Clean visualization interface for progress tracking',
    ],
    tech: ['JavaScript', 'Canvas API', 'CSS'],
    links: {
      github: 'https://github.com/buzzlemax',
      demo: 'https://youtube.com/@Swapnanildev_official',
    },
    category: 'app',
  },
];

const coreDisciplines = [
  {
    icon: Code,
    title: 'Full-Stack Dev',
    description: 'React Native apps, Supabase backend integration, Next.js framework, Vibe Coding pipelines',
  },
  {
    icon: Database,
    title: 'Systems Operations',
    description: 'Advanced computer fundamentals, data workflows, scripting logic',
  },
  {
    icon: Dumbbell,
    title: 'Calisthenics Engineering',
    description: 'Progressive overload analytics, biometric tracking indicators, isometric bodyweight hold mechanics',
  },
];

const milestones = [
  {
    title: 'Full-Stack Venture',
    description: 'Current phase developing autonomous web tools, custom apps, and running coding content',
  },
  {
    title: 'Core Science Foundation',
    description: 'High-performance computer application frameworks and structural development logic',
  },
];

const specialties = [
  'Full-Stack Dev',
  'Supabase Architecture',
  'React Native',
  'AI UI Design',
  'Calisthenics Logic',
];

function TypingEffect({ texts, className }: { texts: string[]; className?: string }) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      if (charIndex > 0) {
        const timeout = setTimeout(() => setCharIndex(charIndex - 1), 50);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => setCharIndex(charIndex + 1), 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsDeleting(true), 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className={className}>
      {texts[textIndex].slice(0, charIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [filter, setFilter] = useState<'all' | 'app' | 'media'>('all');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    tech: '',
    link: '',
  });
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  const handleDeploy = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProject: Project = {
      id: Date.now(),
      title: formData.title,
      subtitle: formData.subtitle,
      description: formData.description.split('\n').filter(d => d.trim()),
      tech: formData.tech.split(',').map(t => t.trim()).filter(t => t),
      links: {
        github: formData.link,
        demo: formData.link,
      },
      category: 'app',
    };

    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    
    setFormData({ title: '', subtitle: '', description: '', tech: '', link: '' });
    setShowForm(false);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Contact from ${contactForm.name} - ${contactForm.email}`;
    const body = `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`;
    const mailtoLink = `mailto:swapnanilofficialdowarah@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    setContactForm({ name: '', email: '', message: '' });
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto w-full space-y-32">
        
        {/* Section 1: Hero Area */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-8">
            {/* Dual Identity Headline */}
            <div className="space-y-4">
              <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Swapnanil Dowarah
                <span className="text-foreground">.</span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-foreground animate-pulse" />
                <p className="font-sans text-xl text-muted">
                  Full-Stack Developer & Athlete
                </p>
              </div>
            </div>

            {/* Simulated Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-lg p-6 max-w-3xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-white/80" />
                <div className="h-3 w-3 rounded-full bg-white/80" />
                <div className="h-3 w-3 rounded-full bg-white/80" />
                <span className="font-mono text-xs text-muted ml-2">terminal</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="text-muted">
                  <span className="text-foreground">$</span> whoami
                </div>
                <div className="text-foreground">
                  <TypingEffect texts={specialties} className="text-foreground" />
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-bold font-mono rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://youtube.com/@Swapnanildev_official"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-foreground font-semibold font-mono rounded-lg transition-all duration-300 hover:border-foreground hover:scale-105 hover:-translate-y-0.5"
              >
                <Play className="h-4 w-4" />
                Explore YouTube
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 2: Core Matrix */}
        <motion.section
          id="core-matrix"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground">
              Core Matrix
            </h2>
            <p className="text-muted font-sans max-w-2xl mx-auto">
              Skill architecture across development, systems, and physical optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreDisciplines.map((discipline, index) => {
              const Icon = discipline.icon;
              return (
                <motion.div
                  key={discipline.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-lg p-6 hover:border-foreground transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/10">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="font-mono text-lg font-semibold text-foreground">
                      {discipline.title}
                    </h3>
                  </div>
                  <p className="text-muted font-sans text-sm leading-relaxed">
                    {discipline.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Section 3: Project Vault & Live Studio */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground">
              Project Vault
            </h2>
            <p className="text-muted font-sans max-w-2xl mx-auto">
              A curated collection of software applications and development projects
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center">
            <div className="inline-flex bg-black/40 backdrop-blur-xl rounded-lg p-1 border border-white/20">
              {(['all', 'app', 'media'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-6 py-2 rounded-md font-mono text-sm font-medium transition-all duration-300 ${
                    filter === tab
                      ? 'bg-foreground text-background'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-lg p-6 hover:border-foreground transition-all duration-300"
                >
                  <div className="mb-4">
                    <h3 className="font-mono text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted font-sans">
                      {project.subtitle}
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {project.description.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted font-sans">
                        <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono font-medium bg-white/5 text-muted rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/20 hover:border-foreground hover:text-foreground transition-all duration-300"
                    >
                      <Code className="h-4 w-4" />
                      <span className="text-sm font-medium">GitHub</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/20 hover:border-foreground hover:text-foreground transition-all duration-300"
                    >
                      <Play className="h-4 w-4" />
                      <span className="text-sm font-medium">Demo</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Live Creator Studio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-lg overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-black/50 border-b border-white/20 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-white/80" />
                <div className="h-3 w-3 rounded-full bg-white/80" />
                <div className="h-3 w-3 rounded-full bg-white/80" />
                <span className="font-mono text-sm text-foreground ml-2">live-creator-studio.sh</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-foreground animate-pulse" />
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-mono text-lg font-semibold text-foreground">Live Creator Studio</h3>
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/20 hover:border-foreground hover:text-foreground transition-all duration-300 font-mono text-sm"
                >
                  <Plus className="h-4 w-4" />
                  {showForm ? 'Close' : 'New Project'}
                </button>
              </div>

              <AnimatePresence>
                {showForm && (
                  <motion.form
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleDeploy}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="font-mono text-xs text-muted">PROJECT TITLE</label>
                        <input
                          type="text"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          placeholder="Enter project title"
                          className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-foreground transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-mono text-xs text-muted">SUBTITLE</label>
                        <input
                          type="text"
                          value={formData.subtitle}
                          onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                          placeholder="Enter project subtitle"
                          className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-foreground transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-xs text-muted">DESCRIPTION (one per line)</label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Enter project description"
                        rows={3}
                        className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-foreground transition-all resize-none"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="font-mono text-xs text-muted">TECH TAGS (comma-separated)</label>
                        <input
                          type="text"
                          value={formData.tech}
                          onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
                          placeholder="React, TypeScript, Supabase"
                          className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-foreground transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-mono text-xs text-muted">PROJECT LINK</label>
                        <input
                          type="url"
                          value={formData.link}
                          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                          placeholder="https://github.com/..."
                          className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-foreground transition-all"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-foreground text-background font-bold font-mono rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      Deploy Project
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.section>

        {/* Section 4: Journey Timeline */}
        <motion.section
          id="journey"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground">
              Journey Timeline
            </h2>
            <p className="text-muted font-sans max-w-2xl mx-auto">
              Tracking technical milestones and development phases
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Axis */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-foreground/50 to-foreground/20" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="relative pl-20"
                >
                  {/* Glowing Ping Effect */}
                  <div className="absolute left-6 top-0">
                    <div className="relative">
                      <div className="h-4 w-4 rounded-full bg-foreground" />
                      <div className="absolute inset-0 h-4 w-4 rounded-full bg-foreground animate-ping opacity-75" />
                    </div>
                  </div>

                  <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-lg p-6 hover:border-foreground transition-all duration-300">
                    <h3 className="font-mono text-lg font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted font-sans text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 5: Terminal Contact Gate */}
        <motion.section
          id="connect"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground">
              Contact Terminal
            </h2>
            <p className="text-muted font-sans max-w-2xl mx-auto">
              Execute your message through the terminal interface
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-black/40 backdrop-blur-xl border border-white/20 rounded-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-black/50 border-b border-white/20 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-white/80" />
                <div className="h-3 w-3 rounded-full bg-white/80" />
                <div className="h-3 w-3 rounded-full bg-white/80" />
                <span className="font-mono text-sm text-foreground ml-2">contact@swapnanil.terminal</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted flex items-center gap-2">
                    <span className="text-foreground">$</span>
                    <span>const name =</span>
                  </label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder='"Enter your name"'
                    className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-foreground transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted flex items-center gap-2">
                    <span className="text-foreground">$</span>
                    <span>const email =</span>
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder='"Enter your email"'
                    className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-foreground transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted flex items-center gap-2">
                    <span className="text-foreground">$</span>
                    <span>const message =</span>
                  </label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder={`"Enter your message..."`}
                    rows={4}
                    className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-foreground transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-foreground text-background font-bold font-mono rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  execute send()
                </button>
              </form>
            </div>
          </div>

          {/* Footer Social Anchors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <a
              href="https://github.com/buzzlemax"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-4 bg-black/40 backdrop-blur-xl border border-white/20 rounded-lg hover:border-foreground hover:text-foreground transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-white/10 text-foreground">
                <Code className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-sm font-semibold text-foreground">GitHub Profile</div>
                <div className="text-xs text-muted">@buzzlemax</div>
              </div>
            </a>

            <a
              href="https://youtube.com/@Swapnanildev_official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-4 bg-black/40 backdrop-blur-xl border border-white/20 rounded-lg hover:border-foreground hover:text-foreground transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-white/10 text-foreground">
                <Play className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-sm font-semibold text-foreground">YouTube Channel</div>
                <div className="text-xs text-muted">@Swapnanildev_official</div>
              </div>
            </a>

            <a
              href="https://instagram.com/zenixandrothenics"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-4 bg-black/40 backdrop-blur-xl border border-white/20 rounded-lg hover:border-foreground hover:text-foreground transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-white/10 text-foreground">
                <Camera className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-sm font-semibold text-foreground">$ instagram //</div>
                <div className="text-xs text-muted">@zenixandrothenics</div>
              </div>
            </a>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
