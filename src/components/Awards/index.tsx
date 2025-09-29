"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const awards = [
    {
      id: 1,
      title: "Digital Performance Award",
      issuer: "Lowe's Companies, Inc.",
      date: "2024",
      description: "Awarded for my front-end contributions to the lowes.com WISMO team, where I played an instrumental role in developing key pages for both Pro and DIY customers, including buy-again, order history, order details, and check order status pages, while also leading performance optimization efforts.",
      image: "/awards/Award1.png",
      color: "border-blue-500"
    },
    {
      id: 2,
      title: "Outstanding Performance Award",
      issuer: "Lowe's Companies, Inc.",
      date: "2023",
      description: "Earned a spot recognition for my key role in migrating the Notification Center from the order history page to the master header, a project I spearheaded to achieve better performance and a more maintainable codebase.",
      image: "/awards/Award2.png",
      color: "border-emerald-500"
    },
    {
      id: 3,
      title: "Exceptional Project Delivery Award",
      issuer: "Lowe's Companies, Inc.",
      date: "2022",
      description: "Recognized with an award for my outstanding contribution to a critical project delivered ahead of schedule. This was in recognition of my consistent embodiment of Lowe's core behaviors: focusing on the customer, delivering results, taking action, continious learning and show courage.",
      image: "/awards/Award3.png",
      color: "border-amber-500"
    },
    {
      id: 4,
      title: "Migration Excellence Award",
      issuer: "Lowe's Companies, Inc.",
      date: "2021",
      description: "Awarded a spot recognition for my contributions to the lowes.ca P1 migration. I played a crucial role in the successful development and transition of the Product Listing, Product Detail, and Department List pages",
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
            {currentAwards.map(({
              id,
              title,
              issuer,
              date,
              description,
              image,
              color
            }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="group h-full"
              >
                <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105 p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                        {date}
                      </span>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        color === 'border-blue-500' 
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                          : color === 'border-emerald-500'
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                            : 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                      }`}>
                        {issuer.split(' ')[0]}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {description}
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