import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

const Navigation = ({ mobile = false, onItemClick }: NavigationProps) => {
  const location = useLocation();

  if (mobile) {
    return (
      <nav className="flex flex-col space-y-4">
        <Link 
          to="/" 
          className={cn(
            "text-lg font-medium transition-colors hover:text-primary",
            location.pathname === "/" ? "text-primary" : "text-foreground"
          )}
          onClick={onItemClick}
        >
          Home
        </Link>
        
        <div className="space-y-2">
          <div className="text-lg font-medium text-foreground">Our Creations</div>
          <div className="pl-4 space-y-2">
            <Link 
              to="/creations/shawls" 
              className="block text-muted-foreground hover:text-primary transition-colors"
              onClick={onItemClick}
            >
              Bespoke Shawls
            </Link>
            <Link 
              to="/creations/baby-blankets" 
              className="block text-muted-foreground hover:text-primary transition-colors"
              onClick={onItemClick}
            >
              Custom Baby Blankets
            </Link>
            <Link 
              to="/creations/baby-clothes" 
              className="block text-muted-foreground hover:text-primary transition-colors"
              onClick={onItemClick}
            >
              Personalized Baby Clothes
            </Link>
            <Link 
              to="/creations/gallery" 
              className="block text-muted-foreground hover:text-primary transition-colors"
              onClick={onItemClick}
            >
              Inspiration Gallery
            </Link>
          </div>
        </div>
        
        <Link 
          to="/process" 
          className={cn(
            "text-lg font-medium transition-colors hover:text-primary",
            location.pathname === "/process" ? "text-primary" : "text-foreground"
          )}
          onClick={onItemClick}
        >
          The Bespoke Process
        </Link>
        
        <Link 
          to="/story" 
          className={cn(
            "text-lg font-medium transition-colors hover:text-primary",
            location.pathname === "/story" ? "text-primary" : "text-foreground"
          )}
          onClick={onItemClick}
        >
          Our Story
        </Link>
        
        <Link 
          to="/contact" 
          className={cn(
            "text-lg font-medium transition-colors hover:text-primary",
            location.pathname === "/contact" ? "text-primary" : "text-foreground"
          )}
          onClick={onItemClick}
        >
          Contact
        </Link>
        
        <Link 
          to="/blog" 
          className={cn(
            "text-lg font-medium transition-colors hover:text-primary",
            location.pathname === "/blog" ? "text-primary" : "text-foreground"
          )}
          onClick={onItemClick}
        >
          Blog
        </Link>
      </nav>
    );
  }

  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-8">
        <NavigationMenuItem>
          <NavigationMenuLink 
            asChild
            className={cn(
              "font-medium transition-colors hover:text-primary",
              location.pathname === "/" ? "text-primary" : "text-foreground"
            )}
          >
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium bg-transparent hover:bg-accent">
            Our Creations
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[500px] gap-3 p-6 bg-popover">
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    to="/creations"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-soft-gradient p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mb-2 mt-4 text-lg font-playfair font-medium">
                      Our Creations
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Discover our collection of bespoke cashmere pieces, each crafted to your unique vision.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>
              <div className="grid gap-2">
                <NavigationMenuLink asChild>
                  <Link 
                    to="/creations/shawls"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Bespoke Shawls</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Luxurious shawls tailored to your style
                    </p>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/creations/baby-blankets"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Custom Baby Blankets</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Gentle, personalized comfort for little ones
                    </p>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/creations/baby-clothes"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Personalized Baby Clothes</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Precious garments for precious moments
                    </p>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/creations/gallery"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Inspiration Gallery</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Past commissions and artistic inspiration
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink 
            asChild
            className={cn(
              "font-medium transition-colors hover:text-primary",
              location.pathname === "/process" ? "text-primary" : "text-foreground"
            )}
          >
            <Link to="/process">The Bespoke Process</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink 
            asChild
            className={cn(
              "font-medium transition-colors hover:text-primary",
              location.pathname === "/story" ? "text-primary" : "text-foreground"
            )}
          >
            <Link to="/story">Our Story</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink 
            asChild
            className={cn(
              "font-medium transition-colors hover:text-primary",
              location.pathname === "/contact" ? "text-primary" : "text-foreground"
            )}
          >
            <Link to="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink 
            asChild
            className={cn(
              "font-medium transition-colors hover:text-primary",
              location.pathname === "/blog" ? "text-primary" : "text-foreground"
            )}
          >
            <Link to="/blog">Blog</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;