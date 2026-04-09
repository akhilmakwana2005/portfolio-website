import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaLayerGroup, FaDatabase, FaTerminal } from 'react-icons/fa';

const About = () => {
  const specialties = [
    {
      icon: <FaLayerGroup className="text-emerald-400" size={32} />,
      title: 'Frontend Development',
      description: 'Building responsive, beautifully animated, and accessible user interfaces using React, Vue, and modern CSS frameworks like Tailwind.',
    },
    {
      icon: <FaServer className="text-blue-400" size={32} />,
      title: 'Backend Engineering',
      description: 'Architecting robust APIs and microservices with Node.js, Python, and Go, focusing on scalability and performance.',
    },
    {
      icon: <FaDatabase className="text-purple-400" size={32} />,
      title: 'Database Architecture',
      description: 'Designing efficient database schemas in PostgreSQL and MongoDB to handle complex data relationships securely.',
    },
    {
      icon: <FaTerminal className="text-pink-400" size={32} />,
      title: 'DevOps & Tooling',
      description: 'Setting up CI/CD pipelines, Docker containerization, and cloud deployments on AWS and Vercel.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50 skew-y-3 -z-10 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            I am a passionate aspiring software developer and a fresher looking to build scalable web applications. 
            I am eager to bridge the gap between design and engineering—creating pixel-perfect, performant, and robust solutions.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -4,
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)"
              }}
              className="glass-card p-6 md:p-8 flex items-start gap-6 group transition-all duration-300 border border-transparent hover:border-slate-200 dark:hover:border-slate-700/50"
            >
              <div className="p-4 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300/50 dark:border-slate-700/50 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors duration-300 shadow-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
