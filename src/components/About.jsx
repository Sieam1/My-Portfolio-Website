import { motion } from 'framer-motion'
import profile from '../assets/SIEAM.jpg'

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'MongoBD', level: 96 },
  { name: 'React', level: 85 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 92 },
]

const About = () => {
  return (
    <section
      id='about'
      className='relative min-h-screen flex items-center bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] text-white px-6 py-24 overflow-hidden'
    >
      {/* 🔥 Hero Style Floating Blobs */}
      <div className='absolute top-10 left-10 w-40 h-40 bg-[#FACC15]/30 rounded-full animate-[blob_10s_infinite]'></div>

      <div className='absolute top-1/3 right-20 w-32 h-32 bg-[#6366F1]/20 rounded-full animate-[blob_10s_infinite] animation-delay-2000'></div>

      <div className='absolute bottom-20 left-1/2 w-48 h-48 bg-[#F472B6]/20 rounded-full animate-[blob_10s_infinite] animation-delay-3000'></div>

      <div className='absolute bottom-10 right-10 w-24 h-24 bg-[#FACC15]/20 rounded-full animate-[blob_10s_infinite] animation-delay-4000'></div>

      {/* Main Content */}
      <div className='relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
        
        {/* Left Side */}
    <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='flex flex-col items-center space-y-4'
        >
          <motion.img
            src={profile}
            alt='profile'
            className='w-72 h-72 rounded-full border-4 border-[#FACC15] object-cover shadow-xl'
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />

          {/* Skills */}
          <div className='w-full'>
            <h3 className='text-2xl font-semibold text-center mb-2'>
              My Skills
            </h3>

            <div className='space-y-2'>
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className='flex justify-between mb-1 text-sm'>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className='w-full bg-gray-700 h-3 rounded-full overflow-hidden'>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: idx * 0.2 }}
                      className='h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl'
        >
          <h2 className='text-4xl font-bold mb-4'>About Me</h2>

          <p className='text-gray-300 mb-6 leading-relaxed'>
            Hello! I am{' '}
            <span className='text-blue-400 font-semibold'>
              Iftekhar Sieam
            </span>
            , a passionate{' '}
            <span className='text-pink-400'>Frontend Developer</span>.
            <br />
            I create modern, interactive, and responsive web experiences.
          </p>

          <h3 className='text-2xl font-semibold mb-4'>
            Experience Highlights
          </h3>

          <ul className='space-y-3 text-gray-300'>
            <li>💻 React, JavaScript, Tailwind CSS expert</li>
            <li>🚀 Built multiple responsive projects</li>
            <li>🎯 Focused on UI/UX & animation</li>
            <li>📈 Always learning new tech</li>
          </ul>

          <div className='mt-8 flex gap-4'>
            <a
              href='#contact'
              className='px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition'
            >
              Hire Me
            </a>

            <a
              href='/resume.pdf'
              className='px-6 py-2 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition'
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About