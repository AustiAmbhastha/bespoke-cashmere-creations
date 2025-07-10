import { Mail, Globe, DollarSign } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TopHeader = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <span className="font-light">Free Shipping on Orders Over $500</span>
          <span className="hidden md:inline font-light">Handcrafted with Love</span>
        </div>
        <div className="flex items-center space-x-4">
          {/* Currency Switcher */}
          <Select defaultValue="usd">
            <SelectTrigger className="w-20 h-8 bg-transparent border-primary-foreground/20 text-primary-foreground text-xs">
              <DollarSign className="h-3 w-3" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
              <SelectItem value="gbp">GBP</SelectItem>
              <SelectItem value="cad">CAD</SelectItem>
            </SelectContent>
          </Select>

          {/* Language Switcher */}
          <Select defaultValue="en">
            <SelectTrigger className="w-16 h-8 bg-transparent border-primary-foreground/20 text-primary-foreground text-xs">
              <Globe className="h-3 w-3" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">EN</SelectItem>
              <SelectItem value="fr">FR</SelectItem>
              <SelectItem value="es">ES</SelectItem>
              <SelectItem value="de">DE</SelectItem>
            </SelectContent>
          </Select>

          <a 
            href="mailto:hello@cloudspuncashmere.com" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline font-light">hello@cloudspuncashmere.com</span>
          </a>
          <span className="hidden lg:inline font-light">Custom Orders: 4-6 Weeks</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;