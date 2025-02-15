"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    name: "Wedding Decorations",
    description:
      "Create the wedding of your dreams with our stunning decor options.",
  },
  {
    id: 2,
    name: "Corporate Event Styling",
    description:
      "Impress your clients and employees with professional event decorations.",
  },
  {
    id: 3,
    name: "Birthday Party Themes",
    description:
      "Make birthdays unforgettable with our themed decoration packages.",
  },
  {
    id: 4,
    name: "Holiday Decorations",
    description:
      "Bring the festive spirit to your home or office with our holiday decor.",
  },
];

export default function ServicesList() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: service.id * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">
              {service.name}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
