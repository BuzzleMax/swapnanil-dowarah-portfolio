'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Play, Send, Terminal } from 'lucide-react';

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Message executed successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

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
            <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-foreground">The</span>
              <span className="text-accent-orange"> Connect</span>
              <span className="text-foreground"> Terminal</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-sans">
              Execute your message through the terminal interface.
            </p>
          </div>

          {/* IDE Terminal Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-black/40 border-b border-white/10 px-4 sm:px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-accent-orange" />
                <span className="font-mono text-sm text-foreground/80">connect-terminal.sh</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-sm text-accent-orange flex items-center gap-2">
                    <span className="text-foreground/60">$</span>
                    <span>const name =</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder='"Enter your name"'
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-sm text-accent-blue flex items-center gap-2">
                    <span className="text-foreground/60">$</span>
                    <span>const email =</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder='"Enter your email"'
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="font-mono text-sm text-purple-400 flex items-center gap-2">
                    <span className="text-foreground/60">$</span>
                    <span>const message =</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={`"Enter your message..."`}
                    rows={5}
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all resize-none"
                    required
                  />
                </div>

                {/* Execute Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group relative px-8 py-4 bg-accent-orange text-background font-bold font-mono rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" />
                    Execute Message
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Direct Link Anchors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <a
              href="https://github.com/Swapnanildev_official"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-4 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 hover:border-accent-orange transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-accent-orange/10 text-accent-orange">
                <Code className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-sm font-semibold text-foreground">GitHub Profile</div>
                <div className="text-xs text-foreground/60">@Swapnanildev_official</div>
              </div>
              <div className="h-2 w-2 rounded-full bg-accent-orange opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://youtube.com/@Swapnanildev_official"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-4 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 hover:border-accent-blue transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-accent-blue/10 text-accent-blue">
                <Play className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-sm font-semibold text-foreground">YouTube Channel</div>
                <div className="text-xs text-foreground/60">@Swapnanildev_official</div>
              </div>
              <div className="h-2 w-2 rounded-full bg-accent-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
