import { getUIUXImages } from "@/lib/images";

const portfolioItems = [
  {
    title: "Porsche Timeless Design",
    description: "Elegant website showcasing the timeless evolution of Porsche 911",
    tags: ["UI/UX Design", "Branding", "Web Development"],
    color: "bg-primary/80"
  },
  {
    title: "Creative Dashboard",
    description: "Modern analytics dashboard with intuitive data visualization for creative professionals",
    tags: ["UI/UX Design", "React"],
    color: "bg-secondary/80"
  },
  {
    title: "Mobile App Interface",
    description: "Clean and intuitive mobile app interface with modern design elements",
    tags: ["App Design", "UI/UX"],
    color: "bg-accent/80"
  },
  {
    title: "E-commerce Website",
    description: "Conversion-focused online store with modern UI elements and smooth user flow",
    tags: ["Web Design", "Next.js"],
    color: "bg-primary/80"
  },
  {
    title: "Portfolio Website",
    description: "Creative portfolio with modern animations and responsive design",
    tags: ["Portfolio", "JavaScript"],
    color: "bg-secondary/80"
  },
  {
    title: "Digital Magazine",
    description: "Interactive digital magazine layout with engaging visual storytelling",
    tags: ["Editorial Design", "Web Development"],
    color: "bg-accent/80"
  }
];

const Portfolio = () => {
  const images = getUIUXImages();

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Featured Work</h2>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            A showcase of my recent design and development projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => {
            // Make sure we don't go beyond available images
            const imageIndex = index % images.length;
            
            return (
              <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg h-72">
                <img 
                  src={images[imageIndex]} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                />
                <div className={`absolute inset-0 ${item.color} flex flex-col items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}>
                  <h3 className="text-xl text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90 text-center mb-4">{item.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#contact" className="text-white underline">Inquire About This Project</a>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
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

export default Portfolio;
