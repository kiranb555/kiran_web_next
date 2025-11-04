"use client";

import { motion } from "framer-motion";
import PhotoSlider from "../PhotoSlider";

const photographyPhotos = [
  `photography/photo1.jpeg`,
  `photography/photo2.jpeg`,
  `photography/photo3.jpeg`,
];

const Hobby = () => {
  return (
    <section className="py-16 dark:bg-transparent">
      <div className="container mx-auto px-2 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          A Glimpse of My World
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          When I&apos;m not coding, you&apos;ll find me exploring new places with my
          camera or cycling through scenic routes. I believe that maintaining a
          balance between work and personal interests leads to greater
          creativity and productivity.
        </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
          id="photography"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            My Photography
          </h3>
          <div className="w-full">
            <PhotoSlider photos={photographyPhotos} />
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
            A collection of moments I&apos;ve captured on my travels and adventures.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobby;
