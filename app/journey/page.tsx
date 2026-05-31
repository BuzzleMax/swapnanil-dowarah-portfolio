'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu } from 'lucide-react';

const milestones = [
  {
    icon: Code2,
    title: 'Full-Stack Venture',
    description: 'Current phase developing autonomous web tools, custom apps, and running coding content.',
    color: 'text-accent',
    borderColor: 'border-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Cpu,
    title: 'Core Science Foundation',
    description: 'High-performance computer application frameworks and structural development logic.',
    color: 'text-accent',
    borderColor: 'border-accent',
    bgColor: 'bg-accent/10',
  },
];

export default function Journey() {
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
              Journey Timeline
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto font-sans">
              Tracking progression milestones across software engineering and foundational development.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent transform -translate-x-1/2" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={milestone.title}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="relative flex items-center"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 sm:left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-4 h-4 rounded-full ${milestone.bgColor} ${milestone.borderColor} border-2`} />
                    </div>

                    {/* Content Card */}
                    <div className={`w-full ml-16 sm:ml-0 ${isEven ? 'sm:pr-1/2 sm:text-right' : 'sm:pl-1/2'}`}>
                      <div className="inline-block max-w-md">
                        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl">
                          <div className={`inline-flex p-3 rounded-xl ${milestone.bgColor} mb-4 ${isEven ? 'sm:ml-auto' : ''}`}>
                            <Icon className={`h-6 w-6 ${milestone.color}`} />
                          </div>
                          <h3 className={`font-mono text-xl font-bold ${milestone.color} mb-3`}>
                            {milestone.title}
                          </h3>
                          <p className="text-muted font-sans leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
