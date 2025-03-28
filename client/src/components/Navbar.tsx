import { useState } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger
} from "@/components/ui/sheet";

const navLinks = [
  { title: "Home", href: "#" },
  { title: "Services", href: "#services" },
  { title: "Gallery", href: "#gallery" },
  { title: "Pricing", href: "#pricing" },
  { title: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#121212]/90 backdrop-blur-sm z-50 text-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="font-playfair text-2xl font-bold tracking-wider cursor-pointer">
                AI<span className="text-[#E11D48]">Colorize</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.title}
                  href={link.href} 
                  className="font-medium hover:text-[#E11D48] transition-colors duration-200"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#FAFAFA]">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#121212] text-[#FAFAFA] border-[#333] w-[250px]">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      className="text-lg font-medium hover:text-[#E11D48] transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
