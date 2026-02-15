import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background elements are handled by the global Background component to ensure seamless integration */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 mb-4 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
            <span className="text-blue-400 text-sm font-medium tracking-wide">AVAILABLE FOR INTERNSHIPS</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Aspiring</span>
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Full Stack Developer</span>
          </h1>
          
          <h3 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 font-light">
            Pre-Final Year CSE Student crafting <br className="hidden sm:block md:block" />
            <span className="text-white font-medium">clean, scalable, & modern</span> web solutions.
          </h3>
          
          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
            I turn complex problems into beautiful, functional interfaces. 
            Passionate about the MERN stack and open-source innovation.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-full font-bold transition-all flex items-center gap-2 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              View Projects <ArrowRight size={20} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 bg-transparent border border-white/20 text-white hover:bg-white/10 rounded-full font-medium transition-all flex items-center gap-2 transform hover:-translate-y-1 backdrop-blur-md"
            >
              Contact Me <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Abstract visual or Image placeholder */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full glass rounded-2xl border border-white/10 flex items-center justify-center p-8 overflow-hidden shadow-2xl">
               <div className="text-center w-full font-mono text-sm leading-loose text-gray-300">
                  <p><span className="text-violet-400">const</span> <span className="text-yellow-400">profile</span> <span className="text-white">=</span> <span className="text-gray-400">{"{"}</span></p>
                  <p>role: <span className="text-green-400">'Aspiring Full Stack Developer'</span>,</p>
                  <p>status: <span className="text-green-400">'CSE Student'</span>,</p>
                  <p>passion: <span className="text-green-400">'Web Development'</span>,</p>
                  <p>stack: [<span className="text-green-400">'Python'</span>, <span className="text-green-400">'C++'</span>]</p>
                  <p className="text-gray-400">{"}"}</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
