import { motion } from "framer-motion";
import Hero from "../sections/projects/hero";
import { Timeline } from "../sections/projects/timeline";
export const Projects = () => {
  return (
    <div className="overflow-x-hidden">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Timeline />
      </motion.div>
    </div>
  );
};
