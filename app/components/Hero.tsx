"use client";

import { motion } from "framer-motion";
import pt from "../../locales/pt.json";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        {pt.hero.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-400 mb-6 max-w-2xl"
      >
        {pt.hero.subtitle}
      </motion.p>
    </section>
  );
}

export default Hero;
