import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const OurCreations = () => {
  const creations = [
    {
      title: "Heritage Shawls",
      description: "Where your beloved pet's portrait becomes eternal art, hand-embroidered by master artisans who've spent decades perfecting photo-realistic cashmere embroidery. Each shawl transforms precious memories into luxury heirlooms.",
      image: "photo-1581091226825-a6a2a5aee158",
      link: "/creations/shawls",
      features: ["Pet Portrait Embroidery", "Family Crest Restoration", "Swiss Machine Precision", "200-Year Scottish Techniques"],
      investment: "$350 - $1,200",
      story: "From rescue dog photos to grandmother's locket—we embroider your heart onto cashmere"
    },
    {
      title: "Memory Baby Blankets",
      description: "Transform childhood photographs, wedding dress lace, or family patterns into ultra-soft cashmere blankets. Our artisans weave generational stories into each fiber, creating treasures that become family legends.",
      image: "photo-1721322800607-8c38375eef04", 
      link: "/creations/baby-blankets",
      features: ["Photo-to-Thread Technology", "Wedding Dress Elements", "Generational Patterns", "Heirloom Packaging"],
      investment: "$280 - $850",
      story: "When parents bring us their baby's first photo, magic begins"
    },
    {
      title: "Legacy Baby Clothes",
      description: "Miniature masterpieces that honor family traditions. Hand-sewn details recreate christening gown elements, incorporate meaningful symbols, or feature delicate pet silhouettes—luxury that grows with your family's story.",
      image: "photo-1486312338219-ce68d2c6f44d",
      link: "/creations/baby-clothes", 
      features: ["Christening Recreations", "Pet Silhouettes", "Family Symbol Integration", "Gentle Hand-Finishing"],
      investment: "$200 - $650",
      story: "Every tiny garment carries the weight of family love"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-luxury-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium border border-primary/20">
                ✨ Artisan-Crafted Since 2020 • Museum-Quality Precision
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-primary leading-tight">
                Where <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Memories</span>
                <br />
                Become Masterpieces
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                From beloved pets immortalized in cashmere thread to family crests restored with museum-quality precision—
                discover why discerning collectors invest $200-$1,200 in pieces that carry their soul.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">15-25 Hours</div>
                <div className="text-sm text-muted-foreground">Per Hand-Embroidered Portrait</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">Photo-Realistic</div>
                <div className="text-sm text-muted-foreground">Swiss Precision Threading</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">Generational</div>
                <div className="text-sm text-muted-foreground">Heirloom Quality</div>
              </div>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-border max-w-3xl mx-auto">
              <p className="text-lg italic text-muted-foreground mb-4">
                "When clients bring us their rescue dog's photo or grandmother's wedding ring pattern, 
                we understand we're not just creating luxury—we're preserving souls in cashmere."
              </p>
              <p className="text-primary font-medium">— Isabella Chen, Master Pet Portrait Artisan</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="luxury-button text-lg px-10 py-6">
                <Link to="/inquiry">Commission Your Masterpiece</Link>
              </Button>
              <Button variant="outline" asChild className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-lg">
                <Link to="/process">Discover Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Creations */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {creations.map((creation, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                      {creation.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {creation.description}
                    </p>
                    <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-primary font-medium text-sm italic">
                        "{creation.story}"
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-2xl font-playfair font-semibold text-primary">
                      Investment: {creation.investment}
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {creation.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3 bg-card/50 p-3 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm font-medium text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="luxury-button">
                      <Link to={creation.link}>Explore {creation.title}</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to="/inquiry">Customize This Design</Link>
                    </Button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="luxury-card border-0 overflow-hidden">
                    <div className="aspect-[4/3]">
                      <img 
                        src={`https://images.unsplash.com/${creation.image}?w=600&h=450&fit=crop&crop=center`}
                        alt={creation.title}
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

      {/* Inspiration Gallery Preview */}
      <section className="py-24 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Inspiration Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our past commissions and artistic inspirations. Every piece tells a unique story.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "photo-1649972904349-6e44c42644a7",
              "photo-1581091226825-a6a2a5aee158", 
              "photo-1721322800607-8c38375eef04",
              "photo-1486312338219-ce68d2c6f44d",
              "photo-1526374965328-7f61d4dc18c5",
              "photo-1649972904349-6e44c42644a7"
            ].map((image, index) => (
              <Card key={index} className="luxury-card border-0 overflow-hidden group cursor-pointer">
                <div className="aspect-square">
                  <img 
                    src={`https://images.unsplash.com/${image}?w=400&h=400&fit=crop&crop=center`}
                    alt={`Gallery piece ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild className="luxury-button">
              <Link to="/creations/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold">
              Ready to Begin Your Custom Creation?
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Each piece is crafted specifically for you. Share your vision with us and let's create 
              something extraordinary together.
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

export default OurCreations;