"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-purple-800 mb-4">
            Iedha Zaidah Makeup
          </h2>
          <div className="flex items-center mb-2">
            <Phone className="w-5 h-5 text-purple-600 mr-2" />
            <p className="text-lg text-gray-700">+62 123-456-7890</p>
          </div>
          <div className="flex items-center mb-2">
            <Mail className="w-5 h-5 text-purple-600 mr-2" />
            <p className="text-lg text-gray-700">iedha@example.com</p>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-purple-600 mr-2" />
            <p className="text-lg text-gray-700">
              Jl. Makeup Artistry No. 456, Jakarta
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-purple-800 mb-4">
            Rama Dekorasi
          </h2>
          <div className="flex items-center mb-2">
            <Phone className="w-5 h-5 text-purple-600 mr-2" />
            <p className="text-lg text-gray-700">+62 987-654-3210</p>
          </div>
          <div className="flex items-center mb-2">
            <Mail className="w-5 h-5 text-purple-600 mr-2" />
            <p className="text-lg text-gray-700">rama@example.com</p>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-purple-600 mr-2" />
            <p className="text-lg text-gray-700">
              Jl. Dekorasi Indah No. 123, Jakarta
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
