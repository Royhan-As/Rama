"use client";

import { motion } from "framer-motion";

export default function DecorationItem({ item, setSelectedItem }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      layoutId={`item-${item.id}`}
      onClick={() => setSelectedItem(item)}
    >
      <img
        src={item.image || "/placeholder.svg"}
        alt={item.name}
        className="w-full h-48 object-cover"
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
