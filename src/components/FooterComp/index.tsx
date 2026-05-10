"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { EnvelopeIcon, HeartIcon } from '@heroicons/react/24/solid';
import { EMAIL, GITHUB, LINKEDIN, NAME, LOCATION, PHONE } from '@/utils/constants';

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

const socialLinks = [
  { name: 'GitHub', url: GITHUB, icon: <GitHubIcon className="w-5 h-5" /> },
  { name: 'LinkedIn', url: LINKEDIN, icon: <LinkedInIcon className="w-5 h-5" /> },
  { name: 'Email', url: `mailto:${EMAIL}`, icon: <EnvelopeIcon className="w-5 h-5" /> },
];

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '#' },
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Awards', href: '#awards' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'GitHub', href: GITHUB },
      { name: 'LinkedIn', href: LINKEDIN },
      { name: 'Email', href: `mailto:${EMAIL}` },
    ],
  },
];

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 dark:bg-gray-950 border-t border-gray-800">
      {/* Gradient accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-3">
              Kiran B
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Senior Software Engineer passionate about creating elegant solutions to complex problems.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="p-2.5 rounded-xl bg-gray-900 text-gray-400 hover:text-indigo-400 border border-gray-800 hover:border-indigo-800/60 transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="mb-10 p-6 rounded-2xl bg-gray-900 border border-gray-800">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Contact</h4>
          <ul className="flex flex-wrap gap-6 text-sm text-gray-400">
            <li>{LOCATION}</li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-indigo-400 transition-colors duration-200">
                {EMAIL}
              </a>
            </li>
            <li>{PHONE}</li>
          </ul>
        </div>

        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {NAME}. All rights reserved.
          </p>
          <p className="flex items-center text-sm text-gray-500 gap-1">
            Crafted with
            <HeartIcon className="w-4 h-4 text-red-500 animate-pulse mx-0.5" />
            by {NAME}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
