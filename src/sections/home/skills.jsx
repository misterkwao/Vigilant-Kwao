import { Terminal } from "lucide-react";
import { firstRow } from "../../data/techStack";
export const Skills = () => {
  return (
    <div className="px-6 md:px-12 mt-10 flex flex-col justify-center">
      <p className="flex justify-center items-center text-2xl text-center font-bold font-[doto] mb-2">
        <Terminal />
        Tech Stack
      </p>
      {/* icons */}
      <div className="space-y-6 mt-3">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {firstRow.map((item, index) => (
            <span key={index} className={item.class}>
              {item.img && <img src={item.img} alt="Icon" className="w-10" />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
