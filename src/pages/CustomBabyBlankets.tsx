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
              Custom Baby Blankets
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Wrap your precious little one in luxury with our custom cashmere baby blankets. 
              Each blanket is crafted with the softest materials and personalized with love.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                Ultra-Soft Comfort
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our baby blankets are crafted from the finest, ultra-soft cashmere that's gentle 
                on delicate skin. Each blanket is hypoallergenic and temperature-regulating, 
                ensuring your baby's comfort in any season.
              </p>
              <Button asChild className="luxury-button">
                <Link to="/inquiry">Create Custom Blanket</Link>
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