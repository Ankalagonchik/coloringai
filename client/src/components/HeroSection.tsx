import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ComparisonSlider from "./ComparisonSlider";
import FilmStrip from "./FilmStrip";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden">
      <FilmStrip position="top" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-16 pb-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            AI-Powered <span className="text-[#E11D48]">Film Colorization</span>
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            Advanced AI technology transforms your black and white footage into stunning color, breathing new life into historical moments and precious memories.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-[#E11D48] hover:bg-[#E11D48]/90 text-white"
              asChild
            >
              <a href="#services">Our Services</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#121212] text-[#121212] hover:bg-[#121212] hover:text-white"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-2xl">
            <ComparisonSlider 
              beforeImage="https://images.unsplash.com/photo-1571435755209-1de9bd195d7c?q=80&w=1974&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1611523658822-385aa008324c?q=80&w=2070&auto=format&fit=crop"
              alt="Film colorization comparison"
              handleIcon={<ArrowRight className="h-4 w-4" />}
            />
          </div>
          <div className="text-center mt-4 opacity-70 text-sm">
            Drag the slider to see the before and after transformation
          </div>
        </motion.div>
      </div>

      <FilmStrip position="bottom" />
    </section>
  );
};

export default HeroSection;
