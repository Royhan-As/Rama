"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const featuredDecorations = [
  {
    id: 1,
    name: "Elegant Floral Arch",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    name: "Rustic Table Setting",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    name: "Fairy Light Curtain",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function FeaturedDecorations() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">
          Featured Decorations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDecorations.map((decoration) => (
            <motion.div
              key={decoration.id}
              className="relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: decoration.id * 0.1 }}
              onHoverStart={() => setHoveredId(decoration.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <Image
                src={decoration.image || "/placeholder.svg"}
                alt={decoration.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-purple-800 bg-opacity-75 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === decoration.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-white text-2xl font-semibold">
                  {decoration.name}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
