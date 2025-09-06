"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: "Outstanding Performance Award",
      issuer: "Lowe's Companies, Inc.",
      date: "2022",
      description: "Recognized for exceptional contributions to the development of the e-commerce platform that resulted in a 30% increase in user engagement.",
      image: "/awards/performance-award.jpg",
      color: "border-blue-500"
    },
    {
      id: 2,
      title: "Innovation Champion",
      issuer: "Digital Fintech Solutions",
      date: "2020",
      description: "Awarded for developing an innovative payment processing solution that reduced transaction time by 40%.",
      image: "/awards/innovation-award.jpg",
      color: "border-emerald-500"
    },
    {
      id: 3,
      title: "Best Project Award",
      issuer: "Gapoon",
      date: "2018",
      description: "Recognized for outstanding contribution to a critical project delivered ahead of schedule.",
      image: "/awards/project-award.jpg",
      color: "border-amber-500"
    }
  ];

  return (
    <section id="awards" className="py-20 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
            Achievements
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            Awards & Recognition
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-3"></div>
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="md:w-1/3 relative h-48 md:h-auto">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                      {award.date}
                    </span>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      award.color === 'border-blue-500' 
                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                        : award.color === 'border-emerald-500'
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                          : 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                    }`}>
                      {award.issuer.split(' ')[0]}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {award.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {award.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;