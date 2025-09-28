"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const awards = [
    {
      id: 1,
      title: "Outstanding Performance Award",
      issuer: "Lowe's Companies, Inc.",
      date: "2022",
      description: "Recognized for exceptional contributions to the development of the e-commerce platform that resulted in a 30% increase in user engagement.",
      image: "/awards/Award1.png",
      color: "border-blue-500"
    },
    {
      id: 2,
      title: "Innovation Champion",
      issuer: "Lowe's Companies, Inc.",
      date: "2020",
      description: "Awarded for developing an innovative payment processing solution that reduced transaction time by 40%.",
      image: "/awards/Award2.png",
      color: "border-emerald-500"
    },
    {
      id: 3,
      title: "Best Project Award",
      issuer: "Lowe's Companies, Inc.",
      date: "2018",
      description: "Recognized for outstanding contribution to a critical project delivered ahead of schedule.",
      image: "/awards/Award3.png",
      color: "border-amber-500"
    },
    {
      id: 4,
      title: "Tech Excellence Award",
      issuer: "Lowe's Companies, Inc.",
      date: "2021",
      description: "Acknowledged for technical excellence in implementing scalable cloud architecture solutions.",
      image: "/awards/Award4.png",
      color: "border-blue-500"
    }
  ];

const Awards = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(awards.length / cardsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const currentAwards = awards.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <section id="awards" className="py-20 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
            Achievements
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            Awards & Recognition
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-3"></div>
        </div>

        <div className="relative">
          {/* Left navigation button */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full ${
              currentPage === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            } bg-white/80 dark:bg-gray-800/80 shadow-md transition-all`}
            aria-label="Previous page"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>

          {/* Awards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
            {currentAwards.map((award) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="group h-full"
              >
                <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105 p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
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
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {award.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right navigation button */}
          <button
            onClick={nextPage}
            disabled={currentPage >= totalPages - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full ${
              currentPage >= totalPages - 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            } bg-white/80 dark:bg-gray-800/80 shadow-md transition-all`}
            aria-label="Next page"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2" id="contact">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentPage
                  ? 'bg-amber-500 w-8'
                  : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;