import { getProcessImage } from "@/lib/images";
import { Lightbulb, PencilLine, Code, Rocket, Check } from "lucide-react";

const processSteps = [
  {
    number: 1,
    icon: <Lightbulb className="text-primary text-2xl" />,
    title: "Discovery",
    description: "Understanding your goals, audience, and requirements to establish a clear roadmap for the project."
  },
  {
    number: 2,
    icon: <PencilLine className="text-primary text-2xl" />,
    title: "Design",
    description: "Creating wireframes and visual designs that align with your brand and meet user needs."
  },
  {
    number: 3,
    icon: <Code className="text-primary text-2xl" />,
    title: "Development",
    description: "Transforming designs into clean, semantic code with attention to performance and accessibility."
  },
  {
    number: 4,
    icon: <Rocket className="text-primary text-2xl" />,
    title: "Delivery",
    description: "Testing across devices, refining based on feedback, and launching your polished product."
  }
];

const whyChooseMe = [
  {
    title: "Designer's Eye + Developer's Precision",
    description: "I understand both the art of design and the science of code, ensuring seamless implementation."
  },
  {
    title: "Fully Custom & Tailored Solutions",
    description: "Every project is unique and deserves a customized approach that aligns with your specific requirements."
  },
  {
    title: "Fast Turnaround & Clean Code",
    description: "I deliver on time without compromising quality, with code that's maintainable and scalable."
  },
  {
    title: "3+ Years of Freelance Experience",
    description: "With numerous successful projects under my belt, I bring experience and reliability to every job."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-neutral-light/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">My Design Process</h2>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            A streamlined approach that delivers exceptional results for every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div 
              key={step.number}
              className="bg-white rounded-xl shadow-lg p-8 border border-neutral-light/50 transition-all duration-300 hover:border-primary/20 relative"
            >
              <div className="absolute -top-5 -right-5 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold font-poppins mb-3">{step.title}</h3>
              <p className="text-neutral">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-light/50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img 
                  src={getProcessImage(1)} 
                  alt="Web development process" 
                  className="rounded-xl shadow-md w-full h-auto" 
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold font-poppins mb-4">Why Choose Me?</h3>
                <ul className="space-y-4">
                  {whyChooseMe.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-primary mr-3 mt-1">
                        <Check className="text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-neutral">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
