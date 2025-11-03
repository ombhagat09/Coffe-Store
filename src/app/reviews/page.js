"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    name: "Aarav Mehta",
    review:
      "Absolutely love the coffee here! The aroma, the taste, and the ambiance — everything is perfect.",
    image: "/user1.jpg",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    review:
      "Best cappuccino I've ever had ☕. The baristas are super friendly and the vibe is cozy.",
    image: "/user2.jpg",
    rating: 4,
  },
  {
    name: "Rohan Patel",
    review:
      "Every cup feels like heaven. Highly recommend the caramel latte — it’s addictive!",
    image: "/user3.jpg",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-amber-900 mb-12"
      >
        What Our Customers Say ☕
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reviews.map((r, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={r.image}
                alt={r.name}
                width={80}
                height={80}
                className="rounded-full object-cover border-4 border-amber-200"
              />
            </div>
            <h3 className="text-xl font-semibold text-amber-800">{r.name}</h3>
            <p className="text-gray-700 mt-3 italic">"{r.review}"</p>
            <div className="mt-4 flex justify-center text-amber-600">
              {"★".repeat(r.rating)}
              {"☆".repeat(5 - r.rating)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
