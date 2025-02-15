"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

const decorations = [
  {
    id: 1,
    name: "Elegant Floral Arch",
    image: "/assets/images/1.jpg",
    price: 250,
    description:
      "Beautiful floral arch perfect for weddings and special events.",
  },
  {
    id: 2,
    name: "Rustic Table Setting",
    image: "/assets/images/2.jpg",
    price: 150,
    description: "Charming rustic table setting for intimate gatherings.",
  },
  {
    id: 3,
    name: "Fairy Light Curtain",
    image: "/assets/images/3.jpg",
    price: 100,
    description: "Magical fairy light curtain to create a dreamy atmosphere.",
  },
  {
    id: 4,
    name: "Vintage Candelabra",
    image: "/assets/images/4.jpg",
    price: 80,
    description: "Elegant vintage candelabra for a touch of classic charm.",
  },
  {
    id: 5,
    name: "Bohemian Macramé Backdrop",
    image: "/assets/images/5.jpg",
    price: 200,
    description: "Stunning macramé backdrop for boho-chic events.",
  },
  {
    id: 6,
    name: "Modern Geometric Centerpiece",
    image: "/assets/images/6.jpg",
    price: 120,
    description: "Sleek geometric centerpiece for contemporary aesthetics.",
  },
];

export default function DecorationGallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {decorations.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            layoutId={`item-${item.id}`}
            onClick={() => setSelectedItem(item)}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                {item.name}
              </h3>
              <p className="text-lg font-bold text-purple-600">
                ${item.price}/day
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-lg max-w-lg w-full"
              layoutId={`item-${selectedItem.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-purple-800">
                {selectedItem.name}
              </h3>
              <p className="text-gray-700 mb-2">{selectedItem.description}</p>
              <p className="text-xl font-bold text-purple-600 mb-4">
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
      </AnimatePresence>

      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">
          Contact Rama Dekorasi
        </h2>
        <div className="flex items-center mb-2">
          <Phone className="w-5 h-5 text-purple-600 mr-2" />
          <p className="text-lg text-gray-700">Phone: +62 987-654-3210</p>
        </div>
        <div className="flex items-center">
          <MapPin className="w-5 h-5 text-purple-600 mr-2" />
          <p className="text-lg text-gray-700">
            Location: Jl. Dekorasi Indah No. 123, Jakarta
          </p>
        </div>
      </div>
    </div>
  );
}
