import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaPhp, FaJava, FaPython, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiJavascript, SiVite, SiFramer, SiPostman } from "react-icons/si";

const skillIcons = {
  HTML: <FaHtml5 className="text-orange-500 text-2xl" />,
  CSS: <FaCss3Alt className="text-blue-500 text-2xl" />,
  JavaScript: <SiJavascript className="text-yellow-400 text-2xl" />,
  React: <FaReact className="text-cyan-400 text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400 text-2xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-2xl" />,
  MySQL: <SiMysql className="text-blue-400 text-2xl" />,
  Java: <FaJava className="text-red-500 text-2xl" />,
  Python: <FaPython className="text-yellow-300 text-2xl" />,
  "Git & GitHub": <FaGithub className="text-white text-2xl" />,
  "REST APIs": <SiPostman className="text-orange-400 text-2xl" />,
  Vite: <SiVite className="text-purple-400 text-2xl" />,
  "Framer Motion": <SiFramer className="text-pink-400 text-2xl" />,
};

const skills = Object.keys(skillIcons);

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 bg-[#0e0e10] text-white relative z-10 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
      >
        My Tools & Tech Stack
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-[1px] rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            <div className="flex flex-col items-center justify-center bg-[#0e0e10] rounded-xl py-6 px-4 h-full group-hover:border-cyan-400 transition">
              <div className="mb-3">{skillIcons[skill]}</div>
              <span className="text-sm text-gray-300 font-medium text-center">{skill}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background glowing blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-cyan-400 rounded-full filter blur-3xl opacity-20 animate-pulse" />
    </section>
  );
};

export default Skills;
