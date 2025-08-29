import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import RecipeFinder from '../assets/top-view-tasty-cooked-potatoes-with-greens-dark-desk-potato-dinner-dish-cips-cooking-meal.jpg'
import weatherApp from '../assets/45211.jpg'
import E_Commerce_App from '../assets/showing-cart-trolley-shopping-online-sign-graphic.jpg'

const projects = [
  {
    title: 'E-Commerce Website',
    desc: 'A full-featured E-Commerce web application built with React, TypeScript, and Tailwind CSS. Features include product listing, shopping cart, checkout flow, and state management using Zustand. Fully responsive and optimized for modern devices.',
    img: E_Commerce_App,
    link: 'https://fayzur-ecommerce.netlify.app/',
    github: 'https://github.com/Sieam1',
  },
  {
    title: 'Recipe-Finder-App',
    desc: 'A feature-rich Recipe Finder app built with React and Tailwind CSS. Users can search for recipes, view detailed ingredients, and get step-by-step cooking instructions. Integrated with a public recipe API for real-time data.',
    img: RecipeFinder,
    link: 'https://fayzur-recipe-finder-application.netlify.app',
    github: 'https://github.com/Sieam1',
  },
  {
    title: 'Weather App',
    desc: 'A responsive weather application built with React, Tailwind CSS, and OpenWeather API for real-time weather updates.',
    img: weatherApp,
    link: 'http://sieamweatherapp.netlify.app',
    github: 'https://github.com/Sieam1',
  },
]

const Projects = () => {
  return (
    <section
      id='projects'
      className='min-h-screen relative bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] text-white px-6 py-24'
    >
      {/* Decorative Blobs */}
      <div className='absolute -top-20 -left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-blobSlow -z-20'></div>
      <div className='absolute -bottom-32 -right-16 w-96 h-96 bg-pink-500/30 rounded-full blur-2xl animate-blobSlow2 -z-20'></div>

      <div className='max-w-6xl mx-auto text-center mb-12 relative z-10'>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='text-4xl font-bold'
        >
          My <span className='text-blue-400'>Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-gray-400 mt-4'
        >
          A showcase of my best works with modern design and functionality
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className='relative group rounded-2xl overflow-hidden shadow-lg border border-white/10'
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500'
            />

            {/* Overlay */}
            <div className='absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-[#0f172a]/80 via-[#111827]/80 to-[#0f172a]/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500'>
              <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
              <p className='text-gray-300 text-sm mb-4 px-4'>{project.desc}</p>
              <div className='flex gap-4'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition shadow-lg'
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-500 hover:text-white flex items-center gap-2 transition'
                >
                  <FaGithub className='w-5 h-5' /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
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

export default Projects
