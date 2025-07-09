import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BlanketsThrows = () => {
  const blanketStyles = [
    {
      name: "The Heirloom Woven Blanket",
      description: "A dense, exceptionally soft blanket woven from pure cashmere, featuring a classic border. Designed to be passed down through generations.",
      features: ["Pure Cashmere Construction", "Classic Border Design", "Generational Durability", "Museum-Quality Finish"],
      investment: "$650 - $1,500",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      name: "The Classic Cable Knit Throw",
      description: "A thick, cozy blanket featuring traditional cable knit patterns for a touch of rustic elegance and unparalleled warmth.",
      features: ["Traditional Cable Knit", "Rustic Elegance", "Superior Warmth", "Artisanal Craftsmanship"],
      investment: "$450 - $950",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      name: "The Herringbone Weave Blanket",
      description: "A sophisticated and durable blanket with a timeless herringbone pattern, adding texture and classic style to any interior.",
      features: ["Herringbone Pattern", "Sophisticated Design", "Exceptional Durability", "Classic Style"],
      investment: "$550 - $1,200",
      image: "photo-1721322800607-8c38375eef04"
    },
    {
      name: "The Bespoke Monogrammed Blanket",
      description: "A personalized heirloom where clients can have initials, family crests, or significant dates delicately embroidered onto a corner.",
      features: ["Custom Monogramming", "Family Crest Options", "Date Embroidery", "Personalized Heirloom"],
      investment: "$750 - $1,500",
      image: "photo-1486312338219-ce68d2c6f44d"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-luxury-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-accent/20 rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-primary/20 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-accent/20 rotate-12"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium border border-primary/20">
                ✨ Handwoven Comfort • Generational Quality
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-primary leading-tight">
                Luxury <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Comfort</span>
                <br />
                Woven to Last
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Substantial, soft, and designed to be a centerpiece of comfort in any home. Each blanket and throw 
                is crafted with meticulous attention to detail, creating pieces that become treasured family heirlooms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">Pure Cashmere</div>
                <div className="text-sm text-muted-foreground">Finest Mongolian Fibers</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">Heirloom</div>
                <div className="text-sm text-muted-foreground">Generational Quality</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">Handwoven</div>
                <div className="text-sm text-muted-foreground">Traditional Techniques</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="luxury-button text-lg px-10 py-6">
                <Link to="/inquiry">Commission Your Blanket</Link>
              </Button>
              <Button variant="outline" asChild className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-lg">
                <Link to="/process">Our Crafting Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blanket Styles */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {blanketStyles.map((blanket, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                      {blanket.name}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {blanket.description}
                    </p>
                    <div className="text-2xl font-playfair font-semibold text-primary">
                      Investment: {blanket.investment}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-playfair font-semibold text-primary">Features:</h3>
                    <div className="space-y-2">
                      {blanket.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="bg-card/30 p-3 rounded-lg border-l-4 border-primary/50">
                          <span className="text-sm font-medium text-foreground">• {feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="luxury-button">
                      <Link to="/inquiry">Customize This Blanket</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to="/inquiry">View Customization Options</Link>
                    </Button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="luxury-card border-0 overflow-hidden relative">
                    <div className="aspect-[4/3] relative">
                      <img 
                        src={`https://images.unsplash.com/${blanket.image}?w=600&h=450&fit=crop&crop=center`}
                        alt={blanket.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10"></div>
                      <div className="absolute bottom-4 right-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg">
                        <span className="text-sm font-medium">Handwoven Quality</span>
                      </div>
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
              Create your perfect blanket with our extensive range of customization options.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Sizes",
                options: ["Throw 50\"×60\"", "Queen 90\"×90\"", "King 108\"×90\"", "Custom Size"]
              },
              {
                title: "Colors",
                options: ["Ivory", "Charcoal", "Sage", "Dusty Rose", "Navy", "Camel", "Custom Color"]
              },
              {
                title: "Borders",
                options: ["Classic Edge", "Contrasting Border", "Embroidered Edge", "Custom Design"]
              },
              {
                title: "Personalization",
                options: ["Monogram", "Family Crest", "Date Embroidery", "Custom Symbol"]
              }
            ].map((option, index) => (
              <Card key={index} className="luxury-card border-0 p-6">
                <h3 className="text-lg font-playfair font-semibold text-primary mb-4">
                  {option.title}
                </h3>
                <div className="space-y-2">
                  {option.options.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-sm text-muted-foreground">
                      • {item}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold">
              Ready to Create Your Heirloom Blanket?
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Each blanket is crafted specifically for you, designed to become a treasured family heirloom 
              that brings comfort for generations.
            </p>
            <Button asChild variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-lg">
              <Link to="/inquiry">Start Your Custom Order</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlanketsThrows;