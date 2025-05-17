import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = this.getAttribute('href');
        if (target === '#') return;
        
        const targetElement = document.querySelector(target);
        if (targetElement) {
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="bg-white font-inter text-neutral-dark">
      <Navbar />
      <Hero />
      <Overview />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Contact />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
