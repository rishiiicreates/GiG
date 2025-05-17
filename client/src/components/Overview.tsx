import { getDesignerImage } from "@/lib/images";
import { Instagram, Twitter, Mail, CheckCircle } from "lucide-react";

const Overview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Designer + Developer</span>
          </h2>
          <p className="text-xl text-neutral mx-auto max-w-2xl">
            One package, complete solution.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-primary/10 rounded-3xl transform rotate-6 z-0"></div>
              <img 
                src={getDesignerImage(1)} 
                alt="Rishii Creates - Designer & Developer" 
                className="rounded-3xl shadow-xl w-full h-auto object-cover relative z-10" 
              />
              <div className="absolute -bottom-5 right-10 transform translate-y-1/2 bg-white rounded-full shadow-lg p-4 z-20">
                <div className="flex space-x-5">
                  <a 
                    href="https://instagram.com/rishiicreatess" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral hover:text-primary transition-transform hover:scale-110 duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram size={22} />
                  </a>
                  <a 
                    href="https://twitter.com/rishiicreates" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral hover:text-primary transition-transform hover:scale-110 duration-200"
                    aria-label="Twitter"
                  >
                    <Twitter size={22} />
                  </a>
                  <a 
                    href="mailto:rishiicreats@gmail.com" 
                    className="text-neutral hover:text-primary transition-transform hover:scale-110 duration-200"
                    aria-label="Email"
                  >
                    <Mail size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 mt-12 lg:mt-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              I bring creativity and technical expertise to every project
            </h3>
            <p className="text-lg text-neutral mb-8">
              Whether it's a website, mobile app, dashboard, or landing page – I blend aesthetic design with clean code to bring your vision to life. Each solution is tailored to your brand and business goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-light/30 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-primary mt-1 h-6 w-6" />
                  <div>
                    <h4 className="font-semibold text-lg">Modern, Minimal Designs</h4>
                    <p className="text-neutral">Clean, purposeful interfaces that engage users effectively</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-light/30 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-primary mt-1 h-6 w-6" />
                  <div>
                    <h4 className="font-semibold text-lg">Pixel-Perfect UI/UX</h4>
                    <p className="text-neutral">Intuitive flow and seamless experiences across devices</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-light/30 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-primary mt-1 h-6 w-6" />
                  <div>
                    <h4 className="font-semibold text-lg">Clean, Efficient Code</h4>
                    <p className="text-neutral">HTML, CSS, React, Next.js, and more – delivered with quality</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-light/30 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-primary mt-1 h-6 w-6" />
                  <div>
                    <h4 className="font-semibold text-lg">Complete Design Assets</h4>
                    <p className="text-neutral">Figma or Adobe XD files included on request</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="#services" 
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Explore my services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
