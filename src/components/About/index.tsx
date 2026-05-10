"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TechnologyCard } from "./TechnologyCard";
import { technologyCategories } from "@/constants/technologies";

const About = () => {
  const profilePhoto = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/new_profile.png`;

  const getExperienceFormatted = () => {
    const today = new Date();
    const start = new Date(2018, 8);
    const totalMonths = (today.getFullYear() - start.getFullYear()) * 12 + (today.getMonth() - start.getMonth());
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return `${years}${months !== 0 ? '.' + months : ''} Years`;
  };

  const stats = [
    { label: 'Experience', value: getExperienceFormatted() },
    { label: 'Projects Shipped', value: '20+' },
    { label: 'Team Members Led', value: '8+' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-3 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Crafting digital{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">experiences</span>
            </h2>
          </div>

          {/* Bio + Photo */}
          <div className="flex flex-col lg:flex-row items-start gap-16 mb-20">
            <div className="w-full lg:w-3/5 space-y-5">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Hello! I&apos;m a{' '}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">Senior Software Engineer</span>{' '}
                with over {getExperienceFormatted()} of experience building robust, scalable web applications. My journey began with a deep curiosity about how technology works, and grew into a career turning ideas into impactful software.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My expertise lies in modern JavaScript ecosystems — particularly{' '}
                <span className="font-medium text-gray-900 dark:text-white">React</span> and{' '}
                <span className="font-medium text-gray-900 dark:text-white">Node.js</span> — with a strong focus on performance, clean architecture, and seamless user experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" id="technologies">
                I&apos;m particularly passionate about{' '}
                <span className="font-medium text-gray-900 dark:text-white">progressive web applications</span>,{' '}
                <span className="font-medium text-gray-900 dark:text-white">cloud architecture</span>, and{' '}
                <span className="font-medium text-gray-900 dark:text-white">developer experience</span>.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center px-6 py-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                    <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Photo */}
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden ring-4 ring-indigo-500/20 dark:ring-indigo-500/10 shadow-2xl shadow-indigo-500/20">
                  <Image
                    src={profilePhoto}
                    alt="Kiran B"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl -z-10 opacity-30 blur-xl" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl -z-10 opacity-20 blur-xl" />
              </motion.div>
            </div>
          </div>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Technologies I Work With
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Tools and technologies I&apos;m proficient in
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-8">
              {technologyCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <TechnologyCard
                    key={category.id}
                    title={category.title}
                    icon={Icon}
                    technologies={category.technologies}
                  />
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
