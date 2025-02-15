"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="text-center py-10 bg-white bg-opacity-80 backdrop-blur-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-bold text-purple-800"
        whileHover={{ scale: 1.05 }}
      >
        Elegant Decor Rentals
      </motion.h1>
      <p className="text-xl text-purple-600 mt-2">
        Transform Your Event with Our Stunning Decorations
      </p>
    </motion.header>
  );
}
