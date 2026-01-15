import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="relative bg-[#17253f] text-white py-20 overflow-hidden">
      {/* Decorative animated glow */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[120px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Brand / Logo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400">
            Safor Travels
          </h2>
          <p className="text-gray-300 mt-2">Your Trusted Travel Partner</p>
        </motion.div>

        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="space-y-2"
          >
            <h4 className="text-yellow-400 font-semibold mb-2">Contact</h4>
            <p className="text-gray-300">+880 1711-792071</p>
            <p className="text-gray-300">www.safortravels.com</p>
            <p className="text-gray-300">Dhaka, Bangladesh</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-2"
          >
            <h4 className="text-yellow-400 font-semibold mb-2">Quick Links</h4>
            <ul className="text-gray-300 space-y-1">
              <li className="hover:text-yellow-400 transition cursor-pointer">
                Home
              </li>
              <li className="hover:text-yellow-400 transition cursor-pointer">
                About
              </li>
              <li className="hover:text-yellow-400 transition cursor-pointer">
                Destinations
              </li>
              <li className="hover:text-yellow-400 transition cursor-pointer">
                Contact
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-2"
          >
            <h4 className="text-yellow-400 font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4 mt-2 text-gray-300">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center text-gray-400 text-sm"
        >
          © {new Date().getFullYear()} Safor Travels. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
