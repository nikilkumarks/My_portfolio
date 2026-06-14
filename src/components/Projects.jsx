import { motion } from "framer-motion";

const projects = [
  {
    title: "PromptVision Studio - AI Thumbnail Generator",
    type: "Full-Stack AI",
    description: "Built an AI tool to generate YouTube thumbnails from prompts using Cohere and Hugging Face. Implemented JWT + Google authentication and secure user sessions. Designed history system to manage generated images with CRUD operations.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Cohere", "Hugging Face","Google OAuth"],
    github: "https://github.com/nikilkumarks/Thumbnail_generator",
    live: "https://youtube-thumbnail-ai-backend-xsbq.onrender.com/",
    image: "/home.png", // 👉 Add your image path here (e.g., "/images/thumbnail-generator.png")
  },
  {
    title: "Pokémon Explorer",
    type: "Frontend",
    description: "A sleek React application to search and explore Pokémon using PokéAPI. Optimized for performance and fluid UI interactions.",
    tech: ["React", "Vite", "Tailwind", "REST API"],
    github: "https://github.com/nikilkumarks/PokeMon",
    live: "https://poke-mon-psi.vercel.app/",
    image: "/poke.png", // 👉 Add your image path here (e.g., "/images/pokemon.png")
  },
  {
    title: "STEM Chat Application",
    type: "Full-Stack WebRTC",
    description: "A highly-scalable real-time chat and video calling application built on the MERN stack. Features instant messaging, WebRTC video, and secure JWT authentication.",
    tech: ["React", "Zustand", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/nikilkumarks/Stem",
    live: "https://stem-o0zn.onrender.com/",
    image: "/stem.png", // 👉 Add your image path here
  },
  {
    title: "ATS AI Analyzer",
    type: "SaaS Platform",
    description: "An advanced SaaS platform leveraging AI to analyze resumes against job descriptions, suggesting real-time content improvements to maximize ATS scores.",
    tech: ["React", "Express.js", "MongoDB", "Cohere AI"],
    github: "https://github.com/nikilkumarks/ATS_Checker",
    live: "https://ats-checker-vbuy.onrender.com/",
    image: "/ats.png", // 👉 Add your image path here
  },
  {
    title: "Car Showcase Platform",
    type: "Frontend",
    description: "A modern, responsive car showcase platform featuring immersive animations and an elegant browsing experience.",
    tech: ["React", "JavaScript", "Tailwind"],
    github: "https://github.com/nikilkumarks/Cars_Website",
    live: "https://remarkable-froyo-196aab.netlify.app/",
    image: "/cars.png", // 👉 Add your image path here
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative pb-8 sm:pb-12 pt-0 bg-black text-white overflow-hidden">

      {/* Background Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-white/[0.02] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-24 relative z-10 flex flex-col">

        {/* Header */}
        <div className="w-full flex flex-col items-center text-center gap-4 sm:gap-6 pb-3 sm:pb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl lg:text-[10rem] font-black text-white tracking-tighter leading-none"
          >
            Projects<span className="text-white/20">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg sm:text-xl font-light max-w-2xl"
          >
            A curated selection of my latest frontend and full-stack applications, designed with a focus on seamless user experiences.
          </motion.p>
        </div>

        {/* Alternating Z-Pattern Layout */}
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-24">
          {projects.map((project, index) => {
            // Alternate orientation based on even/odd index
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:items-center gap-12 lg:gap-24 group ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
              >

                {/* Data Column (Text) */}
                <div className="flex flex-col flex-1 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-8 h-[1px] bg-white/20" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-8">
                    {project.title}
                  </h3>

                  <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed mb-10 max-w-lg">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-12 max-w-lg">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium tracking-wider px-4 py-2 rounded-full border border-white/10 text-gray-300 bg-white/[0.02]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform"
                      >
                        View Live
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Abstract Visual Column (Image/App Preview) - Hidden on Mobile */}
                <div className="hidden lg:flex flex-1 w-full aspect-square sm:aspect-video lg:aspect-square max-h-[600px] bg-[#09090b] rounded-[3rem] border border-white/[0.05] relative overflow-hidden group-hover:border-white/10 transition-colors duration-700 shadow-2xl items-center justify-center">

                  {project.image ? (
                    /* 🖼️ Actual Image Render */
                    <img
                      src={project.image}
                      alt={`${project.title} Preview`}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                      loading="lazy"
                    />
                  ) : (
                    /* 🎨 Fallback View if no image is provided */
                    <>
                      {/* Subtle Background Glow inside the frame */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

                      {/* Placeholder Architecture Element */}
                      <div className="absolute w-[120%] h-[120%] -right-10 -bottom-10 border-[1px] border-white/5 rounded-full" />
                      <div className="absolute w-[80%] h-[80%] -right-5 -bottom-5 border-[1px] border-white/[0.03] rounded-full" />

                      {/* Inner dynamic visual element */}
                      <div className="w-48 h-48 bg-white/[0.02] rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000 ease-out" />

                      <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
                        {project.title} Preview
                      </span>
                    </>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
