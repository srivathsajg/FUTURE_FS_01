import { motion, useScroll } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white relative">
      <Background />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Certificates />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
