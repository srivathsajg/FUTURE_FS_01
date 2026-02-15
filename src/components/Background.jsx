import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Background = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#020205]">
      {/* Base dark background with slight blue tint */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Neon Grid Pattern - Layer 1 (Sharp) */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 opacity-[0.3]"
      >
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
          }}
        />
      </motion.div>

      {/* Neon Grid Pattern - Layer 2 (Glow/Blur) */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 opacity-[0.2]"
      >
        <div 
          className="absolute inset-0 filter blur-[3px]" 
          style={{
            backgroundImage: `linear-gradient(to right, #00ffff 1px, transparent 1px),
                              linear-gradient(to bottom, #00ffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
             maskImage: "radial-gradient(circle at center, black 50%, transparent 100%)"
          }}
        />
      </motion.div>

      {/* Intersection Dots - Making it look like a graph */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 opacity-[0.4]"
      >
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle, #60a5fa 1.5px, transparent 1.5px)`,
            backgroundSize: "50px 50px",
            maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
          }}
        />
      </motion.div>

      {/* Shining/Scanning Effect - Stronger */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: "linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.6) 50%, transparent 60%)",
          backgroundSize: "200% 200%"
        }}
      />

      {/* Radial Gradient Overlay for Hero */}
      <div className="absolute top-0 left-0 right-0 h-[100vh] bg-gradient-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a]" />

      {/* Animated Glowing Orbs/Nodes - Brighter Blue Neon */}
      <motion.div
        style={{ y: y2, x: -100, rotate }}
        className="absolute top-1/4 -left-20 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[600px] md:h-[600px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[100px] mix-blend-screen"
      />
      <motion.div
        style={{ y: y1, x: 100, rotate: useTransform(scrollYProgress, [0, 1], [0, -45]) }}
        className="absolute bottom-1/4 -right-20 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] bg-cyan-500/15 rounded-full blur-[80px] md:blur-[100px] mix-blend-screen"
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0a0a0a]/90" />
    </div>
  );
};

export default Background;
