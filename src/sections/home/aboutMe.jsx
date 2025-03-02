import { Terminal } from "lucide-react";
export const AboutMe = () => {
  return (
    <div className="px-6 md:px-12 mt-10 flex flex-col justify-center">
      <p className="flex justify-center items-center text-2xl text-center font-bold font-[doto] mb-2">
        <Terminal /> Code.me
      </p>
      <div className="border border-dashed border-[2px] border-[#6366F1] text-center  rounded-lg space-y-3 p-8 flex flex-col justify-evenly items-center md:flex-row">
        <p>
          Hi! I’m Vigilant Obobisa Kwao, a full-stack developer passionate about building
          web applications that are fast, scalable, and user-friendly. I work
          with JavaScript, React, Node.js, and MongoDB, creating both frontend
          and backend solutions. I enjoy solving problems, learning new
          technologies, and turning ideas into reality.
          Let’s connect and build something great! 🚀
        </p>
      </div>
    </div>
  );
};
