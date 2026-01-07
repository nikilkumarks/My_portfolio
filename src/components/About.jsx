import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 sm:px-10 lg:px-24 py-28 bg-[#0e0e10] text-white flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background accents */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-bold mb-4
          bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
          text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Building scalable, user-focused web applications from frontend to backend
        </motion.p>

        {/* Accent divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "96px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl"
          >
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I’m a passionate{" "}
              <span className="text-white font-semibold">
                Full-Stack Developer
              </span>{" "}
              who enjoys building complete web applications — from polished user
              interfaces to secure, scalable backend systems. I care deeply about
              performance, maintainability, and real-world usability.
            </p>

            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              On the frontend, I work with{" "}
              <span className="text-cyan-400 font-medium">React.js</span>,{" "}
              <span className="text-cyan-400 font-medium">Tailwind CSS</span>, and
              modern component-driven design systems to create responsive and
              intuitive user experiences.
            </p>

            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              On the backend, I design and build RESTful APIs using{" "}
              <span className="text-cyan-400 font-medium">
                Node.js & Express
              </span>{" "}
              and work with databases to manage application data, authentication,
              and business logic reliably.
            </p>

            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              I enjoy working on{" "}
              <span className="text-white font-semibold">
                SaaS platforms, dashboards, and full-stack products
              </span>{" "}
              where clean architecture and thoughtful UX make a real impact.
            </p>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Role Chips */}
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Core Focus
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Full-Stack Development",
                  "Frontend Architecture",
                  "Backend APIs",
                  "SaaS Products",
                  "Performance & UX",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-1.5 text-sm rounded-full bg-white/10 border border-white/10 text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects Built", value: "10+" },
                { label: "Tech Stack", value: "MERN" },
                { label: "Focus", value: "SaaS" },
                { label: "Experience", value: "Hands-on" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-4 text-center shadow-md"
                >
                  <p className="text-xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
