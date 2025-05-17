import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "Working with Rishii was an absolute pleasure. His attention to detail and ability to understand our brand needs resulted in a design that perfectly represents our company.",
    name: "Sarah Johnson",
    title: "Marketing Director, TechFlow"
  },
  {
    rating: 5,
    text: "I needed both design and code for my portfolio website, and Rishii delivered beyond expectations. The site looks amazing, works flawlessly, and was delivered on time.",
    name: "Michael Chen",
    title: "Photographer & Content Creator"
  },
  {
    rating: 4.5,
    text: "The dashboard Rishii designed for our SaaS product completely transformed the user experience. Our customers love the intuitive interface and clean aesthetics.",
    name: "Alex Rivera",
    title: "Product Manager, SaaStack"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Client Testimonials</h2>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            Here's what clients have to say about working with me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-neutral-light/50">
              <div className="flex items-center mb-4 text-accent">
                {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                  <Star key={i} className="fill-current" />
                ))}
                {testimonial.rating % 1 === 0.5 && (
                  <Star className="fill-current" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                )}
              </div>
              <p className="text-neutral mb-6">{`"${testimonial.text}"`}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-neutral-light/80 mr-4"></div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-neutral">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
