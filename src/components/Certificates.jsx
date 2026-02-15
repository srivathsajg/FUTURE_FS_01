import { useState } from "react";
import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, ChevronRight } from "lucide-react";

// Import certificate images
import certAda from "../assets/cert-ada.jpeg";
import certDb from "../assets/cert-db.jpeg";
import certDbms from "../assets/cert-dbms.jpeg";
import certDsa from "../assets/cert-dsa.jpeg";
import certToc from "../assets/cert-toc.jpeg";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Data Structures & Algorithms",
      image: certDsa,
      issuer: "NPTEL / Coursera / etc", // Placeholder issuer
      date: "2024"
    },
    {
      id: 2,
      title: "Database Management Systems",
      image: certDbms,
      issuer: "Institute Name",
      date: "2023"
    },
    {
      id: 3,
      title: "Analysis & Design of Algorithms",
      image: certAda,
      issuer: "Institute Name",
      date: "2023"
    },
    {
      id: 4,
      title: "Theory of Computation",
      image: certToc,
      issuer: "Institute Name",
      date: "2023"
    },
    {
      id: 5,
      title: "Database Technologies",
      image: certDb,
      issuer: "Institute Name",
      date: "2022"
    }
  ];

  return (
    <Section id="certificates" className="bg-black/20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certifications</h2>
      
      <div className="max-w-4xl mx-auto grid gap-4">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ scale: 1.02, x: 10 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCert(cert)}
            className="glass p-6 rounded-xl cursor-pointer hover:bg-white/10 transition-colors group flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 rounded-full text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
                {/* Optional: Add issuer/date if needed, currently hidden to keep it text-focused as requested */}
                {/* <p className="text-sm text-gray-500">{cert.issuer} • {cert.date}</p> */}
              </div>
            </div>
            <ChevronRight className="text-gray-500 group-hover:text-white transition-colors" />
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="p-4 flex items-center justify-between border-b border-white/10 bg-white/5">
                <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-4 bg-black flex justify-center items-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[80vh] w-auto object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Certificates;
