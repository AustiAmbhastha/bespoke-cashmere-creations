import { Mail } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <span className="font-light">Free Shipping on Orders Over $500</span>
          <span className="hidden md:inline font-light">Handcrafted with Love</span>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="mailto:hello@auracashmere.com" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline font-light">hello@auracashmere.com</span>
          </a>
          <span className="hidden lg:inline font-light">Custom Orders: 4-6 Weeks</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;