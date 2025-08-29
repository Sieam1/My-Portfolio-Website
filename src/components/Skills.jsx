import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Layers, Rocket, Brush } from 'lucide-react'

const skills = [
  { name: 'JavaScript', level: 'Advanced', icon: <Code2 className='w-6 h-6 text-yellow-400' /> },
  { name: 'TypeScript', level: 'Intermediate', icon: <Layers className='w-6 h-6 text-blue-400' /> },
  { name: 'React.js', level: 'Advanced', icon: <Rocket className='w-6 h-6 text-cyan-400' /> },
  { name: 'Tailwind CSS', level: 'Advanced', icon: <Brush className='w-6 h-6 text-pink-400' /> },
  { name: 'HTML5', level: 'Expert', icon: <Code2 className='w-6 h-6 text-orange-400' /> },
  { name: 'CSS3', level: 'Expert', icon: <Brush className='w-6 h-6 text-blue-500' /> },
]

const Skills = () => {
  return (
    <section
      id='skills'
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
          My <span className='text-blue-400'>Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-gray-400 mt-4 text-lg'
        >
          Technologies and tools I use to craft beautiful, responsive, and functional websites 🚀
        </motion.p>
      </div>

      {/* Skills Grid */}
      <div className='max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className='bg-[#111827] p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-blue-500/20 transition transform hover:-translate-y-2'
          >
            <div className='flex items-center gap-4 mb-4'>
              {skill.icon}
              <h3 className='text-xl font-semibold'>{skill.name}</h3>
            </div>
            <p className='text-gray-400'>Level: <span className='text-blue-400 font-medium'>{skill.level}</span></p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
