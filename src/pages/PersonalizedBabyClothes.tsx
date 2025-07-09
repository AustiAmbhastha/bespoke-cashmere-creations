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

      {/* Product Collections */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {[
              {
                name: "The Welcome Home Set (Gift Set)",
                description: "The ultimate heirloom gift. This curated set includes: A hand-finished Cardigan with mother-of-pearl buttons, A pair of matching Baby Booties, A classic Little Bonnet or Beanie.",
                investment: "$350 - $650",
                image: "photo-1486312338219-ce68d2c6f44d"
              },
              {
                name: "The Heirloom Capelet",
                description: "A beautiful and practical alternative to a coat for special occasions, fastening with a simple ribbon or a single button.",
                investment: "$200 - $450",
                image: "photo-1721322800607-8c38375eef04"
              },
              {
                name: "The Snuggle Romper Suit",
                description: "A one-piece outfit with simple fastenings, enveloping the baby in head-to-toe cashmere comfort.",
                investment: "$180 - $350",
                image: "photo-1582562124811-c09040d0a901"
              },
              {
                name: "Cashmere Baby Socks & Booties",
                description: "Soft, warm, and designed to stay on little feet. Sold separately or in gift sets.",
                investment: "$150 - $280",
                image: "photo-1518495973542-4542c06a5843"
              }
            ].map((product, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                      {product.name}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    <div className="text-2xl font-playfair font-semibold text-primary">
                      Investment: {product.investment}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="luxury-button">
                      <Link to="/inquiry">Customize This Piece</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to="/inquiry">View Full Collection</Link>
                    </Button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="luxury-card border-0 overflow-hidden relative">
                    <div className="aspect-[4/3] relative">
                      <img 
                        src={`https://images.unsplash.com/${product.image}?w=600&h=450&fit=crop&crop=center`}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10"></div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalizedBabyClothes;