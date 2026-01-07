import { Mail, PhoneCall, Send, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "your_service_id",     // replace
        "your_template_id",    // replace
        formRef.current,
        "your_public_key"      // replace
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
          setTimeout(() => setStatus("idle"), 4000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 sm:px-10 lg:px-24 py-28 bg-[#0e0e10] text-white overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-indigo-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-extrabold mb-6
          bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500
          text-transparent bg-clip-text"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-20"
        >
          Have a project, freelance requirement, or full-time opportunity?  
          I’d love to hear from you.
        </motion.p>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl hover:border-indigo-400/30 transition"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-5 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-400" />
                <a
                  href="mailto:nikilkumark.s19601@gmail.com"
                  className="hover:text-white transition"
                >
                  nikilkumark.s19601@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-indigo-400" />
                <a
                  href="tel:+916363719601"
                  className="hover:text-white transition"
                >
                  +91 63637 19601
                </a>
              </div>
            </div>

            <p className="mt-8 text-sm text-gray-400 leading-relaxed">
              I usually respond within <span className="text-white">24 hours</span>.  
              Open to freelance projects, internships, and full-time roles.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl space-y-6 hover:border-purple-400/30 transition"
          >
            {["Name", "Email"].map((label, i) => (
              <div key={i}>
                <label className="block text-sm text-gray-300 mb-1">
                  {label}
                </label>
                <input
                  type={label === "Email" ? "email" : "text"}
                  name={label === "Email" ? "user_email" : "user_name"}
                  required
                  placeholder={`Your ${label.toLowerCase()}`}
                  className="w-full px-4 py-2.5 rounded-md bg-[#1a1a1a]
                  border border-white/10 text-white placeholder-gray-500
                  focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Tell me about your idea or opportunity..."
                className="w-full px-4 py-2.5 rounded-md bg-[#1a1a1a]
                border border-white/10 text-white placeholder-gray-500
                focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-md font-semibold
              bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
              hover:opacity-90 active:scale-[0.98]
              transition shadow-md disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Toast Feedback */}
            <AnimatePresence>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2
                  text-green-400 text-sm"
                >
                  ✅ Message sent successfully!
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2
                  text-red-400 text-sm"
                >
                  ❌ Something went wrong. Try again later.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>

      {/* Copyright */}
      <footer className="mt-32 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">
            Nikil Kumar K S
          </span>. {/*All rights reserved.*/}
        </p>
        <p className="mt-2 text-xs text-gray-500">
          Built with React, Tailwind CSS & Framer Motion
        </p>
      </footer>
    </section>
  );
};

export default Contact;
