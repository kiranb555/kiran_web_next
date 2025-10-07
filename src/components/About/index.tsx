"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TechnologyCard } from "./TechnologyCard";
import { technologyCategories } from "@/constants/technologies";
// import { useTheme } from "next-themes";

const About = () => {
  // Replace these with your actual photo paths
  const profilePhoto = "/photos/profile.jpeg"; // Add your profile photo to public folder

  const getExperience = () => {
    return new Date().getFullYear() - 2018;
  };

  return (
    <section
      id="about"
      className="flex items-center py-16 dark:bg-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Content with Side-by-Side Layout */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
            {/* About Content */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h2>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Hello! I&apos;m a{" "}
                  <span className="text-amber-600 dark:text-amber-400 font-medium">
                    Senior Software Developer&nbsp;
                  </span>
                  with over {getExperience()} years of experience in building robust, scalable
                  web applications. My journey in technology began with a deep
                  curiosity about how things work, which led me to pursue a
                  career where I could turn ideas into reality through code.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  My expertise lies in modern JavaScript frameworks,
                  particularly <span className="font-medium">React</span> and{" "}
                  <span className="font-medium">Node.js</span>, with a strong
                  focus on creating seamless user experiences. I&apos;m passionate
                  about clean code, performance optimization, and implementing
                  best practices in software development.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  What excites me most about technology is its potential to
                  solve real-world problems. I&apos;m particularly interested in{" "}
                  <span className="font-medium">
                    progressive web applications
                  </span>
                  , <span className="font-medium">cloud architecture</span>, and{" "}
                  <span className="font-medium" id="technologies">developer experience</span>.
                </p>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end lg:mb-5 mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 lg:w-72 lg:h-72 group overflow-hidden rounded-lg"
              >
                <Image
                  src={profilePhoto}
                  alt="Kiran B - Profile"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150"
                  priority
                />
                <div className="absolute inset-0 border-4 border-amber-500/20 rounded-lg group-hover:border-amber-500/30 transition-all duration-300" />
              </motion.div>
            </div>
          </div>
          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Technologies I Work With
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tools and technologies I&apos;m proficient in
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
