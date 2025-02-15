"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.section
      className="h-screen flex items-center justify-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-purple-800 mb-6"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
        Selamat Datang di Website Kami CV Rama Collection
        </motion.h1>
        <motion.p
          className="text-xl text-purple-600 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
         Ini adalah hasil karya kami selama berapa tahun hasil kerja sama dua putri Idha Zaidah Make up dengan Rama Dekorasi
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/makeup">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Melihat Hasi Make up
            </Button>
          </Link>
          <Link href="/decoration-gallery">
            <Button
              size="lg"
              className="bg-pink-500 hover:bg-pink-600 text-white"
            >
              Hasil karya Rama Dekorasi
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
