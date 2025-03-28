import { Link } from "wouter";
import { MapPin, Mail, Phone } from "lucide-react";
import FilmStrip from "./FilmStrip";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" }
];

const serviceLinks = [
  { name: "Film Colorization", href: "#services" },
  { name: "Restoration & Repair", href: "#services" },
  { name: "Resolution Enhancement", href: "#services" },
  { name: "Audio Restoration", href: "#services" },
  { name: "Archive Preservation", href: "#services" }
];

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-[#FAFAFA] py-12">
      <FilmStrip position="top" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="mb-6">
              <Link href="/">
                <span className="font-playfair text-2xl font-bold tracking-wider cursor-pointer">
                  FilmRestoration<span className="text-[#E11D48]">.</span>
                </span>
              </Link>
            </div>
            <p className="opacity-60 mb-6">
              Preserving history through expert film restoration and colorization services.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="opacity-60 hover:opacity-100 hover:text-[#E11D48] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="opacity-60 hover:opacity-100 hover:text-[#E11D48] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#E11D48] mr-2 mt-0.5" />
                <span className="opacity-60">
                  123 Restoration Avenue<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#E11D48] mr-2 mt-0.5" />
                <span className="opacity-60">
                  info@filmrestoration.com
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#E11D48] mr-2 mt-0.5" />
                <span className="opacity-60">
                  +1 (555) 123-4567
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FilmRestoration Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="opacity-60 hover:opacity-100 hover:text-[#E11D48] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 hover:text-[#E11D48] transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      
      <FilmStrip position="bottom" className="mt-8" />
    </footer>
  );
};

export default Footer;
