import Section from "./Section";
import SkillsSphere from "./SkillsSphere";

const About = () => {
  return (
    <Section id="about" className="bg-black/20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="glass p-6 rounded-2xl space-y-4 text-gray-300 leading-relaxed">
            <p>
              I am a Pre-Final Year Computer Science and Engineering student at Adichunchanagiri Institute of Technology, Chikkamagaluru. 
              My journey in tech is driven by a strong passion for Full Stack Web Development and problem-solving.
            </p>
            <p>
              I focus on building intuitive, efficient, and scalable web applications. 
              With a solid foundation in both frontend and backend technologies, I enjoy turning complex requirements into seamless user experiences.
            </p>
            <p>
              Currently seeking internship opportunities to apply my skills in a professional environment and contribute to impactful projects.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <SkillsSphere />
        </div>
      </div>
    </Section>
  );
};

export default About;
