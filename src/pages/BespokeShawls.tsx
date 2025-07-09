import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BespokeShawls = () => {
  const shawlStyles = [
    {
      name: "The Reversible Heirloom Shawl",
      description: "A dual-sided masterpiece woven from two complementary shades of cashmere. Incredibly versatile, offering two distinct looks in one.",
      features: ["Dual-sided Design", "Complementary Color Pairing", "Hand-Finished Edges", "Versatile Styling"],
      startingPrice: "Investment: $350 - $1,200",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      name: "The Artisanal Embroidered Shawl",
      description: "Our signature offering. A classic woven shawl that serves as a canvas for bespoke, hand-guided embroidery, tailored to the client's vision.",
      features: ["Bespoke Embroidery", "Hand-Guided Artistry", "Custom Design", "Premium Cashmere"],
      startingPrice: "Investment: $450 - $1,200",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      name: "The Featherlight Lace-Knit Shawl",
      description: "An exquisitely delicate shawl featuring intricate, open-knit patterns. Perfect for temperate evenings or as a sophisticated bridal accessory.",
      features: ["Open-Knit Patterns", "Delicate Construction", "Bridal Suitable", "Intricate Design"],
      startingPrice: "Investment: $400 - $850",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      name: "The Signature Pashmina Stole",
      description: "A timeless, generously sized wrap made from the finest pashmina cashmere, finished with hand-twisted tassels.",
      features: ["Finest Pashmina", "Generous Size", "Hand-Twisted Tassels", "Timeless Design"],
      startingPrice: "Investment: $350 - $750",
      image: "photo-1526374965328-7f61d4dc18c5"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Where Beloved Memories Live Forever
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Your rescue dog's gentle eyes, hand-embroidered with museum-quality precision. Your grandmother's 
              wedding ring pattern, recreated in golden cashmere thread. Each shawl becomes a wearable sanctuary 
              of memory, crafted by artisans who understand that luxury isn't about price—it's about preserving souls.
            </p>
            <div className="bg-card/50 p-6 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground italic">
                "We don't just embroider pets—we capture their spirit. The way Bella tilted her head, 
                how Max's ears perked up. Every stitch honors the love that made them family."
              </p>
              <p className="mt-2 text-primary font-medium">— Isabella Chen, Pet Portrait Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shawl Styles */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {shawlStyles.map((shawl, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                      {shawl.name}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {shawl.description}
                    </p>
                    <p className="text-xl font-semibold text-primary">
                      {shawl.startingPrice}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Features:</h3>
                    {shawl.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="luxury-button">
                    <Link to="/inquiry">Customize This Shawl</Link>
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="luxury-card border-0 overflow-hidden">
                    <div className="aspect-[4/3]">
                      <img 
                        src={`https://images.unsplash.com/${shawl.image}?w=600&h=450&fit=crop&crop=center`}
                        alt={shawl.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-24 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Customization Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Make your shawl truly unique with our extensive customization options.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Colors",
                options: ["Ivory", "Charcoal", "Sage", "Dusty Rose", "Navy", "Camel", "Custom Match"]
              },
              {
                title: "Embroidery",
                options: ["Monograms", "Floral Motifs", "Geometric Patterns", "Custom Designs"]
              },
              {
                title: "Edge Finish",
                options: ["Hand-rolled", "Fringed", "Blanket Stitch", "Clean Edge"]
              },
              {
                title: "Size Options",
                options: ["Petite 50\"x20\"", "Standard 70\"x28\"", "Oversized 80\"x32\"", "Custom Size"]
              }
            ].map((option, index) => (
              <Card key={index} className="luxury-card border-0">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-playfair font-semibold text-primary">
                    {option.title}
                  </h3>
                  <div className="space-y-2">
                    {option.options.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-sm text-muted-foreground">
                        • {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BespokeShawls;