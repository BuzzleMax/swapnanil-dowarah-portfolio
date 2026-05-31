'use client';

import { motion } from 'framer-motion';
import { Smartphone, Dumbbell } from 'lucide-react';

const abilities = [
  {
    icon: Smartphone,
    title: 'App Architecture & Vibe Coding',
    description: 'Full-stack mobile development using React Native, Supabase backend databases, state management, and real-time data tracking systems.',
    color: 'text-accent',
    borderColor: 'border-accent/30',
    hoverColor: 'hover:border-accent',
  },
  {
    icon: Dumbbell,
    title: 'Physical Optimization & Mechanics',
    description: 'Calisthenics engineering, progressive overload tracking, biometric data analysis, and advanced isometric bodyweight training systems.',
    color: 'text-accent',
    borderColor: 'border-accent/30',
    hoverColor: 'hover:border-accent',
  },
];

export default function AbilityMatrix() {
  return (
    <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Ability Matrix
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto font-sans">
              Core competencies across software engineering and physical performance.
            </p>
          </div>

          {/* Ability Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {abilities.map((ability, index) => {
              const Icon = ability.icon;
              return (
                <motion.div
                  key={ability.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl transition-all duration-300"
                >
                  {/* Border Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl border-2 ${ability.borderColor} ${ability.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`mb-6 inline-flex p-3 rounded-xl bg-white/5 ${ability.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Title */}
                  <h3 className="font-mono text-xl font-bold text-foreground mb-4">
                    {ability.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted font-sans leading-relaxed">
                    {ability.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className={`absolute bottom-4 right-4 h-2 w-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
