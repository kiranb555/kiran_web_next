"use client";

import { motion, useReducedMotion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { LINKEDIN, GITHUB } from '@/utils/constants';
import { useTheme } from 'next-themes';
// Dynamically import icons with no SSR to reduce bundle size
const FiGithub = dynamic(() => import('react-icons/fi').then(mod => mod.FiGithub), { ssr: false });
const FiLinkedin = dynamic(() => import('react-icons/fi').then(mod => mod.FiLinkedin), { ssr: false });
const FiArrowDown = dynamic(() => import('react-icons/fi').then(mod => mod.FiArrowDown), { ssr: false });

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}
const Banner = () => {
  const prefersReducedMotion = useReducedMotion();
  const { theme } = useTheme();

  // Performance: Skip animations if user prefers reduced motion
  const motionConfig = {
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  // Performance: Memoize social links to prevent re-renders
  const socialLinks: SocialLink[] = [
    { 
      name: 'GitHub',
      url: GITHUB,
      icon: <FiGithub aria-hidden="true" className="w-6 h-6" />
    },
    { 
      name: 'LinkedIn',
      url: LINKEDIN,
      icon: <FiLinkedin aria-hidden="true" className="w-6 h-6" />
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center dark:bg-transparent px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto text-center">
        <motion.div {...motionConfig}>
        <motion.h1 
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900`}
            {...motionConfig}
            transition={{ ...motionConfig.transition, delay: 0.1 }}
          >
            Kiran B
          </motion.h1>
          <motion.div className="flex flex-col items-center mb-4" {...motionConfig}>
            <div className="relative group">
              <p className="text-sm font-bold text-amber-600 dark:text-amber-400 mb-2 text-center">
                Senior Software Engineer
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="max-w-8xl mx-auto mb-8"
            {...motionConfig}
            transition={{ ...motionConfig.transition, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
              Building high-performance web applications and leading engineering team
            </h2>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-6"
            {...motionConfig}
            transition={{ ...motionConfig.transition, delay: 0.3 }}
          >
          <a
              href="/Kiran_SSE_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Kiran_SSE_2025.pdf"
              className="px-6 py-3 border border-amber-600 text-amber-600 hover:bg-amber-50 dark:text-amber-400 dark:border-amber-400 dark:hover:bg-amber-900/20 font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Download my resume in a new tab"
            >
              Download Resume
            </a>
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            {...motionConfig}
            transition={{ ...motionConfig.transition, delay: 0.3 }}
          >
            <a
              href="#experience"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="View my experience"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Contact me"
            >
              Contact Me
            </a>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            {...motionConfig}
            transition={{ ...motionConfig.transition, delay: 0.4 }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
          
          {!prefersReducedMotion && (
            <motion.div 
              className="mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5
              }}
            >
              <div className="flex flex-col items-center">
                <div className="bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                <button   
                  className="text-sm text-gray-500 dark:text-gray-400 mb-2 mt-4 hover:text-amber-500 dark:hover:text-amber-400 transition-colors focus:outline-none"
                  aria-label="Scroll down"
                >
                  Scroll Down
                </button>
                <FiArrowDown className="text-gray-500 dark:text-gray-400 w-5 h-5" />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;