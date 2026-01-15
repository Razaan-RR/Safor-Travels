import React from 'react'
import { motion } from 'framer-motion'

const destinations = [
  {
    name: 'Cox’s Bazar',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Sundarbans',
    img: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Sylhet Tea Gardens',
    img: 'https://images.unsplash.com/photo-1529171696861-bac785a44828?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRvdXJ8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Dhaka City Tour',
    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'India Excursion',
    img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWF8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Maldives Escape',
    img: 'https://images.unsplash.com/photo-1547528114-f4daa226e256?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D',
  },
]

function Destinations() {
  return (
    <section className="relative py-32 bg-[#1f3152] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-yellow-400 mb-3">
            Explore
          </h2>
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Featured <span className="text-yellow-400">Destinations</span> 
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="relative group rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-xl md:text-2xl font-semibold text-yellow-400">
                  {dest.name}
                </p>
              </div>

              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-yellow-400/50 transition-colors duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

export default Destinations
