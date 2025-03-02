import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const closeMobileMenu = () => setIsMobileMenu(false);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return !isMobileMenu ? (
    <nav
      className={`p-4  w-full fixed flex justify-between md:justify-around items-center z-10 transition-all duration-300 ${
        isScrolled ? "glass-effect" : "bg-transparent"
      }`}
    >
      <p className="font-bold">Vigilant Kwao</p>
      <div className="hidden md:flex justify-between items-center space-x-7">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/services#faqs">Faqs</Link>
      </div>
      <span className="hidden md:block bg-black text-white dark:bg-white dark:text-gray-900 p-1 px-5 rounded-2xl cursor-pointer">
        Resumé
      </span>
      <span className="md:hidden" onClick={() => setIsMobileMenu(true)}>
        <Menu />
      </span>
    </nav>
  ) : (
    <nav className="glass-effect p-6 h-screen w-full fixed top-0 left-0 flex flex-col justify-center items-center gap-6 z-10 transition-all duration-300">
      <button
        className="absolute top-4 right-10 text-gray-900 dark:text-white cursor-pointer"
        onClick={() => setIsMobileMenu(false)}
      >
        <X size={28} />
      </button>
      <Link
        to="/"
        className="text-lg font-medium hover:underline"
        onClick={closeMobileMenu}
      >
        Home
      </Link>
      <Link
        to="/projects"
        className="text-lg font-medium hover:underline"
        onClick={closeMobileMenu}
      >
        Projects
      </Link>
      <Link
        to="/services"
        className="text-lg font-medium hover:underline"
        onClick={closeMobileMenu}
      >
        Services
      </Link>
      <Link
        to="/services#faqs"
        className="text-lg font-medium hover:underline"
        onClick={closeMobileMenu}
      >
        Faqs
      </Link>
      <span
        className="bg-black text-white dark:bg-white dark:text-gray-900 p-2 px-6 rounded-2xl cursor-pointer"
        onClick={closeMobileMenu}
      >
        Resumé
      </span>
    </nav>
  );
};

export default Navbar;
