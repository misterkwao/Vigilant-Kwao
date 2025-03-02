import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

export const FaqItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b border-gray-700 py-4">
        <button
          className="w-full text-left focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium">{faq.question}</h3>
            <span className="text-2xl">{isOpen ? "−" : "+"}</span>
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 overflow-hidden text-gray-300"
            >
              <p className="text-black dark:text-white">{faq.answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

FaqItem.propTypes = {
   faq: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
   }).isRequired
};