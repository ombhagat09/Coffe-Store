"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Left Side: Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-amber-900 leading-tight">
          Sip the <span className="text-amber-700">Finest Coffee</span>
          <br /> Every Morning ☕
        </h1>
        <p className="text-amber-800 text-lg max-w-md mx-auto md:mx-0">
          Welcome to <strong>Coffee Store</strong> — where every cup is brewed
          with passion and perfection. Start your day with the aroma of
          happiness!
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="/products"
            className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Explore Menu
          </a>
          <a
            href="/contact"
            className="border border-amber-800 text-amber-900 hover:bg-amber-800 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </motion.div>

      {/* Right Side: Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <Image
          src="/coffee-cup.jpg"
          alt="Coffee Cup"
          width={500}
          height={500}
          className="rounded-3xl shadow-2xl object-cover"
        />
      </motion.div>
    </section>
  );
}
