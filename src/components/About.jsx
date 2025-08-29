import { motion } from 'framer-motion'
import profile from '../assets/pics.jpg'

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 80 },
  { name: 'React', level: 85 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 92 },
]

const About = () => {
  return (
    <section
      id='about'
      className='min-h-screen relative bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] text-white px-6 py-24'
    >
      {/* Decorative Blobs */}
      <div className='absolute -top-20 -left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-blobSlow -z-20'></div>
      <div className='absolute -bottom-32 -right-16 w-96 h-96 bg-pink-500/30 rounded-full blur-2xl animate-blobSlow2 -z-20'></div>

      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
        {/* Left: Profile + Skills */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='flex flex-col items-center space-y-8'
        >
          <motion.img
            src={profile}
            alt='profile'
            className='w-72 h-72 rounded-full border-4 border-gradient-to-tr from-blue-400 to-pink-500 p-1 object-cover shadow-xl'
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />

          {/* Skills */}
          <div className='w-full'>
            <h3 className='text-2xl font-semibold text-center mb-6'>
              My Skills
            </h3>
            <div className='space-y-4'>
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className='flex justify-between mb-1 font-medium text-sm'>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className='w-full bg-gray-700 h-3 rounded-full overflow-hidden'>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: idx * 0.2 }}
                      className='h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: About Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] backdrop-blur-lg p-8 rounded-2xl shadow-xl'
        >
          <h2 className='text-4xl font-bold mb-4'>About Me</h2>
          <p className='text-gray-300 mb-6 leading-relaxed'>
            Hello! I am{' '}
            <span className='text-blue-400 font-semibold'>Iftekhar Sieam</span>,
            a passionate{' '}
            <span className='text-pink-400'>Frontend Developer</span>
            <div>
            dedicated to creating modern, interactive, and responsive web
            experiences. I love turning complex problems into simple, beautiful
            interfaces.</div>
            </p>

          <h3 className='text-2xl font-semibold mb-4'>Experience Highlights</h3>
          <ul className='space-y-3 text-gray-300'>
            <li>
              💻 Proficient in React, JavaScript, TypeScript, Tailwind CSS
            </li>
            <li>
              🚀 Built multiple responsive websites and portfolio projects
            </li>
            <li>🎯 Passionate about UI/UX design and animation</li>
            <li>📈 Always learning modern web technologies</li>
          </ul>

          <div className='mt-8 flex gap-4'>
            <a
              href='#contact'
              className='px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition shadow-lg'
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

      {/* Custom Blob Animations */}
      <style jsx>{`
        @keyframes blobSlow {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -20px) scale(1.1);
          }
        }
        @keyframes blobSlow2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-25px, 20px) scale(1.1);
          }
        }
        .animate-blobSlow {
          animation: blobSlow 30s infinite ease-in-out;
        }
        .animate-blobSlow2 {
          animation: blobSlow2 35s infinite ease-in-out;
        }
      `}</style>
    </section>
  )
}

export default About
