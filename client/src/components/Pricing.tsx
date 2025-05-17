import { Brush, Code, Rocket, Check, X } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    description: "Design Only Package",
    price: "$25",
    icon: <Brush className="text-primary text-xl" />,
    features: [
      { included: true, text: "1 Screen/Page UI Design" },
      { included: true, text: "JPG/PNG Preview + Source File" },
      { included: true, text: "2 Revisions Included" },
      { included: false, text: "Code Implementation" },
      { included: false, text: "Responsive Development" },
      { included: false, text: "Deployment Assistance" }
    ],
    popular: false,
    color: "border-neutral-light/50 hover:border-primary/20"
  },
  {
    name: "Standard",
    description: "Design + Code Package",
    price: "$80",
    icon: <Code className="text-primary text-xl" />,
    features: [
      { included: true, text: "Up to 3 Screens/Pages" },
      { included: true, text: "Fully Responsive HTML/CSS or React" },
      { included: true, text: "Source Files + Live Preview" },
      { included: true, text: "3 Revisions Included" },
      { included: true, text: "Basic SEO Setup" },
      { included: false, text: "Deployment Assistance" }
    ],
    popular: true,
    color: "border-primary"
  },
  {
    name: "Premium",
    description: "Complete Package",
    price: "$150",
    icon: <Rocket className="text-primary text-xl" />,
    features: [
      { included: true, text: "Full Web/App Design (up to 6 pages)" },
      { included: true, text: "Complete Development Implementation" },
      { included: true, text: "Responsive, Fast & SEO-Friendly" },
      { included: true, text: "Source Code & Design Files" },
      { included: true, text: "Deployment Assistance" },
      { included: true, text: "Unlimited Revisions" }
    ],
    popular: false,
    color: "border-neutral-light/50 hover:border-primary/20"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-neutral-light/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            Flexible options to meet your project needs and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden border ${plan.color} ${plan.popular ? 'border-2 relative transform transition-transform duration-300 hover:scale-105 shadow-xl' : 'transition-all duration-300 hover:shadow-xl'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-sm font-medium">
                  MOST POPULAR
                </div>
              )}
              <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-neutral mb-6">{plan.description}</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-neutral ml-1 mb-1">/ starting at</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start ${feature.included ? '' : 'text-neutral/60'}`}>
                      {feature.included ? (
                        <Check className="text-secondary h-4 w-4 mt-1 mr-3" />
                      ) : (
                        <X className="h-4 w-4 mt-1 mr-3" />
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8">
                <a 
                  href="#contact" 
                  className={`block w-full py-3 px-8 ${plan.popular ? 'bg-primary hover:bg-primary/90 text-white' : 'border border-primary text-primary hover:bg-primary hover:text-white'} font-medium rounded-lg text-center transition-colors duration-300`}
                >
                  Choose {plan.name}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-neutral mb-4">Need a custom solution? Let's discuss your specific requirements.</p>
          <a 
            href="#contact" 
            className="inline-block py-3 px-8 bg-neutral-dark hover:bg-neutral-dark/90 text-white font-medium rounded-lg transition-colors duration-300"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
