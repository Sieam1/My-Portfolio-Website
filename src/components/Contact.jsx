import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, SendHorizontal, Mail, User } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef(null)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_l6y1bu9', 'template_n870pad', form.current, {
        publicKey: '2wKsIjV1_BtbPMKKW',
      })
      .then(
        () => {
          alert('✅ Message sent successfully!')
          form.current.reset()
        },
        (error) => {
          alert('❌ Something went wrong. Try again!')
          console.error(error.text)
        }
      )
  }

  return (
    <section
      id='contact'
      className='min-h-screen relative bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] text-white py-20 px-6'
    >
      {/* Animated Blobs */}
      <div className='absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse -z-10'></div>
      <div className='absolute -bottom-32 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-2xl animate-pulse -z-10'></div>

      {/* Heading */}
      <div className='max-w-4xl mx-auto text-center mb-16'>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='text-4xl sm:text-5xl font-bold'
        >
          Contact <span className='text-blue-400'>Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-gray-400 mt-4 text-lg'
        >
          Let’s connect! Drop me a message for collaborations, projects, or just a friendly hello 👋
        </motion.p>
      </div>

      {/* Form + Info */}
      <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-10'>
        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='bg-[#111827]/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/10 space-y-4'
        >
          <div className='flex items-center gap-3 bg-[#0f172a] p-3 rounded-lg border border-gray-700 focus-within:border-blue-400'>
            <User className='text-blue-400 w-5 h-5' />
            <input
              type='text'
              name='user_name'
              placeholder='Your Name'
              required
              className='w-full bg-transparent outline-none text-sm sm:text-base'
            />
          </div>
          <div className='flex items-center gap-3 bg-[#0f172a] p-3 rounded-lg border border-gray-700 focus-within:border-blue-400'>
            <Mail className='text-blue-400 w-5 h-5' />
            <input
              type='email'
              name='user_email'
              placeholder='Your Email'
              required
              className='w-full bg-transparent outline-none text-sm sm:text-base'
            />
          </div>
          <textarea
            name='message'
            rows={5}
            placeholder='Your Message'
            required
            className='w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 resize-none focus:border-blue-400 outline-none text-sm sm:text-base'
          ></textarea>
          <button
            type='submit'
            className='w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300 text-sm sm:text-base shadow-lg'
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info + Socials */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='flex flex-col justify-center space-y-6'
        >
          <h3 className='text-2xl font-bold'>Let’s Work Together 🤝</h3>
          <p className='text-gray-400'>
            I’m always open to discussing new projects, creative ideas, or opportunities to collaborate.
          </p>

          {/* Social Links */}
          <div className='flex gap-6 mt-4'>
            <a
              href='https://github.com/Sieam1'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue-400 transition-colors duration-300'
            >
              <Github className='w-7 h-7' />
            </a>
            <a
              href='https://www.linkedin.com/in/iftekhar-sieam'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue-400 transition-colors duration-300'
            >
              <Linkedin className='w-7 h-7' />
            </a>
            <a
              href='https://instagram.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-pink-400 transition-colors duration-300'
            >
              <Instagram className='w-7 h-7' />
            </a>
            <a
              href='https://t.me/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue-400 transition-colors duration-300'
            >
              <SendHorizontal className='w-7 h-7' />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
