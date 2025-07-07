import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CustomBabyBlankets = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Where First Breaths Become Forever Treasures
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Transform your baby's hospital bracelet into embroidered thread. Recreate grandmother's christening 
              gown lace in cashmere softness. Each blanket becomes a sanctuary of love, woven with the stories 
              that make families extraordinary. This is why discerning parents invest $280-$850 in memory preservation.
            </p>
            <div className="bg-card/50 p-6 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground italic">
                "When parents bring us their baby's first ultrasound photo or a snippet of their wedding dress, 
                we understand we're not just making blankets—we're weaving love into legacy."
              </p>
              <p className="mt-2 text-primary font-medium">— Master Artisan, Memory Preservation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                Generational Love, Woven Into Cashmere
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our artisans specialize in transforming precious family elements into ultra-soft cashmere blankets. 
                Wedding dress lace becomes delicate border embroidery. Great-grandmother's jewelry patterns are 
                recreated in golden thread. Each blanket tells your family's unique love story.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-primary font-medium text-sm italic">
                  "Photo-to-thread technology captures baby's first smile in embroidered perfection"
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-xl font-playfair font-semibold text-primary">
                  Investment: $280 - $850
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 bg-card/50 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Wedding Dress Element Integration</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-card/50 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Photo-to-Embroidery Technology</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-card/50 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Hypoallergenic Mongolian Cashmere</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-card/50 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Heirloom Presentation Packaging</span>
                  </div>
                </div>
              </div>
              <Button asChild className="luxury-button">
                <Link to="/inquiry">Begin Memory Blanket</Link>
              </Button>
            </div>
            
            <Card className="luxury-card border-0 overflow-hidden">
              <div className="aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=450&fit=crop&crop=center"
                  alt="Custom baby blanket"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomBabyBlankets;