import { motion } from "framer-motion";
import { useFadeIn } from "@/hooks/use-fade-in";

const processSteps = [
  {
    number: 1,
    title: "AI Analysis & Scene Detection",
    description: "Our AI scans every frame of your footage, automatically identifying scenes, objects, lighting conditions, and historical context to build a customized processing model.",
    image: "https://images.unsplash.com/photo-1616321507403-9e5d7b13ab2f?q=80&w=2069&auto=format&fit=crop"
  },
  {
    number: 2,
    title: "Neural Restoration",
    description: "Our machine learning algorithms detect and repair damage, remove noise, stabilize footage, and enhance details that would be impossible to recover with traditional methods.",
    image: "https://images.unsplash.com/photo-1631683708853-608fd5514cc5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: 3,
    title: "Deep Learning Colorization",
    description: "Our proprietary neural networks analyze visual elements, lighting, and historical reference data to automatically apply accurate and vibrant colors to each frame.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2074&auto=format&fit=crop"
  },
  {
    number: 4,
    title: "AI Upscaling & Delivery",
    description: "Advanced AI enhances resolution up to 8K, applies intelligent frame interpolation for smoother playback, and optimizes your footage for your preferred delivery format.",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop"
  }
];

const ProcessSection = () => {
  const { ref, inView } = useFadeIn();

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            AI <span className="text-[#E11D48]">Workflow</span>
          </h2>
          <p className="opacity-80 text-lg">
            Our advanced neural networks and machine learning algorithms process your footage in four powerful steps, ensuring perfect results with minimal human intervention.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => {
            const { ref, inView } = useFadeIn();
            const isLast = index === processSteps.length - 1;
            
            return (
              <motion.div 
                key={step.number}
                ref={ref}
                className="flex mb-12 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex-none mr-6">
                  <div className="w-12 h-12 rounded-full bg-[#E11D48] text-white flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  {!isLast && (
                    <div className="h-full w-0.5 bg-gray-300 mx-auto mt-4"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="opacity-70 mb-4">
                    {step.description}
                  </p>
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      className="object-cover w-full h-full" 
                      src={step.image} 
                      alt={`${step.title} process`} 
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
