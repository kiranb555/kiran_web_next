"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { TrophyIcon } from '@heroicons/react/24/solid';

const awards = [
  {
    id: 1,
    title: "Digital Performance Award",
    issuer: "Lowe's Companies, Inc.",
    date: "2024",
    description: "Awarded for front-end contributions to the lowes.com WISMO team, developing key pages for Pro and DIY customers including buy-again, order history, order details, and check order status pages, while leading performance optimization efforts.",
    image: "/awards/Award1.png",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Outstanding Performance Award",
    issuer: "Lowe's Companies, Inc.",
    date: "2023",
    description: "Earned recognition for spearheading the migration of the Notification Center from the order history page to the master header, achieving better performance and a more maintainable codebase.",
    image: "/awards/Award2.png",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "Exceptional Project Delivery Award",
    issuer: "Lowe's Companies, Inc.",
    date: "2022",
    description: "Recognized for outstanding contribution to a critical project delivered ahead of schedule, embodying core behaviors: customer focus, delivering results, taking action, continuous learning, and showing courage.",
    image: "/awards/Award3.png",
    accent: "from-indigo-500 to-violet-500",
  },
  {
    id: 4,
    title: "Migration Excellence Award",
    issuer: "Lowe's Companies, Inc.",
    date: "2021",
    description: "Spot recognition for contributions to the lowes.ca P1 migration, playing a crucial role in the successful development and transition of Product Listing, Product Detail, and Department List pages.",
    image: "/awards/Award4.png",
    accent: "from-violet-500 to-purple-500",
  },
];

const Awards = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(awards.length / cardsPerPage);
  const currentAwards = awards.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

  return (
    <section id="awards" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-3 block">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Awards &{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Recognition</span>
          </h2>
        </div>

        <div className="relative">
          {/* Navigation */}
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-md transition-all duration-200 ${
              currentPage === 0
                ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                : 'text-gray-700 dark:text-gray-200 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-indigo-500/10'
            }`}
            aria-label="Previous page"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          {/* Awards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
            {currentAwards.map(({ id, title, issuer, date, description, image, accent }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group h-full"
              >
                <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 dark:hover:border-indigo-800/50 transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-48 bg-gray-50 dark:bg-gray-800 overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                        {date}
                      </span>
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${accent} shadow-sm`}>
                        <TrophyIcon className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-3">{issuer}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))}
            disabled={currentPage >= totalPages - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-md transition-all duration-200 ${
              currentPage >= totalPages - 1
                ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                : 'text-gray-700 dark:text-gray-200 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-indigo-500/10'
            }`}
            aria-label="Next page"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-10 gap-2" id="contact">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? 'w-8 bg-gradient-to-r from-indigo-500 to-violet-500'
                  : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
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
