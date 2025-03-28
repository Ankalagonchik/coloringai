import { motion } from "framer-motion";
import { useFadeIn } from "@/hooks/use-fade-in";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "The team at FilmRestoration brought my grandparents' wedding film back to life with stunning colorization. Seeing their special day in color for the first time brought tears to our eyes.",
    author: "Sarah Thompson",
    role: "Family Archive Client",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    quote: "As a documentary filmmaker, the historical accuracy of the colorization was paramount. FilmRestoration exceeded my expectations with their attention to detail and research.",
    author: "Michael Rodriguez",
    role: "Documentary Filmmaker",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    quote: "Our museum's archive of historical footage was transformed by the team at FilmRestoration. Visitors now engage with our exhibits in a completely new way.",
    author: "Dr. Elizabeth Chen",
    role: "Museum Curator",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  const { ref, inView } = useFadeIn();

  return (
    <section className="py-20 bg-[#121212] text-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-[#E11D48]">Testimonials</span>
          </h2>
          <p className="opacity-80 text-lg">
            Hear what our clients have to say about their restoration experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const { ref, inView } = useFadeIn();
            
            return (
              <motion.div 
                key={testimonial.author}
                ref={ref}
                className="bg-[#121212]/50 p-8 rounded-lg border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex mb-6">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#E11D48] fill-[#E11D48]" />
                  ))}
                </div>
                <p className="italic mb-6 opacity-80">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden">
                      <img 
                        src={testimonial.avatar} 
                        className="w-full h-full object-cover" 
                        alt={testimonial.author} 
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm opacity-60">{testimonial.role}</p>
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

export default TestimonialsSection;
