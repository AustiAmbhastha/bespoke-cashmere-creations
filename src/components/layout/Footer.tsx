import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-semibold">Cloudspun Cashmere</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Crafting bespoke cashmere pieces with traditional craftsmanship, hand embroidery, and machine precision. 
              Each creation tells your unique story through artisanal luxury.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold font-playfair text-lg">Company</h4>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/story" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Our Story
              </Link>
              <Link 
                to="/process" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                The Bespoke Process
              </Link>
              <Link 
                to="/contact" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="font-semibold font-playfair text-lg">Customer Care</h4>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/faq" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                FAQ for Custom Orders
              </Link>
              <Link 
                to="/shipping" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Shipping & Timelines
              </Link>
              <Link 
                to="/care" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Cashmere Care Guide
              </Link>
              <Link 
                to="/privacy" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/return-refund" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Return & Refund
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold font-playfair text-lg">Join Our Journey</h4>
            <p className="text-primary-foreground/80 text-sm">
              Subscribe to receive updates on new collections and exclusive insights into our craft.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button 
                variant="secondary" 
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-primary-foreground/80">
            <span>&copy; 2025 Cloudspun Cashmere. All rights reserved.</span>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/return-refund" className="hover:text-primary-foreground transition-colors">
                Return & Refund
              </Link>
            </div>
          </div>
          <div className="text-sm text-primary-foreground/80">
            Handcrafted with ♡ in our atelier
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;