import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const AboutSection = () => {
  const { ref: refLeft, inView: inViewLeft } = useFadeIn();
  const { ref: refRight, inView: inViewRight } = useFadeIn();

  return (
    <section className="py-16 bg-gradient-to-b from-[#FAFAFA] to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              ref={refLeft}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inViewLeft ? 1 : 0, y: inViewLeft ? 0 : 20 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                AI-Driven <span className="text-[#E11D48]">Colorization Technology</span>
              </h2>
              <p className="text-lg mb-6 opacity-80">
                At FilmRestoration, we harness the power of artificial intelligence to transform black and white footage into vibrant, historically accurate color. Our proprietary AI algorithms analyze each frame with precision unattainable by manual methods.
              </p>
              <p className="text-lg mb-8 opacity-80">
                Our neural networks have been trained on thousands of historical films and photographs to recognize lighting, textures, and historical color schemes, ensuring stunning results for any era or film type.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center">
                  <div className="text-[#E11D48] mr-2">
                    <Check className="h-6 w-6" />
                  </div>
                  <span>Historical Accuracy</span>
                </div>
                <div className="flex items-center">
                  <div className="text-[#E11D48] mr-2">
                    <Check className="h-6 w-6" />
                  </div>
                  <span>HD Resolution</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              ref={refRight}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inViewRight ? 1 : 0, y: inViewRight ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img 
                  className="object-cover w-full h-full" 
                  src="https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Film restoration process" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#121212] text-[#FAFAFA] p-4 rounded shadow-lg max-w-xs">
                <p className="font-playfair italic">
                  "Our mission is to ensure no moment of history fades to black and white."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
