import React, { useEffect, useRef, useMemo } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaGithub, FaPython, FaJava, FaSitemap 
} from 'react-icons/fa';
import { 
  SiMongodb, SiMysql, SiCplusplus, SiC, SiDjango 
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'JS', icon: <FaJs color="#F7DF1E" /> },
  { name: 'GitHub', icon: <FaGithub color="#FFFFFF" /> },
  { name: 'Python', icon: <FaPython color="#3776AB" /> },
  { name: 'C', icon: <SiC color="#A8B9CC" /> },
  { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
  { name: 'DSA', icon: <FaSitemap color="#4ADE80" /> },
  { name: 'VS Code', icon: <VscVscode color="#007ACC" /> },
  { name: 'Java', icon: <FaJava color="#007396" /> },
  { name: 'SQL', icon: <SiMysql color="#4479A1" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'Django', icon: <SiDjango color="#092E20" /> },
];

const SkillsSphere = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const iconRefs = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, isInteracting: false });
  
  // Configuration
  const sphereRadius = 180;
  const particleCount = 2000; // Dense cloud
  const baseRotationSpeed = 0.003;
  const maxInteractionSpeed = 0.02;
  
  // Generate particles for the "Clone Image" look (Latitude/Longitude Grid)
  const particles = useMemo(() => {
    const pts = [];
    // Using lat/long distribution to match the "grid" look of the image
    const latCount = 40;
    const longCount = 60;

    for (let i = 0; i < latCount; i++) {
      const theta = (i / latCount) * Math.PI; // 0 to PI
      const y = Math.cos(theta) * sphereRadius;
      const ringRadius = Math.sin(theta) * sphereRadius;
      
      for (let j = 0; j < longCount; j++) {
        const phi = (j / longCount) * Math.PI * 2;
        const x = Math.cos(phi) * ringRadius;
        const z = Math.sin(phi) * ringRadius;
        
        pts.push({ x, y, z, originalX: x, originalY: y, originalZ: z });
      }
    }
    return pts;
  }, []);

  // Generate Skill Icon positions (Fibonacci Sphere for even distribution)
  const skillPoints = useMemo(() => {
    return skills.map((skill, index) => {
      const phi = Math.acos(-1 + (2 * index) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      
      // Place icons slightly outside the particle sphere
      const r = sphereRadius + 30; 
      
      return {
        x: r * Math.cos(theta) * Math.sin(phi),
        y: r * Math.sin(theta) * Math.sin(phi),
        z: r * Math.cos(phi),
        skill
      };
    });
  }, []);

  // Mouse Handlers
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate normalized position (-1 to 1) relative to center
    const x = (e.clientX - rect.left) / rect.width * 2 - 1;
    const y = (e.clientY - rect.top) / rect.height * 2 - 1;
    mouseRef.current = { x, y, isInteracting: true };
  };

  const handleMouseLeave = () => {
    mouseRef.current.isInteracting = false;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let rotationX = 0;
    let rotationY = 0;
    
    // Track current speeds for smooth transition
    let currentSpeedX = baseRotationSpeed * 0.2;
    let currentSpeedY = baseRotationSpeed;

    // Resize canvas to high DPI
    const resizeCanvas = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      if (!canvas) return;
      const { width, height } = canvas.getBoundingClientRect();
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);
      
      // Calculate target speeds based on mouse interaction
      let targetSpeedX = baseRotationSpeed * 0.2;
      let targetSpeedY = baseRotationSpeed;

      if (mouseRef.current.isInteracting) {
        // Map mouse position to rotation speed
        // Moving mouse right -> Rotate Y positive (spin right)
        // Moving mouse down -> Rotate X positive (tilt down)
        targetSpeedY = mouseRef.current.x * maxInteractionSpeed;
        targetSpeedX = -mouseRef.current.y * maxInteractionSpeed; // Inverted Y for natural feel
      }

      // Smoothly interpolate current speed towards target speed (Momentum/Inertia)
      currentSpeedX += (targetSpeedX - currentSpeedX) * 0.05;
      currentSpeedY += (targetSpeedY - currentSpeedY) * 0.05;

      // Update Rotation
      rotationY += currentSpeedY;
      rotationX += currentSpeedX;

      // 1. Draw Particles (The Image Clone)
      ctx.globalCompositeOperation = 'lighter'; // Additive blending for "Neon" glow

      particles.forEach(p => {
        // Rotate
        let x = p.x * Math.cos(rotationY) - p.z * Math.sin(rotationY);
        let z = p.x * Math.sin(rotationY) + p.z * Math.cos(rotationY);
        
        let y = p.y * Math.cos(rotationX) - z * Math.sin(rotationX);
        z = p.y * Math.sin(rotationX) + z * Math.cos(rotationX);

        // Perspective
        const scale = (z + sphereRadius * 2) / (sphereRadius * 3); // Simple perspective
        const alpha = Math.max(0.1, (z + sphereRadius) / (sphereRadius * 2));
        
        // Color Gradient: Top (Pink) -> Bottom (Blue)
        const normalizedY = (y + sphereRadius) / (sphereRadius * 2); // 0 to 1
        
        const r = 255 - (255 - 9) * normalizedY;
        const g = 42 - (42 - 24) * normalizedY;
        const b = 233 - (233 - 231) * normalizedY; 
        
        const color = `rgba(${r}, ${g}, ${b}, ${alpha})`;

        if (z > -sphereRadius) { // Only draw if not clipped too far
          const px = centerX + x;
          const py = centerY + y;
          const size = 1.5 * scale;

          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 2. Update Skill Icons (DOM)
      skillPoints.forEach((p, i) => {
        const el = iconRefs.current[i];
        if (!el) return;

        // Rotate
        let x = p.x * Math.cos(rotationY) - p.z * Math.sin(rotationY);
        let z = p.x * Math.sin(rotationY) + p.z * Math.cos(rotationY);
        
        let y = p.y * Math.cos(rotationX) - z * Math.sin(rotationX);
        z = p.y * Math.sin(rotationX) + z * Math.cos(rotationX);

        const scale = (z + sphereRadius * 2) / (sphereRadius * 2.5);
        const opacity = Math.max(0.1, (z + sphereRadius) / (sphereRadius * 2));
        const zIndex = Math.floor(z + sphereRadius);

        el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
        el.style.opacity = opacity;
        el.style.zIndex = zIndex;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particles, skillPoints]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[280px] sm:h-[360px] md:h-[450px] flex items-center justify-center cursor-move"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={(e) => {
        const t = e.touches[0];
        handleMouseMove({ clientX: t.clientX, clientY: t.clientY });
      }}
      onTouchMove={(e) => {
        const t = e.touches[0];
        handleMouseMove({ clientX: t.clientX, clientY: t.clientY });
      }}
      onTouchEnd={handleMouseLeave}
    >
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      {/* Container for Icons - Centered */}
      <div className="relative flex items-center justify-center w-0 h-0 preserve-3d pointer-events-none">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={el => iconRefs.current[index] = el}
            className="absolute flex flex-col items-center justify-center gap-1 w-12 h-12 will-change-transform"
          >
            <div className="text-3xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              {skill.icon}
            </div>
            <span className="text-xs font-bold text-white/80 bg-black/50 px-2 rounded-full backdrop-blur-sm">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSphere;
