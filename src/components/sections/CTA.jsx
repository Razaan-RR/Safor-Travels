import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function CTA() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const res = await fetch('https://safor-three.vercel.app/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('Booking request sent successfully!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          package: '',
          message: '',
        })
        setTimeout(() => {
          setIsOpen(false)
          setStatus('')
        }, 2000)
      } else {
        setStatus('Something went wrong!')
      }
    } catch (err) {
      setStatus('Server error. Try again later.')
    }
  }

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
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Ready for Your Next{' '}
          <span className="text-yellow-400">Adventure?</span>
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
            onClick={() => setIsOpen(true)}
            className="bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition"
          >
            Book Your Trip
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
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

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md bg-[#1f3152]/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20"
            >
              <h3 className="text-2xl font-bold text-center mb-4">
                Book Your Trip
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-full text-white outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-full text-white outline-none"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-full text-white outline-none"
                />
                <input
                  type="text"
                  name="package"
                  placeholder="Package / Destination"
                  value={formData.package}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-full text-white outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="px-4 py-3 rounded-2xl text-white outline-none resize-none"
                />

                <button
                  type="submit"
                  className="bg-yellow-400 text-white py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
                >
                  Submit
                </button>

                {status && (
                  <p className="text-center text-sm text-yellow-300">
                    {status}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-gray-300 hover:text-white mt-2"
                >
                  Close
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

export default CTA
