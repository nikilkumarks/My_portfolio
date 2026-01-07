import { motion } from "framer-motion";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaPython,
  FaGithub,
  FaKey,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiJavascript,
  SiVite,
  SiFramer,
  SiPostman,
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiVercel,
  SiRender,
  SiDaisyui,
} from "react-icons/si";

/* Skill icons map */
const skillIcons = {
  /* Frontend */
  HTML: <FaHtml5 className="text-orange-500 text-2xl" />,
  CSS: <FaCss3Alt className="text-blue-500 text-2xl" />,
  JavaScript: <SiJavascript className="text-yellow-400 text-2xl" />,
  React: <FaReact className="text-cyan-400 text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400 text-2xl" />,
  DaisyUI: <SiDaisyui className="text-pink-400 text-2xl" />,
  Vite: <SiVite className="text-purple-400 text-2xl" />,
  "Framer Motion": <SiFramer className="text-pink-400 text-2xl" />,

  /* Backend */
  "Node.js": <FaNodeJs className="text-green-500 text-2xl" />,
  "Express.js": <SiExpress className="text-gray-300 text-2xl" />,
  MongoDB: <SiMongodb className="text-green-400 text-2xl" />,
  MySQL: <SiMysql className="text-blue-400 text-2xl" />,
  "REST APIs": <SiPostman className="text-orange-400 text-2xl" />,
  "JWT Authentication": <FaKey className="text-yellow-300 text-2xl" />,

  /* Languages & Tools */
  Java: <FaJava className="text-red-500 text-2xl" />,
  Python: <FaPython className="text-yellow-300 text-2xl" />,
  PHP: <FaPhp className="text-indigo-400 text-2xl" />,
  "Git & GitHub": <FaGithub className="text-white text-2xl" />,

  /* Deployment */
  Vercel: <SiVercel className="text-white text-2xl" />,
  Netlify: <SiNetlify className="text-teal-400 text-2xl" />,
  Render: <SiRender className="text-purple-400 text-2xl" />,
};

/* Convert object keys to array */
const skills = Object.keys(skillIcons);

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-6 sm:px-10 bg-[#0e0e10] text-white overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-6
        bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
        text-transparent bg-clip-text"
      >
        Skills & Tech Stack
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
      >
        Tools and technologies I use to build, deploy, and scale full-stack web
        applications.
      </motion.p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-[1px] rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            <div className="flex flex-col items-center justify-center bg-[#0e0e10] rounded-xl py-6 px-4 h-full border border-white/5 group-hover:border-cyan-400/40 transition">
              <div className="mb-3">{skillIcons[skill]}</div>
              <span className="text-sm text-gray-300 font-medium text-center">
                {skill}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-[320px] h-[320px] bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[320px] h-[320px] bg-cyan-400/20 blur-3xl rounded-full animate-pulse" />
    </section>
  );
};

export default Skills;
