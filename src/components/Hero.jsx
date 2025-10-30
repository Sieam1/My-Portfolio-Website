import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import profileImage from '../assets/SIEAM.jpg'

const Hero = () => {
  return (
    <section
      id='home'
      className='relative flex flex-col md:flex-row justify-center items-center h-screen text-center md:text-left overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] px-6 md:px-20'
    >
      {/* Left Text */}
      <div className='z-10 md:w-1/2'>
        <motion.h1
          className='text-5xl md:text-7xl font-bold text-white mb-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi,{' '}
          <span className='bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-500 bg-clip-text text-transparent'>
            I'm Sieam
          </span>
        </motion.h1>

        <motion.h2
          className='text-xl md:text-2xl text-gray-300 mb-6 h-10'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typewriter
            words={[
              'Frontend Developer',
              'React Developer',
              'Tailwind CSS Expert',
            ]}
            loop={0} // 0 = infinite
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        <motion.a
          href='#projects'
          className='px-6 py-3 bg-[#FACC15] text-black font-semibold rounded-lg hover:scale-110 transition transform'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          See My Work
        </motion.a>
      </div>

      {/* Right Image */}
      <motion.div
        className='relative mt-10 md:mt-0 md:w-1/2 flex justify-center'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#FACC15]'>
          <img
            src={profileImage}
            alt='Sieam'
            className='w-full h-full object-cover'
          />
        </div>
      </motion.div>

      {/* Floating Blobs */}
      <div className='absolute top-10 left-10 w-40 h-40 bg-[#FACC15]/30 rounded-full animate-[blob_10s_infinite]'></div>
      <div className='absolute top-1/3 right-20 w-32 h-32 bg-[#6366F1]/20 rounded-full animate-[blob_10s_infinite] animation-delay-2000'></div>
      <div className='absolute bottom-20 left-1/2 w-48 h-48 bg-[#F472B6]/20 rounded-full animate-[blob_10s_infinite] animation-delay-3000'></div>
      <div className='absolute bottom-10 right-10 w-24 h-24 bg-[#FACC15]/20 rounded-full animate-[blob_10s_infinite] animation-delay-4000'></div>
    </section>
  )
}

export default Hero
