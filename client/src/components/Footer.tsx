import { Instagram, Twitter, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Logo and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 pb-16 border-b border-gray-800">
          <div className="mb-10 lg:mb-0 lg:max-w-sm">
            <a href="#" className="inline-block mb-6">
              <span className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Rishii</span>
                <span className="text-white">Creates</span>
              </span>
            </a>
            <p className="text-gray-400 mb-8 text-lg">
              Turning your vision into digital reality with modern design and clean code.
            </p>
            <div className="flex space-x-5">
              <a 
                href="https://instagram.com/rishiicreatess" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a 
                href="https://twitter.com/rishiicreates" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
              <a 
                href="mailto:rishiicreats@gmail.com" 
                className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links and Contact in a 2-column layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Navigation</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center">
                    <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-70" />
                    <span>Services</span>
                  </a>
                </li>
                <li>
                  <a href="https://rishiis-portfolio.onrender.com" className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center">
                    <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-70" />
                    <span>Portfolio</span>
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center">
                    <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-70" />
                    <span>Process</span>
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center">
                    <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-70" />
                    <span>Pricing</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center">
                    <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-70" />
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>
              <p className="text-gray-400 mb-6">
                Got a project in mind? Let's bring your vision to life together.
              </p>
              <p className="text-gray-400 mb-4">
                <a href="mailto:rishiicreats@gmail.com" className="hover:text-primary transition-colors duration-200">rishiicreats@gmail.com</a>
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center py-3 px-6 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors duration-300 font-medium"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright and Terms */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-2">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RishiiCreates. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
