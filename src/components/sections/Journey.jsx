import React from 'react'
import { motion } from 'framer-motion'

function Journey() {
  const steps = [
    {
      title: 'Dream',
      desc: 'You imagine your perfect trip. We listen, understand, and shape your ideas into a real plan.',
      icon: '🌍',
    },
    {
      title: 'Plan',
      desc: 'Our experts design your journey with the best routes, prices, and travel comfort.',
      icon: '🗺️',
    },
    {
      title: 'Prepare',
      desc: 'We handle tickets, visas, hotels, and documentation with total transparency.',
      icon: '📄',
    },
    {
      title: 'Explore',
      desc: 'You travel stress-free, while we stay available for any support you need.',
      icon: '✈️',
    },
    {
      title: 'Remember',
      desc: 'You return with memories, not worries. That’s the Safor Travels promise.',
      icon: '✨',
    },
  ]

  return (
    <section className="relative py-32 bg-[#1f3152] text-white overflow-hidden">
      <motion.div
        animate={{ x: ['-20%', '120%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 left-0 w-[40%] h-[2px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"
      />
      <motion.div
        animate={{ x: ['120%', '-20%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-32 left-0 w-[40%] h-[2px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-yellow-400 mb-4">
            Our Process
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Your Journey,{' '}
            <span className="text-yellow-400">Our Responsibility</span>
          </h1>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-yellow-400/30 via-white/10 to-blue-400/30"></div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="w-full md:w-[45%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{step.icon}</div>
                    <h3 className="text-2xl font-semibold text-yellow-400">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{step.desc}</p>
                </motion.div>

                <div className="absolute left-1/2 -translate-x-1/2 top-10">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.8)]"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

export default Journey
