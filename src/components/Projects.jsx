import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Softude - Website Landing Page',
      description: 'Softude is a global IT & digital-services company that offers enterprise-level solutions such as web and mobile app development, digital transformation, AI & cloud services.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      tags: ['React.js', 'Framer Motion', 'TailwindCSS', 'Vite'],
      links: {
        github: 'https://github.com/abhicodes01/Softude_Redesign_LandingPage',
        live: 'https://softude.netlify.app/'
      }
    },
    {
      title: 'Mech2Door',
      description: 'A full-stack MERN web app connecting users with verified local mechanics, featuring real-time booking, admin verification, and secure authentication for trusted on-demand service.',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800',
      tags: ['Node.js', 'MongoDB', 'Express.js', 'PostMan', 'TailwindCSS', 'React.js'],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'VirtualR - Developer Tools Website',
      description: 'A dynamic and responsive virtual reality showcase built with React, featuring sleek UI and interactive components.',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800',
      tags: ['Javascript', 'TailwindCSS', 'React.js', 'Vite'],
      links: {
        github: '#',
        live: 'https://virtualr-react.netlify.app/'
      }
    },
    {
      title: 'Jarvis - AI Personal Assistant',
      description: 'Jarvis listens to voice commands, responds in real-time with speech output, and features a dynamic 3D animated interface for an immersive experience.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
      tags: ['React.js', 'TailwindCSS', 'Three.js', 'Gemini API', 'SpeechRecognition'],
      links: {
        github: 'https://github.com/abhicodes01/voice-assistant-jarvis',
        live: '#'
      }
    },
    {
      title: 'SynergyTop - Website Landing Page',
      description: 'SynergyTop is presented as a full-service IT agency offering services such as custom software development, web development, eCommerce & mobile-app development.',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
      tags: ['React.js', 'TailwindCSS', 'Framer Motion', 'Vite'],
      links: {
        github: 'https://github.com/abhicodes01/StrategyTop_Redesign_LandingPage',
        live: 'https://synergytop.netlify.app/'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 14 } }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 mb-2 block">
            Featured
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto"
          >
            These projects reflect my approach to writing clean, maintainable code and building user-friendly interfaces. I’ve focused on practical solutions that balance performance, usability, and reliability.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card overflow-hidden group flex flex-col h-full shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 transition-all duration-300 border border-slate-200 dark:border-indigo-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-100/10 dark:bg-slate-900/20 group-hover:bg-transparent transition-colors z-10 duration-300"></div>
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-indigo-950/30 text-slate-700 dark:text-indigo-200 border border-slate-200 dark:border-indigo-500/10 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-emerald-400 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                {/* Bottom Links */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-zinc-800/40">
                  {project.links.live !== '#' ? (
                    <motion.a 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }} 
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 flex items-center gap-1.5"
                    >
                      Live Link <FaExternalLinkAlt size={10} />
                    </motion.a>
                  ) : (
                    <span className="px-4 py-2 rounded-full bg-slate-200 dark:bg-zinc-800/50 text-slate-400 dark:text-zinc-600 text-xs font-bold cursor-not-allowed flex items-center gap-1.5">
                      Live Link <FaExternalLinkAlt size={10} />
                    </span>
                  )}
                  
                  {project.links.github !== '#' ? (
                    <motion.a 
                      whileHover={{ scale: 1.1 }} 
                      whileTap={{ scale: 0.9 }} 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-indigo-400 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={22} />
                    </motion.a>
                  ) : (
                    <span className="text-slate-300 dark:text-zinc-700 cursor-not-allowed" aria-label="GitHub Repository Unavailable">
                      <FaGithub size={22} />
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Button */}
        <div className="mt-16 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/akhilmakwana2005"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-wide transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 group cursor-pointer"
          >
            Check My Github
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
