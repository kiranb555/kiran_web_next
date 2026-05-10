"use client";

import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarDaysIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  logo: string;
  start: Date;
  end: Date | null;
  duration: string;
  location: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: '1',
    role: 'Senior Software Engineer',
    company: "Lowe's Companies, Inc.",
    logo: '/logos/lowes-logo.png',
    start: new Date(2021, 4),
    end: null,
    duration: 'May 2021 - Present',
    location: 'Bangalore, India',
    description: 'Leading development of scalable web applications and mentoring junior developers.',
    skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'GCP', 'Microservices', 'Python'],
  },
  {
    id: '2',
    role: 'Software Engineer',
    company: 'Digital Fintech Solutions',
    logo: '/logos/fintech-logo.png',
    start: new Date(2018, 8),
    end: new Date(2021, 3),
    duration: 'Sep 2018 - Apr 2021',
    location: 'Bangalore, India',
    description: 'Developed and maintained financial applications, focusing on performance and security.',
    skills: ['JavaScript', 'React', 'Redux', 'Node.js', 'MongoDB', 'Python', 'd3.js', 'Three.js'],
  },
  {
    id: '3',
    role: 'Software Engineer Intern',
    company: 'Gapoon',
    logo: '/logos/gapoon-logo.png',
    start: new Date(2018, 7),
    end: new Date(2018, 8),
    duration: 'Aug 2018 - Sep 2018',
    location: 'Bangalore, India',
    description: 'Assisted in developing and testing software solutions, gaining hands-on experience with modern web technologies.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
];

function formatTenure(start: Date, end: Date | null): string {
  const to = end ?? new Date();
  const totalMonths =
    (to.getFullYear() - start.getFullYear()) * 12 + (to.getMonth() - start.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`);
  return parts.join(' ') || '< 1 mo';
}

function getTotalExperience(): string {
  const start = new Date(2018, 7);
  return formatTenure(start, null);
}

const Experience = () => (
  <section id="experience" className="py-24 bg-white dark:bg-gray-950">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-3 block">Career</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Work{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/60">
            <ClockIcon className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              {getTotalExperience()} of total experience
            </span>
          </div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 ring-4 ring-white dark:ring-gray-950 hidden sm:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-200 dark:hover:border-indigo-800/60 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    {/* Logo */}
                    <div className="w-14 h-14 flex-shrink-0 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-700">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={56}
                        height={56}
                        className="w-12 h-12 object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span className="flex items-center gap-1.5">
                          <BriefcaseIcon className="w-4 h-4 text-indigo-500" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <CalendarDaysIcon className="w-4 h-4 text-indigo-500" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPinIcon className="w-4 h-4 text-indigo-500" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-medium">
                          <ClockIcon className="w-4 h-4" />
                          {formatTenure(exp.start, exp.end)}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs font-medium bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-100 dark:border-indigo-900/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
