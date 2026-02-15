import Section from "./Section";
// { Github, ExternalLink } removed as they are no longer used
// Import images - assuming they exist, otherwise will fallback
// Images sourced from Unsplash for better visual representation

const Projects = () => {
  const projects = [
    {
      title: "Sam AI",
      description: "A powerful terminal-based AI assistant designed for system control and automation. Features voice interaction and executes complex system commands.",
      tech: ["Python", "NLP", "OS Automation", "Speech Recognition"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", // Terminal/Code
      github: "#",
      demo: "#"
    },
    {
      title: "HarmoniX",
      description: "A dynamic music streaming platform offering seamless playback, real-time waveform visualization, and an immersive user experience.",
      tech: ["Django", "SQLite", "Audio API", "CSS3"],
      image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop", // Abstract Sound Wave
      github: "#",
      demo: "#"
    },
    {
      title: "Club Management System",
      description: "A comprehensive solution for university clubs handling event registrations, member management, and automated email notifications.",
      tech: ["Django", "PostgreSQL", "SMTP", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop", // University Events
      github: "#",
      demo: "#"
    },
    {
      title: "Luxury Car Dealership",
      description: "A premium car showroom website featuring high-end vehicles, detailed specifications, and booking functionality with a sleek UI.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2672&auto=format&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <Section id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group transform hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"; // Fallback image
                }}
              />
              {/* Overlay removed as requested */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
