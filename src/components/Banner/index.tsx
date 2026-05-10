"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { LINKEDIN, GITHUB } from '@/utils/constants';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Banner = () => {
  const prefersReducedMotion = useReducedMotion();

  const fade = (delay = 0) => prefersReducedMotion
    ? {}
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay, duration: 0.6 } };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden dot-grid">
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-60 -right-60 w-[500px] h-[500px] rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-3xl" />
        <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] rounded-full bg-violet-400/20 dark:bg-violet-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-400/10 dark:bg-purple-600/5 blur-3xl" />
      </div>

      <div className="relative w-full max-w-4xl mx-auto text-center">
        {/* Available badge */}
        <motion.div {...fade(0.1)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Open to new opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fade(0.2)}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-gray-900 dark:text-white"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
            Kiran B
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p {...fade(0.3)} className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Senior Software Engineer building{' '}
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">high-performance</span>{' '}
          web applications and leading engineering teams
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fade(0.4)} className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="#experience"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Experience
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Kiran_SSE_2025.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download="Kiran_SSE_2025.pdf"
            className="px-8 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div {...fade(0.5)} className="flex justify-center items-center gap-3 mb-16">
          {[
            { name: 'GitHub', url: GITHUB, icon: <GitHubIcon className="w-5 h-5" /> },
            { name: 'LinkedIn', url: LINKEDIN, icon: <LinkedInIcon className="w-5 h-5" /> },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="p-3 rounded-xl bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm hover:shadow-md hover:shadow-indigo-500/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        {!prefersReducedMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <ArrowDownIcon className="w-4 h-4" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Banner;
