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
      "A modern, responsive car showcase platform with smooth animations and immersive browsing experience.",
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
      "A dynamic e-commerce website featuring product listings, cart functionality, and responsive UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nikilkumarks/E-Commerc",
    live: "https://e-commerc-seven.vercel.app/",
  },
  {
    title: "Netflix UI Clone",
    type: "Frontend",
    description:
      "A Netflix-inspired UI clone with dark theme, smooth animations, and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nikilkumarks/Netflix-home-Page-Clone",
    live: "https://netflix-home-page-clone-nu.vercel.app/",
  },
  {
    title: "Music Streaming Web App",
    type: "Frontend",
    description:
      "A music streaming interface with play/pause controls, trending tracks, and modern UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nikilkumarks/Heavenly_music",
    live: "https://harmonicheavenofmusic.vercel.app/",
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
      className="relative min-h-screen px-6 sm:px-10 lg:px-20 py-28 bg-[#0e0e10] text-white overflow-hidden"
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

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className={`group relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl transition-all ${
              project.featured ? "lg:col-span-2" : ""
            }`}
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

            {/* Badge */}
            <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-gray-300">
              {project.type}
            </span>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              {project.description}
            </p>

            {/* Tech */}
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

      {/* Background */}
      <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] bg-indigo-500/20 blur-3xl rounded-full" />
    </section>
  );
};

export default Projects;
