const Hero = () => {
  return (
    <div className="mt-25 md:mt-8 flex flex-wrap justify-between px-6 md:px-12">
      {/* Text Section */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h1 className="font-[doto] text-5xl mb-4">
          <span className="text-[#6366F1]">Hello</span> World
          <span className="text-[#f0b105]">;</span>
        </h1>
        <p className="text-2xl mb-4">
          I am <span className="font-semibold">Vigilant Kwao</span>, an
          enthusiastic software developer from Ghana.
        </p>
        <p className="text-lg dark:text-gray-100">
          Trying to create a positive impact through technology.
        </p>
        <a href="#contact">
          <button className="mt-6 w-32 p-3 border rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300">
            Hire Me
          </button>
        </a>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 h- flex items-center justify-center">
        <div className="w-full max-w-[500px]">
          <img
            src="/me.png"
            alt="Vigilant Kwao"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
