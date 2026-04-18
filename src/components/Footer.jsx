import React from 'react'
import { Github, Linkedin, Instagram, Send } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='relative bg-[#0f172a] text-white pt-16 pb-8 px-6 overflow-hidden'>

      {/* 🔥 Floating Blobs (same style consistency) */}
      <div className='absolute top-0 left-10 w-32 h-32 bg-[#FACC15]/20 rounded-full animate-[blob_10s_infinite]'></div>
      <div className='absolute bottom-0 right-10 w-40 h-40 bg-[#6366F1]/20 rounded-full animate-[blob_10s_infinite] animation-delay-2000'></div>

      <div className='relative z-10 max-w-6xl mx-auto'>

        {/* Top Section */}
        <div className='grid md:grid-cols-3 gap-10 mb-10'>

          {/* Brand */}
          <div>
            <h2 className='text-2xl font-bold mb-3'>
              IFTEKHAR <span className='text-blue-400'>SIEAM</span>
            </h2>
            <p className='text-gray-400 text-sm leading-relaxed'>
              A passionate Frontend Developer focused on creating modern,
              responsive and interactive web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-semibold mb-3'>Quick Links</h3>
            <ul className='space-y-2 text-gray-400'>
              <li><a href='#home' className='hover:text-blue-400'>Home</a></li>
              <li><a href='#about' className='hover:text-blue-400'>About</a></li>
              <li><a href='#skills' className='hover:text-blue-400'>Skills</a></li>
              <li><a href='#projects' className='hover:text-blue-400'>Projects</a></li>
              <li><a href='#contact' className='hover:text-blue-400'>Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className='text-xl font-semibold mb-3'>Connect With Me</h3>
            <div className='flex gap-4 mt-2'>
              <a href='https://github.com/Sieam1' target='_blank' className='hover:text-blue-400 transition'>
                <Github />
              </a>
              <a href='https://linkedin.com' target='_blank' className='hover:text-blue-400 transition'>
                <Linkedin />
              </a>
              <a href='https://instagram.com' target='_blank' className='hover:text-pink-400 transition'>
                <Instagram />
              </a>
              <a href='#contact' className='hover:text-blue-400 transition'>
                <Send />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className='border-t border-gray-700 pt-6 text-center text-gray-500 text-sm'>
          © {new Date().getFullYear()} <span className='text-white'>Sieam</span>. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer