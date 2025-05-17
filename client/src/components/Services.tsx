import { Monitor, Smartphone, Code, LineChart, Palette, RefreshCw } from "lucide-react";

const services = [
  {
    icon: <Monitor className="text-primary text-2xl" />,
    title: "Website UI/UX Design",
    description: "Pixel-perfect, intuitive interfaces with engaging user experiences.",
    features: [
      "Wireframing & Prototyping",
      "Custom UI Elements",
      "Responsive Design"
    ],
    iconBg: "bg-primary/10"
  },
  {
    icon: <Smartphone className="text-secondary text-2xl" />,
    title: "App Interface Design",
    description: "Beautiful, functional mobile app interfaces with exceptional UX.",
    features: [
      "iOS & Android Patterns",
      "Interaction Design",
      "User Flow Optimization"
    ],
    iconBg: "bg-secondary/10"
  },
  {
    icon: <Code className="text-accent text-2xl" />,
    title: "Landing Page Design + Code",
    description: "High-converting landing pages with clean, optimized code.",
    features: [
      "Conversion-Focused Design",
      "Responsive HTML/CSS/JS",
      "Performance Optimization"
    ],
    iconBg: "bg-accent/10"
  },
  {
    icon: <LineChart className="text-primary text-2xl" />,
    title: "SaaS & Dashboard Interfaces",
    description: "Data-driven interfaces that are intuitive and visually appealing.",
    features: [
      "Information Architecture",
      "Data Visualization",
      "User Efficiency Optimization"
    ],
    iconBg: "bg-primary/10"
  },
  {
    icon: <Palette className="text-secondary text-2xl" />,
    title: "Portfolio Website Design",
    description: "Professional portfolios that showcase your skills and achievements.",
    features: [
      "Personal Branding",
      "Project Showcasing",
      "Contact Integration"
    ],
    iconBg: "bg-secondary/10"
  },
  {
    icon: <RefreshCw className="text-accent text-2xl" />,
    title: "Design to Code Conversion",
    description: "Transform Figma/XD designs into clean, responsive code.",
    features: [
      "Pixel-Perfect Implementation",
      "React/Next.js Components",
      "Cross-Browser Compatibility"
    ],
    iconBg: "bg-accent/10"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Services</h2>
          <p className="text-xl text-neutral max-w-xl mx-auto text-center">
            Design and development solutions tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-white hover:bg-neutral-light/20 border border-neutral-light p-8 transition-all duration-300 hover:border-primary"
            >
              <div className={`w-12 h-12 ${service.iconBg} rounded-md flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-neutral mb-6">{service.description}</p>
              <div className="border-t border-neutral-light/50 pt-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center bg-primary/10 text-primary mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
