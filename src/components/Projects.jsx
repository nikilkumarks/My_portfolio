import { motion } from "framer-motion";

const projects = [
  {
    title: "Pokémon Explorer",
    type: "Frontend",
    description: "A sleek React application to search and explore Pokémon using PokéAPI. Optimized for performance and fluid UI interactions.",
    tech: ["React", "Vite", "Tailwind", "REST", "PokéAPI"],
    github: "https://github.com/nikilkumarks/PokeMon",
    live: "https://poke-mon-psi.vercel.app/",
    bentoSize: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    title: "STEM Chat App",
    type: "Full-Stack WebRTC",
    description: "A highly-scalable real-time chat and video calling application built on the MERN stack with seamless Socket.io integration.",
    tech: ["React", "Node.js", "MongoDB", "WebRTC", "Socket.io"],
    github: "https://github.com/nikilkumarks/Stem",
    live: "https://stem-o0zn.onrender.com/",
    bentoSize: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    title: "ATS AI Analyzer",
    type: "SaaS Platform",
    description: "An advanced SaaS platform leveraging AI to analyze resumes against job descriptions, suggesting real-time improvements to maximize ATS scores.",
    tech: ["React", "Node.js", "Cohere AI", "Express.js", "MongoDB"],
    github: "https://github.com/nikilkumarks/ATS_Checker",
    live: "https://ats-checker-vbuy.onrender.com/",
    bentoSize: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    title: "Car Showcase Platform",
    type: "Frontend Concept",
    description: "A visually immersive car showcase featuring advanced framer-motion animations and responsive 3D-like browsing.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    github: "https://github.com/nikilkumarks/Cars_Website",
    live: "https://remarkable-froyo-196aab.netlify.app/",
    bentoSize: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    title: "Namma Suraksha",
    type: "Government Tech",
    description: "A secure, role-based crime reporting and evidence management system ensuring data anonymity and high-level workflows.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/nikilkumarks/NammaSurakshaHackaton",
    bentoSize: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    title: "E-Commerce Experience",
    type: "Storefront UI",
    description: "A dynamic and fully responsive e-commerce storefront with integrated cart logic and modern product displays.",
    tech: ["JavaScript", "HTML5", "CSS3", "DOM"],
    github: "https://github.com/nikilkumarks/E-Commerc",
    live: "https://e-commerc-seven.vercel.app/",
    bentoSize: "col-span-1 md:col-span-2 lg:col-span-2",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-32 bg-black text-white"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-16 relative z-10 flex flex-col">
        
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center justify-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl lg:text-8xl font-black text-white tracking-tighter"
          >
            Selected Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base sm:text-lg font-medium max-w-2xl"
          >
            A curated showcase of my frontend interfaces, full-stack architectures, and real-time systems.
          </motion.p>
        </div>

        {/* Dense Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[minmax(300px,_auto)]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className={`group flex flex-col relative bg-[#09090b] hover:bg-[#121216] border border-white/[0.05] hover:border-white/[0.1] rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 transition-all duration-500 overflow-hidden ${project.bentoSize}`}
            >
              
              {/* Subtle Ambient Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.03)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                
                {/* Meta / Type */}
                <div className="mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-white/10 px-3 py-1.5 rounded-full bg-black/50">
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed mb-10 max-w-md">
                  {project.description}
                </p>

                {/* Bottom Section (Links + Tech) */}
                <div className="mt-auto flex flex-col gap-6">
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold px-5 py-2.5 rounded-full bg-white text-black hover:bg-gray-300 transition-colors"
                      >
                        Live App
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.1] transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
