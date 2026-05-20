import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws, 
  FaGitAlt, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare 
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPostgresql, SiMongodb, SiTypescript } from "react-icons/si";

const TechMarquee = () => {
  const technologies = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-slate-900 dark:text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "AWS", icon: <FaAws className="text-orange-400" /> },
    { name: "Postgres", icon: <SiPostgresql className="text-blue-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  ];

  // Duplicate the list to create a seamless loop
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden bg-slate-100/50 dark:bg-[#030014]/20 py-8 my-10 rounded-2xl border border-slate-200 dark:border-indigo-500/10 backdrop-blur-sm">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex space-x-12 px-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-4 group"
            >
              <div className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                {tech.icon}
              </div>
              <span className="text-xl font-bold text-slate-700 dark:text-slate-300 group-hover:text-emerald-400 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechMarquee;
