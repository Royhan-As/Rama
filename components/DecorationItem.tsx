"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DecorationItem({ item, setSelectedItem }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      layoutId={`item-${item.id}`}
      onClick={() => setSelectedItem(item)}
    >
      <Image
        src="/path-to-image.jpg"
        alt="Description"
        width={500}
        height={300}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-purple-800 mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <p className="text-lg font-bold text-purple-600">${item.price}/day</p>
      </div>
    </motion.div>
  );
}
