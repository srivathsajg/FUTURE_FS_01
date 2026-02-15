import Section from "./Section";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering - BE, Computer Science and Engineering",
      institution: "Adichunchanagiri Institute of Technology",
      year: "Sep 2023 - Jun 2027",
      details: "Skills: Programming Languages: C, C++, Python · Database Technologies: MySQL, DBMS Concepts, MongoDB · Full-Stack Development(django) · Tools & Platforms: Visual Studio Code, Linux (Ubuntu), Windows"
    },
    {
      degree: "Pre-University, PCMB",
      institution: "Swami Vivekananda Pre University college Pavagada ,Tumakuru (Dist)",
      year: "Sep 2021 - Sep 2023",
      details: "Completed Pre-University Education with a focus on Physics, Chemistry, Mathematics, and Biology."
    },
    {
      degree: "SSLC",
      institution: "The New Empress Public School Lingadahalli",
      year: "Oct 2020 - Aug 2021",
      details: "Completed Secondary School Leaving Certificate."
    }
  ];

  return (
    <Section id="education" className="bg-black/20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 border-l-2 border-violet-500/20 pl-8 ml-4 md:ml-0">
          {education.map((edu, index) => (
            <div key={index} className="relative group">
              <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-black bg-violet-500 group-hover:bg-violet-400 transition-colors" />
              <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                <h4 className="text-xl font-bold">{edu.degree}</h4>
                <p className="text-violet-400 font-medium mb-1">{edu.institution}</p>
                <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                  <Calendar size={14} /> {edu.year}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
