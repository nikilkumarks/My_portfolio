import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useRef } from "react";

const skillCategories = [
  {
    label: "Frontend Development",
    icon: "⚛️",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "DaisyUI", "Framer Motion", "Responsive Web Design"]
  },
  {
    label: "Backend Development",
    icon: "📁",
    skills: ["Node.js", "Express.js", "RESTful API Development", "JWT Authentication", "PHP"]
  },
  {
    label: "AI & API Integrations",
    icon: "🔌",
    skills: ["Google Gemini PI", "Cohere API"]
  },
  {
    label: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL"]
  },
  {
    label: "Programming Languages",
    icon: "💻",
    skills: ["Java", "Python", "JavaScript"]
  },
  {
    label: "Tools & Development",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Postman", "Vite"]
  },
  {
    label: "Deployment & DevOps",
    icon: "☁️",
    skills: ["Vercel", "Netlify", "Render"]
  }
];

const SkillCard = ({ category, idx }) => {
  const cardRef = useRef(null);
  
  // 📏 Spotlight Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // 📐 3D Perspective Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 });

  function handlePerspectiveMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = (mouseXPos / width - 0.5) * 200;
    const yPct = (mouseYPos / height - 0.5) * 200;
    x.set(xPct);
    y.set(yPct);
  }

  function handlePerspectiveLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={(e) => { handleMouseMove(e); handlePerspectiveMove(e); }}
      onMouseLeave={handlePerspectiveLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05 }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="group relative bg-[#0c0c0c] border border-white/5 p-8 sm:p-10 rounded-[2.5rem] transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
       {/* 📐 Dynamic Spotlight Overlay */}
       <motion.div
         className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
         style={{
           background: useTransform(
             [mouseX, mouseY],
             ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 80%)`
           ),
         }}
       />

       {/* 📐 Card Content */}
       <div className="relative z-10 flex flex-col h-full">
          {/* Header with Icon Square */}
          <div className="flex items-center gap-5 mb-8">
             <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-xl sm:text-2xl transition-all group-hover:scale-110 group-hover:border-white/30 group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] duration-500">
                {category.icon}
             </div>
             <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors">
               {category.label}
             </h3>
          </div>

          {/* Skill Pill Cloud */}
          <div className="flex flex-wrap gap-2.5">
             {category.skills.map((skill, sIdx) => (
               <motion.div 
                 key={skill}
                 whileHover={{ scale: 1.05, y: -2 }}
                 className="px-5 py-2.5 bg-white/[0.04] border border-white/5 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#888] hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all cursor-default shadow-sm"
               >
                  {skill}
               </motion.div>
             ))}
          </div>
       </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-10 sm:py-14 bg-black text-white overflow-hidden">
      
      {/* 📐 Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-24 relative z-10 w-full flex flex-col items-center">
        
        {/* 📐 Section Header */}
        <div className="text-center mb-8 sm:mb-12 flex flex-col items-center gap-4">
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none capitalize"
           >
             Technical Expertise
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-gray-500 text-sm sm:text-lg max-w-2xl font-medium"
           >
             A high-performance toolkit for building scalable, production-ready applications.
           </motion.p>
        </div>

        {/* 📐 Advanced Interactive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 w-full">
          {skillCategories.map((category, idx) => (
             <SkillCard key={category.label} category={category} idx={idx} />
          ))}
        </div>

        {/* 📐 Section Footer Metadata */}
        <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row justify-between items-center gap-6 w-full border-t border-white/5 pt-3 opacity-30 select-none pointer-events-none">
           <span className="text-[9px] font-mono font-black tracking-[0.5em] text-gray-800 uppercase">Core_Deployment_Cluster v2.4.0</span>
           <div className="flex gap-6">
              <span className="text-[9px] font-mono text-gray-700 tracking-[0.2em] uppercase underline">System_Logs</span>
              <span className="text-[9px] font-mono text-gray-700 tracking-[0.2em] uppercase">Session_Verified: {new Date().toLocaleTimeString()}</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
