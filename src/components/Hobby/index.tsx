"use client";

import { motion } from "framer-motion";
import PhotoSlider from "../PhotoSlider";

const photographyPhotos = [
  `/photography/Photo1.jpeg`,
  `/photography/Photo2.jpeg`,
  `/photography/Photo3.jpeg`,
];

const Hobby = () => (
  <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-3 block">Beyond Code</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          A Glimpse of{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">My World</span>
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          When I&apos;m not coding, you&apos;ll find me exploring new places with my camera or cycling through scenic routes. I believe maintaining a balance between work and personal interests leads to greater creativity and productivity.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto"
        id="photography"
      >
        <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
          My Photography
        </h3>
        <div className="rounded-2xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800 shadow-2xl shadow-gray-200/50 dark:shadow-black/30">
          <PhotoSlider photos={photographyPhotos} />
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-5">
          A collection of moments captured on travels and adventures.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Hobby;
