"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const featuredServices = [
  {
    id: 1,
    name: "Bridal Makeup",
    image: "/placeholder.svg?height=400&width=600",
    link: "/makeup",
  },
  {
    id: 2,
    name: "Elegant Floral Arch",
    image: "/placeholder.svg?height=400&width=600",
    link: "/decoration-gallery",
  },
  {
    id: 3,
    name: "Party Makeup",
    image: "/placeholder.svg?height=400&width=600",
    link: "/makeup",
  },
  {
    id: 4,
    name: "Rustic Table Setting",
    image: "/placeholder.svg?height=400&width=600",
    link: "/decoration-gallery",
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">
          Our Featured Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServices.map((service) => (
            <motion.div
              key={service.id}
              className="relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
            >
              <Link href={service.link}>
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">
                    {service.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
