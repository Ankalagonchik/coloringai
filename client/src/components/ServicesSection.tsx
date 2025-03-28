import { motion } from "framer-motion";
import { useFadeIn } from "@/hooks/use-fade-in";
import { Film, Layers, Video } from "lucide-react";

const services = [
  {
    icon: <Film className="h-8 w-8" />,
    title: "AI Film Colorization",
    description: "Transform your black and white footage into vivid color with our advanced AI technology that analyzes and processes each frame.",
    features: [
      "Neural network accuracy",
      "Deep learning algorithms",
      "Custom AI color models"
    ]
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "AI-Enhanced Restoration",
    description: "Our machine learning models identify and repair damage, scratches, and missing frames automatically with minimal human intervention.",
    features: [
      "AI scratch detection",
      "Automated repair",
      "Smart noise reduction"
    ]
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: "Neural Upscaling",
    description: "Our advanced neural networks analyze every pixel to intelligently increase resolution without losing quality.",
    features: [
      "8K AI upscaling",
      "Neural detail enhancement",
      "Texture preservation"
    ]
  }
];

const ServicesSection = () => {
  const { ref, inView } = useFadeIn();

  return (
    <section id="services" className="py-20 bg-[#121212] text-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            AI-Powered <span className="text-[#E11D48]">Solutions</span>
          </h2>
          <p className="opacity-80 text-lg">
            Our cutting-edge artificial intelligence transforms old, damaged, and black & white footage into stunning high-definition color masterpieces.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { ref, inView } = useFadeIn();
            return (
              <motion.div 
                key={service.title}
                ref={ref}
                className="bg-[#121212]/80 p-8 rounded-lg border border-gray-800 hover:border-[#E11D48] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-[#E11D48]/20 rounded-full flex items-center justify-center mb-6 text-[#E11D48]">
                  {service.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3">{service.title}</h3>
                <p className="opacity-70 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="h-4 w-4 text-[#E11D48] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="opacity-70">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-block text-[#E11D48] hover:underline">Learn more →</a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
