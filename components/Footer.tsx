'use client';

import { motion } from 'framer-motion';
import { Code, Play } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-t border-white/20 bg-background/50 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted font-mono">
            © {new Date().getFullYear()} Swapnanil Dowarah. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/buzzlemax"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Code className="h-5 w-5" />
            </a>
            <a
              href="https://youtube.com/@Swapnanildev_official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="YouTube"
            >
              <Play className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
