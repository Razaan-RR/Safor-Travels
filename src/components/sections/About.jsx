import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <section className="relative py-32 bg-[#1f3152] overflow-hidden text-white">
      {/* Ambient glowing orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[160px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-yellow-400 mb-4">
            About Us
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            The Art of <span className="text-yellow-400">Travel</span>,
            Perfected
          </h1>
        </motion.div>

        {/* Main Content Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-16 shadow-2xl"
        >
          {/* Floating gradient border effect */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-yellow-400/20 via-transparent to-blue-400/20 opacity-30 blur-xl"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-14">
            {/* About Paragraphs */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
                Safor Travels
              </h3>
              <p className="text-gray-300 leading-relaxed mb-5">
                Safor Travels is a Bangladesh-based travel agency dedicated to
                providing reliable, affordable, and personalized travel
                solutions. We transform ordinary trips into seamless,
                unforgettable experiences by handling every detail with care,
                transparency, and professionalism.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From planning to completion, we stand beside our clients at
                every step, ensuring their journey is smooth, safe, and truly
                memorable. Travel with us is not just about destinations, it’s
                about confidence, comfort, and trust.
              </p>
            </motion.div>

            {/* Mission & Vision */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
              >
                <h4 className="text-xl font-semibold text-yellow-400 mb-2">
                  Our Mission
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  To deliver dependable travel services that simplify journeys
                  and create positive, stress-free experiences for every
                  traveler.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
              >
                <h4 className="text-xl font-semibold text-yellow-400 mb-2">
                  Our Vision
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  To become a trusted and recognized travel service provider in
                  Bangladesh through integrity, service excellence, and
                  unwavering customer satisfaction.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

export default About
