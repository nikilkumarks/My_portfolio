import { motion } from "framer-motion";

const projects = [
  {
    title: "Pokémon Explorer",
    description:
      "A sleek React app that lets you search and explore Pokémon using the PokéAPI. Built with Vite and Tailwind.",
    tech: ["React", "Vite", "Tailwind", "PokéAPI"],
    github: "https://github.com/nikilkumarks/PokeMon",
    live: "https://poke-mon-psi.vercel.app/",
  },
  {
    title: "Car Showcase Website",
    description:
      "A modern car e-commerce showcase built with HTML, CSS, and JavaScript. Designed for a responsive, immersive experience.",
    tech: ["React", "Vite", "JavaScript","Tailwind"],
    github: "https://github.com/nikilkumarks/Cars_Website",
    live: "https://remarkable-froyo-196aab.netlify.app/",
  },
  {
    title: "E-Commerce Website",
    description:
      "A dynamic online store with product pages, cart functionality, and responsive design using HTML, CSS, and JS.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nikilkumarks/E-Commerc",
    live: "https://e-commerc-seven.vercel.app/",
  },
  {
    title: "Netflix Clone",
    description:
      "A front-end clone of Netflix with smooth animations, interactive UI, and dark mode using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nikilkumarks/Netflix-home-Page-Clone",
    live: "https://netflix-home-page-clone-nu.vercel.app/",
  },
  {
    title: "Music Streaming Website",
    description:
      "A modern music web app with play/pause controls, trending tracks, and sleek UI built using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nikilkumarks/Heavenly_music",
    live: "https://harmonicheavenofmusic.vercel.app/",
  },
  {
    title: "Namma Suraksha Hackathon Project",
    description:
      "A real-time Crime Reporting and Evidence Management System built for the Namma Suraksha Hackathon. The platform allows users to securely report incidents, upload evidence, and track progress, while ensuring anonymity and integrity of information.",
    tech: ["HTML", "CSS", "JAVASCRIPT", "MYSQL", "PHP","XAMPP"],
    github: "https://github.com/nikilkumarks/NammaSurakshaHackaton", 
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-16 bg-[#0e0e10] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500"
      >
        🚀 Projects I’ve Built
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="group bg-gradient-to-b from-[#1a1a1d] to-[#131315] border border-gray-800 rounded-2xl p-6 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-gray-800 text-indigo-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 items-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-400 hover:text-white transition"
              >
                🔗 GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-400 hover:text-white transition"
              >
                🌐 Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
