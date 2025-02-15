"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const makeupServices = [
  {
    id: 1,
    name: "Bridal Makeup",
    image: "/assets/images/11.jpg",
    price: 100,
    description: "Stunning bridal makeup for your special day.",
  },
  {
    id: 2,
    name: "Party Makeup",
    image: "/assets/images/12.jpg",
    price: 200,
    description: "Glamorous makeup for any party or event.",
  },
  {
    id: 3,
    name: "Natural Everyday Look",
    image: "/assets/images/13.jpg",
    price: 100,
    description: "Fresh and natural makeup for daily wear.",
  },
  {
    id: 4,
    name: "Photoshoot Makeup",
    image: "/assets/images/14.jpg",
    price: 300,
    description: "Camera-ready makeup for photoshoots and videos.",
  },
];

const MakeupService = ({ service }) => (
  <motion.div
    key={service.id}
    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: service.id * 0.1 }}
  >
    <div className="relative w-full h-64">
      <Image
        src={service.image}
        alt={service.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={service.id <= 2}
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-purple-800 mb-2">
        {service.name}
      </h3>
      <p className="text-gray-700 mb-4">{service.description}</p>
      <p className="text-xl font-bold text-purple-600">
        Price: ${service.price}
      </p>
    </div>
  </motion.div>
);

export default function MakeupServices() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {makeupServices.map((service) => (
          <MakeupService
            key={service.id}
            service={service}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">
          Book Your Appointment
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          Contact Iedha Zaidah for makeup services:
        </p>
        <p className="text-xl font-bold text-purple-600">
          Phone: +62 123-456-7890
        </p>
      </div>
    </div>
  );
}
