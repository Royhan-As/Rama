"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    text: "Iedha's makeup skills are incredible! I felt so beautiful on my wedding day.",
    service: "Makeup",
  },
  {
    id: 2,
    name: "Michael R.",
    text: "Rama's decorations transformed our venue into a magical space. Highly recommended!",
    service: "Decoration",
  },
  {
    id: 3,
    name: "Emily T.",
    text: "The combination of Iedha's makeup and Rama's decor made our event unforgettable.",
    service: "Both",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 bg-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <p className="text-lg text-gray-700 mb-4">
              {testimonials[currentIndex].text}
            </p>
            <p className="text-purple-600 font-semibold">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-sm text-gray-500">
              Service: {testimonials[currentIndex].service}
            </p>
          </motion.div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full"
          >
            &#8592;
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
