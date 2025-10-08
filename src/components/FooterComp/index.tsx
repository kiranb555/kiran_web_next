"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';
import { EMAIL, GITHUB, LINKEDIN, NAME, LOCATION, PHONE } from '@/utils/constants';

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: GITHUB,
      icon: <FiGithub className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: LINKEDIN,
      icon: <FiLinkedin className="w-5 h-5" />
    },
    {
      name: 'Email',
      url: `mailto:${EMAIL}`,
      icon: <FiMail className="w-5 h-5" />
    }
  ];

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Awards', href: '#awards' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'GitHub', href: GITHUB },
        { name: 'LinkedIn', href: LINKEDIN },
        { name: 'Email', href: `mailto:${EMAIL}` }
      ]
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Kiran</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Developer passionate about creating elegant solutions to complex problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="text-gray-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>{LOCATION}</li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li>{PHONE}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} {NAME}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                Crafted with passion <AiFillHeart className="mx-1 text-red-500 animate-pulse" /> by {NAME}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;