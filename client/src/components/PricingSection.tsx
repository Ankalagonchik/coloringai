import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
  {
    name: "Standard",
    price: "$499",
    period: "/project",
    description: "Perfect for individual clips or short home movies.",
    popular: false,
    features: [
      { text: "Up to 5 minutes of footage", included: true },
      { text: "Basic restoration and repair", included: true },
      { text: "HD resolution output", included: true },
      { text: "Digital delivery", included: true },
      { text: "Historical research", included: false }
    ],
    buttonText: "Get Started",
    buttonLink: "#contact",
    accent: false
  },
  {
    name: "Professional",
    price: "$1,499",
    period: "/project",
    description: "Ideal for documentary footage or medium-length films.",
    popular: true,
    features: [
      { text: "Up to 20 minutes of footage", included: true },
      { text: "Advanced restoration and repair", included: true },
      { text: "4K resolution output", included: true },
      { text: "Historical research included", included: true },
      { text: "USB/DVD delivery option", included: true }
    ],
    buttonText: "Get Started",
    buttonLink: "#contact",
    accent: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For major projects, archives, or institutions.",
    popular: false,
    features: [
      { text: "Unlimited footage length", included: true },
      { text: "Premium restoration services", included: true },
      { text: "8K output option", included: true },
      { text: "Dedicated project manager", included: true },
      { text: "Archive-quality preservation", included: true }
    ],
    buttonText: "Contact Sales",
    buttonLink: "#contact",
    accent: false
  }
];

const PricingSection = () => {
  const { ref, inView } = useFadeIn();

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-[#FAFAFA] to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#E11D48]">Pricing</span>
          </h2>
          <p className="opacity-80 text-lg">
            Transparent pricing structures to accommodate projects of all sizes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const { ref, inView } = useFadeIn();
            
            return (
              <motion.div 
                key={plan.name}
                ref={ref}
                className={`bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 ${plan.popular ? 'relative' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute top-6 right-6">
                    <Badge className="bg-[#E11D48] text-white px-3 py-1 rounded-full">
                      POPULAR
                    </Badge>
                  </div>
                )}
                
                <div className={`p-8 ${plan.accent ? 'bg-[#E11D48]' : 'bg-[#121212]'} text-white`}>
                  <h3 className="font-playfair text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="opacity-70 ml-1">{plan.period}</span>
                  </div>
                  <p className="opacity-70 text-sm">
                    {plan.description}
                  </p>
                </div>
                
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className={`flex items-start ${!feature.included ? 'opacity-50' : ''}`}>
                        {feature.included ? (
                          <Check className="h-5 w-5 text-[#E11D48] mr-2 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                        )}
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    asChild
                    className={`w-full py-3 ${
                      plan.accent 
                        ? 'bg-[#E11D48] hover:bg-[#E11D48]/90 text-white' 
                        : 'border border-[#121212] text-[#121212] hover:bg-[#121212] hover:text-white bg-transparent'
                    }`}
                  >
                    <a href={plan.buttonLink}>{plan.buttonText}</a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
