import { motion } from "framer-motion";
import { Lightbulb, Figma, FileCode2, Codesandbox } from "lucide-react";

export const Service = () => {
  return (
    <div className="text-white px-6 md:px-12 mt-10 overflow-x-hidden">
      {/* Project Discovery */}
      <motion.div
        className="bg-[#212529e6] border border-white/10 flex justify-around items-center rounded-2xl p-4"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true}}
      >
        <div className="md:w-1/2 flex flex-col justify-center md:space-y-4">
          <Lightbulb color="#6366F1" size={32} />
          <h2 className="text-2xl font-bold mt-3">Product Discovery</h2>
          <p className="mt-2">
            My product development journey begins with establishing a shared
            vision. I immerse myself in your dream, learn about your
            expectations, and outline key elements. This phase is completely
            dedicated to understanding your ideal product.
          </p>
        </div>
        <div className="hidden md:block m-1/2">
          <img src="/idea.svg" width={280} alt="Idea" />
        </div>
      </motion.div>

      {/* Design and Dev */}
      <div className="mt-6 flex space-y-6 md:space-y-0 md:space-x-6 flex-col md:flex-row justify-between">
        <div className="bg-[#212529e6] border border-white/10 flex flex-col items-center rounded-2xl p-4 w-full md:w-1/2">
          <div className="flex flex-col md:mx-16 md:space-y-4">
            <Figma color="#6366F1" size={32} />
            <h2 className="text-2xl font-bold mt-3">Wireframes & UI/UX</h2>
            <p className="mt-2">
              My design process brings your vision to life through wireframes
              and UI/UX design. I craft user interfaces that prioritize user
              experience, ensuring your product looks great while being
              user-friendly and engaging.
            </p>
          </div>
          <div className="hidden md:block">
            <img src="/wireframe.svg" width={280} alt="Wireframes" />
          </div>
        </div>
        <div className="bg-[#212529e6] border border-white/10 flex flex-col items-center rounded-2xl p-4 w-full md:w-1/2">
          <div className="flex flex-col md:mx-16 md:space-y-4">
            <FileCode2 color="#6366F1" size={32} />
            <h2 className="text-2xl font-bold mt-3">Product Development</h2>
            <p className="mt-2">
              This is where the genuine magic begins! I handle both backend and
              frontend development, ensuring modularity. I hold weekly demo
              sessions so you can interact with your product and see its
              progress.
            </p>
          </div>
          <div className="hidden md:block">
            <img src="/coding.svg" width={280} alt="Coding" />
          </div>
        </div>
      </div>

      {/* QA */}
      <motion.div
        className="mt-6 bg-[#212529e6] border border-white/10 flex justify-around items-center rounded-2xl p-4"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true}}
      >
        <div className="md:w-1/2 flex flex-col justify-center md:space-y-4 md:py-4">
          <Codesandbox color="#6366F1" size={32} />
          <h2 className="text-2xl font-bold mt-3">
            Quality Assurance & Deployment
          </h2>
          <p className="mt-2">
            After finishing the main development phase, my quality assurance
            testing will commence with your active participation. I keep you
            updated and allow you to test your product, leaving potential for
            development. Once you&apos;re pleased, I&apos;ll begin product
            deployment as needed.
          </p>
        </div>
        <div className="hidden md:block m-1/2">
          <img src="/product.svg" width={280} alt="Product" />
        </div>
      </motion.div>
    </div>
  );
};
