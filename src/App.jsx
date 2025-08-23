import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
const App = () => {
  return (
    <div className="scroll-smooth font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <Certifications /> */}
      <Contact />
    </div>
  );
};

export default App;
