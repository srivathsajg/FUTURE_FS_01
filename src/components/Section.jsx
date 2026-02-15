import { motion } from "framer-motion";

const Section = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`min-h-0 md:min-h-screen py-8 md:py-20 px-4 sm:px-6 lg:px-8 relative ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="max-w-7xl mx-auto"
      >
        {/* Helper component to animate direct children if they aren't already motion components */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" }
            }
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section;
