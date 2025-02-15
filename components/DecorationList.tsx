"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DecorationItem from "./DecorationItem";

const decorations = [
  {
    id: 1,
    name: "Elegant Floral Arch",
    price: 250,
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Beautiful floral arch perfect for weddings and special events.",
  },
  {
    id: 2,
    name: "Rustic Table Setting",
    price: 150,
    image: "/placeholder.svg?height=300&width=400",
    description: "Charming rustic table setting for intimate gatherings.",
  },
  {
    id: 3,
    name: "Fairy Light Curtain",
    price: 100,
    image: "/placeholder.svg?height=300&width=400",
    description: "Magical fairy light curtain to create a dreamy atmosphere.",
  },
  // Add more decoration items as needed
];

export default function DecorationList() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-3xl font-semibold text-purple-800 mb-6">
        Our Decoration Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {decorations.map((item) => (
          <DecorationItem
            key={item.id}
            item={item}
            setSelectedItem={setSelectedItem}
          />
        ))}
      </div>
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            className="bg-white p-6 rounded-lg max-w-lg w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold mb-2">{selectedItem.name}</h3>
            <img
              src={selectedItem.image || "/placeholder.svg"}
              alt={selectedItem.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-2">{selectedItem.description}</p>
            <p className="text-xl font-bold text-purple-800">
              Price: ${selectedItem.price}/day
            </p>
            <button
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
