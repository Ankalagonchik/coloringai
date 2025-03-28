import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/use-fade-in";
import ComparisonSlider from "./ComparisonSlider";

const galleryItems = [
  {
    title: "1940s Street Scene",
    subtitle: "Historical downtown colorization",
    beforeImage: "https://images.unsplash.com/photo-1580478341213-659047bb1b0c?q=80&w=2065&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1610479956908-0639781bef86?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Family Portrait",
    subtitle: "Restored family heirloom",
    beforeImage: "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?q=80&w=2069&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1542038374755-a93543c5a8b4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Historical Building",
    subtitle: "Architectural restoration project",
    beforeImage: "https://images.unsplash.com/photo-1566561603521-c1c1e10bfdd7?q=80&w=2070&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1543726969-a1da85a6d334?q=80&w=2036&auto=format&fit=crop"
  },
  {
    title: "Vintage Cinema Scene",
    subtitle: "Classic movie colorization",
    beforeImage: "https://images.unsplash.com/photo-1551711974-faf0d66bf4be?q=80&w=2069&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1567705323043-d0e489de300d?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Industrial Revolution",
    subtitle: "Historical factory scene",
    beforeImage: "https://images.unsplash.com/photo-1516481392358-d904476ef3ee?q=80&w=2070&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1560800589-3d88e8c8c1d1?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Wartime Photo",
    subtitle: "Military archive restoration",
    beforeImage: "https://images.unsplash.com/photo-1529417305485-480f579e7578?q=80&w=2069&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1515179619140-23dd817da666?q=80&w=2069&auto=format&fit=crop"
  }
];

const GallerySection = () => {
  const { ref, inView } = useFadeIn();

  return (
    <section id="gallery" className="py-20 bg-[#121212] text-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#E11D48]">Gallery</span>
          </h2>
          <p className="opacity-80 text-lg">
            Explore our portfolio of historical moments brought to life through colorization.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => {
            const { ref, inView } = useFadeIn();
            
            return (
              <motion.div 
                key={item.title}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg mb-4">
                  <ComparisonSlider 
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    alt={item.title}
                    handleIcon={<ArrowLeft className="h-4 w-4" />}
                  />
                </div>
                <h3 className="font-playfair text-lg font-medium">{item.title}</h3>
                <p className="opacity-70 text-sm">{item.subtitle}</p>
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-[#E11D48] hover:bg-[#E11D48]/90 text-white px-8 py-6 rounded"
            size="lg"
            asChild
          >
            <a href="#contact">Discuss Your Project</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
