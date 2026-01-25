import { motion } from "framer-motion";

const projects = [
  {
    title: "Pokémon Explorer",
    type: "Frontend",
    featured: true,
    description:
      "A sleek React application to search and explore Pokémon using PokéAPI. Optimized for performance and smooth UI interactions.",
    tech: ["React", "Vite", "Tailwind", "PokéAPI"],
    github: "https://github.com/nikilkumarks/PokeMon",
    live: "https://poke-mon-psi.vercel.app/",
  },
  {
    title: "Car Showcase Platform",
    type: "Frontend",
    featured: true,
    description:
      "A modern, responsive car showcase platform with smooth animations and an immersive browsing experience.",
    tech: ["React", "Vite", "JavaScript", "Tailwind"],
    github: "https://github.com/nikilkumarks/Cars_Website",
    live: "https://remarkable-froyo-196aab.netlify.app/",
  },
  {
    title: "Namma Suraksha – Hackathon Project",  
    type: "Full-Stack",
    featured: true,
    description:
      "A full-stack crime reporting and evidence management system with secure data handling, anonymity, and role-based workflows.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/nikilkumarks/NammaSurakshaHackaton",
  },
  {
    title: "E-Commerce Website",
    type: "Frontend",
    description:
      "A dynamic e-commerce website featuring product listings, cart functionality, and a responsive UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nikilkumarks/E-Commerc",
    live: "https://e-commerc-seven.vercel.app/",
  },
  {
    title: "Stem - Real-Time Chat Application (Full Stack)",
    type: "Full-Stack",
    description:
      "STEM is a full-stack real-time chat and video calling application built with the MERN stack. It enables instant one-to-one messaging and peer-to-peer video communication using real-time technologies, along with JWT-based authentication, live presence tracking, typing indicators, and read receipts. The system is designed with scalable REST APIs and an optimized MongoDB database, simulating a modern real-time communication platform.",
    tech: [
      "React",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/nikilkumarks/Stem",
    live: "https://stem-o0zn.onrender.com/",
  },
  {
    title: "ATS Checker - AI-Powered ATS Resume Analyzer & Builder (Full Stack + AI)",
    type: "Full-Stack",
    description:
      "A full-stack web application that helps users create ATS-friendly resumes, analyze resume performance against job descriptions, and improve content using AI-powered suggestions. This platform acts as a SaaS product with user and admin dashboards.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Cohere AI"],
    github: "https://github.com/nikilkumarks/ATS_Checker",
    live: " https://ats-checker-vbuy.onrender.com/",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 sm:px-10 lg:px-20 py-28 bg-[#0e0e10] text-white"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl sm:text-5xl font-extrabold mb-6
        bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500
        text-transparent bg-clip-text"
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
      >
        A curated collection of frontend and full-stack projects demonstrating
        my ability to design, build, and ship real-world applications.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className={`bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md hover:border-white/30 transition ${
              project.featured ? "lg:col-span-2" : ""
            }`}
          >
            {/* Badge */}
            <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-gray-300">
              {project.type}
            </span>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition"
              >
                GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
