import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PersonalizedBabyClothes = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Tiny Treasures, Timeless Artistry
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Miniature masterpieces that honor family traditions. Each garment features hand-sewn details 
              that recreate christening gown elements, incorporate meaningful family symbols, or feature 
              delicate pet silhouettes—artisanal luxury that grows with your family's story.
            </p>
            <div className="bg-card/50 p-6 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground italic">
                "Every tiny stitch carries the weight of generational love. We create clothes that become 
                family legends, passed down with the stories they embody."
              </p>
              <p className="mt-2 text-primary font-medium">— Heritage Design Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="luxury-card border-0 overflow-hidden">
              <div className="aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=450&fit=crop&crop=center"
                  alt="Personalized baby clothes"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                Where Family Legacy Meets Gentle Luxury
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our master seamstresses recreate great-grandmother's christening gown details in modern comfort, 
                embroider beloved pet silhouettes with tender precision, or integrate family crests into tiny 
                garments. Each piece becomes a wearable connection to your family's unique story.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-primary font-medium text-sm italic">
                  "When families trust us with their most precious memories, we honor that with our finest artistry"
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-xl font-playfair font-semibold text-primary">
                  Investment: $200 - $650
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 bg-card/50 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Christening Gown Recreation</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-card/50 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Pet Portrait Integration</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-card/50 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Family Symbol Embroidery</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-card/50 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Hand-Finished Seams</span>
                  </div>
                </div>
              </div>
              <Button asChild className="luxury-button">
                <Link to="/inquiry">Create Legacy Garment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalizedBabyClothes;