const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-10">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Modern.</span> <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Minimal.</span>
            <br />
            <span className="mt-2 inline-block">Creative Designs.</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral mb-12 max-w-2xl mx-auto leading-relaxed">
            I create pixel-perfect, user-friendly digital experiences with seamless code implementation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-6">
            <a href="#contact" className="py-4 px-10 bg-primary hover:bg-primary/90 text-white font-semibold rounded-md transition-all duration-300 text-center text-lg shadow-md hover:shadow-lg">
              Start a Project
            </a>
            <a href="#portfolio" className="py-4 px-10 border border-neutral-dark/20 hover:border-primary text-neutral-dark hover:text-primary font-semibold rounded-md transition-all duration-300 text-center text-lg">
              View Work
            </a>
          </div>
          
          {/* Subtle design element */}
          <div className="mt-24 flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
