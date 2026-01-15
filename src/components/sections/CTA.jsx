import React from 'react'
import { motion } from 'framer-motion'

function CTA() {
  return (
    <section className="relative py-32 bg-[#1f3152] text-white overflow-hidden">
      {/* Animated floating circles */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -60, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[120px]"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Ready for Your Next <span className="text-yellow-400">Adventure?</span> 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-300 mb-10 leading-relaxed text-lg md:text-xl"
        >
          Safor Travels is here to make your dream journey seamless, safe, and
          unforgettable. Let’s plan the perfect trip for you today.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition"
          >
            Book Your Trip
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/30 px-10 py-4 rounded-full hover:bg-white/10 transition font-semibold"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Decorative floating travel icons */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 left-10 text-yellow-400/20 text-6xl hidden md:block"
        >
          ✈
        </motion.div>
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-10 right-10 text-blue-400/20 text-6xl hidden md:block"
        >
          🗺️
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

export default CTA
