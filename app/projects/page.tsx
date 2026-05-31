'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code, Play, ExternalLink, Plus } from 'lucide-react';

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
      github: 'https://github.com/Swapnanildev_official',
      demo: 'https://youtube.com/@Swapnanildev_official',
    },
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
      github: 'https://github.com/Swapnanildev_official',
      demo: 'https://youtube.com/@Swapnanildev_official',
    },
  },
];

export default function ProjectVault() {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    tech: '',
    link: '',
  });

  // Load projects from LocalStorage on mount
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
    };

    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    
    // Reset form
    setFormData({ title: '', subtitle: '', description: '', tech: '', link: '' });
    setShowForm(false);
  };

  return (
    <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Project Vault
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto font-sans">
              A curated collection of software applications and development projects.
            </p>
          </div>

          {/* Live Project Studio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <h2 className="font-mono text-lg font-semibold text-foreground">Live Project Studio</h2>
              </div>
              <button
                onClick={() => setShowForm(!showForm)}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-accent hover:text-accent transition-all duration-300 font-mono text-sm"
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
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
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
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
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
                      className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
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
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
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
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                        required
                      />
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-accent text-background font-bold font-mono rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Deploy Project
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl transition-all duration-300"
              >
                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-accent/30 hover:border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="font-mono text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted font-sans">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {project.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted font-sans">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono font-medium bg-white/5 text-muted rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link Icons */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-accent hover:text-accent transition-all duration-300 group/link"
                  >
                    <Code className="h-4 w-4" />
                    <span className="text-sm font-medium">GitHub</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                  </a>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-accent hover:text-accent transition-all duration-300 group/link"
                  >
                    <Play className="h-4 w-4" />
                    <span className="text-sm font-medium">Demo</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                  </a>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 right-4 h-2 w-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
