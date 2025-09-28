"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Frontend */}
              <div className="group relative p-6 backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/30 hover:border-amber-400/30 hover:dark:border-amber-400/30 hover:shadow-amber-500/10 hover:dark:shadow-amber-500/10">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-amber-500/30">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Frontend
                </h4>
                <ul className="space-y-2">
                  {[
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "React.js",
                    "Next.js",
                    "Redux",
                    "HTML5/CSS3",
                    "Tailwind CSS",
                  ].map((tech) => (
                    <li
                      key={tech}
                      className="text-sm text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Backend */}
              <div className="group relative p-6 backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/30 hover:border-amber-400/30 hover:dark:border-amber-400/30 hover:shadow-amber-500/10 hover:dark:shadow-amber-500/10">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-amber-500/30">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Backend
                </h4>
                <ul className="space-y-2">
                  {[
                    "Node.js",
                    "Python",
                    "Express.js",
                    "NestJS",
                    "RESTful APIs",
                    "GraphQL",
                    "Microservices",
                  ].map((tech) => (
                    <li
                      key={tech}
                      className="text-sm text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Data & Cloud */}
              <div className="group relative p-6 backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/30 hover:border-amber-400/30 hover:dark:border-amber-400/30 hover:shadow-amber-500/10 hover:dark:shadow-amber-500/10">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-amber-500/30">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Data & Cloud
                </h4>
                <ul className="space-y-2">
                  {[
                    "MongoDB",
                    "PostgreSQL",
                    "MySQL",
                    "AWS",
                    "GCP",
                    "Firebase",
                    "Docker",
                    "Kubernetes",
                  ].map((tech) => (
                    <li
                      key={tech}
                      className="text-sm text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Workflow */}
              <div
                id="technologies"
                className="group relative p-6 backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/30 hover:border-amber-400/30 hover:dark:border-amber-400/30 hover:shadow-amber-500/10 hover:dark:shadow-amber-500/10"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-amber-500/30">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Tools & Workflow
                </h4>
                <ul className="space-y-2">
                  {[
                    "Git",
                    "Bitbucket",
                    "CI/CD",
                    "React Testing Library",
                    "Playwright",
                    "Jira",
                    "Agile/Scrum",
                  ].map((tech) => (
                    <li
                      key={tech}
                      className="text-sm text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
