import { Terminal, Github, LinkedinIcon, Mail, MessageCircle } from "lucide-react";

export const Contact = () => {
  return (
    <div className="px-6 md:px-12 mt-10">
      <p className="flex justify-center items-center text-2xl text-center font-bold font-[doto] mb-2">
        <Terminal className="mr-2" />
        Contact
      </p>
      <div className="h-40 flex flex-col md:flex-row justify-between items-center gap-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-violet-100 to-slate-600 bg-clip-text text-transparent">
          Got an idea? Let’s connect.
        </h1>
        <div className="p-4 flex space-x-6 justify-center items-center">
          {[
            { href: "https://github.com/misterkwao", icon: <Github /> },
            { href: "https://www.linkedin.com/in/vigilant-kwao", icon: <LinkedinIcon /> },
            { href: "mailto:kwaovigilant@gmail.com", icon: <Mail /> },
            { href: "https://wa.me/+233242375859", icon: <MessageCircle /> },
          ].map(({ href, icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 bg-white/10 border border-white/20 backdrop-blur-lg p-3 rounded-xl shadow hover:shadow-md"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
