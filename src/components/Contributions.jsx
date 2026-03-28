import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

const Contributions = () => {
  const [blockSize, setBlockSize] = useState(12);
  const [fontSize, setFontSize] = useState(13);
  const [hoveredActivity, setHoveredActivity] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBlockSize(8);
        setFontSize(10);
      } else {
        setBlockSize(12);
        setFontSize(13);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
              className="text-4xl sm:text-7xl lg:text-[10rem] font-black text-white tracking-tighter uppercase leading-none"
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
          {/* Status Node Tooltip & Data Readout */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12 mb-10 sm:mb-16">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase text-gray-600">Sync status: Live_activity</span>
            </div>
            
            {/* Dynamic Data Readout */}
            <div className={`flex items-center gap-3 transition-opacity duration-300 ${hoveredActivity ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-8 h-[1px] bg-white/20" />
              <span className="text-[10px] font-mono font-bold text-green-400 tracking-wider">
                {hoveredActivity 
                  ? `${hoveredActivity.count} commits on ${hoveredActivity.date}` 
                  : "Scanning node..."}
              </span>
            </div>
          </div>

          {/* GitHub Calendar Container - Scrollbar Hidden, Full Width on Mobile */}
          <div className="w-full max-w-5xl flex flex-col items-center">
            <div className="w-full flex justify-start sm:justify-center no-scrollbar overflow-x-auto min-h-[160px] bg-black/40 px-4 py-8 rounded-2xl border border-white/5 relative group shadow-[0_0_60px_-15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_80px_-10px_rgba(34,197,94,0.3)] transition-shadow duration-500">
              {/* Fade masks for mobile scroll hint */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none sm:hidden" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none sm:hidden" />
              
              <div className="min-w-fit px-4">
                <GitHubCalendar 
                  username="nikilkumarks" 
                  colorScheme="dark"
                  year={2026}
                  blockSize={blockSize}
                  blockMargin={5}
                  fontSize={fontSize}
                  color="#2ea043"
                  hideColorLegend
                  hideTotalCount
                  renderBlock={(block, activity) => (
                    <motion.g
                      onMouseEnter={() => setHoveredActivity(activity)}
                      onMouseLeave={() => setHoveredActivity(null)}
                      whileHover={{ scale: 1.5, zIndex: 100 }}
                      className="cursor-crosshair origin-center"
                    >
                      {block}
                    </motion.g>
                  )}
                />
              </div>
            </div>
            
            {/* Mobile Scroll Hint */}
            <div className="mt-4 flex items-center gap-2 sm:hidden animate-pulse opacity-40">
              <span className="text-[8px] font-bold tracking-widest uppercase text-gray-400">Swipe to explore timeline</span>
              <div className="w-4 h-[1px] bg-white/20" />
            </div>
          </div>

          {/* Micro Footer Legend Alternative */}
          <div className="mt-12 sm:mt-16 flex items-center justify-center gap-6 w-full opacity-60">
             <div className="flex-grow h-[1px] bg-white/[0.05] max-w-[100px] hidden sm:block" />
              <a 
                href="https://github.com/nikilkumarks" 
                target="_blank" 
                rel="noreferrer"
                className="text-[10px] sm:text-[12px] font-black tracking-[0.3em] uppercase text-white hover:text-green-400 transition-all whitespace-nowrap border-b border-white/10 pb-1"
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
