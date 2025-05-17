const Cta = () => {
  return (
    <section className="py-16 bg-neutral-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Let's collaborate to transform your ideas into stunning, functional digital experiences that stand out.
          </p>
          <a 
            href="#contact" 
            className="inline-block py-3 px-8 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors duration-300"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
