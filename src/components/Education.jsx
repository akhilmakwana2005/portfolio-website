import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'Full-stack Developer',
      school: 'StackCode Training Institute, Ahmedabad, Gujarat, India',
      year: 'June 2025 - Present',
      description: '11 months comprehensive training program.',
      icon: <FaAward size={24} className="text-emerald-400" />
    },
    {
      degree: "Bachelor's of Computer Application, Computer and Information Sciences and Support Services",
      school: 'Bhakta Kavi Narsinh Mehta University (BKNMU), Junagadh',
      year: 'Graduation',
      description: '',
      icon: <FaGraduationCap size={24} className="text-blue-400" />
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Education & <span className="text-pink-400">Certifications</span>
          </motion.h2>
        </div>

        <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-3 md:ml-0 md:space-y-12 space-y-8">
          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute w-12 h-12 glass-card rounded-full -left-6 top-0 flex items-center justify-center z-10 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700">
                {item.icon}
              </div>
              
              <div className="md:block absolute w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 -left-[9px] top-1.5 md:hidden z-10 border-4 border-slate-50 dark:border-slate-950"></div>

              <div className="glass-card p-6 md:ml-12 hover:-translate-y-1 transition-transform">
                <span className="text-emerald-400 font-mono text-sm block mb-2">{item.year}</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">{item.degree}</h3>
                <h4 className="text-slate-700 dark:text-slate-300 font-medium mb-4">{item.school}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
