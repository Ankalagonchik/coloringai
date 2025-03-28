import { motion } from "framer-motion";
import { useFadeIn } from "@/hooks/use-fade-in";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { ref: refLeft, inView: inViewLeft } = useFadeIn();
  const { ref: refRight, inView: inViewRight } = useFadeIn();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-100 to-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              ref={refLeft}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inViewLeft ? 1 : 0, y: inViewLeft ? 0 : 20 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-[#E11D48]">Preserve</span> Your History?
              </h2>
              <p className="text-lg mb-8 opacity-80">
                Contact our team to discuss your film restoration and colorization needs. We're here to bring your memories and historical footage back to life.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="text-[#E11D48] mt-1 mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                    <p className="opacity-70">
                      123 Restoration Avenue<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#E11D48] mt-1 mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="opacity-70">
                      info@filmrestoration.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#E11D48] mt-1 mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="opacity-70">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#121212] text-white flex items-center justify-center hover:bg-[#E11D48] transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#121212] text-white flex items-center justify-center hover:bg-[#E11D48] transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#121212] text-white flex items-center justify-center hover:bg-[#E11D48] transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#121212] text-white flex items-center justify-center hover:bg-[#E11D48] transition-colors duration-200">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              ref={refRight}
              className="bg-white p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inViewRight ? 1 : 0, y: inViewRight ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-playfair text-2xl font-bold mb-6">Get in Touch</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Needed</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="colorization">Film Colorization</SelectItem>
                            <SelectItem value="restoration">Restoration & Repair</SelectItem>
                            <SelectItem value="enhancement">Resolution Enhancement</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project..." 
                            rows={4} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full py-6 bg-[#E11D48] hover:bg-[#E11D48]/90 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
