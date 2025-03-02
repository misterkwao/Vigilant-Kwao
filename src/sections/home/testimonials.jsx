import { Terminal, MessageSquareQuote } from "lucide-react";
import { testimonialsData } from "../../data/testimonials";
export const Testimonials = () => {
  return (
    <div className="px-6 md:px-12 mt-10">
      <p className="flex justify-center items-center  text-2xl text-center font-bold font-[doto] mb-2">
        <Terminal />
        Testimonials
      </p>
      <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-violet-100 to-slate-600 bg-clip-text text-transparent">
        What people say
      </h1>
      <div className="mt-2 overflow-x-auto custom-scrollbar">
        <div className="p-3 text-white flex space-x-3 w-max">
          {testimonialsData.map((data, index) => (
            <div
              key={index}
              className="w-[320px] h-[220px] bg-[#212529e6] border border-white/10 shadow-lg  p-3 rounded-[12px]"
            >
              <MessageSquareQuote />
              <div className="h-5/6 flex flex-col text-sm justify-between">
                <p className="text-center pt-3">{data.description}</p>
                <span className="text-right">{data.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
