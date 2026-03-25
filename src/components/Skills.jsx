import { motion } from "framer-motion";

const skillCategories = [
  {
    index: "01",
    label: "Frontend Development",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "DaisyUI", "Framer Motion", "Responsive Web Design"],
  },
  {
    index: "02",
    label: "Backend Development",
    skills: ["Node.js", "Express.js", "RESTful API Development", "JWT Authentication", "PHP"],
  },
  {
    index: "03",
    label: "AI & API Integrations",
    skills: ["Google Gemini API Integration", "Cohere API Integration"],
  },
  {
    index: "04",
    label: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    index: "05",
    label: "Programming Languages",
    skills: ["Java", "Python", "JavaScript"],
  },
  {
    index: "06",
    label: "Tools & Development",
    skills: ["Git", "GitHub", "Postman", "Vite"],
  },
  {
    index: "07",
    label: "Deployment & DevOps",
    skills: ["Vercel", "Netlify", "Render"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-40 bg-black text-white"
    >
      {/* 📐 Global Monochrome Grid */}
      <div className="fixed inset-0 z-0 opacity-[0.01] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 relative z-10">
        <div className="flex flex-col gap-2 mb-20 sm:mb-32">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-xs uppercase tracking-[0.5em] text-gray-500 font-black"
          >
            Technical Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl lg:text-9xl font-black text-white"
          >
            Expertise<span className="text-white/20">.</span>
          </motion.h2>
        </div>

        {/* 📐 Blueprint Stacking Cards */}
        <div className="flex flex-col gap-24 sm:gap-40 lg:gap-64">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="sticky top-20 sm:top-40 group cursor-default"
            >
              <motion.div 
                whileHover={{ y: -10, scale: 1.01, rotateX: 2, rotateY: -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-[#080808] border border-white/5 group-hover:border-white/30 rounded-3xl sm:rounded-[3rem] p-8 sm:p-16 lg:p-24 shadow-[0_30px_60px_rgba(0,0,0,0.9)] sm:shadow-[0_50px_100px_rgba(0,0,0,0.95)] group-hover:shadow-[0_0_80px_rgba(255,255,255,0.04)] relative overflow-hidden transition-all duration-500 perspective-1000"
              >
                {/* 🔢 Dynamic Backdrop Index */}
                <motion.div 
                  initial={{ opacity: 0.03 }}
                  whileHover={{ opacity: 0.1, x: 15, y: -15 }}
                  className="absolute right-0 top-0 mt-4 mr-6 sm:mt-8 sm:mr-12 pointer-events-none transition-all duration-700"
                >
                  <span className="text-[8rem] sm:text-[14rem] lg:text-[20rem] font-black text-white select-none leading-none opacity-[0.03] group-hover:opacity-[0.1]">{category.index}</span>
                </motion.div>

                <div className="relative z-10 flex flex-col gap-8 sm:gap-16">
                  <h3 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter group-hover:tracking-normal transition-all duration-700">
                    {category.label}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-y-12 gap-x-8 sm:gap-x-16">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="group/item flex flex-col gap-4 border-l-2 border-white/5 pl-6 sm:pl-10 hover:border-white/40 transition-all duration-500"
                      >
                         <span className="text-lg sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-gray-500 group-hover/item:text-white transition-colors">
                           {skill}
                         </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 📐 Decorative Inner Highlight (Shadow Effect) */}
                <div className="absolute inset-0 border border-white/[0.03] rounded-[3rem] pointer-events-none group-hover:border-white/[0.1] transition-colors duration-700 shadow-inner" />

                {/* 📐 Dynamic Bottom Scan Rail */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-white/[0.02] group-hover:bg-white/[0.05] transition-all duration-500">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
