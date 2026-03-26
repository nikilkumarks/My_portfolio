import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

const Contributions = () => {
  return (
    <section id="contributions" className="relative py-24 sm:py-40 bg-black text-white overflow-hidden">
      
      {/* 🏙️ Architectural Watermark */}
      <div className="absolute right-[-2%] top-[15%] text-[12rem] lg:text-[20rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter leading-none hidden sm:block">
        2026
      </div>

      {/* 📐 Subtle Technical Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.01] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='white' stroke-width='0.3'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-24 relative z-10 flex flex-col items-center">
        
        {/* 📐 Modernistic Header - Scaled for tighter viewports */}
        <div className="flex flex-col gap-4 sm:gap-6 mb-16 sm:mb-24 text-center items-center">
            <div className="flex items-center gap-3">
               <div className="hidden sm:block w-8 h-[1px] bg-white/20" />
               <motion.span 
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="text-[9px] sm:text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold"
               >
                 Activity Log
               </motion.span>
               <div className="hidden sm:block w-8 h-[1px] bg-white/20" />
            </div>
            
            <motion.h2
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-[10rem] font-black text-white tracking-tighter uppercase leading-none"
            >
              Contributions<span className="text-white/20">.</span>
            </motion.h2>

            <div className="flex items-center justify-center gap-4 mt-2 sm:mt-4 opacity-50">
               <span className="text-[8px] sm:text-[10px] font-black tracking-[0.3em] uppercase text-gray-500 italic">Cycle: 2026</span>
               <div className="w-12 h-[1px] bg-white/10" />
               <span className="text-[8px] sm:text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">Live_Network</span>
            </div>
        </div>

        {/* 📐 Focused Contribution Map - Truly Responsive UI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full flex flex-col items-center"
        >
          {/* Status Node Tooltip */}
          <div className="flex items-center gap-3 mb-10 sm:mb-16">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase text-gray-600">Sync status: Live_activity</span>
          </div>

          {/* GitHub Calendar Container - Scrollbar Hidden, Full Width on Mobile */}
          <div className="w-full max-w-5xl flex justify-center no-scrollbar overflow-x-auto min-h-[180px] bg-black/40 px-2">
            <div className="min-w-[800px] pointer-events-none sm:pointer-events-auto">
              <GitHubCalendar 
                username="nikilkumarks" 
                colorScheme="dark"
                year={2026}
                blockSize={12}
                blockMargin={5}
                fontSize={13}
                color="#2ea043"
                hideColorLegend
                hideTotalCount
              />
            </div>
          </div>

          {/* Micro Footer Legend Alternative */}
          <div className="mt-12 sm:mt-16 flex items-center justify-center gap-6 w-full opacity-60">
             <div className="flex-grow h-[1px] bg-white/[0.05] max-w-[100px] hidden sm:block" />
             <a 
               href="https://github.com/nikilkumarks" 
               target="_blank" 
               rel="noreferrer"
               className="text-[9px] sm:text-[10px] font-black tracking-[0.5em] uppercase text-white hover:text-gray-400 transition-colors whitespace-nowrap"
             >
               Explore GitHub Profile →
             </a>
             <div className="flex-grow h-[1px] bg-white/[0.05] max-w-[100px] hidden sm:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contributions;
