import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <motion.img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
        alt="Travel background"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 text-white">
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          <span className="text-[#FDE047]">Adventure</span> Begins Here
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200"
        >
          Discover curated journeys, personalized travel planning and
          unforgettable experiences. Your next dream destination awaits.
        </motion.p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex gap-4"
        >
          <button className="bg-[#FDE047] text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
            Explore Packages
          </button>

          <button className="border border-white/60 px-8 py-3 rounded-full hover:bg-white/10 transition">
            Contact Us
          </button>
        </motion.div>
      </div>

      <motion.img
        src="https://png.pngtree.com/png-vector/20250320/ourmid/pngtree-realistic-passenger-airplane-in-mid-flight-isolated-on-transparent-background-png-image_15788014.png"
        alt="Plane"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 0.8 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-24 left-10 w-20 hidden md:block z-20 filter invert"
      />

      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

export default Hero
