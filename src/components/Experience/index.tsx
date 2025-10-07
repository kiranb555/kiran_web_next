"use client";
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import Image from 'next/image';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  logo: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: '1',
      role: 'Senior Software Engineer',
      company: "Lowe's Companies, Inc.",
      logo: '/logos/lowes-logo.png',
      duration: 'May 2021 - Present',
      location: 'Bangalore, India',
      description: 'Leading development of scalable web applications and mentoring junior developers.',
      skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'GCP', 'Microservices', 'Python']
    },
    {
      id: '2',
      role: 'Software Engineer',
      company: 'Digital Fintech Solutions',
      logo: '/logos/fintech-logo.png',
      duration: 'Sep 2018 - Apr 2021',
      location: 'Bangalore, India',
      description: 'Developed and maintained financial applications, focusing on performance and security.',
      skills: ['JavaScript', 'React', 'Redux', 'Node.js', 'MongoDB', 'Python', 'd3.js', 'Three.js']
    },
    {
      id: '3',
      role: 'Software Engineer Intern',
      company: 'Gapoon',
      logo: '/logos/gapoon-logo.png',
      duration: 'Aug 2018 - Sep 2018',
      location: 'Bangalore, India',
      description: 'Assisted in developing and testing software solutions, gaining hands-on experience with modern web technologies.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    }
  ];

  return (
    <section id="experience" className="py-20 flex items-center dark:bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Work Experience
          </h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-amber-500/20 dark:border-amber-400/20"
              >
                <div className="absolute w-4 h-4 bg-amber-500 dark:bg-amber-400 rounded-full -left-2 top-0"></div>
                
                <div className="flex items-start gap-6">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                      <Image 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        width={64}
                        height={64} 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 text-sm mt-1">
                      <span className="flex items-center gap-1">
                        <FiBriefcase className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mt-3">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;