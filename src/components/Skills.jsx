import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "JavaScript / TypeScript", level: 90 },
    { name: "React.js / Next.js", level: 85 },
    { name: "Node.js / Express", level: 80 },
    { name: "Tailwind CSS / Sass", level: 95 },
    { name: "PostgreSQL / MongoDB", level: 85 },
    { name: "Docker / AWS", level: 65 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Technical{" "}
            <span className="text-blue-400 inline-block hover:animate-bounce">
              Skills
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Technologies I've been working with recently
          </motion.p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="mb-8 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-800 dark:text-slate-200 font-medium">
                  {skill.name}
                </span>
                <span className="text-slate-600 dark:text-slate-400 text-sm font-bold">
                  {skill.level}%
                </span>
              </div>
              <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-300/50 dark:border-slate-700/50 shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2 + index * 0.1,
                    ease: [0.17, 0.67, 0.83, 0.67], // Custom easing for smooth pop
                  }}
                  className="h-full bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full relative shadow-md shadow-blue-400/20"
                >
                  <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
