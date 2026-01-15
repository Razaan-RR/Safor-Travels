import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#cta' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center h-20">
        {/* Brand */}
        <a href="#hero" className="text-yellow-400 text-2xl font-bold">
          Safor Travels
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileHover={{ y: -3, color: '#FDE047' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-white font-medium"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX size={30} className="text-white" />
            ) : (
              <HiMenu size={30} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#050b16]/90 backdrop-blur-md w-full absolute top-20 left-0 flex flex-col items-center py-6 gap-6"
          >
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.05, color: '#FDE047' }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => setIsOpen(false)}
                className="text-white font-medium text-lg"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
