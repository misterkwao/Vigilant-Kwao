import { Terminal, Github, LinkedinIcon, Mail, MessageCircle} from "lucide-react"
export const Contact = () => {
  return (
    <div className="px-6 md:px-12 mt-10">
        <p className="flex justify-center items-center  text-2xl text-center font-bold font-[doto] mb-2">
        <Terminal />
        Contact
      </p>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-violet-100 to-slate-600 bg-clip-text text-transparent">
        Have an Idea ?, Click me!!
      </h1>
      <div className="p-4 flex space-x-10 justify-center items-center">
        <a href="https://github.com/misterkwao" target="_blank"><Github/></a>
        <a href="https://www.linkedin.com/in/vigilant-kwao" target="_blank"><LinkedinIcon/></a>
        <a href="mailto:kwaovigilant@gmail.com"><Mail/></a>
        <a href="https://wa.me/+233242375859" target="_blank"><MessageCircle/></a>
      </div>
    </div>
  )
}
