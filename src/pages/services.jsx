import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Hero } from "../sections/services/hero";
import { Service } from "../sections/services/service";
import { Faq } from "../sections/services/faq";
export const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#faqs") {
      const faqsSection = document.getElementById("faqs");
      if (faqsSection) {
        faqsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
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
        <Service />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <section id="faqs">
          <Faq />
        </section>
      </motion.div>
    </div>
  );
};
