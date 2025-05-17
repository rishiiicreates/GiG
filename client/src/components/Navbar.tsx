import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Rishii</span>
            <span className={`${scrolled ? 'text-neutral-dark' : 'text-neutral-dark'}`}>Creates</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            <a 
              href="#services" 
              className={`${scrolled ? 'text-neutral-dark hover:text-primary' : 'text-neutral-dark hover:text-primary'} font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300`}
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className={`${scrolled ? 'text-neutral-dark hover:text-primary' : 'text-neutral-dark hover:text-primary'} font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300`}
            >
              Portfolio
            </a>
            <a 
              href="#process" 
              className={`${scrolled ? 'text-neutral-dark hover:text-primary' : 'text-neutral-dark hover:text-primary'} font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300`}
            >
              Process
            </a>
            <a 
              href="#pricing" 
              className={`${scrolled ? 'text-neutral-dark hover:text-primary' : 'text-neutral-dark hover:text-primary'} font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300`}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="py-2 px-4 bg-primary text-white font-medium rounded-md transition-all duration-300 hover:shadow-md"
            >
              Contact
            </a>
          </div>
          
          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden text-neutral-dark focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 absolute top-full left-0 right-0 bg-white shadow-md border-t border-neutral-light/50">
            <div className="flex flex-col space-y-4 container mx-auto px-4">
              <a 
                href="#services" 
                className="text-neutral-dark hover:text-primary py-2 font-medium transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                className="text-neutral-dark hover:text-primary py-2 font-medium transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Portfolio
              </a>
              <a 
                href="#process" 
                className="text-neutral-dark hover:text-primary py-2 font-medium transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Process
              </a>
              <a 
                href="#pricing" 
                className="text-neutral-dark hover:text-primary py-2 font-medium transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                className="text-primary hover:text-primary/80 py-2 font-medium transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
